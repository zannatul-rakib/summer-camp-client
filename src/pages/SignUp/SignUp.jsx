import { useContext } from "react";
import SocialSignUp from "../Shared/SocialSignUp";
import { MyContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import signUpImage from "../../assets/signup.svg";
import { PiDiamondsFourLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";


const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(MyContext);

    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                // console.log(newUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = { name: data.name, email: data.email }
                        // console.log(userInfo);
                        axios.post('https://summercamp-yoga-server.vercel.app/users', userInfo)
                            .then(data => {
                                // console.log(data);
                                if (data.data.acknowledged) {
                                    reset();

                                }
                            })

                    })
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">

            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                        <img className="w-full h-full" src={signUpImage} alt="" />
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">Sign Up</h1>
                            <p>Enter your information to sign up</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><span className=" text-gray-400 text-lg"><BiUserCircle /></span></div>
                                        <input type="text" {...register("name", { required: true })} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" />
                                        {errors.name && <span className="text-red-500">Name is required</span>}
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><span className="text-gray-400 text-lg"><AiOutlineMail /></span></div>
                                        <input type="email" {...register("email", { required: true })} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="john@example.com" />
                                        {errors.email && <span className="text-red-500">Email is required</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><AiFillLock /><span className=" text-gray-400 text-lg"></span></div>
                                        <input type="password" {...register("password", { required: true, minLength: 8, pattern: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])(?=.*[a-z])/ })} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                        {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
                                        {errors.password?.type === "minLength" && <p className="text-red-500">Password must be at least 8 character.</p>}
                                        {errors.password?.type === "pattern" && <p className="text-red-500">Password must be a uppercase,lowercase and special character.</p>}
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Confirm Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><AiFillLock /><span className=" text-gray-400 text-lg"></span></div>
                                        <input type="password" {...register("password", { required: true, minLength: 8, pattern: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])(?=.*[a-z])/ })} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                        {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
                                        {errors.password?.type === "minLength" && <p className="text-red-500">Password must be at least 8 character.</p>}
                                        {errors.password?.type === "pattern" && <p className="text-red-500">Password must be a uppercase,lowercase and special character.</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label htmlFor="" className="text-xs font-semibold px-1">PhotURL</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><span className=" text-gray-400 text-lg">
                                            <PiDiamondsFourLight />
                                        </span></div>
                                        <input type="text" {...register("photoURL", { required: true })} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="https://something.com" />
                                        {errors.photoURL && <span className="text-red-500">Photo Url is required</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <div className="text-center">
                            <span>Or</span>
                            <p>Sign Up With</p>
                            <SocialSignUp />
                        </div>
                        <p className="text-center">Already haven`t account Please <Link className="underline text-indigo-600">sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;