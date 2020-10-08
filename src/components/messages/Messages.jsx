import React, { useState, useEffect } from "react";
import {
  Card,
  Accordion,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import { fetchMessages } from "../../actions/message";
import ChatBox from "./ChatBox";
import io from "socket.io-client";
import { connect } from "react-redux";

const Messages = ({ fetchMessages, auth: { user, users } }) => {
  const { name, username, avatar } = user;
  console.log("the new user is ", name, username, avatar);

  let socket = null;
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [itemArray, setItemArray] = useState([]);

  const createChat = (name, username, avatar) => {
    if (itemArray.length < 2) {
      const user = {
        chatName: name,
        src: avatar,
        sendToUser: username,
      };
      const findUser = this.state.itemArray.find(
        (usr) => usr.chatName === user.chatName
      );
      if (!findUser) {
        itemArray[1] = user;
        setItemArray(itemArray);
      }
    }
  };

  const removeChat = (chatName) => {
    const itemChat = itemArray.filter((chat) => chat.chatName !== chatName);
    setItemArray(itemChat);
  };

  useEffect(() => {
    const connectionopt = {
      transports: ["websocket"],
    };
    const url = "http://localhost:/4000/profiles/messages";
    socket = io(url, connectionopt);
    socket.on("online", (data) => {
      setOnlineUsers(data);
    });

    socket.on("message", (msg) => {
      fetchMessages(username);
      const user = users.find((us) => us.username === msg.from);
      createChat(user.name, user.username, user.avatar);
    });

    const setUsername = () => {
      socket.emit("setUsername", {
        username,
      });
    };
  });
  return (
    <>
      {username && (
        <div className="App Chat">
          <Accordion id="chatRoom">
            <Card className="flex-column-reverse">
              <Card.Header>
                <Accordion.Toggle eventKey="0">
                  {avatar ? (
                    <Image src={avatar} />
                  ) : (
                    <Image src="https://img.icons8.com/officel/2x/user.png" />
                  )}
                  {`Messaging `}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="p-0">
                  <ListGroup>
                    {onlineUsers &&
                      users
                        .filter((user) => user.username !== username)
                        .map((user, key) => {
                          const online = onlineUsers.find(
                            (username) => username === user.username
                          );
                          return (
                            <ListGroupItem key={key}>
                              <div
                                className="onlineUser"
                                onClick={() =>
                                  createChat(name, username, avatar)
                                }
                              >
                                {avatar ? (
                                  <Image fluid src={avatar} />
                                ) : (
                                  <Image
                                    fluid
                                    src="https://img.icons8.com/officel/2x/user.png"
                                  />
                                )}

                                <p>{name}</p>
                                {online && <div className="onlineSign"></div>}
                              </div>
                            </ListGroupItem>
                          );
                        })}
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <div>
            <div className="chat-box d-flex">
              {itemArray.map((item, key) => {
                return (
                  <ChatBox
                    key={key}
                    username={username}
                    removeChat={removeChat}
                    sendToUser={item.sendToUser}
                    users={users}
                    user={user}
                    chatName={item.chatName}
                    sender={item.username}
                    socket={socket}
                    src={item.src}
                    createChat={createChat}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { fetchMessages })(Messages);
