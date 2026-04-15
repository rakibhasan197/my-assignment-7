import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContextProvider';
import callImg from '../../assets/call.png';
import videoImg from '../../assets/video.png';
import textImg from '../../assets/text.png'

const TimelinePage = () => {

  const { timeline } = useContext(FriendsContext);
  // console.log(audio,text, video,'contextData')
  return (
    <div>
      {timeline.length === 0 && (
        <p className='font-bold text-2xl mt-20 text-center'>No activity yet 😴</p>
      )}
      {timeline.map((item, ind) => (
        <div key={ind}>
          {item.type === "audio" && (
            <>
              <img src={callImg} />
              <p>Connect with: {item.friend.name}</p>
            </>
          )}

          {item.type === "text" && (
            <>
              <img src={textImg} />
              <p>Text with: {item.friend.name}</p>
            </>
          )}

          {item.type === "video" && (
            <>
              <img src={videoImg} />
              <p>Video with: {item.friend.name}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TimelinePage;