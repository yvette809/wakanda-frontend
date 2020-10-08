
import React, { useState, useEffect } from 'react';
import { Card, Badge, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import {addMessage} from "../../actions/message"



const ChatBox = ({addMessage,username,removeChat,sendToUser,users,chatName,sender,socket,src,createChat,message}) =>{
    const messages = message.messages
  const [msg, setMessage] = useState('');
  const [show, setShow] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [nrOfNotifications, setNrOfNotifications] = useState(0);

  const sendMessage = () => {
    // e.preventDefault();
    socket.emit('sendMessage', {
      from: username,
      text: msg,
      to: sendToUser,
    });
    addMessage({
      from: username,
      text: msg,
      to: sendToUser,
    });
    setMessage('');
  };
  const handleEnter = (e) => {
    if (e.key === 'Enter' && msg.length > 1) {
      sendMessage();
    }
  };

  const changeState = () => {
    setNrOfNotifications(0);
    setShowNotification(false);
  };

  useEffect(() => {
    socket.on('message', (ms) => {
      const user = users.find((us) => us.username === ms.from);
      if (user) {
        createChat(user.name, user.username, user.avatar);
        if (!show && ms.from === sendToUser) {
          setNrOfNotifications(nrOfNotifications + 1);
          setShowNotification(true);
        }
      }
    });
    var elem = document.getElementById('messages');
    if (elem) {
      elem.scrollTo(0, document.getElementById('messages').scrollHeight);
    }
  });

  return (
    <>
      <div className='d-flex align-self-end'>
        <Card style={{ width: '18rem' }}>
          <Card.Header
            style={{ backgroundColor: '#283e4a', color: 'white' }}
            className='d-flex align-items-center justify-content-between p-1 pointer'
          >
            <div
              className='d-flex align-items-center justify-content-between p-1 pointer'
              onClick={() => {
                changeState();
                setShow(!show);
              }}
              style={{
                width: '80%',
                height: '45px',
              }}
            >
              <div>
                {src ? (
                  <Image
                    fluid
                    src={src}
                    style={{
                      borderRadius: '25px',
                      height: '40px',
                      width: '40px',
                    }}
                  />
                ) : (
                  <Image
                    fluid
                    src='https://img.icons8.com/officel/2x/user.png'
                    style={{
                      borderRadius: '25px',
                      height: '40px',
                      width: '40px',
                    }}
                  />
                )}
              </div>
              <div>
                <h4>{chatName}</h4>
              </div>
              <div>
                {showNotification && !show && (
                  <Badge variant='warning'>{nrOfNotifications}</Badge>
                )}
              </div>
            </div>
            <div
              style={{
                zIndex: '99',
                paddingRight: '30px',
              }}
            >
              <div onClick={() => removeChat(chatName)}>X</div>
            </div>
          </Card.Header>

          {show && (
            <Card.Body className='p-0'>
              <ul id='messages' style={{ listStyle: 'none' }}>
                {messages.map((ms, i) => (
                  <>
                    {username === ms.from &&
                    ms.to === sendToUser ? (
                      <li key={i} className='text-right'>
                        {ms.text}
                      </li>
                    ) : (
                      username === ms.to &&
                      ms.from === sendToUser && (
                        <li key={i}>{ms.text}</li>
                      )
                    )}
                  </>
                ))}
              </ul>

              <Card.Footer>
                <input
                  autoComplete='off'
                  value={msg}
                  onChange={(e) => setMessage(e.currentTarget.value)}
                  onKeyDown={(e) => handleEnter(e)}
                />
                <button onClick={() => sendMessage()}>Send</button>
              </Card.Footer>
            </Card.Body>
          )}
        </Card>
      </div>
      <div style={{ width: '10px' }}></div>
    </>
  );
}

const mapStateToPops = (state)=>({
    message: state.message
})


export default connect(mapStateToPops, {addMessage})(ChatBox);
