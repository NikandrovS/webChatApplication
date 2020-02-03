import React from 'react';
import Message from '../Message/Message'

import ScrollToBottom from 'react-scroll-to-bottom'

import './Messages.css';

const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
    </ScrollToBottom>
);

export default Messages;
