import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { MyContext } from "../../provider/AuthProvider";
import Hero from "../../components/Hero";
import { BiTimeFive } from "react-icons/bi";
import { BsFillCalendarWeekFill, BsFillCameraVideoFill } from "react-icons/bs";
import { GiBarbedCoil } from "react-icons/gi";
import { AiOutlinePercentage } from "react-icons/ai";
import userImage from "../../assets/user.jpg"
import { FaQuoteLeft } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";




const ClassDetails = () => {
    const data = useLoaderData();
    const { classTitle, classImage, description, price, time, duration, category, instructor, reviews, _id } = data;
    const { user } = useContext(MyContext)
    const [, refetch] = useCart();
    const [axiosSecure] = useAxiosSecure();

    const handleAddToCart = (id) => {
        const itemCart = { classId: id, email: user.email, classTitle, classImage, price, instructorName: instructor.name, instructorImage: instructor.image, category }
        axiosSecure.post('/carts', itemCart)
            .then(data => {
                // console.log()
                if (data.status > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your class has been added',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    return (
        <div className="container mx-auto">
            <Hero title="class details" />

            <div className="grid lg:grid-cols-3 gap-4 my-10">
                <div className="col-span-2 pr-10">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-10">
                        <div className="flex gap-2 items-center">
                            <div >
                                <img src={instructor.image} className="rounded-full h-16" alt="" />
                            </div>
                            <div>
                                <h3 className="text-xl mb-2">{instructor.name}</h3>
                                <p>Yoga Instructor</p>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-[#15d5cc] uppercase text-xl">category</h3>
                            <p>{category}</p>
                        </div>
                        <div>
                            <h3 className="text-[#15d5cc] uppercase text-md">price</h3>
                            <p className="text-[#15d5cc] uppercase text-3xl">${price}</p>
                        </div>
                    </div>
                    <div className="">
                        <img src={classImage} className="object-cover w-full h-[400px]" alt="" />
                    </div>
                    <div className="my-5 border py-10 px-4">
                        <h2 className="text-xl font-semibold mb-2">Class Details</h2>
                        <p className="mb-4">{description.overview}</p>
                        <h2 className="text-xl font-semibold mb-2">Learning Outcome</h2>
                        <p>{description.learningOutcome}</p>
                    </div>
                </div>
                <div className="px-5">

                    <div>
                        <iframe width="400" height="215" src="https://www.youtube.com/embed/ecH7MBfXZHM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <h2 className="text-center mt-5 text-xl font-bold text-[#15d5cc]">{classTitle}</h2>
                    <div className="mt-10">
                        <p className="flex gap-3 items-center mb-3 border-b pb-2">
                            <span className="text-[#15d5cc] text-2xl"><BiTimeFive /></span> Duration : {duration} (day)
                        </p>
                        <p className="flex gap-3 items-center mb-3 border-b pb-2">
                            <span className="text-[#15d5cc] text-2xl"><BsFillCalendarWeekFill /></span> Time : {time}
                        </p>
                        <p className="flex gap-3 items-center mb-3 border-b pb-2">
                            <span className="text-[#15d5cc] text-2xl"><BsFillCameraVideoFill /></span> Video Included : 12 Videos
                        </p>
                        <p className="flex gap-3 items-center mb-3 border-b pb-2">
                            <span className="text-[#15d5cc] text-2xl"><GiBarbedCoil /></span> Skill Level : Advance Course
                        </p>
                        <p className="flex gap-3 items-center mb-3 border-b pb-2">
                            <span className="text-[#15d5cc] text-2xl"><AiOutlinePercentage /></span> Satisfied Clients : 95%
                        </p>
                    </div>
                    <div className="mt-6">

                        <button onClick={() => handleAddToCart(_id)} className="btn w-full py-4 uppercase bg-[#15d5cc] text-white rounded-md hover:bg-indigo-600">Enroll Now</button>
                    </div>
                    <div>
                        <div className="relative">
                            <div className='relative my-10 h-[140px] w-full bg-[#d9d9d9] px-5 flex justify-center items-center'>
                                <span className='text-4xl font-semibold text-[#15d5cc] absolute top-[-15px] right-10'><FaQuoteLeft /></span>
                                <span>“{reviews[0].comment}”</span>

                            </div>
                            <div className='bg-[#d9d9d9] h-14 w-14 absolute -top-4 -left-4'>
                                <img src={userImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;