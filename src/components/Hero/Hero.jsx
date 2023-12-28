import './style.css';
import Environment from '../Environment/Environment';
import Overlay from '../Overlay/Overlay';

const Hero = () => {
  return (
    <div id='hero' className='relative w-full h-[100vh]'>
      <Overlay />
      <Environment />
    </div>
  )
}
export default Hero