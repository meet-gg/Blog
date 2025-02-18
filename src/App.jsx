// import { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import authServices from "./appwrite/auth"
// import './App.css'
// import conf from './conf/conf'
// import { login, logout } from './store/authSlice'
// import Header from './component/Header/Header'
// import Footer from './component/Footer/Footer'
// import { Outlet } from 'react-router-dom'

// function App() {
//   const [loading,setLoading]=useState(true)
//   const dispatch=useDispatch()

//   useEffect(()=>{
//     authServices.getCurrentUser()
//     .then((userData)=>{
//       if(userData){
//         dispatch(login({userData}))
//       }else{
//         dispatch(logout())
//       }
//     })
//     .finally(()=>setLoading(false))
//   },[])
  

//   return !loading ?(
//     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
//       <div className='w-full block'>
//         <Header />
//         <main>
//         {/* TODO: */}
//           <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   ) : null
// }

// export default App

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authServices from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServices.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="h-screen flex flex-col bg-gradient-to-r from-blue-500 to-purple-600">
      <Header />
      <main className="flex-grow flex justify-center items-center w-full">
        <Outlet />
      </main>
      <Footer className="w-full" />
    </div>
  ) : null;
}

export default App;

