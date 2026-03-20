"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Hindu Mandir Puja",
    description: `An online platform that enables users to book temple pujas, offer prayers, and stay connected with spiritual traditions from anywhere. It provides a seamless digital experience for participating in rituals and receiving prasad with ease.`,
    link: "https://hindumandirpuja.com/",
    images: [
      "/assets/projects-screenshots/hindu-mandir-puja/landing.png",
      "/assets/projects-screenshots/hindu-mandir-puja/Puja.png",
      "/assets/projects-screenshots/hindu-mandir-puja/Prasad.png",
      "/assets/projects-screenshots/hindu-mandir-puja/Puja1.png",
      "/assets/projects-screenshots/hindu-mandir-puja/Book1.png",
    ],
  },
  {
    id: 2,
    name: "My Portfolio",
    description: `A modern developer portfolio showcasing interactive UI, 3D elements, and smooth animations. Built to highlight projects, skills, and creativity through an engaging and visually immersive experience.`,
    link: "/", 
    images: [
      "/assets/projects-screenshots/portfolio/landing.png",
      "/assets/projects-screenshots/portfolio/skills.png",
      "/assets/projects-screenshots/portfolio/navbar.png",
      "/assets/projects-screenshots/portfolio/projects.png",
    ],
  },
  {
    id: 3,
    name: "Book Recommendation System",
    description: `A machine learning-based recommendation system that suggests books using collaborative filtering and cosine similarity. It analyzes user behavior and preferences to provide personalized recommendations efficiently.`,
    link: "https://github.com/Manthan4041/Book_Recomendation",
    images: [
      "/assets/projects-screenshots/book-rec/home-page.png",
      "/assets/projects-screenshots/book-rec/search-page.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
