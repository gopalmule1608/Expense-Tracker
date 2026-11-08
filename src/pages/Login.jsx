import React, { useContext } from 'react'
import { authShop } from '../context/AuthContext'
import Input from '../components/Input'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { setUser } = useContext(authShop)
    const navigate = useNavigate()
    const { handleSubmit, register } = useForm()

    function handleData(data) {
        console.log(data)
        setUser(data)
        navigate('/')
    }

    return (
        <div >
            <form className='flex flex-col w-1/5 mx-auto my-50 gap-5' onSubmit={handleSubmit(handleData)}>

                <Input type="email" label="Email" placeholder="Enter email..." register={register} name="email" />
                <Input type="password" label="Password" placeholder="Enter password..." register={register} name="password" />
                <Button text="Login" type="submit" />
            </form>

        </div>
    )
}

export default Login
