
import {createPortal} from "react-dom";
import React from 'react'

 const PopupContent = ({copied}) => {
  return createPortal(
      <section>
        {copied &&( 
          <h1 style={{position:"absolute", bottom:"3rem"}}>Copied to clipboard</h1>
        )}
      </section>,
      document.querySelector("#popus-content")
  )
}

export default PopupContent;