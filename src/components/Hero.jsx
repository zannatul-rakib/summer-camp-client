import heroImage from "../assets/hero.jpg";
import "./BgOverlay.css"

const Hero = ({ title }) => {
    return (
        <section className="container mx-auto" >
            <div className=" relative h-[400px] bg-no-repeat bg-center bg-cover bg-blend-overlay" style={{ backgroundImage: `url("${heroImage}")` }}>
                <div className="my-bg-overlay">
                    <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-white uppercase">{title}</h2>
                </div>

            </div>
        </section>
    );
};

export default Hero;