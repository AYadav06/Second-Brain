import React from "react";

interface UserCardProps {
  title: string;
  type: "Images" | "Article" | "Video" | "Text";
  link: string;
  tags: string[];
}
export const UserCard: React.FC<UserCardProps> = ({
  title,
  type,
  link,
  tags,
}) => {
  return (
    <div className="w-64 space-y-3 rounded-xl bg-[#2A263D] border-2 border-gray-800 p-4 text-white shadow-md ">
      <div className="">
        {type} {title}
      </div>
      <span className='text-blue-600'>
        {link}
        </span>
      <div className="flex gap-2">
        {tags.map((tags, idx) => (
          <span
            key={idx}
            className="rounded-full bg-[#2A263D] px-3 py-1 text-sm text-gray-200"
          >
            {tags}
          </span>
        ))}
      </div>
    </div>
  );
};
