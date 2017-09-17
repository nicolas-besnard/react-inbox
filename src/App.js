import React, { Component } from 'react';
import { connect  } from 'react-redux';
import './App.css';

import ConversationItem from './ConversationItem';

import * as conversationActions from './Actions/conversations';

const MESSAGE_PATH = '/message/:messageId';

class App extends Component {
  hasMessageSelected() {
    return this.props.match.path === MESSAGE_PATH; 
  }

  willHaveMessageSelected(nextProps) {
    return nextProps.match.path === MESSAGE_PATH;
  }

  messageIdIsDifferent(nextProps) {
    const nextId = nextProps.match.params.messageId;
    const currentId = this.props.match.params.messageId;

    return nextId !== currentId;
  }

  componentWillMount() {
    if (this.props.conversations.length === 0) {
      const { fetchConversations } = this.props;
      fetchConversations();
    }
    if (this.hasMessageSelected()) {
      console.log('[componentWillMount] Should Fetch Message');
    }
  }

  renderConversationItem() {
    let items = [];
    const { conversations } = this.props;

    for (let conversation of conversations) {
      items.push(<ConversationItem key={conversation.id} id={conversation.id} />);
    }

    return items;
  }

  componentWillReceiveProps(nextProps) {
    if (this.willHaveMessageSelected(nextProps) && this.messageIdIsDifferent(nextProps)) {
      console.log('Should Fetch Message');
      // Fetch message
    }
  }

  render() {
    const items = this.renderConversationItem();
    const messageSelected = this.hasMessageSelected() ? 'active' : '';
    const conversationListClasses = ["conversations-list-container", messageSelected].join(' ');

    return (
      <div className="inbox-container">
        <div className={conversationListClasses}>
          <ul className="conversations-list">
            {items}
          </ul>
        </div>
        <div className="conversation-content">
          content
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    conversations: conversationActions.getConversations(state)
  };
};

const mapDispatchToProps = ({
  fetchConversations: conversationActions.fetchConversations
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
