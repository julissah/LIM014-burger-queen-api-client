import { Fragment, useState } from 'react';
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
        <h1>Login v</h1>
        <form onSubmit={getData}> 
          <div>
            <input
              placeholder="Ingrese NOmbre"
              type="email"
              name= "email"
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <input
            placeholder="Ingrese APellido"
            type="password"
            name= "password"
            onChange={handleInputChange}
            
            ></input>
          </div>
          <div>
            <button
              type="submit"
            >Enviar</button>
          </div>
        </form>
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
