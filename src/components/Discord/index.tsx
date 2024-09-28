"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProfileCardProps {
  avatar: string;
  banner: string;
  username: string;
  tag: string;
  website?: string;
  description: string;
  commands: string[];
  roles: { name: string; color: string }[];
  buttonText: string;
  buttonLink: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatar,
  banner,
  username,
  tag,
  website,
  description,
  commands,
  roles,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white relative">
      {/* Banner */}
      <div className="h-32 w-full relative">
        <Image
          src={banner}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
      </div>

      {/* Avatar */}
      <div className="absolute top-10 left-4 w-28 h-28 rounded-full overflow-hidden border-4 border-gray-800">
        <Image src={avatar} alt="Avatar" layout="fill" objectFit="cover" />
      </div>

      {/* Username and Tag */}
      <div className="mt-3 p-4">
        <h2 className="font-bold text-lg">
          {username} <span className="text-blue-400">#{tag}</span>
        </h2>

        {/* Website as a Bubble under Username */}
        {website && (
          <div className="mt-2">
            <div className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full shadow-md">
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
              >
                {website}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="px-4">
        <p className="text-sm text-gray-300 mb-4">{description}</p>
      </div>

      {/* Commands */}
      <div className="px-4 mb-4">
        <p className="font-bold text-gray-400">Comandos</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {commands.map((command, index) => (
            <span
              key={index}
              className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300"
            >
              {command}
            </span>
          ))}
        </div>
      </div>

      {/* Roles */}
      <div className="p-4">
        <p className="font-bold text-gray-400">Roles</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {roles.map((role, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-full`}
              style={{ backgroundColor: role.color }}
            >
              {role.name}
            </span>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="p-4">
        <Link
          href={buttonLink}
          className="block w-full bg-pink-400 text-white py-2 rounded-md hover:bg-pink-600 transition text-center"
          target="_blank"
        >
          {buttonText}
        </Link>
      </div>

    </div>
  );
};

export default ProfileCard;
