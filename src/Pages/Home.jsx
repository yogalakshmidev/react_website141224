import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router';

export const Home = () => {
  const navigate= useNavigate();
  const toRegister=()=>{
    navigate("/register");
  }
  const toLogin=()=>{
    navigate("/login");
  }
  return (
    <>
    <div></div>
    
    <div className='homeHeader'>     
    
       <p className='boldText'>Happy Shopping</p>
       </div>
       </>
  )
}
