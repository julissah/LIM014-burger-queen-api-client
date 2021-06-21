/* eslint-disable jsx-a11y/alt-text */
import { Fragment, useState } from 'react';
import '../../assets/Login.css';

const axios = require ('axios');

const Login = () => {
const [data, setData] = useState({ 
  email: '',
  password: ''
})

const handleInputChange = (e) => {
  // console.log(e.target.value)
  setData({
    ...data, 
    [e.target.name] : e.target.value
  })
}
const getData = (e) => {
  e.preventDefault()
  
  const postRequestAuth = async () => {

    const newSetData = {
      email: data.email,
      password: data.password
    }

    try {
      const response = await axios.post('http://localhost:8000/auth', newSetData);
      console.log(response.data)
    }catch (err){
      console.error(err);
    }
  }
  postRequestAuth();
}


  return(
    <Fragment>
      <div className='section-login'>
        <form onSubmit={getData} className='form-login'> 
          <div className="my-1">
            <button
              className="btnLogin"
              type="submit"
            >Login</button>
            <button
              className="btnLogin"
              type="submit"
            >Regístrate</button>
          </div>
          <div className="my-3">
           <h1 className="titleLogin">Bienvenidx</h1>
            <h3 className="subtitleLogin my-1">Ingresa a tu cuenta</h3> 
          </div>          
          <div>
            <label className="labelEmail">Usuario</label><br></br>            
            <input
              type="email"
              name= "email"
              onChange={handleInputChange}
              className="inputEmail"
            ></input>
          </div>
          <div className="my-2">
            <label className="labelPassword ">Contraseña</label><br></br>
            <input
            type="password"
            name= "password"
            onChange={handleInputChange}
            className="inputPassword"
            ></input>
          </div>
          <div>
            <button
              className="btnLogin my-2"
              type="submit"
            >Ok</button>
          </div>
          <button className="btnGoogle my-1">
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            &nbsp; <p>Ingresa con google</p>
          </button>
          <p className="btn-text">Términos, condiciones y política de privacidad</p>
          <div>            
          </div>       
        </form>
      </div>
    </Fragment>
   
  );
}

export default Login;




// export default function LoginPage() {
//   // const [count, setCount] = useState(0);

//   // De forma similar a componentDidMount y componentDidUpdate
//   useEffect(() => {
//     const data = {
//       email: "email@email.com" ,
//       password: "125345"
//     }
//     createToken(data).then((res)=> {
//       console.log(res)
//     })
//   });
//     return (
//         <div className="login-wrapper">
//         <h1>Please Log In</h1>
//         <form >
//           <label>
//             <p>Username</p>
//             <input type="text" />
//           </label>
//           <label>
//             <p>Password</p>
//             <input type="password" />
//           </label>
//           <div>
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
  
//     )
// }
