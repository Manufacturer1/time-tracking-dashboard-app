import React from 'react';
import Report from './components/reportComponent';
import DashBoardCard from './components/dashboardCardComponent';
import cardInfo from '../data.js';

const bakcgroundColors = [
  'bg-primary-lightRedWork','bg-primary-softBlue','bg-primary-lightRedStudy',
  'bg-primary-limeGreen','bg-primary-violet','bg-primary-softOrange'
];
const iconPositions = [
  'top-[-1em]','top-[-0.5em]','top-[-1em]','top-[-0.1em]','top-[-1em]','top-[-1em]'
];

function App() {


  return (
    <>
      <div className="grid px-[19rem] place-content-center grid-cols-4 grid-rows-2 text-white gap-5">
        <div className="grid grid-rows-1 grid-cols-1 row-span-2">
            <Report/>
        </div>
        {
          cardInfo.map((card,index) =>{
              return(

                <div className="grid" key={index}>
                <DashBoardCard 
                backgroundIcon={card.icon} 
                type={card.title} 
                hrs={card.timeframes.weekly.current} 
                time={card.timeframes.weekly.previous}
                backgroundColor={bakcgroundColors[index]}
                iconPosition={iconPositions[index]}
                />
              </div>
              );
          })
        }
      </div>
    </>
  );
}

export default App
