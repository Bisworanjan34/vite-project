import { useCallback, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook} from '@fortawesome/free-brands-svg-icons'; // Example brand icons

import './App.css'
import { faAnglesDown, faArrowDown, faInfinity, faSwatchbook } from '@fortawesome/free-solid-svg-icons';

function App() {
  let displayref=useRef()
 let toggleref=useRef()
 let [bgcolor,setBgcolor]=useState('black')
 let [color,setColor]=useState('white')
 let [display,setDisplay]=useState(false)

 useEffect(() => {
 
    displayref.current.classList.add('display-anim');
console.log('working animation')
  // Set display to true after the timeout to show the elements after animation
  let timer =setTimeout(() => {
    setDisplay(true);
  }, 1700);

  return ()=> clearTimeout(timer);
}, []);

 let animfun=useCallback(()=>{
   toggleref.current.classList.toggle('active')

 },[])
 

  return (
  <>
  <div className="app">

     <h5 className='title  text-center text-uppercase fw-bolder pt-3'>Animation</h5>
     <div className="container g-0" ref={toggleref} style={{border:`2px solid ${color}`,background:bgcolor}}>
      

         {
          display? 
             
      <>
     
          <div className="div-1">
          <div className="box-1" onClick={()=>{
            setBgcolor('white')
            setColor('black')
          }}>Light</div>
          <div className="box-2"
          onClick={()=>{
            setBgcolor('blue')
            setColor('white')
          }}
          >blue</div>
        </div>
        <div className="div-2">
          <div className="box-3"
          onClick={()=>{
            setBgcolor('yellow')
            setColor('black')
          }}
          >yellow</div>
          <div className="box-4"
          onClick={()=>{
            setBgcolor('black')
            setColor('white')
          }}
          >Dark</div>
        </div>
        <div className="show">
          <h5>CLICK</h5>
          <FontAwesomeIcon icon={faAnglesDown}
          className='ms-3 fs-2 arrow-down'
          />
        </div>
      </>

          : <div className="timeout-display " ref={displayref}>
                <div className="d-box">
                <FontAwesomeIcon icon={faInfinity} className='fa-icon'/>
                    <h5>Infinity</h5>           
                  </div>              
          </div>
         }


         <div className="circle" onClick={animfun}></div>
     </div>
  </div>
    
  </>
  )
}

export default App
