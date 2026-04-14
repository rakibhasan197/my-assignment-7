import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({friend}) => {
  return (
    <Link to={`friend/${friend.id}`} className='shadow p-4 flex flex-col items-center justify-center text-center h-full'>
                <img src={friend.picture} alt={friend.name} className='rounded-full' />
                <h2 className='font-bold text-xl'>{friend.name}</h2>
                  <p className='text-gray-500 font-semibold'>{friend.days_since_contact}d ago</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {friend.tags.map((tag, ind) => (
                    <span
                      key={ind}
                      className='bg-green-100 px-4 py-1 rounded-md text-green-500'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className={`${friend.status === 'overdue'
                      ? 'bg-red-500 text-white py-1 px-2 rounded'
                      : friend.status === 'on track'
                        ? 'bg-green-500 text-white py-1 px-2 rounded'
                        : 'bg-yellow-500 text-white py-1 px-2 rounded'
                    }`}
                >
                  {friend.status}
                </span>
              </Link>
  );
};

export default FriendsCard;