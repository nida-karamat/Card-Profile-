import React from 'react'
import '../CardProfile.css';
 const Skills = () => {

    
    const skills = [
    { id: 1, name: 'UI/UX' },
    { id: 2, name: 'HTML' },
    { id: 3, name: 'CSS' },
    { id: 4, name: 'JavaScript' },
    { id: 5, name: 'React' },
    { id: 6, name: 'Node' },
];
 

  return (
    <div className='skills mt-5 text-white'>
        <h2 >Skills</h2>
        <div className="flex flex-wrap ">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="span mt-5"
              >
                {skill.name}
              </span>
            ))}
          </div>
    
        
    </div>
  )
}
export default Skills;
