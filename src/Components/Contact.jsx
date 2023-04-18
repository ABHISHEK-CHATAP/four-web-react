import React, { useState } from 'react'
import hero2 from '../Images/hero2.jpg';


const Contact = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    const postUserData = (event) => {
        const  name = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [name]: value });
    }

///////////////////////// connect with firebase/////////////////////////////////////////////////////////
    
    const submitData = (event) => {
        event.preventDefault();
      const {firstName, lastName, phone, address, email, message } = userData;

if (firstName && lastName && phone && email && address && message ) {
        const res =  fetch('https://abhi-react-2000-default-rtdb.firebaseio.com/userDataRecords.json',
    {
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify({
                    firstName,
                    lastName,
                    phone,
                    email,
                    address,
                    message,
                }),
            }

        );
//    Response (res) yaha khatam hua
         
    if (res) {
        alert("Data stored successfully....")
        setUserData({
            firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                   });
         }
         else{
            alert("please, fill data...!")
         }
        }  else{
            alert("please, fill data...!")
         }
    };
///////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <section className='contactus-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 mx-auto">

                            {/* container inside container */}

                            <div className="row">
                                <div className="col-lg-5 col-12 contact-leftside">
                                    <h1 className='main-heading fw-bold'>
                                        Connect With Our <br /> Sales team.
                                    </h1>
                                    <p className='main-hero-para'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit  sit amet consectetur adipisicing elit.
                                    </p>
                                    <figure>
                                        <img src={hero2} alt='contct-img' className='img-fluid' />
                                    </figure>
                                </div>

                                {/* right side contact form */}

                                <div className="col-lg-7 col-12 contact-rightside">
                                    <form method='POST'>

                                        <div className="row">
                                            <div className="col-lg-6 col-12 contact-input-field">
                                                <input type='text' name='firstName' id='' className='form-control' value={userData.firstName} onChange={postUserData} placeholder='First Name' />
                                            </div>
                                            <div className="col-lg-6 col-12 contact-input-field">
                                                <input type='text' name='lastName' id='' className='form-control' value={userData.lastName} onChange={postUserData} placeholder='Last Name' />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-12 contact-input-field">
                                                <input type='number' name='phone' id='' className='form-control' value={userData.phone} onChange={postUserData} placeholder='Phone no' />
                                            </div>
                                            <div className="col-lg-6 col-12 contact-input-field">
                                                <input type='text' name='email' id='' className='form-control' value={userData.email} onChange={postUserData} placeholder='Email' />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type='text' name='address' id='' className='form-control' value={userData.address} onChange={postUserData} placeholder='Add Address' />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type='text' name='message' id='' className='form-control' value={userData.message} onChange={postUserData} placeholder='Enter your message' />
                                            </div>
                                        </div>

                                        <div className="form-check form-checkbox-style">
                                            <input className='form-check-input' type='checkbox' id='flexCheckChecked' />
                                            <label className='form-check-label main-hero-para' for='flexcheckchecked'>
                                                I agree with above filled details.
                                            </label>
                                        </div>
                                        <button type='submit' className='btn btn-style w-100' onClick={submitData}>Submit</button>

                                    </form>
                                </div>







                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact;