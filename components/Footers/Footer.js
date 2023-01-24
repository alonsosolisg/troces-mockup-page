import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-green-300 pt-8 pb-6">
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-green-700 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Troces
              </div>
            </div>
          </div>
      </footer>
    </>
  );
}
