import React from 'react';
import './App.css'
import {BrowserRouter, Navigate, Route,Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoutes from './ProtectedRoutes ';

const App = () => {
// const user = JSON.parse(JSON.stringify(localStorage.getItem('user')))

// //   const user = false
//   console.log('user ',user)

  return (
	  <BrowserRouter>
	     <div className='App'>
			 <Routes>

				 <Route path='/' element=
				 {<ProtectedRoutes>
                    <Dashboard/>
				 </ProtectedRoutes>}>
					 <Route path='/' element={<Dashboard/>}/>
				 </Route>
				 <Route path='/login' element={ <Login/>}/>
				 <Route path='/register' element={ <Register/>}/>

			 </Routes>
	 </div>
	  </BrowserRouter>
   
   
  );
}

export default App;
