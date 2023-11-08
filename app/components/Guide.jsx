
const guide = [
    {
        title: "Inspection",
        desc: "Send a message to schedule an inspection date with us"
    },
    {
        title: "Form",
        desc: "Purchase, fill and return application form"
    }, {
        title: "Make payment",
        desc: "Make payment for your selected property"
    }, {
        title: "Allocation",
        desc: "Collection of titled document"
    },
]

const Guide = () => {
    return (
        <section className="">
            <div className="space-y-20 md:space-y-28 lg:space-y-32 text-center">
                <hgroup className="space-y-2">
                    <h1 className="font-bold text-2xl md:text-4xl">Steps to Land Acquisition</h1>
                    <h3 className="md:text-lg">Follow these simple steps</h3>
                </hgroup>
                <div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-10 gap-y-16 md:gap-y-28 lg:items-center  ">
                    {
                        guide.map(({ title, desc }, i) => (
                            <div key={title} className="flex flex-col gap-y-2 relative">
                                <span className="absolute left-0 right-0 mx-auto -top-10 md:-top-14 font-extrabold text-7xl md:text-8xl text-darkPurple/20">{i}</span>
                                <p className="font-semibold z-[2] md:text-lg">{title}</p>
                                <p className=" text-sm md:text-base sm:px-4 z-[2]">{desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    );
}

export default Guide