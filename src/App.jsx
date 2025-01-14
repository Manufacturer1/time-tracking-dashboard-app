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
      <div className="grid grid-cols-1 grid-rows-1 w-[100%] p-5 place-content-center md:grid-cols-[repeat(4,13rem)] md:grid-rows-2 text-white gap-5">
        <div className="grid md:grid-rows-1 md:grid-cols-1 md:row-span-2">
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
