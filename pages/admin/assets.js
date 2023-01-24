import React from "react";

// components

import CardAssets from "components/Cards/CardAssets.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Assets() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardAssets />
        </div>
      </div>
    </>
  );
}

Assets.layout = Admin;
