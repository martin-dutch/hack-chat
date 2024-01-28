import React, { useState, useEffect, FC } from 'react';

// Define a type for the component's props
type TimerComponentProps = {
  onTimerComplete: () => void;
};

const Timer: FC<TimerComponentProps> = ({ onTimerComplete }) => {
  const [timeLeft, setTimeLeft] = useState(10);

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

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="w-[200px] h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-gray-600 rounded-full"
          style={{
            width: `${(timeLeft / 10) * 100}%`,
          }}
        />
      </div>
      <div className="text-gray-600">00:{timeLeft} / 00:10</div>
    </div>
  );
};

export default Timer;
