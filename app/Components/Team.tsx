"use client";

import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Mohamed Hassan",
    role: "Front-End Developer",
    src: "/mohamed.jpg",
    description: "Passionate about crafting responsive and user-friendly web interfaces.",
    profile: 'https://portfolio-v418.vercel.app/',
  },
  {
    name: "Abdelfatah Mohamed",
    role: "Front-End Developer",
    src: "/abdelfatah.jpg",
    description: "Dedicated to delivering high-quality designs and seamless experiences.",
    profile: 'https://www.facebook.com/abdoo.abdo.96995',
  },
  {
    name: "Youssef Tawfik",
    role: "Back-End Developer",
    src: "/youssef.jpg",
    description: "Expert in building scalable server-side applications and APIs.",
    profile: 'https://www.facebook.com/youssef.k.tawfik',
  },
  {
    name: "Amr Alaa",
    role: "Back-End Developer",
    src: "/amr.jpg",
    description: "Focused on optimizing database performance and backend workflows.",
    profile: 'https://www.facebook.com/Omar.Alaa.13',
  },
];

const Team = () => {
  return (
    <section className="py-20 mt-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Meet Our Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-500">
                <Image
                  src={`${member.src}`}
                  alt="team"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="mt-2 text-sm text-gray-500">
                {member.description}
              </p>
              <div className="mt-4">
                <button className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
                  <a href={`${member.profile}`}>View Profile</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
