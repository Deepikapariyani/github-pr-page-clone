"use client";
import { TabType } from "@/types";
import type React from "react";
import { PRTitle } from "./PRTitle";
import { RepoHeader } from "./RepoHeader";
import TabContent from "./TabContent";
import MainTabs from "./MainTabs";
import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Conversations from "./Coversations";
import Commits from "./Commits";
import Checks from "./Checks";
import FilesChanged from "./FilesChanged";
import { Sidebar } from "./Sidebar";
import SignUpBanner from "@/components/SignUpBanner";

export function GitHubPullRequest() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [activeTab, setActiveTab] = useState<TabType>(TabType.CONVERSATION);
  const [repoTitle, setRepoTitle] = useState({
    HeaderHtml: (
      <>
        <Link
          href="#"
          className="text-blue-500 hover:underline text-2xl font-semibold"
        >
          shadcn-ui
        </Link>
        <span className="mx-1 text-gray-500 text-2xl dark:text-gray-400">
          /
        </span>
        <Link
          href="#"
          className="text-blue-500 hover:underline text-2xl font-semibold"
        >
          ui
        </Link>
      </>
    ),
    type: "Public",
  });
  const [pullRequestTitle, setPullRequestTitle] = useState({
    prTitle: " docs: fix typo in CSS selector",
    prNumber: "1234",
    isMerged: true,
    name: (
      <>
        <Link
          href="#"
          className="text-gray-600 dark:text-gray-400 hover:underline"
        >
          kodiakhq
        </Link>{" "}
      </>
    ),
    comment: "merged 1 commit into",
    to: "shadcn-ui:main",
    from: " Yordanliiev2002:main",
    date: "12 Oct 2023",
  });
  const [sidePaneldata, setSidePaneldata] = useState({
    assignies: "No one assigned",
    labels: (
      <>
        <Badge className="ml-1 bg-[#18E022] border border-[#18E022] bg-opacity-10 text-[#18E022] text-xs">
          automerge
        </Badge>
      </>
    ),
    projects: "None yet",
    milestone: "No milestone",
    Development: {
      labels: "Successfully merging this pull request may close these issues.",
      Deploymentlables: "None Yet",
    },
    participants: [
      {
        src: "/placeholder.svg?height=40&width=40",
        name: "Yordanliiev2002",
        short: "YL",
        reviewer: false,
        reviewed: false,
      },
      {
        src: "/placeholder.svg?height=40&width=40",
        name: "shadcn",
        short: "SC",
        reviewer: true,
        reviewed: true,
      },
      {
        src: "/placeholder.svg?height=40&width=40",
        name: "jacksonmills",
        short: "JM",
        reviewer: true,
        reviewed: false,
      },
      {
        src: "/placeholder.svg?height=40&width=40",
        name: "matevugh",
        short: "MV",
        reviewer: true,
        reviewed: true,
      },
    ],
  });
  const [pageDetails, setPageDetails] = useState({
    forks: 8400,
    stars: 99,
    conversations: 3,
    commits: 1,
    checks: 5,
    filesChanged: 1,
    sponsored: false,
    forked: false,
  });
  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };
  const handleStarIncrement = () => {
    setPageDetails((prev) => ({
      ...prev,
      stars: prev.stars + 1,
    }));
  };
  const handleForkIncrement = () => {
    setPageDetails((prev) => ({
      ...prev,
      forked: !prev.forked,
      forks: prev.forked ? prev.forks - 1 : prev.forks + 1,
    }));
  };
  const handleSponsor = () => {
    setPageDetails((prev) => ({
      ...prev,
      sponsored: !prev.sponsored,
    }));
  };
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-black dark:text-white">
      <RepoHeader
        repoTitle={repoTitle}
        pageDetails={pageDetails}
        onStarClick={handleStarIncrement}
        onForkClick={handleForkIncrement}
        onSponsorClick={handleSponsor}
      />
      <MainTabs />
      <div className="rounded  mx-auto mt-4">
        {/* Main Content */}
        <main className="container px-4 py-6">
          <div className="">
            <PRTitle pullRequestTitle={pullRequestTitle} />
            <TabContent onTabClick={handleTabClick} pageDetails={pageDetails} />
            <div className="grid grid-cols-12 z-10">
              <div className="col-span-9 z-10">
                <div id="tab-contents" className="pt-4">
                  {activeTab === TabType.CONVERSATION && (
                    <Conversations onStarClick={handleStarIncrement} />
                  )}
                  {activeTab === TabType.COMMITS && <Commits />}
                  {activeTab === TabType.CHECKS && <Checks />}
                  {activeTab === TabType.FILES_CHANGED && <FilesChanged />}
                </div>
                {isLoggedIn == false ? <SignUpBanner /> : <></>}
              </div>
              <div className="pl-6 col-span-3">
                <Sidebar sidePaneldata={sidePaneldata} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
