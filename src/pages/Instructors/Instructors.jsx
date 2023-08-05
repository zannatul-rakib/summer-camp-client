import { useEffect, useState } from "react";
import TeacherCard from "../Shared/TeacherCard";
import Hero from "../../components/Hero";

const Instructors = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('https://summercamp-yoga-server.vercel.app/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data))

    }, [])
    return (
        <div className="container mx-auto">
            <Hero title="All Instructors" />
            <div className="my-10">
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10">
                    {
                        teachers.map((teacher, index) => <TeacherCard key={index} teacher={teacher} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Instructors;