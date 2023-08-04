import About from "./About";
import Banner from "./Banner";
import PopularInstructor from "./PopularInstructor";
import YogaClass from "./YogaClass";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <YogaClass></YogaClass>
            <PopularInstructor />
        </div>
    );
};

export default Home;