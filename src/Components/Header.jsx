import React from 'react'
import web from '../Images/hero1.jpg';
import webb from '../Images/hero2.jpg';

function Header() {
    return (
        <>
            <header>
                <section className='container main-hero-container'>
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start
                        order-lg-first order-last">
                            <h1 className='display-2'>
                                Online Payment Made <br /> Easy For You.
                            </h1>
                            <p className=' main-hero-para'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                            inventore corrupti non iste nemo veritatis. Ad distinctio corrupti
                             earum odit sed, quos adipisci soluta, quod asperiores minus ducimus esse sit?
                            </p>
                            <h3>Get early access for you</h3>
                            <div className="input-group mt-3">
                                <input type="text" className='rounded-pill w-75 me-3 p-2 form-control-text' placeholder='Enter your E-mail'/>
                                 <div className="input-group-button" >Get it Now !</div>
                            </div>
                        </div>
                        
                        {/* ------------------header right side------------------------ */}
                        <div className="col-lg-6 col-12 header-right-side display-flex justify-content-center align-items-start main-herosection-images
                        order-md-first order-sm-first">
                                <img src={web} alt='hero img' className='img-fluid'/>
                                <img src={webb} alt='hero img' className='img-fluid main-hero-img2'/>
                        </div>
                    </div>
                </section>
            </header>

        </>
    )
}
export default Header;