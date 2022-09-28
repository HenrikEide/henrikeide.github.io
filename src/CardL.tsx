import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  title: String;
  content: String;
  image: String;
}

export default function CardL(props: Props) {
  const { title, content, image } = props;
  return (
    <div className="container m-auto px-6 text-gray-600">
      <div className="space-y-6 lg:gap-12">
        <div className="lg:w-5/12">
          <img
            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
            alt="Something fancy"
            loading="lazy"
            width=""
            height=""
          />
        </div>
        <div className="lg:w-6/12">
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            NWHT out by passionate developers how
          </h2>
          <p className="mt-6 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
            voluptatem accusantium nemo perspiciatis delectus atque autem!
            Voluptatum tenetur beatae unde aperiam, repellat expedita
            consequatur! Officiis id consequatur atque doloremque!
          </p>
          <br />
          <p className="mt-4 text-gray-600">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>
        </div>
      </div>
    </div>
  );
}
