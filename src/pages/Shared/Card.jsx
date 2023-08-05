import { BsCurrencyDollar } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";


const Card = ({ yoga }) => {
    const { classTitle, classImage, price, time, duration, category, _id } = yoga;
    // console.log(_id);
    return (
        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-[#15d5cc]">Awesome Yoga</h3>
            <div className="relative">
                <img className="w-full rounded-xl" src={classImage} alt="Colors" />
                <p className="absolute top-0 bg-[#15d5cc] text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{category}</p>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{classTitle}</h1>
            <div className="my-4">
                <div className="flex space-x-1 items-center">
                    <span className="text-2xl text-[#15d5cc] mb-1.5">
                        <BiTimeFive />
                    </span>
                    <p>{duration}</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <span className="text-2xl text-[#15d5cc] mb-1.5">
                        <MdDateRange />
                    </span>
                    <p>{time}</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <span className="text-2xl text-[#15d5cc] mb-1.5">
                        <BsCurrencyDollar />
                    </span>
                    <p>${price}</p>
                </div>

                <Link to={`/classes/${_id}`}>
                    <button className="mt-4 text-xl w-full text-white bg-[#15d5cc] py-2 rounded-none hover:bg-[#2C75BA] shadow-lg">Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;