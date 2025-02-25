import React, { useRef } from 'react'
import "./Testimonials.css"
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png' 
import user_2 from '../../assets/user-2.png' 
import user_3 from '../../assets/user-3.png' 
import user_4 from '../../assets/user-4.png' 
 

const Testimonials = () => {
    //applying the transform property dynamically using useRef

    const slider = useRef();
    let tx = 0; // sets the initial transform value 

    // adding functionality to the arrow buttons
    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25; // decrease the value by 25
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25; //increase the value by 25
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}> 
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity usa</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree in Edusity was one of the best decisions I've
                           ever made. The supportive community, the state-of-the-art facilities, and
                           commitment to academic excellence have truely exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity usa</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree in Edusity was one of the best decisions I've
                           ever made. The supportive community, the state-of-the-art facilities, and
                           commitment to academic excellence have truely exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity usa</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree in Edusity was one of the best decisions I've
                           ever made. The supportive community, the state-of-the-art facilities, and
                           commitment to academic excellence have truely exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity usa</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree in Edusity was one of the best decisions I've
                           ever made. The supportive community, the state-of-the-art facilities, and
                           commitment to academic excellence have truely exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
