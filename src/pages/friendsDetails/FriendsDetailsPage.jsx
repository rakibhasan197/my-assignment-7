import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../components/hooks/useApps';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { FiArchive } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { IoMdText } from 'react-icons/io';
import { FaVideo } from 'react-icons/fa';


const FriendsDetailsPage = () => {
  const { id } = useParams();
  console.log(id, 'id')
  const { friends, loading } = useApps();
  const expectedFriend = friends.find((friend) => String(friend.id) === id)
  console.log(friends, loading, 'loading')
  console.log(expectedFriend, 'expectedFriend');


  if (loading) {
    return <p>Loading...</p>;
  }


  if (!expectedFriend) {
    return <p>Friend not found</p>;
  }
  return (
    <div className='flex justify-center items-stretch gap-3 container mx-auto mt-6'>
      {/* left side div container */}
      <div className='space-y-2'>
        <div className='shadow p-4 flex flex-col items-center justify-center text-center'>
          <img src={expectedFriend.picture} alt="" className='mb-3 rounded-full' />
          <span
            className={`${expectedFriend.status === 'overdue'
              ? 'bg-red-500 text-white py-1 px-2 rounded'
              : expectedFriend.status === 'on track'
                ? 'bg-green-500 text-white py-1 px-2 rounded'
                : 'bg-yellow-500 text-white py-1 px-2 rounded'
              }`}
          >{expectedFriend.status}</span>
          <div className="flex gap-2 flex-wrap mt-4">
            {expectedFriend.tags.map((tag, ind) => (
              <span
                key={ind}
                className='bg-green-100 px-4 py-1 rounded-md text-green-500'
              >
                {tag}
              </span>
            ))}
          </div>
          <p className='text-gray-500'>{expectedFriend.bio}</p>
          <p className='text-gray-400'>{expectedFriend.email}</p>
        </div>

        <div className='shadow p-2'>
          <p className='text-gray-700 font-semibold  flex justify-center items-center gap-1'><HiOutlineBellSnooze />Snooze 2 weeks</p>
        </div>
        <div className='shadow p-2'>
          <p className='text-gray-700 font-semibold flex justify-center items-center gap-1'><FiArchive />Archive</p>
        </div>
        <div className='shadow p-2'>
          <p className='text-red-500 font-semibold flex justify-center items-center gap-1'><MdDelete />Delete</p>
        </div>
      </div>
      {/* right side div container */}
      <div className='space-y-20'>
        {/* oporer 3 ta card er jonno */}
        <div className='flex justify-between items-center gap-3'>
          <div className='shadow py-4 px-10'>
            <h2 className='text-green-900 text-xl font-semibold'>{expectedFriend.days_since_contact}</h2>
            <p className='text-gray-500'>days_since_contact</p>
          </div>
          <div className='shadow py-4 px-10'>
            <h2 className='text-green-900 text-xl font-semibold'>{expectedFriend.goal}</h2>
            <p className='text-gray-500'>Goal(Days)</p>
          </div>
          <div className='shadow py-4 px-10'>
            <h2 className='text-green-900 text-xl font-semibold'>{expectedFriend.next_due_date}</h2>
            <p className='text-gray-500'>Next Due</p>
          </div>
        </div>
{/* middle */}
        <div className='shadow'>
          <div className='flex justify-between'>
            <h2 className='text-xl font-semibold text-green-800'>Relationship Goal</h2>
            <button className='btn'>Edit</button>
          </div>
        <div className='flex gap-1 items-center'>
            <p className='text-gray-500'>Connect every</p>
          <span className='font-semibold text-xl'>{expectedFriend.goal} days</span>
        </div>
        </div>

{/* last div */}
        <div className='shadow p-4'>
          
          <h2 className='text-green-900 text-xl font-semibold'>Quick Check-In</h2>
          <div className='flex justify-between gap-4 items-center'>
          <button className='bg-slate-100 py-4 px-20 rounded-md'>
            <h2 className='text-xl'><IoCall /></h2>
            <p className='text-gray-500'>Call</p>
          </button>
          <button className='bg-slate-100 py-4 px-20 rounded-md'>
            <h2 className='text-xl'><IoMdText /></h2>
            <p className='text-gray-500'>Text</p>
          </button>
          <button className='bg-slate-100 py-4 px-20 rounded-md'>
            <h2 className='text-xl'><FaVideo /></h2>
            <p className='text-gray-500'>Video</p>
          </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FriendsDetailsPage;