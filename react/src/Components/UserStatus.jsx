/*import React from 'react'

export const UserStatus = (props) => {
  if(props.loggedIn && props.isAdmin){
    return <h1>Welcome Admin</h1>
  }else{
    return <h1>Welcome user</h1>
  }
  
};
export default UserStatus;*/

import React from 'react'

 const  UserStatus = (props) => {
  return props.timeOfday ==='morning'? (<h1>Good morning</h1> )  : (<h1>After Noon</h1>)
}
export default UserStatus;
