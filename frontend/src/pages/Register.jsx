import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const [formdata, setformdata] = useState({
        username: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const handelinput = (e) => {
        const { name, value } = e.target
        setformdata({ ...formdata, [name]: value })


    }

    const handelsubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(" http://127.0.0.1:8000/api/register/", formdata)
            setformdata({
                username: "",
                email: "",
                password: ''
            })
            console.log(formdata)
            navigate('/')
        } catch (error) {
            console.log(error)
        }

    }




    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">

                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Create Account
                </h2>

                <form className="space-y-4" onSubmit={handelsubmit}>

                    {/* Username */}
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Username
                        </label>
                        <input onChange={handelinput}
                            name='username'
                            value={formdata.username}
                            type="text"
                            placeholder="Enter username"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Email
                        </label>
                        <input onChange={handelinput}
                            value={formdata.email}
                            name='email'
                            type="email"
                            placeholder="Enter email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Password
                        </label>
                        <input onChange={handelinput}
                            value={formdata.password}
                            name='password'
                            type="password"
                            placeholder="Enter password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-purple-400 text-white py-2 rounded-lg hover:bg-purple-500 transition duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-4">
                    Already have an account?{" "}
                    <span className="text-purple-500 cursor-pointer">
                        <Link to="/">Login</Link>
                    </span>
                </p>

            </div>
        </div>
    );
};

export default Register;