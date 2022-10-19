import React from 'react';
import { useState } from "react";

export const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const [user, setUser] = useState({
        name:"",
        userEmail: "",
        userName: "",
        password: "",
        confirmPassword:"",
        showPassword:false,

      });
    
      const [error, Error] = useState({
        errorEmail: null,
        errorpassword: null,
        errorName:null,
        erroruserName:null,
        errorconfirmPassword:null
      });
    
      const handleInputChange = (e) => {
        const rgemail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/
       const regPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/
        if (e.target.name === "userEmail") {
          setUser({
            ...user,
            userEmail: e.target.value,
          });
          Error({
            ...error,
            errorEmail: rgemail.test(e.target.value)
              ? "valid"
              : "invalid email use a A,1-9",
          });
        } else if (e.target.name === "password") {
          setUser({
            ...user,
            password: e.target.value
          });
          Error({
            ...error,
            errorpassword:regPass.test(e.target.value)?"valid": "invalid password use a A,1-9",
            // errorpassword: e.target.value.length < 8 ? "the password is small" : "valid",

          });
        }else if (e.target.name === "userName") {
            setUser({
              ...user,
              userName: e.target.value 
            });
            Error({
              ...error,
              erroruserName:
                e.target.value.indexOf(' ')>= 0  ? "don't write space" : "",
            });
          }else if (e.target.name === "name") {
            setUser({
              ...user,
              name: e.target.value,
            });
             }else if (e.target.name === "confirmPassword") {
                setUser({
                  ...user,
                  confirmPassword: e.target.value 
                });
                Error({
                  ...error,
                  errorconfirmPassword:
                    e.target.value != user.password? "don't confirm Password" : "confirm Password",
                });
              }


      };
      const handleClickShowPassword = () => {
        setUser({ ...user, showPassword: !user.showPassword });
      };
    return (
        <div>
               <>
      <form className="m-5" onSubmit={(e) => handleSubmit(e)}>
{/* Name */}
        <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
                Name
            </label>
            <input type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="namelHelp"
                name="name"
                value={user.name}
                onChange={(e) => handleInputChange(e)}
                required/>
                <div id="emailHelp" className="form-text">
                    <small className="text-danger">{error.errorName}</small>
                </div>
        </div>
{/* email */}
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
            </label>
            <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="userEmail"
                value={user.userEmail}
                onChange={(e) => handleInputChange(e)}
                required/>
                <div id="emailHelp" className="form-text">
                    <small className="text-danger">{error.errorEmail}</small>
                </div>
        </div>
        {/* userName */}
        <div className="mb-3">
            <label htmlFor="exampleInputuserName" className="form-label">
            userName
            </label>
            <input type="text"
                className="form-control"
                id="exampleInputuserName"
                aria-describedby="userNamelHelp"
                name="userName"
                value={user.userName}
                onChange={(e) => handleInputChange(e)}
                required/>
                <div id="emailHelp" className="form-text">
                    <small className="text-danger">{error.erroruserName}</small>
                </div>
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => handleInputChange(e)}
              required
              className="form-control"
              placeholder="Password"/>
            <small className="text-danger">{error.errorpassword}</small>
            <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={handleClickShowPassword} >

                     {user.showPassword ? <i class="fa fa-solid fa-eye"></i> :<i class="fa fa-regular fa-eye-slash"></i> }
                     </button>
                    </div>
          </div>
  {/* password */}
  <div className="mb-3">
          <label htmlFor="exampleInputconfirmPassword" className="form-label">
            Password
          </label>
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={(e) => handleInputChange(e)}
              required
              className="form-control"
              placeholder="Password"/>
        {/* {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>} */}
            <small className="text-danger">{error.errorconfirmPassword}</small>
            <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={handleClickShowPassword} >

                     {user.showPassword ? <i class="fa fa-solid fa-eye"></i> :<i class="fa fa-regular fa-eye-slash"></i> }
                     </button>
                    </div>
          </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
            
        </div>
    );
}

