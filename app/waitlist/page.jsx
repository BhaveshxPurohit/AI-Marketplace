"use client";

import React from "react";
import Head from "next/head";

const WaitlistPage = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-grow w-full">
        <iframe
          style={{ width: "100%", height: "100%" }}
          src="https://carpool-waitlist.created.app"
          title="CarPool Waitlist"
          frameBorder="0">
        </iframe>
      </div>
    </div>
  );
};

export default WaitlistPage;
