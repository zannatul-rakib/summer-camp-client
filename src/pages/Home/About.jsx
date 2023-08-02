import { FaLeaf, FaQuoteLeft } from 'react-icons/fa';
import aboutImage from '../../assets/yogaAbout.jpg';
import userImage from "../../assets/user.jpg"
import signatureImage from "../../assets/signature.png";

const data = [
    {
        title: 'positive result',
        percent: 90
    },
    {
        title: 'Happy Student',
        percent: 95
    },
    {
        title: 'positive reviews',
        percent: 85
    },
]
const About = () => {
    return (
        <section className="container mx-auto py-20 px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                <div className=" text-left">
                    <h2 className='text-[#15d5cc] uppercase font-semibold text-2xl mb-2'>Why Choose Us</h2>
                    <h1 className='text-4xl leading-10 capitalize font-semibold'>Yoga keeps your <br /> body and mind fresh</h1>
                    <div className='flex flex-wrap my-4 gap-1 items-center'>
                        <span className='h-[1px] w-[40%] bg-[#15d5cc]'></span>
                        <span className='text-[#15d5cc] text-5xl'><FaLeaf /></span>
                        <span className='h-[1px] w-[40%] bg-[#15d5cc]'></span>
                    </div>
                    <p className='text-[#787878] font-medium my-5 text-md'>Yoga, an ancient practice and meditation, has become increasingly popular in today`s busy society. For many people, yoga provides a retreat from their chaotic and busy lives. This is true whether you`re practicing downward facing dog posture on a mat in your bedroom, in an ashram in India or even in New York City`s Times Square. Yoga provides many other mental and physical benefits. Some of these extend to the kitchen table.</p>
                    <button className='btn px-6 bg-[#15d5cc] py-3 text-white font-semibold hover:bg-[#2C75BA]'>Learn More</button>
                </div>
                <div className="">
                    <img src={aboutImage} alt="" />
                </div>
                <div className=" p-2">
                    <div className='space-y-5'>
                        {
                            data.map((element, index) => <div key={index}>
                                <span className='text-[20px] font-medium capitalize'>{element.title}</span>
                                <span className='relative w-full h-2 bg-[#081921] block mt-2'>
                                    <div className={`w-[${element.percent}%] absolute top-0 left-0 h-full bg-[#15d5cc]`}></div>
                                </span>
                            </div>)

                        }
                    </div>
                    <div className="relative">
                        <div className='relative my-10 h-[140px] w-full bg-[#d9d9d9] px-5 flex justify-center items-center z-20'>
                            <span className='text-4xl font-semibold text-[#15d5cc] absolute top-[-15px] left-10'><FaQuoteLeft /></span>
                            <span>“Tenetur sem quisquam reprehenderit viverra cum optio duis! Placeat ad duis luctus sequi massa mauris.”</span>

                        </div>
                        <div className='bg-[#d9d9d9] h-10 w-10 rotate-45 absolute -bottom-5 left-10'></div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='h-28 w-28 border-[1px] border-[#15d5cc]'>
                            <img className='border-2' src={userImage} alt="" />
                        </div>
                        <div>
                            <img className='h-20' src={signatureImage} alt="" />
                            <span>Ceo & Founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;