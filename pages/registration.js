import React from "react";
// import MyRefferals from "../Component/MyRefferals";
import regPage from "../Component/RegistrationPage";
import Head from "next/head";
import {getSession} from 'next-auth/react';


const myrefers1 = () => {
  return (
    <div>
      <Head>
        <title>My</title>
      </Head>

      <regPage />
    </div>
  );
};

export default myrefers1;
// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       session,
//     },
//   };
// }
