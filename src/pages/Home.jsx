import React, { useEffect } from "react";
import Button from "../components/Button";
import ServicesComponent from "../components/ServicesComponent";
import ArhitechTeam from "../assets/ArhitechTeam.jpg";
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";
import Project3 from "../assets/Project3.jpg";
import HomeFacts from "../components/HomeFacts";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import CTAComponent from "../components/CTAComponent";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-auto">
      {/* HERO */}
      <div className="w-full h-[70vh] bg-[url('../src/assets/heroBG.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full bg-black/80">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-start p-3 text-white">
            <div>
              <h1 className="text-3xl md:text-6xl">
                Building Dreams, Crafting Excellence.
              </h1>
              <h2 className="max-w-[500px] md:max-w-[750px] md:text-lg pt-2">
                We are a dedicated construction company committed to delivering
                exceptional results with a focus on quality, innovation, and
                client satisfaction. With precision and passion, we turn your
                vision into reality.
              </h2>
              <div className="flex items-center gap-4 pt-8">
                <Link to="/contact">
                  <Button text="Get In Touch" />
                </Link>
                <Link to="/services">
                  <div className="flex items-center gap-2 text-white cursor-pointer">
                    <h2>Services</h2>
                    <BsArrowRight size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="w-full h-auto">
        <div className="max-w-7xl mx-auto py-14">
          <div className="flex flex-col justify-center items-center">
            <h4 className="h4-preset-light border-b-2 border-[#fb8500] w-fit">
              Our Work
            </h4>
            <h2 className="h2-preset pt-4 max-w-[700px] text-center">
              Construction solutions for commercial, residential, and renovation
              projects.
            </h2>
          </div>

          <div className="w-full flex pt-10 whitespace-nowrap">
            <ServicesComponent
              imageSrc={Project1}
              title="Commercial"
              description="Dream Homes"
            />

            <ServicesComponent
              imageSrc={Project2}
              title="Renovation"
              description="Fresh Designs"
            />

            <ServicesComponent
              imageSrc={Project3}
              title="Residential"
              description="Business Solutions"
            />
          </div>
          <div className="flex justify-center pt-10">
            <Link to="/services">
              <Button text="View Services" />
            </Link>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="w-full h-auto bg-[#19191a]">
        <div className="py-14 max-w-7xl mx-auto px-3 flex flex-col lg:flex-row gap-8">
          <div className="flex justify-center w-full">
            <img
              src={ArhitechTeam}
              alt="about image"
              className="rounded-md object-cover"
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col items-start">
              <h4 className="h4-preset-light flex justify-center border-b-2 border-[#fb8500]">
                About Us
              </h4>
              <h2 className="h2-preset-light pt-4">
                With precision and passion, we turn your vision into reality.
              </h2>
              <p className="p-preset pt-10">
                At WeBuild we are the cornerstone of London's construction
                scene. With 15 years of unwavering commitment, we've become a
                symbol of trust and excellence. Our journey is built on a
                foundation of expertise, craftsmanship, and a relentless
                dedication to turning your dreams into reality. As a
                locally-rooted company, we take immense pride in transforming
                London's landscapes, one project at a time. Our mission is to
                provide top-tier construction services, backed by transparency,
                innovation, and a genuine desire to create spaces that inspire.
                WeBuild is not just a name; it's a promise of quality,
                integrity, and a brighter future for your construction needs.
              </p>
            </div>
            <div className="pt-10">
              <Link to="/about">
                <Button text="Learn more" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FACTS SECTION */}

      <div className="w-full h-[300px] bg-[url('../src/assets/heroBG.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full bg-black/90">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-center">
            <h2 className="h3-preset-light pb-10">
              Since establishment we achieved:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-14">
              <HomeFacts title="£1B +" desc="Sales since 2008" />
              <HomeFacts title="15" desc="Estate agents" />
              <HomeFacts title="6" desc="Cities served" />
              <HomeFacts title="73" desc="Projects completed" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <CTAComponent />
    </div>
  );
}
