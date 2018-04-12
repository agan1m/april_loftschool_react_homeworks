import React from "react";
import Message from "../Message";
import './Chat.css'
export default class Chat extends React.Component {

    state = {
        messages: [],
        messageInput: '',
    }
    changeInputMessage = e => {
        this.setState({messageInput: e.target.value});
    }
    sendMessageOnEnter = e => {
        const { messageInput, messages } = this.state;
        if(e.key === 'Enter'){
            this.setState({messages: [...messages, {text: messageInput}], messageInput: ''})
        }
    }
    render () {
        const {messages} = this.state
        return (
            <div className='chat'>
                <div className='message-list'>
                <ul className='messages'>
                    {messages.map(message => {
                        return <Message text={message.text} />;
                    })}
                </ul>
            </div>
                <input className='input-message' value={this.state.messageInput} onKeyPress={this.sendMessageOnEnter} onChange={this.changeInputMessage}/>
            </div>
        );
    }
}