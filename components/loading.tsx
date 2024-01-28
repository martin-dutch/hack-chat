import React, { useState } from 'react';
import Lottie from 'react-lottie';
import * as animationData from 'public/loading.json';

const ReactLottie = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='mt-auto mb-auto flex mr-auto ml-auto'>
      <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
}

export default ReactLottie;