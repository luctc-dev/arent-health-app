"use client"
import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@/components/atoms/button'
import Container from '@/components/atoms/container'
import Input from '@/components/atoms/input'
import { actSetLogin } from '@/store/actions'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/hooks/store'
import { useNotAuthenticated } from '@/hooks/useNotAuthenticated'

const StyledLoginPage = styled.div`
  padding-top: 56px;

  form {
    max-width: 500px;
    display: block;
    margin: 0 auto;
  }
`

const LoginPage = () => {
  useNotAuthenticated()
  
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: 'admin',
    password: '123456'
  })
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const key = evt.target.name
    const value = evt.target.value

    setFormData((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (evt: any) => {
    evt.preventDefault()

    // Temporarily
    if (formData.username !== 'admin' || formData.password !== '123456') {
      alert('Username or Password invalid')
      return
    }

    dispatch(actSetLogin(true))
    router.push('/')
  }

  return (
    <StyledLoginPage>
      <Container>
        <form onSubmit={handleSubmit}>
          <Input value={formData.username} onChange={handleChange} name="username" label="Username" />
          <Input value={formData.password} onChange={handleChange} name="password" label="Password" type="password" />
          <Button onClick={handleSubmit}>Login</Button>
        </form>
      </Container>
    </StyledLoginPage>
  )
}

export default LoginPage