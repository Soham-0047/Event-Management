import React, { useEffect,useState } from 'react'

import "./home.css"

const Home = () => {

  const [users, setUsers] = useState([])
  const [error, setError] = useState("")


  const fetchdata = async() =>{

    setError("")
//https://picsum.photos/v2/list 
    try {
      const res = await fetch("https://api.thedogapi.com/v1/images/search?limit=50")

      if(!res.ok){
        throw new Error("Problem");

      }

      const data = await res.json()
      setUsers(data)

    } catch (error) {

      setError(error.message);

    }
  }

  useEffect(() =>{

    fetchdata()
  },[])
  return (
    <>
       
       <h1 className='text-center'>Event Management System</h1>

       <div className="div-con">

        {error && <p>{error}</p>}

    <div className="img-div">
       {users.map(e =>(
          <img  className="im" src={e.url} key={e.id}alt="img"/>
        ))}
    </div>
       

       </div>
       </>
  )
}

export default Home