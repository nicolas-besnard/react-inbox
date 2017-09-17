import React, { Component } from 'react';
import './App.css';

import ConversationItem from './ConversationItem';

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
    if (this.hasMessageSelected()) {
      console.log('Should Fetch Message');
      // Fetch Message
    }
  }

  renderConversationItem() {
    let items = [];

    for (let i = 0; i < 20; i++) {
      items.push(<ConversationItem key={i} id={i} {...this.props}/>);
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

export default App;
