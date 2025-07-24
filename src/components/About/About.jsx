import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Gauge, Heart } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const textRef = useRef([]);

  const values = [
    {
      icon: <Sparkles className="text-text w-6 h-6" />,
      title: "Craftsmanship",
      desc: "Pixel-perfect, interaction-first builds that feel as good as they look.",
    },
    {
      icon: <Gauge className="text-text w-6 h-6" />,
      title: "Performance",
      desc: "I obsess over load time, scroll smoothness, and buttery transitions.",
    },
    {
      icon: <Heart className="text-text w-6 h-6" />,
      title: "Emotion",
      desc: "Interfaces should do more than work — they should *feel* human.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stagger-content", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "80% 85%",
          // markers: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-background text-text overflow-hidden px-6 sm:px-10 md:px-20 py-32 flex items-center justify-center"
    >
      {/* Radial background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
      radial-gradient(
        circle at center,
        rgba(234, 181, 57, 0.12) 0%,
        rgba(234, 181, 57, 0.06) 40%,
        rgba(234, 181, 57, 0.03) 70%,
        transparent 100%
      )
    `,
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-y-16 lg:gap-x-20 max-w-7xl w-full">
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-y-6 text-center lg:text-left">
          <h2
            ref={(el) => (textRef.current[0] = el)}
            className="text-5xl mb-5 sm:text-6xl font-extrabold text-text tracking-tight stagger-content"
          >
            Beyond the Code
          </h2>

          <p className="text-muted_yellow mb-4 sm:hidden text-lg sm:text-xl leading-relaxed stagger-content">
            I design digital moments — not just components. My goal is to make
            users feel <em>something</em> with every scroll, click, and tap.
          </p>

          <div className="hidden sm:block">
            <p
              ref={(el) => (textRef.current[1] = el)}
              className="text-muted_yellow mb-4 text-xl sm:text-2xl leading-relaxed stagger-content"
            >
              I design digital moments — not just components. My goal is to make
              users feel *something* with every scroll, click, and tap.
            </p>
            <p
              ref={(el) => (textRef.current[2] = el)}
              className="text-muted_yellow mb-4  text-lg sm:text-xl leading-relaxed stagger-content"
            >
              Whether it's a smooth page transition, a playful hover animation,
              or a clever UI interaction — I'm obsessed with the little things
              that bring joy.
            </p>
            <p
              ref={(el) => (textRef.current[3] = el)}
              className="text-muted_yellow mb-4  text-lg sm:text-xl leading-relaxed stagger-content"
            >
              My toolkit? JavaScript, React, GSAP, and a sprinkle of obsession.
              Performance matters, but so does emotion.
            </p>
            <p
              ref={(el) => (textRef.current[4] = el)}
              className="text-muted_yellow mb-4 text-lg sm:text-xl leading-relaxed stagger-content"
            >
              Right now, I'm building{" "}
              <span className="text-muted_yellow font-bold">Nexora</span> — an
              AI-powered proposal generator that thinks like you do.
            </p>
          </div>
          {/* Add inside AboutMe.jsx below your paragraphs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {values.map((val, i) => (
              <div
                key={i}
                // ref={(el) => (cardRefs.current[i] = el)}
                className="group border border-text rounded-2xl p-6 bg-surface/50 backdrop-blur-md transition-all duration-300 ease-in-out
                hover:border-accent hover:shadow-[0_0_20px_#eab53933] hover:scale-[1.02] hover:bg-surface/70
                "
              >
                <div className="mb-4 flex items-center justify-start transition-transform duration-300 group-hover:scale-105 group-hover:brightness-125">
                  {val.icon}
                </div>

                <h3 className="text-lg font-semibold text-text mb-2">
                  {val.title}
                </h3>
                <p className="text-muted_yellow text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
