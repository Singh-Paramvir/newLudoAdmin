import React from 'react'
// import Login from '../Component/Login'
// import {getSession} from 'next-auth/react'
import Advertisement from '../Component/Advertisement'

const advertise = () => {
  return (
    <div>
      
        <Advertisement/>
    </div>
  )
}

export default advertise

// export async function getServerSideProps(context) {
//   const session = await getSession(context)
//   if (session) {
//     return {
//       redirect: {
//         destination: "/dashboard",
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



