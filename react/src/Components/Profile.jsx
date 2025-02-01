/*import React, { useState } from 'react'

export const Profile = () => {
    const [profile ,setProfile] =useState({
        name:'',
        age:'',
       })

       const changeHandle= (e) =>{

        const name=e.target;
        setProfile((prevProfile)=>({
            ...prevProfile,
            [name]: value,

        }));

       };
  return (
    <div>
        <h2>profile</h2>
        <div>
            <label>Name:
                <input type='text' name='name' value={profile.name} onChange={changeHandle}/>

            </label>
        </div>
        <h3>Profile Information</h3>
        <p>{profile.name}</p>
    </div>
  )
}

export default Profile;*/

/*import React, { useState } from 'react'

 const Profile = () => {
    const [item, setItem]=useState([]);
    const [name, setName]=useState('');
    const [quantity, setQuantity]=useState('');

    const handleSubmit= e=>{

        e.preventDefault();
        if(!name || !quantity) return;

        const newItem ={
            name,
            quantity: parseInt(quantity),
        };

        setItem((prevItem)=>[...prevItem ,newItem]);
        setQuantity("");
        setName("");
    }
     return (
    <div>
        <h1>Shopping List</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name}  onChange={e =>setName(e.target.value) } placeholder='Name'/>
            <input type='number' value={quantity}  onChange={e =>setQuantity(e.target.value) } placeholder='Quantity'/>
            <button type='submit'>Add Item</button>
        </form>

        <ul>
            {item.map((item,index) => (
                <li key={index}>

                    
                    {item.name}- Quantity: {item.quantity}
                </li>
            ) )}
        </ul>
    </div>
  )
}
export default Profile;*/


