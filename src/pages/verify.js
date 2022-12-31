import React, { useState, useEffect } from 'react'

const VerifyPage = () => {
  // const [error, setError] = useState(false)
  // const [loading, setLoading] = useState(false)
  // const { isLoading } = useGlobalContext()
  // const query = useQuery()

  // const verifyToken = async () => {
  //   setLoading(true)
  //   try {
  //     const { data } = await axios.post('/api/v1/auth/verify-email', {
  //       verificationToken: query.get('token'),
  //       email: query.get('email'),
  //     })
  //   } catch (error) {
  //     // console.log(error.response);
  //     setError(true)
  //   }
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   if (!isLoading) {
  //     verifyToken()
  //   }
  // }, [])

  // if (loading) {
  //   return (
  //     <Wrapper className='page'>
  //       <h2>Loading...</h2>
  //     </Wrapper>
  //   )
  // }

  // if (error) {
  //   return (
  //     <Wrapper className='page'>
  //       <h4>There was an error, please double check your verification link </h4>
  //     </Wrapper>
  //   )
  // }

  return (
    <>
      <h2>Account Confirmed</h2>
    </>
  )
}

export default VerifyPage
