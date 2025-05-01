"use client";

import type React from "react";
import { useStarCount } from "@/components/store/Context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, CheckSquare2Icon, Heart } from "lucide-react";

import { GitFork, Star } from "lucide-react";
interface repoTitleProps {
  repoTitle: any;
  pageDetails: any;
  onStarClick?: () => void;
  onForkClick?: () => void;
  onSponsorClick?: () => void;
}
export const RepoHeader: React.FC<repoTitleProps> = ({
  repoTitle,
  pageDetails,
  onStarClick,
  onForkClick,
  onSponsorClick,
}) => {
  const { starCount } = useStarCount();
  function formatNumber(num: number): string {
    if (num >= 1_000_000)
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    return num.toString();
  }
  return (
    <>
      {/* Repo Header */}
      <div className="">
        <div className=" px-8 py-4">
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              height="18"
              viewBox="0 0 16 16"
              version="1.1"
              width="18"
              data-view-component="true"
              className="text-black dark:text-white fill-current mr-2 "
            >
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
            {repoTitle["HeaderHtml"]}
            <Badge
              variant="outline"
              className="ml-2 text-xs font-normal text-black dark:text-white"
            >
              {repoTitle["type"]}
            </Badge>
            <div className="ml-auto flex items-center space-x-2">
              {pageDetails.sponsored == false ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm h-8 text-black dark:text-white border border-gray-600 dark:bg-[#25292E] "
                  onClick={onSponsorClick}
                >
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="text-[#DB61A2] fill-[#DB61A2]"
                  >
                    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                  </svg>
                  Sponsor
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm h-8 text-black dark:text-white border border-gray-600 dark:bg-[#25292E] "
                  onClick={onSponsorClick}
                >
                  <Check className="h-4 w-4 text-green-500 ml-2" />
                  Sponsored
                </Button>
              )}

              <Button
                variant="ghost"
                size="sm"
                className="text-sm h-8 text-black dark:text-white border border-gray-600 dark:bg-[#25292E]"
              >
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="text-gray-400 fill-current"
                >
                  <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path>
                </svg>
                Notifications
              </Button>
              {pageDetails.forked == false ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm h-8 text-black dark:text-white border border-gray-600 dark:bg-[#25292E]"
                  onClick={onForkClick}
                >
                  <GitFork className="h-4 w-4 text-gray-400" />
                  Fork
                  <Badge
                    variant="secondary"
                    className="text-xs text-black dark:bg-[#2F3742] dark:text-white"
                  >
                    {pageDetails.forks}
                  </Badge>
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm h-8 text-black dark:text-white border border-gray-600 dark:bg-[#25292E]"
                  onClick={onForkClick}
                >
                  <Check className="h-4 w-4 text-green-500 ml-2" />
                  Fork
                  <Badge
                    variant="secondary"
                    className="text-xs text-black dark:bg-[#2F3742] dark:text-white"
                  >
                    {pageDetails.forks}
                  </Badge>
                </Button>
              )}

              <Button
                variant="ghost"
                size="sm"
                className="text-sm h-8 text-black dark:text-white border border-gray-600 dark:bg-[#25292E]"
                onClick={onStarClick}
              >
                <Star className="h-4 w-4" />
                Star
                <Badge
                  variant="secondary"
                  className="text-xs text-black dark:bg-[#2F3742] dark:text-white"
                >
                  {formatNumber(pageDetails.stars)}
                </Badge>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
