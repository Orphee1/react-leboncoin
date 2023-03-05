import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from './store/auth-slice'
import { Offer, Offers, Profile, Publish, SignIn, SignUp } from './pages'
import { Layout } from './containers/Layout/layout'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const identifier = localStorage.getItem('identifier')
    if (identifier) {
      const { name, token } = JSON.parse(identifier)
      dispatch(
        authActions.load({
          token,
          userName: name,
          isLoggedIn: true,
        })
      )
    } else {
      return
    }
  }, [dispatch])

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate replace to='/offers' />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/offer/:id' element={<Offer />} />
          <Route path='/publish' element={<Publish />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/user/sign_in' element={<SignIn />} />
          <Route path='/user/sign_up' element={<SignUp />} />
          {/* <Route path='/user/verify-email' element={<Verify />} /> */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
