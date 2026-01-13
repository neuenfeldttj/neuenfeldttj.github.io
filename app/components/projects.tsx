"use client";
import SectionTitle from "./section_title";

import Image from "next/image";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useState } from "react";

const projects = [
  {
    title: "AWS OpenSearch",
    description: "Contributed to AWS OpenSearch, re-designed the query profiler based on stakeholder requirements.",
    image: "/projects/opensearch.webp",
    link: "https://github.com/neuenfeldttj/OpenSearch",
  },
  {
    title: "MRover Teleoperation",
    description: "Using Vue.js and Django, teleoperations provides the user interface for operators to control the rover using joysticks and a custom GUI.",
    image: "/projects/mrover_auton.webp",
    link: "https://github.com/umrover/mrover-ros/tree/master/src/teleoperation",
  },
  {
    title: "RL-VLM-F Extensions",
    description: "As part of a machine learning capstone, provided extensions to an ICML 2024 reinforcement learning paper.",
    image: "/projects/rlvlmf.webp",
    link: "https://eecs-498-group-11.github.io/project-website/",
  },
  {
    title: "Movie Recommender",
    description: "Using Vue.js and Django, created a movie recommender system based on thousands of movies and users.",
    image: "/projects/movies.webp",
    link: "https://github.com/neuenfeldttj/movierecs",
  },
  {
    title: "MNIST Identification",
    description: "Training and testing different CNN model architectures to get the best model for digit identification using PyTorch.",
    image: "/projects/mnist.webp",
    link: "https://github.com/neuenfeldttj/MNIST-Project",
  },
  
];

export default function Projects() {
    const [prevEl, setPrevEl] = useState<HTMLDivElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLDivElement | null>(null);
    return (
        <div id="projects" className="min-h-screen pb-32">
            <SectionTitle>PROJECTS</SectionTitle>
            <Swiper
                className="h-[75vh]"
                modules={[Navigation, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.75}
                navigation={{
                    nextEl,
                    prevEl,
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
            >
                {projects.map((project) => (
                <SwiperSlide key={project.title}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="w-3/4 h-1/2 object-cover rounded-xl shadow-lg"
                        />
                        <h3 className="text-3xl text-tan font-bold pt-4">{project.title}</h3>
                        <p className="text-lg max-w-3/4 text-center text-blackboard py-2">
                            {project.description}
                        </p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 px-4 py-2 bg-blackboard text-grain rounded hover:bg-gray-800 transition"
                        >
                            View Project
                        </a>
                    </div>
                </SwiperSlide>
                ))}

                <div 
                    ref={(node) => setPrevEl(node)}
                    className="absolute top-1/2 left-4 z-50 cursor-pointer text-8xl text-blackboard"
                    >
                    ❮
                </div>
                <div 
                    ref={(node) => setNextEl(node)}
                    className="absolute top-1/2 right-4 z-50 cursor-pointer text-8xl text-blackboard"
                >
                    ❯
                </div>
            </Swiper>
        </div>
    );
}