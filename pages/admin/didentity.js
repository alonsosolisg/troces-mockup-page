import React from "react";

// components

import CardIdentity from "components/Cards/CardIdentity";

// layout for page

import Admin from "layouts/Admin.js";

export default function Maps() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg mt-6 rounded">
            <CardIdentity />
          </div>
        </div>
      </div>
    </>
  );
}

Maps.layout = Admin;
