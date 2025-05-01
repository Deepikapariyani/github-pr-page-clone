"use client";

import type React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
interface sidePaneldataProps {
  sidePaneldata: any;
}
export const Sidebar: React.FC<sidePaneldataProps> = ({ sidePaneldata }) => {
  return (
    <>
      {/* Sidebar */}
      <div className="w-full">
        <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none ">
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
              Reviewers
            </h3>
            {sidePaneldata?.participants?.map((item: any, index: number) =>
              item.reviewer == true ? (
                <>
                  <div key={index} className="space-y-2 py-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-5 w-5 mr-2">
                          <AvatarImage src={item.src} alt={item.short} />
                          <AvatarFallback>{item.short}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-black dark:text-white">
                          {item.name}
                        </span>
                      </div>
                      {item.reviewed && (
                        <Check className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )
            )}
          </div>
        </Card>
        <div className="w-full border-b border-gray-600 "></div>
        <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none">
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
              Assignees
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {sidePaneldata["assignies"]}
            </div>
          </div>
        </Card>
        <div className="w-full border-b border-gray-600 "></div>

        <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none ">
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
              Labels
            </h3>
            <div>{sidePaneldata["labels"]}</div>
          </div>
        </Card>
        <div className="w-full border-b border-gray-600 "></div>

        <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none ">
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
              Projects
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {sidePaneldata["projects"]}
            </div>
          </div>
        </Card>
        <div className="w-full border-b border-gray-600 "></div>

        <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none ">
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
              Milestone
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {sidePaneldata["milestone"]}
            </div>
          </div>
        </Card>
        <div className="w-full border-b border-gray-600 "></div>

        <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none ">
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
              Development
            </h3>
            <div className="text-sm text-black dark:text-white">
              {sidePaneldata["Development"]["labels"]}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {sidePaneldata["Development"]["Deploymentlables"]}
            </div>
          </div>
        </Card>
        <div className="w-full border-b border-gray-600 "></div>

        <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none ">
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
              {sidePaneldata?.participants.length} participants
            </h3>
            <div className="flex">
              {sidePaneldata?.participants?.map((item: any, index: number) => (
                <div key={index} className="flex space-x-1 mt-2">
                  <Avatar className="h-8 w-8 border-2 border-gray-600 dark:border-gray-900">
                    <AvatarImage src={item.src} alt={item.alt} />
                    <AvatarFallback>{item.alt}</AvatarFallback>
                  </Avatar>
                </div>
              ))}{" "}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
