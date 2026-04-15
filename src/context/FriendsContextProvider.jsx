import React, { createContext, useState } from 'react';

export const FriendsContext = createContext()

const FriendsContextProvider = ({children}) => {
const [audio, setAudio] = useState([]);
const [text, setText] = useState([]);
const [video, setVideo] = useState([]);
 const [active, setActive] = useState('');
 const [timeline, setTimeline ,  createdAt] = useState([]);

const data = {
  audio,
  setAudio,
  text,
  setText,
  video,
  setVideo,
  active,
  setActive,
  timeline,
  setTimeline,
  createdAt
}

  return <FriendsContext.Provider value={data}>
  {children}
  </FriendsContext.Provider>;
};

export default FriendsContextProvider;