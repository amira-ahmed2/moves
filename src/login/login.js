import { useState } from "react";

export function Login() {

 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [user, setUser] = useState({
    userEmail: "",
    password: "",
    showPassword:false,

  });

  const [error, Error] = useState({
    errorEmail: null,
    errorpassword: null,
    
  });

  const handleInputChange = (e) => {
    const rgemail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/

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
        password: e.target.value, 
      });

      Error({
        ...error,
        errorpassword:
          e.target.value.length < 8 ? "the password is small" : "valid",
      });
    }
  };
 //start passwordShown and passwordUnShown
 const handleClickShowPassword = () => {
  setUser({ ...user, showPassword: !user.showPassword });
};


  return (
    <>
      <form className="m-5" onSubmit={(e) => handleSubmit(e)}>
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
            required
          />
          <div id="emailHelp" className="form-text">
            <small className="text-danger">{error.errorEmail}</small>
          </div>
        </div>
        <div className="mb-3">
 <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
            <input
              type={user.showPassword ? "text" : "password"}
              name="password"
              value={user.password}
              onChange={(e) => handleInputChange(e)}
              required
              className="form-control"
              placeholder="Password"/>
                  <small className="text-danger">{error.errorpassword}</small>
            <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={handleClickShowPassword} >

                     {user.showPassword ?<i class="bi bi-eye"></i> :<i class="bi bi-eye-slash"></i> }
                     </button>
                    </div>
          </div>
          </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

