//dynamic contact
/*import React from 'react'
 const ProductInfo = () => {
    const product={
        name:"laptop",
        price:"80000",
        availibility:"In stock",
    }
  return (
    <div>
        <h1>Name:{product.name}</h1>
        <h1>Price:{product.price}</h1>
        <h1>Availibilty:{product.availibility}</h1>
    </div>
  )
}
export default ProductInfo;*/


//List
/*import React from 'react'

 const ProductInfo = () => {
    const Name=['nida','muskan','safia','amna','sawera']
  return (
    <main>
        {Name.map(Name =>(
            <ul  key={Name}>
                <li>{Name}</li>
            </ul>

        ))
        }

    </main>
  )
}
export default ProductInfo;*/


import React from 'react'

 const Productinfo = () => {
    const users=[
        {id:1, name:'hamna', age:21 },
        {id:2, name:'Areeba', age:22 },
        {id:3, name:'Mubeen', age:23 },
        {id:4, name:'Kinza', age:24 },
        {id:5, name:'hamna', age:20 },
    ]
  return (
    <div>
        {users.map((users)=>(
            <div key={users.id}>
                <h1>Name:{users.name}</h1>
                <h1>Age:{users.age}</h1>
            </div>

        ))}
    </div>
  )
}
export default Productinfo;



