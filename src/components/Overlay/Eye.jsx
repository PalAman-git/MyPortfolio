import outerEye from './outerEye.svg'
import innerEye from './innerEye.svg'
import { useEffect } from 'react'


const Eye = () => {

  useEffect(() => {

    const angle = (cx,cy,ex,ey) => {
      const dy = ey - cy;
      const dx = ex - cx;
      let theta = Math.atan2(dy, dx);
      theta *= 180 / Math.PI;
      return theta;
    }
    
    const mouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
    
      const anchor = document.getElementById('anchor');
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;
    
      const deltaX = mouseX - anchorX;
      const deltaY = mouseY - anchorY;
      const angleRad = Math.atan2(deltaY, deltaX);
      const angleDeg = (angleRad * 180) / Math.PI;
    
      const eye = document.querySelector('.innerEye');
      eye.style.transform = `rotate(${angleDeg}deg)`;
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }

  },[])

  return (
    <div id='anchor' className='eyeContainer w-10 h-7 flex justify-center items-center relative'>
      <img src={outerEye} className="outerEye absolute" />
      <img src={innerEye}  className="innerEye absolute"/>
    </div>
  )
}
export default Eye