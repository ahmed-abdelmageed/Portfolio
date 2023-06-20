import { Html, useProgress } from '@react-three/drei'
import { progress } from 'framer-motion';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import React from 'react'
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-load'></span>
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_TZdDCL.json"
        style={{ height: '200px', width: '200px', fontWeight: 800, marginTop: 40, fontSize: 14, alignItems: 'çenter', display: 'flex' }}
      >
      </Player>
    </Html>
  )
}

export default Loader