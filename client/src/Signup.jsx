import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
          <h2 className='text-center'><u>Mern Stack Authentication</u></h2>
        <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
            <div className="bg-white p-3 rounded w-25">
                <h2 className='text-center'><u>Register</u></h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'>
                            <strong>Name</strong>
                        </label>
                        <input required className='form-control rounded-0' type='text' placeholder='Enter Name'
                            autoComplete='off' name='email' onChange={(e) => setName(e.target.value)} />
                    </div>


                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                            <input required className='form-control  rounded-0' type='email' placeholder='Enter Email'
                                autoComplete='off' name='email' onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'>
                            <strong>Password</strong>
                            <input required className='form-control rounded-0' type='password' placeholder='Enter Password'
                                autoComplete='off' name='password' onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>

                    <button className='btn btn-success w-100 rounded' type='submit'>Register</button>
                </form>
                <p>Already have an Account?</p>
                <Link to="/login" className='btn btn-primary border w-100  rounded-2 text-decoration-none'>
                    Login
                </Link>

                </div>
            </div>
        </div>
    )
}

export default Signup