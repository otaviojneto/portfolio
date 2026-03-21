import React from "react";

export type ShowcaseCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  buttonLink: string;
  reverse?: boolean;
  isVideo?: boolean;
  videoUrl?: string;
};

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  description,
  imageUrl,
  buttonLink,
  reverse,
  isVideo,
  videoUrl,
}) => {
  return (
    <div
      className={`flex w-full items-center justify-between gap-[50px] py-10 max-[1088px]:flex-col ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      {isVideo ? (
        <div className="relative">
          <img
            src={imageUrl}
            className="w-full block max-w-[450px] max-[1088px]:w-full"
          />

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-[5%] md:top-[6%] left-[12.3%] md:left-[12.2%] w-[75.5%] h-[84.8%] object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      ) : (
        <img
          className="max-w-[450px] max-[1088px]:w-full"
          src={imageUrl}
          alt={title}
        />
      )}
      <div className="flex flex-col gap-2">
        <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>

        <p className="max-w-[568px] text-base md:text-lg text-[#666677]">{description}</p>

        <a
          className="rounded-md bg-[#0a001b] w-full md:w-30 text-white! text-center py-2.5! font-medium inline-block transition-transform duration-300 ease-in-out hover:-translate-y-1 active:translate-y-0"
          href={buttonLink}
          target="_blank"
          rel="noreferrer"
        >
          Ver Site
        </a>
      </div>
    </div>
  );
};

export default ShowcaseCard;
