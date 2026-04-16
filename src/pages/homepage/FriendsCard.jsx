import React from 'react';
import { Link } from 'react-router';


const FriendsCard = ({friend}) => {
  return (
    <Link to={`friend/${friend.id}`} className='shadow-md p-4 flex flex-col items-center justify-center text-center h-full w-full'>

      <img src={friend.picture} alt={friend.name} className='rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24' />

      <h2 className='font-bold text-lg sm:text-xl'>{friend.name}</h2>

      <p className='text-gray-500 font-semibold text-sm sm:text-base'>
        {friend.days_since_contact}d ago
      </p>

      <div className="flex gap-2 flex-wrap mb-4 justify-center">
        {friend.tags.map((tag, ind) => (
          <span
            key={ind}
            className='bg-green-100 px-3 py-1 rounded-md text-green-500 text-xs sm:text-sm'
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`${friend.status === 'overdue'
            ? 'bg-red-500 text-white py-1 px-2 rounded text-xs sm:text-sm'
            : friend.status === 'on track'
              ? 'bg-green-500 text-white py-1 px-2 rounded text-xs sm:text-sm'
              : 'bg-yellow-500 text-white py-1 px-2 rounded text-xs sm:text-sm'
          }`}
      >
        {friend.status}
      </span>

    </Link>
  );
};

export default FriendsCard;