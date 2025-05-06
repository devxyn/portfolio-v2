import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <div id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          <div ref={rydeRef} className='first-project-wrapper'>
            <div className='image-wrapper'>
              <a href='https://app.yearglance.com/' target='_blank' rel='noopener noreferrer'>
                <img src='/images/yg-portfolio.png' alt='Year Glance App' />
              </a>
            </div>
            <div className='text-content'>
              <h2>YearGlance - A Unified Calendar Tool that Integrates Google and Microsoft Calendars</h2>
              <p className='text-white-50 md:text-xl'>
                An app built with React, Bootstrap, & Laravel for a fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={libraryRef}>
              <div className='image-wrapper bg-[#fbe4ff]'>
                <a
                  href='https://play.google.com/store/apps/details?id=com.appzaloot&hl=en'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src='/images/az-portfolio.png' alt='App Zaloot Mobile' />
                </a>
              </div>
              <div className='text-content'>
                <h2>AppZaloot - A Geo-Location Based Social Media App</h2>
                <p className='text-white-50 md:text-xl'>
                  A React Native & Laravel application for seamless social networking on the go.
                </p>
              </div>
            </div>

            <div className='project' ref={ycDirectoryRef}>
              <div className='image-wrapper bg-[#eafff2]'>
                <a href='https://bukidmart.onrender.com/' target='_blank' rel='noopener noreferrer'>
                  <img src='/images/bukidmart-portfolio.png' alt='Bukidmart' />
                </a>
              </div>
              <div className='text-content'>
                <h2>Bukidmart - A Local Produce E-Commerce App</h2>
                <p className='text-white-50 md:text-xl'>
                  A web app built with React, Tailwind, DaisyUI, & Node.js for connecting local farmers with consumers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
