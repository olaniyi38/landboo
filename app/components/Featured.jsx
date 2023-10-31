import Image from "next/image"


const Featured = () => {
  return (
    <section className="border py-2 px-4 ">
        <div className="flex">
            {/* text */}
            <div>
                <h2>Featured Properties</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolores repellat tenetur nihil animi corporis! Aut eos omnis soluta quisquam, 
                rem ut quae eligendi labore suscipit, optio cumque asperiores. Eveniet, ipsa.
                </h3>
            </div>

            {/* images */}
            <div className="flex">
                <Image src="/images/feat-1.webp" width={100} height={100} alt="featured house 1"/>
                <Image src="/images/feat-2.webp" width={100} height={100} alt="featured house 2"/>
            </div>
        </div>

    </section>
  )
}

export default Featured;
