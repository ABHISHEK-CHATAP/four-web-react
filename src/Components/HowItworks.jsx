import React from 'react'
import WorkAPI from './API/WorkAPI';

function HowItworks() {
  return (
    <>
      <section>
        <div className="container work-container">
          <h1 className='main-heading text-center'>How does it Works</h1>
          <div className="row">
            {
              WorkAPI.map((currElem) => {
                const {logo,title,info} = currElem;
                return (
                  <>
                    <div  className="col-lg-4 col-12 text-center work-container-subdiv">
                      <i class={logo} id='icon' style={{ color: '#6f5de7' }}></i>
                      <h2 className='sub-heading'>{title}</h2>
                      <p className='main-hero-para w-100'>
                        {info}
                      </p>
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
export default HowItworks;