import React, { useContext } from 'react';

import useApps from '../../components/hooks/useApps';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { FiArchive } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { IoMdText } from 'react-icons/io';
import { FaVideo } from 'react-icons/fa';
import { FriendsContext } from '../../context/FriendsContextProvider';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';

const FriendsDetailsPage = () => {

  const { id } = useParams();
  const { friends, loading } = useApps();
  const expectedFriend = friends?.find((friend) => String(friend.id) === id);

  const {
    timeline,
    setTimeline,
    audio,
    setAudio,
    text,
    setText,
    video,
    setVideo
  } = useContext(FriendsContext);

  if (loading) {
    return <p className='h-screen flex justify-center items-center'>Loading...</p>;
  }

  if (!expectedFriend) {
    return <p>Friend not found</p>;
  }

  const handleAudioBtn = () => {
    setAudio([...audio, expectedFriend]);
    toast.success(`Calling With ${expectedFriend.name}`);
    setTimeline(prev => [
      ...prev,
      { type: "audio", friend: expectedFriend, createdAt: new Date().toISOString() }
    ]);
  };

  const handleTextBtn = () => {
    setText([...text, expectedFriend]);
    toast.success(`Text With ${expectedFriend.name}`);
    setTimeline(prev => [
      ...prev,
      { type: "text", friend: expectedFriend, createdAt: new Date().toISOString() }
    ]);
  };

  const handleVideoBtn = () => {
    setVideo([...video, expectedFriend]);
    toast.success(`Video Chat With ${expectedFriend.name}`);
    setTimeline(prev => [
      ...prev,
      { type: "video", friend: expectedFriend, createdAt: new Date().toISOString() }
    ]);
  };

  return (
    <div className='flex flex-col lg:flex-row justify-center items-start gap-6 container mx-auto mt-6 px-4'>

   
      <div className='space-y-3 w-full lg:w-1/3'>

        <div className='shadow p-4 flex flex-col items-center text-center rounded-md'>

          <img
            src={expectedFriend.picture}
            className='mb-3 rounded-full w-24 h-24 sm:w-28 sm:h-28'
          />

          <h2 className='font-semibold text-xl mb-1'>
            {expectedFriend.name}
          </h2>

          <span className='px-3 py-1 rounded text-sm text-white bg-green-500'>
            {expectedFriend.status}
          </span>

          <div className="flex gap-2 flex-wrap mt-4 justify-center">
            {expectedFriend.tags.map((tag, ind) => (
              <span
                key={ind}
                className='bg-green-100 px-3 py-1 rounded-md text-green-500 text-xs sm:text-sm'
              >
                {tag}
              </span>
            ))}
          </div>

          <p className='text-gray-500 text-sm sm:text-base'>
            {expectedFriend.bio}
          </p>

          <p className='text-gray-400 text-sm'>
            {expectedFriend.email}
          </p>

        </div>

        <div className='shadow p-3 rounded-md flex items-center gap-2 justify-center'>
          <HiOutlineBellSnooze />
          <p className='text-gray-700 font-semibold text-sm sm:text-base'>
            Snooze 2 weeks
          </p>
        </div>

        <div className='shadow p-3 rounded-md flex items-center gap-2 justify-center'>
          <FiArchive />
          <p className='text-gray-700 font-semibold text-sm sm:text-base'>
            Archive
          </p>
        </div>

        <div className='shadow p-3 rounded-md flex items-center gap-2 justify-center'>
          <MdDelete />
          <p className='text-red-500 font-semibold text-sm sm:text-base'>
            Delete
          </p>
        </div>

      </div>

      
      <div className='space-y-10 w-full lg:w-2/3'>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

          <div className='shadow p-4 text-center rounded-md'>
            <h2 className='text-green-900 text-xl font-semibold'>
              {expectedFriend.days_since_contact}
            </h2>
            <p className='text-gray-500 text-sm'>Days Since Contact</p>
          </div>

          <div className='shadow p-4 text-center rounded-md'>
            <h2 className='text-green-900 text-xl font-semibold'>
              {expectedFriend.goal}
            </h2>
            <p className='text-gray-500 text-sm'>Goal (Days)</p>
          </div>

          <div className='shadow p-4 text-center rounded-md'>
            <h2 className='text-green-900 text-xl font-semibold'>
              {expectedFriend.next_due_date}
            </h2>
            <p className='text-gray-500 text-sm'>Next Due</p>
          </div>

        </div>

        <div className='shadow p-4 rounded-md'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg sm:text-xl font-semibold text-green-800'>
              Relationship Goal
            </h2>
            <button className='btn btn-sm'>Edit</button>
          </div>

          <div className='mt-2 text-sm sm:text-base'>
            Connect every <span className='font-semibold'>{expectedFriend.goal} days</span>
          </div>
        </div>

        <div className='shadow p-4 rounded-md'>

          <h2 className='text-green-900 text-lg sm:text-xl font-semibold mb-4'>
            Quick Check-In
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

            <button onClick={handleAudioBtn} className='bg-slate-100 py-4 rounded-md flex flex-col items-center'>
              <IoCall className='text-xl' />
              <p className='text-gray-500'>Call</p>
            </button>

            <button onClick={handleTextBtn} className='bg-slate-100 py-4 rounded-md flex flex-col items-center'>
              <IoMdText className='text-xl' />
              <p className='text-gray-500'>Text</p>
            </button>

            <button onClick={handleVideoBtn} className='bg-slate-100 py-4 rounded-md flex flex-col items-center'>
              <FaVideo className='text-xl' />
              <p className='text-gray-500'>Video</p>
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FriendsDetailsPage;