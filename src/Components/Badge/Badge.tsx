import React from "react";

export type BadgeProps = {
  text: string;
};

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="cursor-pointer justify-center rounded-xl bg-[#0a001b]/20 px-2.5! py-1! font-medium transition duration-200 ease-in-out hover:bg-[#0a001b] hover:text-white!">
      {text}
    </div>
  );
};

export default Badge;
