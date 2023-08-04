import { useEffect, useState } from "react";
import Card from "../Shared/Card";
import Hero from "../../components/Hero";


const AllClasses = () => {
    const [yogas, setYogas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setYogas(data))

    }, [])
    return (
        <div className="container mx-auto">
            <Hero title="All Classes" />
            <div className="my-10">
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10">
                    {
                        yogas.map((yoga, index) => <Card key={index} yoga={yoga} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllClasses;