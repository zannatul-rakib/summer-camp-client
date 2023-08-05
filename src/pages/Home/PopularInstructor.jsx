import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
// import TeacherCard from "../Shared/TeacherCard";
import { Link } from "react-router-dom";
import TeacherCard from "../Shared/TeacherCard";


const PopularInstructor = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('https://summercamp-yoga-server.vercel.app/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data.slice(0, 3)))

    }, [])
    return (
        <section className="container mx-auto px-10 my-20">
            <SectionTitle title={"our popular Instructor"} subTitle={"Our Reliable Professional Members"} />
            <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
                {
                    teachers.map((teacher, index) => <TeacherCard key={index} teacher={teacher} />)
                }
            </div>
            <div className="text-center mt-10 mb-5">
                <Link to="/instructors">
                    <button className="text-xl uppercase text-white bg-[#15d5cc] px-10 py-3 hover:bg-indigo-600">Show More</button>
                </Link>
            </div>

        </section>
    );
};

export default PopularInstructor;