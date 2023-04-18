import React from 'react'
import ServiceApi from './API/ServiceApi';

const Service = () => {
  return (
  <>
  <section className='service-main-container'>
     <div className="container service-container">
          <h1 className='main-heading text-center fw-bold'>
            How to send money
          </h1>
         
            <div className="row">
               
               {
                ServiceApi.map((val)=>{
                    return(
                        <>
                         <div className="col-lg-4 col-11 col-xxl-4 work-container-subdivv">
                         <i class={val.logo} id='iconnn' style={{ color: '#6f5de7' }}></i>
                        <h2 className='sub-heading'>{val.title}</h2>
                        <p className='main-hero-para'>{val.info}</p>
                        </div>
                        </> 
                    )
                })
               }
               
               
                
                </div>
            </div>


               
  </section>
 
  </>
  )
}

export default Service;