import { useState } from 'react'
import Cookie from 'js-cookie'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { Offer, Offers, Publish, SignIn, SignUp } from './pages'
import { Layout } from './containers/Layout/layout'

function App() {
  const token = Cookie.get('token')
  const [setUser] = useState({ token: token })

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate replace to='/offers' />} />
          <Route path='/user/sign_in' element={<SignIn setUser={setUser} />} />
          <Route path='/user/sign_up' element={<SignUp setUser={setUser} />} />
          <Route path='/publish' element={<Publish />} />
          <Route path='/offer/:id' element={<Offer />} />
          <Route path='/offers' element={<Offers />} />
          {/* <Route path='/user/verify-email' element={<Verify />} /> */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
