import '../assets/css/styles.css'
import '../assets/css/swiper-bundle.min.css'
import '../assets/js/main'
import Heo from '../components/project/heo'
import Nav from '../components/nav'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import MLProject from '../components/project/MLProject'
import { useNavigate} from 'react-router-dom';
import IndusP from '../components/project/induP'
const IndeusProjects = () => {
    
  const [projects,setProjects]=useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("/api/projects")
    .then(res=>{
      setProjects(res.data)
       
    })
    .catch(err=>console.log("err",err))
    
},[])

  return (
    <> 
 <Nav/>
   <main className='mainProject'>
    
   <Heo/>
<IndusP projects={projects}/>
   </main> 
    </>
  )
}

export default  IndeusProjects