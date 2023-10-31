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
                {/* image 1 */}
                <div>
                    <Image src="/images/feat-1.webp" width={100} height={100} alt="featured house 1"/>
                    <h3>45 MILLION</h3>
                    <h4>3 BEDS | 450 SQM</h4>
                </div>
                {/* image 2 */}
                <div>
                    <Image src="/images/feat-2.webp" width={100} height={100} alt="featured house 1"/>
                    <h3>60 MILLION</h3>
                    <h4>4 BEDS | 550 SQM</h4>
                </div>
                {/* image 3 */}
                <div>
                    <Image src="/images/feat-1.webp" width={100} height={100} alt="featured house 1"/>
                    <h3>45 MILLION</h3>
                    <h4>3 BEDS | 450 SQM</h4>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Featured;
