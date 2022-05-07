import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const Register = () => {
   
     const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault()
        if(name && email && password){
             
             
            localStorage.setItem('user', {name, email,password})
            console.log(name, email,password)
            navigate('/login')

        }else{
           console.log('oops reg failed..')
        }
        
        

    }
  return (
    <div>
       
    <form action="" onSubmit={handleSubmit}>
       
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder='name'/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder='email'/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder='password'/>
        <button type="submit">Register</button>
    </form>

</div>
  )
}

export default Register