"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("home");

    const sections = ["home", "about", "projects", "resume", "contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between px-4 py-2 bg-grain z-50">
        {sections.map((item) => (
        <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`relative text-3xl text-blackboard
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-current
                        after:transition-all after:duration-300
                        ${active === item ? "after:w-full" : "after:w-0 hover:after:w-full"}
                    `}
            >
            {item.toUpperCase()}
            </a>
        ))}
    </nav>
  );
}