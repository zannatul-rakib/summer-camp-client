// import focusImage from '../../assets/lotus.png';
import { BsFillEnvelopeAtFill } from 'react-icons/bs';
// import { FaDotCircle } from 'react-icons/fa';
import { PiCubeFocusBold } from 'react-icons/pi'
import { SiGoogleclassroom } from 'react-icons/si'
import { Link } from 'react-router-dom';
// import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const TeacherCard = ({ teacher }) => {
    const { name, image, classesTaken, email, _id } = teacher;
    return (
        <div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                <img className="w-full h-56 object-cover object-center" src={image} alt="avatar" />
                <div className="flex items-center px-6 py-3 bg-[#15d5cc]">
                    <span className='text-white text-xl'><PiCubeFocusBold /></span>
                    <h1 className="mx-3 text-white font-semibold text-lg">Focusing</h1>
                </div>
                <div className="py-4 px-6">
                    <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
                    <div className='flex justify-between items-center'>
                        <div>
                            <div className="flex items-center mt-4 text-gray-700">
                                <span className='text-[#15d5cc] text-xl'><SiGoogleclassroom /></span>
                                <h1 className="px-2 text-sm">{classesTaken}+ class Taken</h1>
                            </div>

                            <div className="flex items-center mt-4 text-gray-700">
                                <span className='text-[#15d5cc] text-xl'><BsFillEnvelopeAtFill /></span>
                                <h1 className="px-2 text-sm">{email}</h1>
                            </div>
                        </div>
                        {/* <div>
                            <Rating
                                style={{ maxWidth: 200 }}
                                value={ratings}
                                readOnly
                            />
                        </div> */}
                    </div>

                    {/* <div className='mt-4 mb-2'>
                        <h4 className='text-gray-700 text-xl font-semibold mb-2'>Special Classes</h4>
                        <ul className='ml-2 space-y-2'>
                            <li className='flex gap-2 items-center'>
                                <span className='text-[#15d5cc]'><FaDotCircle /></span>
                                <span>{classes[0]}</span>

                            </li>
                            <li className='flex gap-2 items-center'>
                                <span className='text-[#15d5cc]'><FaDotCircle /></span>
                                <span>{classes[1] ? classes[1] : 'data not found'}</span>

                            </li>
                        </ul>
                    </div> */}
                    <div className='mt-3'>
                        <Link to={`/instructors/${_id}`} ><button className='bg-[#15d5cc] text-white w-full py-2 rounded-sm'>Show Details</button> </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeacherCard;