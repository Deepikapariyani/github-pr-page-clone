import type React from "react";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PRTitleProps {
  pullRequestTitle: any;
}
export const PRTitle: React.FC<PRTitleProps> = ({ pullRequestTitle }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center pr-6">
        <div>
          <h1 className="text-3xl font-semibold mb-4 flex items-center">
            {pullRequestTitle["prTitle"]}
            <span className="text-gray-500 ml-2">
              #{pullRequestTitle["prNumber"]}
            </span>
          </h1>
          <div className="flex items-center mb-4">
            {pullRequestTitle["isMerged"] && (
              <Badge className="bg-purple-600 text-white mr-2 h-8">
                <svg
                  height="16"
                  className="text-white mr-1 dark:text-white fill-current"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  aria-hidden="true"
                >
                  <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"></path>
                </svg>
                Merged
              </Badge>
            )}

            <span className="text-sm text-gray-600 dark:text-gray-400">
              {pullRequestTitle["name"]}
              {pullRequestTitle["comment"]}{" "}
              <Link
                href="#"
                className="text-blue-600 bg-[#DDF4FF] rounded-sm p-1 dark:bg-[#111D2F]"
              >
                {pullRequestTitle["to"]}
              </Link>{" "}
              from{" "}
              <Link
                href="#"
                className="text-blue-600 bg-[#DDF4FF] rounded-sm p-1 dark:bg-[#111D2F]"
              >
                {pullRequestTitle["from"]}
              </Link>{" "}
              <span className="inline-flex items-center">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="text-gray-500 dark:text-gray-400 fill-current mr-1"
                >
                  <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                  <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                </svg>{" "}
                {pullRequestTitle["date"]}
              </span>
            </span>
          </div>
        </div>
        <div>
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md h-7 w-20 text-sm font-semibold">
            New Issue
          </Button>
        </div>
      </div>
    </>
  );
};
