import React, { useState } from 'react';
import './Home.css';
import profile from '../assets/profile.jpg';



function HomeData() {
    return(
    <div className='home-container'>
        <div className='row' >
            <div className='row-child'>
                <div className='name'>
                    <p>MANKGA TEBOGO JONAS LEKGAU</p>
                </div>
                
                <div className='profile'>
                    <div className="columns">
                    <div className='list1'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT</li>
                        <li>REACT-NATIVE</li>
                        <li>BOOTSTRAP</li>
                        <li>NODE</li>
                        </div>
                        </div>
                        <div className="columns">
                  
                        <div className='list2'>
                        <li>PYTHON</li>
                        <li>DART</li>
                        <li>FLUTTER</li>
                        <li>C</li>
                        <li>JAVA</li>
                        <li>FLASK</li>
                        <li></li>
                        </div>
                        </div>

                    <div className='column3'>
                    <div className="list3">
                        <img className="img" src={profile}  />
                    </div>
                 </div>

                </div>
                

                    
                </div>
                
            
            

        </div>
    </div>


    
);
}

export default function Home() {
    return (
      
        <HomeData />
        
     
    );
  }
  