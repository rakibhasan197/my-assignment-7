import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContextProvider';
import callImg from '../../assets/call.png';
import videoImg from '../../assets/video.png';
import textImg from '../../assets/text.png';
import { HashLoader } from 'react-spinners';

const TimelinePage = () => {

  const { timeline, loading, active, setActive } = useContext(FriendsContext);

  const filteredTimeline = !active
    ? timeline
    : timeline.filter(item => item.type === active);

  return (
    <div className='container mx-auto px-4'>

      <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mt-10'>
        Timeline
      </h2>

      {/* FILTER */}
      <div className="dropdown dropdown-start mt-4">

        <div tabIndex={0} role="button" className="btn text-gray-500">
          Filter timeline ⬇️
        </div>

        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">

          <li><a onClick={() => setActive('audio')}>Call</a></li>
          <li><a onClick={() => setActive('text')}>Text</a></li>
          <li><a onClick={() => setActive('video')}>Video</a></li>
          <li><a onClick={() => setActive('')}>All</a></li>

        </ul>

      </div>

      {/* CONTENT */}
      <div className='shadow p-4 sm:p-6 md:p-10 rounded-md mt-6'>

        {loading ? (
          <div className="h-[60vh] flex justify-center items-center">
            <HashLoader color="#36d7b7" />
          </div>
        ) : filteredTimeline.length === 0 ? (
          <p className='text-center font-bold text-xl sm:text-2xl'>
            No activity yet 😴
          </p>
        ) : (
          filteredTimeline.map((item, ind) => (
            <div
              key={ind}
              className='mt-5 shadow p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-md'
            >

              {item.type === "audio" && (
                <>
                  <img src={callImg} className='w-10 h-10 sm:w-12 sm:h-12' />
                  <div>
                    <h2 className='font-semibold'>Call</h2>
                    <p className='text-gray-500 text-sm sm:text-base'>
                      with: {item.friend.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </>
              )}

              {item.type === "text" && (
                <>
                  <img src={textImg} className='w-10 h-10 sm:w-12 sm:h-12' />
                  <div>
                    <h2 className='font-semibold'>Text</h2>
                    <p className='text-gray-500 text-sm sm:text-base'>
                      with: {item.friend.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </>
              )}

              {item.type === "video" && (
                <>
                  <img src={videoImg} className='w-10 h-10 sm:w-12 sm:h-12' />
                  <div>
                    <h2 className='font-semibold'>Video</h2>
                    <p className='text-gray-500 text-sm sm:text-base'>
                      with: {item.friend.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </>
              )}

            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default TimelinePage;