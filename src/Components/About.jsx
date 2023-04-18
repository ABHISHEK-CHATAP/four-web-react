import React from 'react'
import hero3 from '../Images/hero3.jpg';
import hero4 from '../Images/hero5.jpg';
import Howtouse from './API/Howtouse';

const About = () => {
  return (
  <>
  <section className='common-section our-services '>
           <div className="container mb-5 mt-5">
            <div className="row">
                <div className="col-lg-5 col-12 text-center our-services-leftside-img">
                    <img src={hero3} alt='aboutimg' />
                </div>

                {/* right side of about */}
                <div className="col-lg-1"></div>
                {/* right side of about */}
                <div className="col-lg-6 col-12 text-center our-services-rightside">
                    <h5 className='mini-title'>
                       -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                    </h5>
                    <h2 className='main-heading'>How to use the App</h2>
                    {/* inside one more div.row */}
                   
                    {
                      Howtouse.map((val)=>{
                        return (
                          <div className="row our-services-info">
                          <div className="col-1 our-services-number">
                              {val.id}
                          </div>
                          <div className="col-lg-10 our-services-data">
                            <h3>{val.title}</h3>
                            <p className='main-hero-para'>
                             {val.info}
                            </p>
                          </div>
                        </div>
                        )
                      })
                    }
                    
                      <br/>
                      <button className='btn-style btn-style-border learn-more'>learn more</button>
                </div>
            </div>
           </div>
  </section>
    
    {/* 2nd component same as it isa above */}
     {/* 2nd component same as it isa above */}


    <section className='common-section our-services our-services-right-side '>
           <div className="container mb-5 mt-5">
            <div className="row abhi">
                <div className="col-lg-8 col-12 text-center our-services-righttside-img second-container">
                <h5 className='mini-title'>
                       -- SUPPORT IN ANY LANGUAGES
                    </h5>
                    <h2 className='main-heading'>World class support is <br/> Available 24/7 </h2>
                    {/* inside one more div.row */}
                   
                    {
                      Howtouse.map((val)=>{
                        return (
                          <div className="row our-services-info">
                          <div className="col-1 our-services-number">
                              {val.id}
                          </div>
                          <div className="col-lg-10 our-services-data">
                            <h3>{val.title}</h3>
                            <p className='main-hero-para'>
                             {val.info}
                            </p>
                          </div>
                        </div>
                        )
                      })
                    }
                    
                      <br/>
                      <button className='btn-style btn-style-border learn'>learn more</button>
                </div>
                
                {/* right side of about */}
                <div className="col-lg-4 col-12 text-center our-services-rightside">
                <img src={hero4} alt='aboutimg' id='hero-img' />
                </div>
            </div>
           </div>
  </section>



  </>
  )
}

export default About;