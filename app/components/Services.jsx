import Image from "next/image";
import Link from "next/link";

const services = [
    {
        type: "residential",
        image: "1",
    },
    {
        type: "landed",
        image: "2",
    },
    {
        type:"commercial",
        image: "3",
    },
    {
        type: "industrial",
        image: "1",
    }
]

const Services = ()=>{
    return (
        <div>
            <div>

            <h2>Our Services</h2>
            </div>

<div>
    {
        services.map((service)=>{
            <div>
                <h3>{service.type}</h3>
                <Image src="/images/serv-$`{service.image}`.webp" alt="house-hero"/>
            </div>
        })
    }
</div>
        </div>
    )
}

export default Services;