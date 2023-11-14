import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="w-full h-auto pb-10">
      <div className="w-full h-[150px] md:h-[300px] bg-[url('../src/assets/AboutBG.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full bg-black/70">
          <div className="max-w-7xl mx-auto h-full p-3 flex items-center justify-center">
            <h2 className="h2-preset-light md:text-5xl">Contact us</h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-14 p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-y-8">
          <div className="flex gap-4 items-center">
            <AiOutlinePhone size={60} className="text-[#023047]" />
            <div>
              <p className="text-lg text-gray-400">Call us on</p>
              <p className="text-lg text-[#023047]">(020) 1234-5678</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <AiOutlineMail size={60} className="text-[#023047]" />
            <div>
              <p className="text-lg text-gray-400">Email us on</p>
              <p className="text-lg text-[#023047]">info@webuild.co.uk</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <FiMapPin size={60} className="text-[#023047]" />
            <div>
              <p className="text-lg text-gray-400">Find us on</p>
              <p className="text-lg text-[#023047] max-w-[200px]">
                4 Liverpool Road, London, N1 0IU, UK
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-3">
        <h1 className="h2-preset font-bold">We would like to hear from you.</h1>
        <p className="p-preset pt-4">It's ok, we will not save your data.</p>
        <form className="pt-10">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="grid-name"
              >
                Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-name"
                type="text"
              ></input>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="grid-email"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-email"
                type="text"
              ></input>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="grid-phone"
              >
                Phone
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-phone"
                type="text"
              ></input>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-lg font-bold mb-2"
                for="grid-budget"
              >
                Project budget
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-budget"
                type="text"
              ></input>
            </div>
          </div>
          <Button text="Submit" />
        </form>
      </div>
    </div>
  );
}
