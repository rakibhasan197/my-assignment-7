import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from '../../context/FriendsContextProvider';

const Stats = () => {

  const {timeline, audio, text, video}= useContext(FriendsContext);

  const data = [
  { name: 'Audio', value: audio.length, fill: '#0088FE' },
  { name: 'Text', value: text.length, fill: '#00C49F' },
  { name: 'Video', value: video.length, fill: '#FFBB28' },
 
];

  return (
    <div className='my-10'>
     
      <h2 className='text-center font-bold text-2xl mb-10'>Friendship Analytics</h2>

      <div className='shadow p-10 rounded-md container mx-auto border border-slate-300'>
      <div>
            {timeline.length === 0 && (
        <p className='font-bold text-2xl mt-40 text-center'>No history added yet 😴</p>
      )}
      </div>
       <div>
      
      <h2 className='font-semibold text-xl'>By Interaction Type</h2>
         <PieChart style={{ width: '300px', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: 'auto'}} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend></Legend>
     <Tooltip></Tooltip>
    </PieChart>
       </div>
       </div>
    </div>
  );
};

export default Stats;