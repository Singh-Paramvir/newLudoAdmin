import React from 'react'
// import UpdateProfile from '../Component/UpdateProfile'
import Login from '../Component/Notification';

const cpc = () => {
  return (
    <div>
        <Login/>
  
    </div>
  )
}

export default cpc;
// export async function getServerSideProps(context) {
//   const session = await getSession(context)
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       }
//     }
//   }
//   return {
//     props:{
//       session
//     }
//   }
// }
