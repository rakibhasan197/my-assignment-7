import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContextProvider';
import callImg from '../../assets/call.png';
import videoImg from '../../assets/video.png';
import textImg from '../../assets/text.png'

const TimelinePage = () => {

  const { timeline, createdAt } = useContext(FriendsContext);
  // console.log(audio,text, video,'contextData')
  return (
    <div>

      <h2 className='text-5xl font-bold container mx-auto'>Timeline</h2>
      {timeline.length === 0 && (
        <p className='font-bold text-2xl mt-20 text-center'>No activity yet 😴</p>
      )}
      {timeline.map((item, ind) => (
        <div key={ind} className='container mx-auto mt-10 shadow p-4 rounded-md flex items-center gap-4'>
          {item.type === "audio" && (
            <>
              <img src={callImg} />
              <span className='font-semibold text-xl'>Call</span><span className='text-gray-500'>with: {item.friend.name}</span>
              <p className="text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </>
          )}

          {item.type === "text" && (
            <>
              <img src={textImg} />
              <span className='font-semibold text-xl'>Text</span><span className='text-gray-500'>with: {item.friend.name}</span>
               <p className="text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </>
          )}

          {item.type === "video" && (
            <>
              <img src={videoImg} />
              <span className='text-xl font-semibold'>Video</span><span className='text-gray-500'>with: {item.friend.name}</span>
               <p className="text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </>
          )}

        </div>
      ))}

      
    </div>
  );
};

export default TimelinePage;