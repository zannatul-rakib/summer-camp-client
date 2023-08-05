import { useContext } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";



const SocialSignUp = () => {

    const { facebookSignIn, googleSignIn } = useContext(MyContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || "/"

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(data => {
                const createdUser = data.user;
                const userInfo = { name: createdUser.displayName, email: createdUser.email }
                axios.post('https://summercamp-yoga-server.vercel.app/users', userInfo)
                    .then(data => {
                        // console.log(data.data)
                        if (data.data.acknowledged) {
                            // console.log('user created')
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'user created successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(data => {
                const createdUser = data.user;
                // console.log(user)
                const userInfo = { name: createdUser.displayName, email: createdUser.email }
                axios.post('https://summercamp-yoga-server.vercel.app/users', userInfo)
                    .then(data => {
                        // console.log(data.data)
                        if (data.data.acknowledged) {
                            // console.log('user created')
                        }
                    })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className="text-center flex gap-5 items-center justify-center my-3">
            <p onClick={handleGoogleSignIn} className="cursor-pointer p-2 bg-[#15d5cc] rounded-full text-white text-xl hover:bg-[#2C75BA] "><AiOutlineGoogle /></p>
            <p onClick={handleFacebookSignIn} className="cursor-pointer p-2 bg-[#15d5cc] rounded-full text-white text-xl hover:bg-[#2C75BA] "><BiLogoFacebook /></p>
        </div>
    );
};

export default SocialSignUp;