import React from "react";
import AboutImage1 from "../assets/AboutImage1.jpg";
import AboutImage2 from "../assets/AboutImage2.jpg";
import AboutImage3 from "../assets/AboutImage3.jpg";
import Button from "../components/Button";
import CTAComponent from "../components/CTAComponent";

export default function About() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-[150px] md:h-[300px] bg-[url('../src/assets/AboutBG.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full bg-black/70">
          <div className="max-w-7xl mx-auto h-full p-3 flex items-center justify-center">
            <h2 className="h2-preset-light md:text-5xl">About us</h2>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="max-w-7xl mx-auto h-full py-14 p-3">
        {/* Section 1 */}
        <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center gap-8 pt-10">
          <div className="">
            <img src={AboutImage1} className="rounded-sm lg:w-[550px]" />
          </div>
          <div className="pt-4 lg:pt-0 lg:w-[550px]">
            <h2 className="h2-preset font-bold pb-4">
              Our Legacy of Excellence
            </h2>
            <p className="p-preset-dark">
              At WeBuild, we are the architects of your dreams and the builders
              of your trust. With a legacy spanning over a decade, we've become
              a hallmark of excellence in the construction industry. Our story
              is one of unwavering commitment, craftsmanship, and a deep-seated
              passion for turning visions into reality. As a London-based
              company, we take immense pride in shaping the city's landscape,
              one project at a time. Our mission is to deliver top-tier
              construction services with a foundation of transparency,
              innovation, and an authentic desire to create spaces that inspire.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center gap-8 pt-14">
          <div className="order-first lg:order-last">
            <img src={AboutImage2} className="rounded-sm lg:w-[550px]" />
          </div>
          <div className="pt-4 lg:pt-0 lg:w-[550px]">
            <h2 className="h2-preset font-bold pb-4">Our Core Values</h2>
            <p className="p-preset-dark">
              At WeBuild, our core values are precision, dedication, and
              customer satisfaction. Whether it's constructing your dream home,
              enhancing your business space, or breathing new life into an
              existing property, we approach every project with the same level
              of commitment and expertise. Our team comprises skilled
              professionals who understand the intricacies of construction and
              the importance of delivering on time and within budget. We don't
              just build structures; we build relationships, trust, and a future
              full of possibilities.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="pb-10 w-full h-full flex flex-col lg:flex-row justify-between items-center gap-8 pt-14">
          <div className="">
            <img src={AboutImage3} className="rounded-sm lg:w-[550px]" />
          </div>
          <div className="pt-4 lg:pt-0 lg:w-[550px]">
            <h2 className="h2-preset font-bold pb-4">
              Innovative and Committed
            </h2>
            <p className="p-preset-dark">
              Our journey at WeBuild is defined by innovation and a commitment
              to quality that stands the test of time. We've earned the respect
              and trust of our clients through our consistent delivery of
              exceptional results. Every project we undertake is a testament to
              our passion for creating spaces that inspire and enrich lives. As
              we move forward, we are dedicated to pushing the boundaries of
              construction, adopting sustainable practices, and embracing new
              technologies to stay at the forefront of the industry. We're not
              just builders; we're visionaries, and we invite you to be part of
              this exciting journey with WeBuild.
            </p>
          </div>
        </div>
      </div>

      <CTAComponent />
      {/* CTA SECTION */}
    </div>
  );
}
