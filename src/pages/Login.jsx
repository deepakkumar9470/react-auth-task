import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault()
        

        if(localStorage.getItem('user')){
            if( email && password){
             
             
                // localStorage.setItem('user', {email,password})
               
                navigate('/')
    
            }else{
               console.log('oops login failed..')
            }
        }
      
        
        

    }
  return (
    <div>
       
        <form onSubmit={handleSubmit}>
           
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder='email'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder='password'/>
            <button type="submit">Login</button>
        </form>

    </div>
  )
}

export default Login