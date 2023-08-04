import { FaLeaf } from "react-icons/fa";

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="text-center my-10">
            <h3 className='text-[#15d5cc] uppercase font-semibold text-2xl mb-2'>{title}</h3>
            <h1 className='text-4xl leading-10 capitalize font-semibold'>{subTitle}</h1>
            <div className='flex my-4 gap-1 items-center w-[300px] mx-auto'>
                <span className='h-[1px] w-[40%] bg-[#15d5cc]'></span>
                <span className='text-[#15d5cc] text-5xl'><FaLeaf /></span>
                <span className='h-[1px] w-[40%] bg-[#15d5cc]'></span>
            </div>
        </div>
    );
};

export default SectionTitle;