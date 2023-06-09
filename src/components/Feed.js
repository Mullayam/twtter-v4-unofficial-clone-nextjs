import React from "react";
import Input from "./Input";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Post from "./Post";
 

export default function () {
  const posts = [
    {
      id: 1,
      name: "Test User",
      username: "pata nhi",
      userImg: "vercel.svg",
      image: "next.svg",
      text: "Nice view Baby",
      timestamp: "2 min ago",
    },
    {
      id: 2,
      name: "Test User",
      username: "tatiadmin",
      userImg: "next.svg",
      image: "vercel.svg",
      text: "thenks bro",
      timestamp: "1 min ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
