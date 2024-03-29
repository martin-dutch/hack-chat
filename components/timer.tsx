import React, { useState, useEffect, FC } from 'react';
import './Timer.css'; // Import the CSS file

// Define a type for the component's props
type TimerComponentProps = {
  onTimerComplete: () => void;
  round?: number;
};

const Timer: FC<TimerComponentProps> = ({ onTimerComplete , round}) => {
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimerComplete();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimerComplete]);

  useEffect(() => {
    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: 'smooth'
    })
  },[round])

  return (
    <div className="flex items-center justify-center space-x-4 pt-6 max-w-2xl mx-auto">
      <div className="w-full h-2 bg-gray-200 rounded-full mb-3">
        <div
          className="h-full bg-gray-600 rounded-full timer-bar" // Add the 'timer-bar' class
          style={{
            width: `${(timeLeft / 20) * 100}%`,
          }}
        />
      </div>
      {/* <div className="text-gray-600">00:{timeLeft < 10 ? '0' : ''}{timeLeft} / 00:10</div> */}
    </div>
  );
};

export default Timer;
