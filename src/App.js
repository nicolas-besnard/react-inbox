import React, { Component } from 'react';
import './App.css';

const ConversationItem = () => (
  <li className="conversations-list-item">
    <a className="conversation-link" href="">
      <div className="username">Foo</div>
      <div className="snippet">Bar</div>
    </a>
  </li>
);

class App extends Component {
  renderConversationItem() {
    let items = [];

    for (let i = 0; i < 20; i++) {
      items.push(<ConversationItem key={i} />);
    }

    return items;
  }

  render() {
    return (
      <div className="inbox-container">
        <div className="conversations-list-container">
          <ul className="conversations-list">
            {this.renderConversationItem()}
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
