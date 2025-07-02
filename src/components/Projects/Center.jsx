import React, { useRef, useEffect } from "react";

const Center = () => {  

  return (
    <div className="center-container">
      <div className="projects">
        <div className="project">
          <div className="title">Nexora</div>  
          <img src="./model/ai_gen.webp" loading="lazy"/>
          <div className="description">Built a smart proposal drafting tool using React, OpenAI’s API for content generation, Supabase Auth for secure access, and GSAP for smooth UI animations. Allows users to generate client-ready proposals instantly with a clean, responsive interface.</div>
          <div className="buttons">
            <div className="button" href="https://github.com/PalAman-git/ai-proposal-gen" target="_blank">Code</div>
            <div className="button" href="https://ai-proposal-gen.vercel.app/" target="_blank">Live</div>
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
          <div className="title">codesync</div>
          <img src="./model/codeSync.webp" loading="lazy"/>
          <div className="description">Built a real-time collaborative code editor using React, Socket.io, and Express. Enabled multiple users to connect and edit code simultaneously in a shared environment with live updates and session management. Deployed on AWS for a secure, scalable setup.</div>
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
