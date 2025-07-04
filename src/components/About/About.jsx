import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Gauge, Heart } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const textRef = useRef([]);
  const cardRefs = useRef([]);

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
      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
      gsap.to("#about-blob", {
        y: 20,
        scale: 1.03,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      // setTimeout(() => {
      // gsap.from(cardRefs.current, {
      //   y: 30,
      //   opacity: 0,
      //   duration: 0.6,
      //   stagger: 0.15,
      //   ease: "power2.out",
      //   scrollTrigger: {
      //     trigger: sectionRef.current,
      //     start: "top 20%",
      //   },
      // });
      // }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-background text-text overflow-hidden px-6 sm:px-10 md:px-20 py-32 flex items-center justify-center"
    >
      {/* Background Glow */}
      <div
        id="about-spark"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, #eab53922 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-y-16 lg:gap-x-20 max-w-7xl w-full">
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-y-6 text-center lg:text-left">
          <h2
            ref={(el) => (textRef.current[0] = el)}
            className="text-5xl sm:text-6xl font-extrabold text-text tracking-tight"
          >
            Beyond the Code
          </h2>

          <p className="text-muted sm:hidden text-lg sm:text-xl leading-relaxed">
            I design digital moments — not just components. My goal is to make
            users feel <em>something</em> with every scroll, click, and tap.
          </p>

          <div className="hidden sm:block">
            <p
              ref={(el) => (textRef.current[1] = el)}
              className="text-muted_yellow text-xl sm:text-2xl leading-relaxed"
            >
              I design digital moments — not just components. My goal is to make
              users feel *something* with every scroll, click, and tap.
            </p>
            <p
              ref={(el) => (textRef.current[2] = el)}
              className="text-muted_yellow text-lg sm:text-xl leading-relaxed"
            >
              Whether it's a smooth page transition, a playful hover animation,
              or a clever UI interaction — I'm obsessed with the little things
              that bring joy.
            </p>
            <p
              ref={(el) => (textRef.current[3] = el)}
              className="text-muted_yellow text-lg sm:text-xl leading-relaxed"
            >
              My toolkit? JavaScript, React, GSAP, and a sprinkle of obsession.
              Performance matters, but so does emotion.
            </p>
            <p
              ref={(el) => (textRef.current[4] = el)}
              className="text-muted_yellow text-lg sm:text-xl leading-relaxed"
            >
              Right now, I'm building{" "}
              <span className="text-purple font-medium">Nexora</span> — an
              AI-powered proposal generator that thinks like you do.
            </p>
          </div>
          {/* Add inside AboutMe.jsx below your paragraphs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {values.map((val, i) => (
              <div
                key={i}
                // ref={(el) => (cardRefs.current[i] = el)}
                className="group border border-muted_black rounded-2xl p-6 bg-surface/50 backdrop-blur-md transition-all duration-300 ease-in-out
                hover:border-accent hover:shadow-[0_0_20px_#eab53933] hover:scale-[1.02] hover:bg-surface/70"
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

        {/* Animated SVG Visual */}
        <div
          id="about-blob"
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[480px] h-[480px] rounded-full opacity-70 blur-[100px] pointer-events-none z-0"
          style={{
            background: `
      radial-gradient(circle at 30% 30%, #eab53933, transparent 70%),
      radial-gradient(circle at 70% 70%, #8e8dfa22, transparent 80%),
      radial-gradient(circle at center, #ffffff10, transparent 80%)
    `,
            mixBlendMode: "screen",
          }}
        />
      </div>
    </section>
  );
};

export default AboutMe;
