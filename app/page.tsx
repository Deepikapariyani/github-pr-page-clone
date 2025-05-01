"use client";
import { GitHubPullRequest } from "@/components/github-pull-request";
import { StarCountProvider } from "@/components/store/Context";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

import React, { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <StarCountProvider>
        <div className=" bg-white dark:bg-[#0d1117] text-black dark:text-white">
          <Header />
        </div>
        <GitHubPullRequest />
        <div className=" px-4 py-6 bg-white dark:bg-[#0d1117] text-black dark:text-white">
          <Footer />
        </div>
      </StarCountProvider>
    </>
  );
}
