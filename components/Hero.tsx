"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Explore. Dream. Drive. Discover Your Next Ride with{" "}
          <span className="text-blue-700">RideExpo.</span>
        </h1>
        <p className="hero__subtitle">
          Unveil the Beauty of Every Ride – Discover, Compare, and Choose Your
          Perfect Car.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={"/hero.png"}
            alt="RideExpo"
            fill
            className="object-contain"
          />

          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
