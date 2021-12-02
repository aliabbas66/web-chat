import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { setAuthentication } from '../../../components/auth/auth';

export const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const { fullName, email, phone } = userData;

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios.post('/api/users/signup', { fullName, email, phone }).then(res => {
      setLoading(false);
      if (res.status === 200) {
        setAuthentication(res.data.user);
        document.location.reload();
      }
      else {
        console.log(res.data.errorMessage);
      }
    })
  };


  return (
    <div id="login-component">

    <div id="card">
       <div id="card-content">
    
         <form method="post" className="form" onSubmit={submitHandler} >
           <label htmlFor="user-email" style={{paddingTop: '13px'}}>
             &nbsp;Enter your full name
           </label>
           <input id="user-name" className="form-content"  name="fullName" autoComplete="on" required onChange={handleChange} />
           <div className="form-border" />
           <label htmlFor="user-email" style={{paddingTop: '22px'}}>&nbsp;Enter your email
           </label>
           <input id="user-email" className="form-content" type="email" name="email" required onChange={handleChange} />
           <div className="form-border" />
           <label htmlFor="user-number" style={{paddingTop: '22px'}}>&nbsp;Enter your phone
           </label>
           <input id="user-number" className="form-content" type="number" name="phone" required  onChange={handleChange}/>
           <div className="form-border" />
           <input id="submit-btn" type="submit" name="submit" defaultValue="LOGIN"  />
         </form>
    
       </div>
     </div>
    </div>
  );
};
