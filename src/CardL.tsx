import React from "react";

interface Props {
  title: String;
  content: String;
  image: String;
}

export default function CardL(props: Props) {
  const { title, content, image } = props;
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto flex px-6 text-gray-600 md:px-12 xl:px-6 flex-wrap sm:flex-nowrap">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 sm:max-w-md">
          {/* Embed website */}
          <embed src="https://tavla.entur.no/y2moNW6V6SRKftFunSFA" 
            width={Math.min(window.innerWidth, 700)} height={Math.min(window.innerHeight - 200, 1000)}/>
        </div>
      </div>
    </div>
  );
}
