import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = memo(() => {
  return (
    <section
      id="contact"
      className="pb-16 pt-24 shadow-md border border-gray-300 rounded-tr-[14.5rem] sm:rounded-tr-[10rem] md:rounded-tr-[12rem] lg:rounded-tr-[14.5rem]"
    >
      <div className="px-4 mx-auto">
        <h1 className="text-5xl font-medium text-center text-black mb-4 animate-fade-up">
          Let's Connect
        </h1>
        <p className="text-center text-gray-600 text-xl mb-12 animate-fade-up">
          Choose your preferred way to reach out
        </p>

        <div className="flex flex-col md:flex-row gap-8 w-full animate-fade-in">
          <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-xl w-full md:w-1/2">
            <h2 className="text-2xl font-medium mb-8">Contact Information</h2>

            <div className="space-y-8 text-left">
              <div className="flex items-center gap-4 group">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-6 w-6 text-blue-400"
                  />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>example@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="h-6 w-6 text-blue-400"
                  />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p>0123456789</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="h-6 w-6 text-blue-400"
                  />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p>Surat, Gujarat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-xl w-full md:w-1/2">
            <form>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  autoComplete="name"
                  className="w-full rounded-lg border focus:outline-none focus:border-blue-500 dark:focus:border-white py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  className="w-full rounded-lg border focus:outline-none focus:border-blue-500 dark:focus:border-white py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="w-full rounded-lg border focus:outline-none focus:border-blue-500 dark:focus:border-white py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>

              <div>
                <button className="shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] w-full rounded-xl bg-[#5d5c6b] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
