import React from 'react';
const ObjectList = () => {
    const products=[
       {id:1,
        name:"aaaa",
       mobile:"8830489065",
       avatar:"./user.jpg"},
       {id:1,
        name:"aaaa",
       mobile:"8830489065",
       avatar:"./user.jpg"},
       {id:2,
        name:"aaaa",
       mobile:"8830489065",
       avatar:"./user.jpg"},
       {id:3,
        name:"aaaa",
       mobile:"8830489065",
       avatar:"./user.jpg"},
       {id:4,
        name:"aaaa",
       mobile:"8830489065",
       avatar:"./user.jpg"},
       {id:5,
        name:"aaaa",
       mobile:"8830489065",
       avatar:"./user.jpg"},
       {id:6,
        name:"aaaa",
       mobile:"8830489065",
       avatar:"./user.jpg"},
       {id:7,
        name:"aaaa",
       mobile:"8830489065",
       avatar:"./user.jpg"},
]
    return ( <>
    <section style={{display:'flex',justifyContent:"center",alignItems:"center",}}>
        {Array.isArray(products) && products.map((val,i)=>{
           return <div key={i} style={{width:"200px",margin:2,padding:5,border:"2px solid red",textAlign:"center"}}>

           
                 <img src={val.avatar} width="100" height={100} alt={"wait"}/>
                 <p><strong>Id-</strong>{val.id}</p>
                 <h3>Name:{val.name}</h3>
                 <p>Mobile:{val.mobile}</p>
                 </div>
        })}
    </section>

    </> );
}
 
export default ObjectList;