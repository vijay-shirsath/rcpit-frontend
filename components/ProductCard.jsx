import Image from "next/image";
import Link from "next/link";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";


const ProductCard = ({responsive}) => {
  const imageAndHeadingData = [
    {
      id: 0,
      image: "/honeywell.jpg",
      heading: "Honeywell Program",
      url: "/",
    },
    {
      id: 1,
      image: "/ANSYSTRAINING.jpg",
      heading: "ANSYS Training Program",
      url: "/",
    },
    {
      id: 2,
      image: "/DataPolaris.jpg",
      heading: "DATA POLARIS Coders Club Inauguration",
      url: "/",
    },
    {
      id: 3,
      image: "/ExpertSessionBigData.jpg",
      heading: "Expert Session on Big Data & Hadoop",
      url: "/",
    },
    {
      id: 4,
      image: "/IEE awareness.jpg",
      heading: "IEEE Awareness Program",
      url: "/",
    },
    {
      id: 5,
      image: "/mlChampionShip.jpg",
      heading: "ML Championship Hackathon Inauguration",
      url: "/",
    },
  ];

  return (
    <Carousel responsive={responsive} containerClass="-mx-[10px] " itemClass="mx-[10px]" infinite={true}>
      {imageAndHeadingData.map((item, idex) => (
        <Link href={item.url} key={idex}>
          <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
            <Image
              src={item.image}
              alt="Product Image"
              width={500}
              height={500}
              className="w-full"
            />
            <div className="p-4 text-black/[0.9]">
              <h2 className="text-base font-bold text-center">{item.heading}</h2>
            </div>
          </div>
        </Link>
      ))}

    </Carousel>

  );
};

export default ProductCard;
