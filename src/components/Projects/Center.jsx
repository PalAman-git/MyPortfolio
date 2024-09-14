import React, { useRef, useEffect } from "react";

const Center = () => {  

  return (
    <div className="center-container">
      <div className="projects">
        <div className="project">
          <div className="title">Code Sync</div>  
          <img src="./model/codeSync.webp" loading="lazy"/>
          <div className="description">Built a real-time coding platform using React for the frontend, Socket.io for live code synchronization, Express for backend functionality, and React Router DOM for seamless navigation between collaborative coding sessions.</div>
          <div className="buttons">
            <div className="button">Code</div>
            <div className="button">Live</div>
          </div>
        </div>
        <div className="project">
          <div className="title">3D portal</div>
          <img src="./model/portal.webp" loading="lazy"/>
          <div className="description">Created an immersive 3D experience using React Three Fiber, featuring three interactive cards. Implemented MeshPortalMaterial to enable users to double-click on the cards and enter a portal, allowing them to explore and look around within a dynamic 3D environment.</div>
          <div className="buttons">
            <a className="button" href="https://github.com/PalAman-git/Portal_World_3D" target="_blank">Code</a>
            <a className="button" href="https://portal-world-3-d.vercel.app/" target="_blank">Live</a>
          </div>
        </div>
        <div className="project">
          <div className="title">Project1</div>
          <img src="./model/codeSync.webp" loading="lazy"/>
          <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia soluta veniam, neque voluptas, suscipit quaerat distinctio atque tempora alias deserunt sapiente adipisci excepturi, cupiditate dolor blanditiis corporis quam quidem.</div>
          <div className="buttons">
            <div className="button">Code</div>
            <div className="button">Live</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
