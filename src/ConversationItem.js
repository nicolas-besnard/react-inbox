import React from 'react';
import { Link } from 'react-router-dom';

const ConversationItem = ({id, match}) => {
  return (
    <li className="conversations-list-item">
      <Link className="conversation-link" to={`/message/${id}`}>
        <div className="username">Foo</div>
        <div className="snippet">Bar</div>
      </Link>
    </li>
  );
};

export default ConversationItem;
