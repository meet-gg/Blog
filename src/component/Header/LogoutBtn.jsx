// import React from 'react'
// import { useDispatch } from 'react-redux'
// import authServices from '../../appwrite/auth'
// import { logout } from '../../store/authSlice'

// function LogoutBtn() {
//     const dispatch=useDispatch()
//     const logoutHandler=()=>{
//         authServices.logout().then(()=>{
//             dispatch(logout())
//         })
//     }
//   return (
//     <button
//     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//     onClick={logoutHandler}
//     >Logout</button>
//   )
// }

// export default LogoutBtn
import React from 'react';
import { useDispatch } from 'react-redux';
import authServices from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authServices.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className='bg-blue-600 text-white px-6 py-2 rounded-full duration-200 hover:bg-blue-700 focus:outline-none'
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
