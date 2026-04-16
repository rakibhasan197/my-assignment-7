import React, { createContext, useState } from 'react';
import useApps from '../components/hooks/useApps';

export const FriendsContext = createContext()

const FriendsContextProvider = ({children}) => {
const [audio, setAudio] = useState([]);
const [text, setText] = useState([]);
const [video, setVideo] = useState([]);
 const [active, setActive] = useState('');
 const [timeline, setTimeline ,  createdAt] = useState([]);
 const {loading} = useApps();

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
  createdAt,
  loading
}

  return <FriendsContext.Provider value={data}>
  {children}
  </FriendsContext.Provider>;
};

export default FriendsContextProvider;