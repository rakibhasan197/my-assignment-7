import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from '../../context/FriendsContextProvider';
import { HashLoader } from 'react-spinners';

const Stats = () => {

  const { timeline, audio, text, video, loading } = useContext(FriendsContext);

  const data = [
    { name: 'Audio', value: audio.length, fill: '#0088FE' },
    { name: 'Text', value: text.length, fill: '#00C49F' },
    { name: 'Video', value: video.length, fill: '#FFBB28' },
  ];

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <HashLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className='my-10 px-4'>

      <h2 className='text-center font-bold text-xl sm:text-2xl mb-10'>
        Friendship Analytics
      </h2>

      <div className='shadow p-4 sm:p-6 md:p-10 rounded-md container mx-auto border border-slate-300'>

        {timeline.length === 0 ? (
          <p className='font-bold text-xl sm:text-2xl mt-20 text-center'>
            No history added yet 😴
          </p>
        ) : (
          <>
            <h2 className='font-semibold text-lg sm:text-xl text-center mb-6'>
              By Interaction Type
            </h2>

            <div className='flex justify-center items-center w-full'>

              <div className='w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px]'>

                <PieChart width={300} height={300}>

                  <Pie
                    data={data}
                    innerRadius={70}
                    outerRadius={100}
                    cornerRadius={50}
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                  />

                  <Legend />
                  <Tooltip />

                </PieChart>

              </div>

            </div>
          </>
        )}

      </div>

    </div>
  );
};

export default Stats;