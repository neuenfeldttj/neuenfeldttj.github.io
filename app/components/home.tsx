import Image from 'next/image'

export default function Home() {
    return (
        <div id="home" className="min-h-screen relative mb-32">
            <div className="h-[50vh]">
                <h1 className="sticky top-[10vh] h-[30vh] text-[16vw] text-blackboard font-black transform scale-y-250 flex justify-center z-10">
                    TJ NEUENFELDT
                </h1>
            </div>

            <div className=" w-[50vw] left-1/2 -translate-x-1/2 z-20 relative">
                <Image
                    src="/photos/tj_rosebowl.jpg"
                    alt="Rose Bowl"
                    width={500}
                    height={500}
                    className="rounded-[30px] w-[50vw] h-auto"
                />
            </div>

        </div>
    );
}