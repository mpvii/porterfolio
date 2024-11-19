import { useEffect, useRef } from 'react';
import * as DevIcons from 'devicons-react';

const skills = [
    { name: 'Go', Icon: DevIcons.GoOriginal, color: '' },
    { name: 'TypeScript', Icon: DevIcons.TypescriptOriginal, color: '' },
    { name: 'Rust', Icon: DevIcons.RustLine, color: 'white' },
    { name: 'Illustrator', Icon: DevIcons.IllustratorLine, color: 'orange' },
  ];


const SkillsFuture = () => {
    const containerRef = useRef();
  
    useEffect(() => {
      const elements = containerRef.current.querySelectorAll('.skill-item');
      const firstElement = elements[0];
  
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            // Add animation classes with delays for all items
            elements.forEach((el, index) => {
              el.style.transitionDelay = `${index * 50}ms`; // Delay increases for each item
              el.classList.add('opacity-100', 'translate-y-0');
              el.classList.remove('opacity-0', 'translate-y-5');
            });
            observer.disconnect(); // Stop observing after triggering
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the first element is visible
      );
  
      if (firstElement) observer.observe(firstElement);
  
      return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);
  
    return (
      <div className="flex items-center justify-center">
        <div
          ref={containerRef}
          className="w-full max-w-[80%] grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item flex flex-col items-center p-4 rounded-lg shadow-lg transform transition duration-[1500ms] ease-in opacity-0 translate-y-5"
            >
              <skill.Icon
                className="text-5xl mb-4"
                size="50"
                {...(skill.color && { color: skill.color })}
              />
              <p className="text-xl font-semibold text-gray-50">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SkillsFuture;
  