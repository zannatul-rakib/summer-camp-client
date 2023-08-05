import { useLoaderData } from "react-router-dom";

import { BiTimeFive } from "react-icons/bi";
import { BsFillCameraVideoFill, BsFillEnvelopeAtFill } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
// import { FaQuoteLeft } from "react-icons/fa";
// import userImage from "../../assets/user.jpg"
import { Rating } from "@smastrom/react-rating";
import { PiStudentBold } from "react-icons/pi";
import Hero from "../../components/Hero";


const InstructorDetails = () => {
    const instructor = useLoaderData();
    const { name, image, classesTaken, ratings, students, email, aboutMe, classes } = instructor;
    return (
        <div className="container mx-auto">
            <Hero title="Instructor details" />

            <div className="grid lg:grid-cols-3 gap-4 my-10">
                <div className="col-span-2 pr-10">
                    <div className="">
                        <img src={image} className="object-cover w-full h-[400px]" alt="" />
                    </div>
                    <div className="my-5 border py-10 px-4">
                        <h2 className="text-xl font-semibold mb-2">About Me</h2>
                        <p className="mb-4">{aboutMe}</p>
                    </div>
                </div>
                <div className="px-5">


                    <h2 className="text-center mt-5 text-xl font-bold text-[#15d5cc]">{name}</h2>

                    <div className="mt-10">
                        <p className="flex gap-3 items-center mb-3 border-b pb-2">
                            <span className="text-[#15d5cc] text-2xl"><BsFillEnvelopeAtFill /></span> Email : {email}
                        </p>
                        <p className="flex gap-3 items-center mb-3 border-b pb-2">
                            <span className="text-[#15d5cc] text-2xl"><BiTimeFive /></span> classesTaken : {classesTaken}+
                        </p>
                        <p className="flex gap-3 items-center mb-3 border-b pb-2">
                            <span className="text-[#15d5cc] text-2xl"><PiStudentBold /></span> Students : {students}+
                        </p>
                        <p className="flex gap-3 items-center mb-3 border-b pb-2">
                            <span className="text-[#15d5cc] text-2xl"><BsFillCameraVideoFill /></span> Classes : {classes.length}
                        </p>
                        <p className="flex gap-3 items-center mb-3 border-b pb-2">
                            <Rating
                                style={{ maxWidth: 200 }}
                                value={ratings}
                                readOnly
                            />
                        </p>
                        <p className="flex gap-3 items-center mb-3 border-b pb-2">
                            <span className="text-[#15d5cc] text-2xl"><AiOutlinePercentage /></span> Satisfied Clients : 95%
                        </p>
                    </div>
                    <div>
                        <iframe width="400" height="215" src="https://www.youtube.com/embed/ecH7MBfXZHM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="mt-6">

                        <button className="btn w-full py-4 uppercase bg-[#15d5cc] text-white rounded-md hover:bg-indigo-600">Enroll Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InstructorDetails;