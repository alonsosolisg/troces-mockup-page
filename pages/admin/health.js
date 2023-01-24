import React from "react";

// components

import CardHealthReport from "components/Cards/CardHealthReport";

// layout for page

import Admin from "layouts/Admin.js";

export default function Health() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardHealthReport />
        </div>
      </div>
    </>
  );
}

Health.layout = Admin;
