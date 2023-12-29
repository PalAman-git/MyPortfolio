import './style.css'
import { Canvas } from '@react-three/fiber'
import Portal from './Portal/Portal'

const Environment = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0.4, 0.25], fov: 50}}>
        {/* <ambientLight intensity={0.5} /> */}
        <color attach="background" args={['#fbfcd4']} />
        <Portal />
      </Canvas>
    </>
  )
}




export default Environment