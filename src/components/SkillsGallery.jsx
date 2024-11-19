import { useEffect, useRef } from 'react';
import * as DevIcons from 'devicons-react';

const skills = [
  { name: 'HTML', Icon: DevIcons.Html5Original, color: '' },
  { name: 'CSS', Icon: DevIcons.Css3Original, color: '' },
  { name: 'JavaScript', Icon: DevIcons.JavascriptOriginal, color: '' },
  { name: 'React/React Native', Icon: DevIcons.ReactOriginal, color: '' },
  { name: 'Node.js', Icon: DevIcons.NodejsOriginal, color: '' },
  { name: 'Python', Icon: DevIcons.PythonOriginal, color: '' },
  { name: 'Git', Icon: DevIcons.GitOriginal, color: '' },
  { name: 'Java', Icon: DevIcons.JavaOriginal, color: '' },
  { name: 'C#', Icon: DevIcons.CsharpOriginal, color: '' },
  { name: 'Ruby', Icon: DevIcons.RubyOriginal, color: '' },
  { name: 'Swift', Icon: DevIcons.SwiftOriginal, color: '' },
  { name: 'Go', Icon: DevIcons.GoOriginal, color: '' },
  { name: 'TypeScript', Icon: DevIcons.TypescriptOriginal, color: '' },
  { name: 'PostgreSQL', Icon: DevIcons.PostgresqlOriginal, color: '' },
  { name: 'Docker', Icon: DevIcons.DockerOriginal, color: '' },
  { name: 'Kubernetes', Icon: DevIcons.KubernetesOriginal, color: '' },
  { name: 'Rust', Icon: DevIcons.RustLine, color: 'white' },
  { name: 'Linux', Icon: DevIcons.LinuxOriginal, color: 'white' },
  { name: 'GitHub', Icon: DevIcons.GithubOriginal, color: 'white' },
  { name: 'GitLab', Icon: DevIcons.GitlabPlain, color: '' },
  { name: 'Bitbucket', Icon: DevIcons.BitbucketOriginal, color: '' },
  { name: 'Jira', Icon: DevIcons.JiraPlain, color: '' },
  { name: 'Confluence', Icon: DevIcons.ConfluenceOriginal, color: '' },
  { name: 'Jenkins', Icon: DevIcons.JenkinsPlain, color: '' },
  { name: 'Terraform', Icon: DevIcons.TerraformOriginal, color: '' },
  { name: 'Photoshop', Icon: DevIcons.PhotoshopOriginal, color: '' },
  { name: 'Premiere Pro', Icon: DevIcons.PremiereproOriginal, color: '' },
  { name: 'Illustrator', Icon: DevIcons.IllustratorLine, color: 'orange' },
  { name: 'AWS', Icon: DevIcons.AmazonwebservicesPlainWordmark, color: 'white' },
  { name: 'Scikit-learn', Icon: DevIcons.ScikitlearnOriginal, color: '' },
  { name: 'PyTorch', Icon: DevIcons.PytorchOriginal, color: '' },
  { name: 'Tensorflow', Icon: DevIcons.TensorflowOriginal, color: '' },
];

const SkillsGallery = () => {
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
          className="w-full max-w-[80%] grid grid-cols-7 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2"
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
  
  export default SkillsGallery;
  