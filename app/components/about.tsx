import PhotoCarousel from "./photo_carousel";
import SectionTitle from "./section_title";
import Image from 'next/image'

export default function About() {
    return (
        <div id="about" className="min-h-screen pb-32">
            <SectionTitle>ABOUT</SectionTitle>
            <div className="flex justify-center pb-8">
            <Image
                src={"/photos/tj_mrover.webp"}
                alt=""
                width={500}
                height={500}
                className="rounded-xl w-1/2 h-auto"
            />
            </div>
            <div className="text-4xl text-blackboard uppercase m-8 mb-32">
                Hey! I'm TJ Neuenfeldt and I recently graduated with a B.S.E in Computer Science at the University of Michigan-Ann Arbor, with a minor in music. 
                I love anything robotics after taking several classes at Michigan. Additonally, I have a strong passion for space and love keeping up with NASA and SpaceX.
                Outside of academics, I play alto saxophone, I have a strong interest in acting and film, and I'm trying to improve my film photography.
                Feel free to check out some of the pictures I took below (shot on Minolta SRT-101)!
            </div>
            <PhotoCarousel></PhotoCarousel>
        </div>
    );
}