import React from 'react'
// import UpdateProfile from '../Component/UpdateProfile'
import SegPer from '../Component/SegPer';

const segper = () => {
  return (
    <div>
        <SegPer/>
  
    </div>
  )
}

export default segper;
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
