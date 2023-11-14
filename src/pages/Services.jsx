import React from "react";
import ServicesImage from "../assets/ServicesImage.jpg";
import Beam from "../assets/beam.png";
import Concrete from "../assets/concrete.png";
import Logs from "../assets/logs.png";
import Bricks from "../assets/bricks.png";
import Button from "../components/Button";
import CTAComponent from "../components/CTAComponent";

export default function Services() {
  return (
    <div className="w-full h-auto">
      <div className="w-full  h-[150px] md:h-[300px] bg-[url('../src/assets/ServicesBG.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full bg-black/70">
          <div className="max-w-7xl mx-auto h-full p-3 flex items-center justify-center">
            <h2 className="h2-preset-light md:text-5xl">Services</h2>
          </div>
        </div>
      </div>

      <div className="py-14 max-w-7xl mx-auto h-full p-3 flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full flex justify-center">
          <img src={ServicesImage} className="w-[500px]" />
        </div>
        <div className="w-full order-first lg:order-last pb-8 flex flex-col items-center">
          <div>
            <h2 className="h2-preset font-bold pb-4">Our services include:</h2>
            <ul className="list-disc list-inside text-md text-gray-500 pb-4">
              <li>
                Residential: Custom homes, renovations, and interior design.
              </li>
              <li>
                Commercial: Office, retail, and industrial space construction.
              </li>
              <li>Renovation: Whole-home makeovers and modernization.</li>
              <li>
                Project Management: Planning, budget control, quality assurance.
              </li>
              <li>
                Consultation: Feasibility, design advice, and value engineering.
              </li>
              <li>
                Sustainability: Eco-friendly building, energy efficiency, and
                certifications.
              </li>
            </ul>
            <Button text="Get in touch" />
          </div>
        </div>
      </div>

      <div className="w-full py-14 bg-gray-200">
        <div className="max-w-7xl mx-auto h-auto">
          <h2 className="h2-preset font-bold flex justify-center text-center">
            WeBuild has experience designing in:
          </h2>
          <div className="pt-14 grid grid-cols-4">
            <div className="flex flex-col items-center">
              <img src={Concrete} className="" />
              <h3 className="h3-preset font-bold pt-2 text-center w-[200px]">
                Reinforced Concrete
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={Beam} className="" />
              <h3 className="h3-preset font-bold pt-2 text-center w-[150px]">
                Structural Steel
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={Logs} className="" />
              <h3 className="h3-preset font-bold pt-2 text-center w-[200px]">
                Timber
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={Bricks} className="" />
              <h3 className="h3-preset font-bold pt-2 text-center w-[200px]">
                Masonry
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-14">
        <div className="max-w-7xl mx-auto h-auto p-3">
          <h2 className="h2-preset font-bold flex justify-center text-center">
            WeBuild has expertise in the following sectors:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-md text-gray-500 pt-10">
            <li className="list-disc list-inside">Residential Housing</li>
            <li className="list-disc list-inside">Commercial Office Spaces</li>
            <li className="list-disc list-inside">
              Retail and Shopping Centers
            </li>
            <li className="list-disc list-inside">
              Hospitality and Restaurants
            </li>
            <li className="list-disc list-inside">Healthcare Facilities</li>
            <li className="list-disc list-inside">Educational Institutions</li>
            <li className="list-disc list-inside">
              Industrial and Warehousing
            </li>
            <li className="list-disc list-inside">
              Historic Building Restoration
            </li>
            <li className="list-disc list-inside">
              Community and Civic Projects
            </li>
            <li className="list-disc list-inside">
              Green and Sustainable Construction
            </li>
            <li className="list-disc list-inside">Recreational Facilities</li>
            <li className="list-disc list-inside">
              Transportation and Infrastructure
            </li>
            <li className="list-disc list-inside">Real Estate Development</li>
            <li className="list-disc list-inside">
              Government and Public Sector
            </li>
            <li className="list-disc list-inside">Custom Luxury Residences</li>
          </div>
        </div>
      </div>

      <CTAComponent />
    </div>
  );
}
