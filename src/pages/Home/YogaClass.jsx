import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import Card from "../Shared/Card";



const YogaClass = () => {
    const [yogas, setYogas] = useState([]);

    useEffect(() => {
        fetch('yoga.json')
            .then(res => res.json())
            .then(data => setYogas(data))

    }, [])
    return (
        <section className="my-10 container mx-auto px-10">
            <SectionTitle title={"Our classes"} subTitle={'checkout our best classes'} />
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10">
                {
                    yogas.map((yoga, index) => <Card key={index} yoga={yoga} />)
                }
            </div>

        </section>
    );
};

export default YogaClass;