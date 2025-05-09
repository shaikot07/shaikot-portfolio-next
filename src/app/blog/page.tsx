import Image from "next/image";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      {/* <!-- This is an example component --> */}
      <div className="max-w-lg mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <a href="#">
            <Image
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
        <p>
          This card component is part of a larger, open-source library of
          Tailwind CSS components. Learn more by going to the official{" "}
          <a className="text-blue-600 hover:underline" href="#" target="_blank">
            Flowbite Documentation
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
