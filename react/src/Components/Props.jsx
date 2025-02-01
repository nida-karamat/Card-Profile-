import React from 'react'

 const Props = ({Name,subject,age,cgpt}) => {
  return (
    <div>
        <section>
           <>Name:{Name}</><br/>
           <>Age{age}</>
            <>Subject{subject}</>
            <>CGPA{cgpt}</>
            
        </section>
    </div>
  )
}

export default Props;
