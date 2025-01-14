import {React,useState} from 'react';
import Report from './components/reportComponent';
import DashBoardCard from './components/dashboardCardComponent';
import cardInfo from '../data.js';


function App() {
  const [indexTimeFrame,setIndexTimeFrame] = useState(1);

  const dateLabels = ['Daily','Weekly','Monthly'];
  const cardDateLabels = ['Day','Week','Month'];
  const bakcgroundColors = [
    'bg-primary-lightRedWork','bg-primary-softBlue','bg-primary-lightRedStudy',
    'bg-primary-limeGreen','bg-primary-violet','bg-primary-softOrange'
  ];
  const iconPositions = [
    'top-[-1em]','top-[-0.5em]','top-[-1em]','top-[-0.1em]','top-[-1em]','top-[-1em]'
  ];

  const changeTimeFrame = (indexFrame) =>{
      setIndexTimeFrame(indexFrame);
  }
  const checkCardHrs = (card) =>{
    let hrs = 0;

    (dateLabels[indexTimeFrame] === 'Weekly')?
    hrs = card.timeframes.weekly.current : 
    (dateLabels[indexTimeFrame] === 'Daily')?
    hrs = card.timeframes.daily.current :
    (dateLabels[indexTimeFrame] === 'Monthly') ?
    hrs = card.timeframes.monthly.current :
    hrs = card.timeframes.weekly.current
    
    return hrs;
  }
  const checkCardTime = (card) =>{
    let time = 0;

    (dateLabels[indexTimeFrame] === 'Weekly')?
    time = card.timeframes.weekly.previous :
    (dateLabels[indexTimeFrame] === 'Daily')?
    time = card.timeframes.daily.previous :
    (dateLabels[indexTimeFrame] === 'Monthly') ?
    time = card.timeframes.monthly.previous :
    time = card.timeframes.weekly.previous

    return time;
  }

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1 w-[100%] p-5 place-content-center md:grid-cols-[repeat(4,13rem)] md:grid-rows-2 text-white gap-5">
        <div className="grid md:grid-rows-1 md:grid-cols-1 md:row-span-2">
            <Report dateLabels={dateLabels} onChangeTimeFrame={changeTimeFrame} timeFrame={indexTimeFrame}/>
        </div>
        {
          cardInfo.map((card,index) =>{
              return(

              <div className="grid" key={index}>
                <DashBoardCard 
                backgroundIcon={card.icon} 
                type={card.title} 
                hrs={
                  checkCardHrs(card)
                } 
                time={
                  checkCardTime(card)
                }
                backgroundColor={bakcgroundColors[index]}
                iconPosition={iconPositions[index]}
                timeFrameIndex={indexTimeFrame}
                cardDataLabels={cardDateLabels}
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
