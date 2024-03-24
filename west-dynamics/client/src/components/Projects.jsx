import React from 'react';
import './Projects.css';
import profile from '../assets/profile.jpg';



function ProjectsData() {
    const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api").then((res) => res.json())
    .then((data) => setData(data));
  },[]
  );
    
    return(
    <div className='projects-container'>
        <div className='row' >
            <div className='row-child' id='row-child1'>
                <div className='name'>
                    <p>{!data ? "Loading..." : data[0].name}WEB APPLICATION DEVELOPMENT</p>
                </div>
                
                <div className='projects'>
                    <div className="columns">
                    <div className='list1'>
                        <h3>REACT WEB APP</h3>
                        <h3> <span className='subtitle'>with</span> NODE BACKEND</h3>
                        <p>The web App was developed to help guide self 
                            into a good practice for backend after quite a 
                            while of front-End. </p>
                            <h3>Decicion</h3><br /> 
                            <p className='second'>The decision to do node as my backend 
                            because of the inroduction I had earlier in 
                            the year of an intermediate course to App 
                            development with react-native.  
                            </p>
                        </div>
                        </div>
                        <div className="columns">
                        <div className='list2'>
                        <h2>Design</h2>
                        <li className='design'><p>
                            To be blunt i never thought i would fall inlove with
                            web development, but then hey! here we are and you 
                            gotta admit this is b*tchin. 
                            </p></li>
                            <li className='design'><p>
                            This is all the info you can get in confidence, 
                            but to trully get the glimpse of what you signing up 
                            with click the link to the actual code.  
                            </p></li>
                            <li className='design'> 
                            <h2> Enjoy!!</h2>
                            </li>
                        <li className='react-button'><a href='#'>React WebApp</a></li>
                        
                        </div>
                        </div>

                    <div className='column3'>
                    <div className="list3">
                        <ul>
                        <li><img className="img" src={profile}  /></li>
                        <li><img className="img" src={profile}  /></li>
                        <li><img className="img" src={profile}  /></li>
                        <li><img className="img" src={profile}  /></li>
                        <li><img className="img" src={profile}  /></li>
                        <li><img className="img" src={profile}  /></li>
                        </ul>
                    </div>
                 </div>

                </div>
                

                    
                </div>
                
            
                <div className='row-child' id='row-child2'>
                <div className='name'>
                    <p>MANKGA TEBOGO JONAS LEKGAU</p>
                </div>
                
                <div className='projects'>
                    <div className="columns">
                    <div className='list1'>
                        
                        </div>
                        </div>
                        <div className="columns">
                  
                        <div className='list2'>
                        
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

export default function Projects() {
    return (
      
        <ProjectsData />
        
     
    );
  }
  