import React from "react";
// import MyRefferals from "../Component/MyRefferals";
import Head from "next/head";
import Performance from "../Component/Performance"
const myrefers = () => {
  return (
    <div>
      <Head>
        <title>Performance</title>
      </Head>

      <Performance />
    </div>
  );
};

export default myrefers;

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
