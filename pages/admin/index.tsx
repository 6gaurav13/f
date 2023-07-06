import Head from 'next/head'
import React from 'react'
import { Admin, Login } from 'react-bricks'

const AdminLogin: React.FC = () => {
  return (
    <Admin isLogin>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </Admin>
  )
}

export default AdminLogin
