import React, { Component } from 'react'
import img1 from './rgm logo.jpeg';
import {NavLink} from 'react-router-dom'
import {useAuth} from './auth'
import './firstpage.css';
import img2 from './img1.jpg';
import img3 from './img2.jpg';
import img4 from './img3.jpg';
import img5 from './img4.jpg';
import img6 from './img5.jpg';
import img7 from './img6.jpg';
import img8 from './sports.png';
import img9 from './rgm111.png';
import img10 from './Projects.jpeg';
import img11 from './Internships.jpeg';
import img12 from './JOBS.jpeg';
import img13 from './Events.jpeg';

const Firstpage = ()=>{
     const auth=useAuth()
   
    return (
      <div>
        <div className='box1'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/AdminLogin">Admin</NavLink>
        <NavLink to="/profile">Explore</NavLink>
        {/* ... Other navigation links */}
        {auth.user? (
          <button onClick={auth.logout}>Logout</button>
        ) : (
          <NavLink to="/Login">Login</NavLink>
        )}
        
        </div>
        <div className='box2'>
            <div className='logobox'>
            <img className='logo' src={img1}/>
            </div>
            <h1 className='heading'>RGM COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
        </div>
        <div className='box3'>
          </div>
          <div className='boxa'>
            <div className='boxb'>
              <h2 className='about'>About us</h2>
              <h1>WELCOME TO InfoShareCampus</h1>
              <p className='para'>Welcome to InfoShareCampus, a cutting-edge platform meticulously crafted for RGM college students. 
          Our platform serves as your gateway to a world of opportunities, where you can effortlessly navigate and engage with jobs, 
          internships, projects, and events. Seamlessly connecting students with prospects, InfoShareCampus simplifies the process of 
          discovering, applying for, and excelling in various opportunities that align with your aspirations.
          <br></br>Craft your personalized 
          profile to showcase your skills and experiences, stand out to potential employers, and dive into collaborative projects that 
          expand your horizons. Stay in the loop with campus events and workshops to continuously enhance your skills and network with 
          peers who share your ambitions. Our mission is to propel you toward success by providing an intuitive and empowering ecosystem
          , transforming your college journey into a launchpad for a promising professional future. Welcome to InfoShareCampus, 
          where opportunities meet excellence.</p>
            </div>
            <div className='boxc'></div>
          </div>
        
          
          <div className='box7'>
            <div>
              <div className='box111'>
              <h2 class="Vision">Vision</h2>
              
              <p className='Visionpara'>Empowering RGM college students, our platform revolutionizes their journey by providing a hub for jobs, 
                internships, projects, and events. Seamlessly connecting academia with opportunities, we envision a future where 
                students flourish professionally, armed with the tools to excel and create a lasting impact.</p>
                <h2 class="Mision">Mision</h2> 
                <p className='Misionpara'>Our mission is to provide RGM college students with a dynamic platform that enables them to 
                actively engage in their professional growth journey. We are dedicated to facilitating seamless access to diverse
                 opportunities, nurturing skills, and fostering meaningful connections between students and prospective employers,
                  projects, and events. By simplifying the path to success, we aim to empower every student to shape their future
                   with confidence and competence.</p>
                   </div>
                </div>
              <div className='insbox4'>
                <div>
                <h3 className='G'>Gallery</h3>
                </div>
                <div className='flex'>
                   <div className='chamu'>
                    <img className="butii"src={img1}/></div>
                    <div className='chamu'>
                    <img className="butii"src={img2}/></div>
                    <div className='chamu' >
                    <img className="butii"src={img3}/></div>
                    <div className='chamu'>
                    <img className="butii"src={img4}/>
                    </div>
                   <div className='chamu'>
                   <img className="butii"src={img5}/>
                   </div>
                   <div className='chamu'>
                   <img className="butii"src={img6}/>
                   </div>
                   <div className='chamu'>
                   <img className="butii"src={img7}/>
                   </div>
                   <div className='chamu'>
                   <img className="butii"src={img8}/>
                   </div>
                   <div className='chamu'>
                   <img className="butii"src={img9}/>
                   </div>
                   <div className='chamu'>
                   <img className="butii"src={img2}/>
                   </div>
                   <div className='chamu'>
                   <img className="butii"src={img2}/>
                   </div>
                   <div className='chamu'>
                   <img className="butii"src={img2}/>
                   </div>
                </div>
              </div>
          </div>
          <div className='box8'>
            <div><div className='insbox15'><img className='image' src={img11}/></div><div className='insbox6'>Internships</div>
            <div className='text'>
              <p className='In'>A transformative learning experience that offers students or individuals the opportunity to gain
              practical, real-world work experience in a specific field or industry. Internships are typically short-term engagements,
              often part-time, and are designed to provide hands-on training, exposure to professional settings.</p>
            </div>
            </div>
           <div><div className='insbox25'><img className='image' src={img12}/></div><div className='insbox6'>Jobs</div><div className='text'>
           <p>Jobs open the doors to a fulfilling professional journey, where passion and expertise converge. Each opportunity 
            becomes a stepping stone to growth, learning, and making a meaningful impact.As job seekers navigate the dynamic landscape, 
            they discover their strengths, forge valuable connections, and carve a path to success.</p>
           </div></div> 
            <div><div className='insbox35'><img className='image' src={img10}/></div><div className='insbox6'>Projects</div><div className='text'>
            <p>Where bright minds ignite brilliance! These captivating endeavors allow budding engineers to dive into cutting-edge 
              technologies, crafting solutions that push the boundaries of innovation. Guided by expert mentors, students embark on
               transformative journeys, honing their skills and unleashing their creativity </p>
              </div></div> 
            <div><div className='insbox45'><img className='image' src={img13}/></div><div className='insbox6'>Events</div><div className='text'>
            <p> Discover a universe of technology-driven excitement as technical events unite minds, fostering creativity and 
              ingenuity. From coding challenges to engineering showcases, participants unleash their potential, sparking brilliance
               in every endeavor. Join the cosmic celebration of innovation, where each event .</p>
              </div></div> 
          </div>   
           
            <div className='footer'>
              <div className='Contact'>
                <h2 className='C'>Contact us</h2>
                <p>Address:<br></br>Nerawada "X"Roads,<br></br>Nandyal, Andhrapradesh, 518501<br></br>+919398086765</p>
              </div>
              <div className='Emails'>
                <h2 className='D'>Email</h2>
                <a href="mailto:zaveriyashaik5025@gmail.com">zaveriyashaik5025@gmail.com</a> 
                <br></br>
                <a href="mailto:mullakousarbanu772@gmail.com">mullakousarbanu772@gmail.com</a> 
                <br></br>
                
                <a href="meghanareddy2813@gmail.com">meghanareddy2813@gmail.com</a> 
                <br></br>
                
                <a href="mailto:chamusrinivaschowdary@gmail.com">chamusrinivaschowdary@gmail.com</a> 
                <br></br>
                
                <a href="mailto:kammariraghaliktha@gmail.com">kammariraghaliktha@gmail.com</a>
                
               
              </div>
              <div className='Links'>
                <h2 className='E'>Quick Links</h2>
                <a href="/">Home</a>
                <br></br>
                <a href="/AdminLogin">Admin</a>
                <br></br>
                <a href="/profile">Explore</a>
                <br></br>
                <a href="/Login">Login</a>
              </div>
            </div>
      </div>
    )
      
}

export default Firstpage
