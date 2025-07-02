import './style.css'
import { Canvas } from '@react-three/fiber'
import Portal from './Portal/Portal'

const Environment = () => {
  return (
    <>
      <Canvas className='canvas' camera={{ position: [0, 0.4, 0.25], fov: 50}}>
        {/* <ambientLight intensity={0.5} /> */}
        <color attach="background" args={['#000']} />
        <Portal />
      </Canvas>
    </>
  )
}




export default Environment