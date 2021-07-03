import React, { useMemo } from "react";
import store from "../../redux/store";
import Header from "../Header";
import Chats from "../Chats";
import MessageInput from "../MessageInput";
import _ from "lodash";
import "./ChatWindow.css";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = useMemo(() => state.messages[activeUserId], [
    state,
    activeUserId
  ]);
  const messages = useMemo(() => _.values(activeMsgs), [activeMsgs]);
  const { typing } = state;
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={messages} />
      <MessageInput value={typing} />
    </div>
  );
};
export default ChatWindow;
