"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  GitCommit,
  GitFork,
  Heart,
  MessageSquare,
  Search,
  Star,
} from "lucide-react";

export function GitHubPullRequest() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-black dark:text-white">
      {/* Header */}
      <header className="border-b p-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-[#25292E]">
        <div className="pl-4 flex items-center justify-between h-16 ">
          <div className="flex items-center ">
            <svg
              height="35"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="35"
              data-view-component="true"
              className="text-black dark:text-white fill-current"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <nav className="flex items-center ">
              <div className="flex items-center">
                <Button variant="ghost" className="text-lg">
                  Product
                  <ChevronDown className=" h-6 " />
                </Button>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" className="text-lg">
                  Solutions
                  <ChevronDown className=" h-6" />
                </Button>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" className="text-lg">
                  Resources
                  <ChevronDown className=" h-6" />
                </Button>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" className="text-lg">
                  Open Source
                  <ChevronDown className=" h-6" />
                </Button>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" className="text-lg">
                  Enterprise
                  <ChevronDown className=" h-6" />
                </Button>
              </div>
              <Button variant="ghost" className="text-lg">
                Pricing
              </Button>
            </nav>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="flex items-center h-8 px-3 py-2 bg-gray-100 dark:bg-[#25292E] border border-gray-600 rounded-md">
                <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Search or jump to..."
                  className="bg-transparent border-none outline-none text-sm ml-2 w-60 text-black dark:text-white"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  aria-hidden="true"
                >
                  <path
                    fill="none"
                    stroke="#979A9C"
                    opacity=".4"
                    d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
                  ></path>
                  <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
                </svg>
              </div>
            </div>
            <Button
              variant="ghost"
              className="text-sm text-black dark:text-white"
            >
              Sign in
            </Button>
            <Button
              variant="ghost"
              className="text-sm bg-transparent  text-black border  dark:border-gray-600 dark:text-white  "
            >
              Sign up
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Repo Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0d1117]">
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
            <Badge
              variant="outline"
              className="ml-2 text-xs font-normal text-black dark:text-white"
            >
              Public
            </Badge>
            <div className="ml-auto flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm h-8 text-black dark:text-white border border-gray-600 dark:bg-[#25292E] "
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
              <Button
                variant="ghost"
                size="sm"
                className="text-sm h-8 text-black dark:text-white border border-gray-600 dark:bg-[#25292E]"
              >
                <GitFork className="h-4 w-4 text-gray-400" />
                Fork
                <Badge
                  variant="secondary"
                  className="text-xs text-black dark:bg-[#2F3742] dark:text-white"
                >
                  5.8k
                </Badge>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-sm h-8 text-black dark:text-white border border-gray-600 dark:bg-[#25292E]"
              >
                <Star className="h-4 w-4" />
                Star
                <Badge
                  variant="secondary"
                  className="text-xs text-black dark:bg-[#2F3742] dark:text-white"
                >
                  85.5k
                </Badge>
              </Button>
            </div>
          </div>

          <div className="flex items-center mt-8 ">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm h-8 flex items-center text-black dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-code h-4 w-4 mr-2"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Code
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm h-8 flex items-center text-black dark:text-white"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="text-gray-300 fill-current mr-2"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
              </svg>
              Issues
              <Badge
                variant="secondary"
                className="ml-1 text-xs text-black dark:text-white"
              >
                918
              </Badge>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm h-8 flex items-center border-b-2 border-orange-500 text-black dark:text-white"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="text-gray-300 fill-current mr-2"
              >
                <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
              </svg>
              Pull requests
              <Badge
                variant="secondary"
                className="ml-1 text-xs text-black dark:text-white"
              >
                810
              </Badge>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm h-8 flex items-center text-black dark:text-white"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="texxt-gray-300 fill-current mr-2"
              >
                <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
              </svg>
              Discussions
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm h-8 flex items-center text-black dark:text-white"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="text-gray-300 fill-current mr-2"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
              </svg>
              Actions
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm h-8 flex items-center text-black dark:text-white"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="text-gray-300 fill-current mr-2"
              >
                <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
              </svg>
              Security
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm h-8 flex items-center text-black dark:text-white"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="text-gray-300 fill-current mr-2"
              >
                <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
              </svg>
              Insights
            </Button>
          </div>
        </div>
      </div>
      <div className="rounded  mx-auto mt-4">
        {/* Main Content */}
        <main className="container px-4 py-6">
          <div className="">
            <div className="w-full flex justify-between items-center pr-6">
              <div>
                <h1 className="text-3xl font-semibold mb-4 flex items-center">
                  docs: fix typo in CSS selector
                  <span className="text-gray-500 ml-2">#6928</span>
                </h1>

                <div className="flex items-center mb-4">
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
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      kodiakhq
                    </Link>{" "}
                    merged 1 commit into{" "}
                    <Link
                      href="#"
                      className="text-blue-600 bg-[#DDF4FF] rounded-sm p-1 dark:bg-[#111D2F]"
                    >
                      shadcn-ui:main
                    </Link>{" "}
                    from{" "}
                    <Link
                      href="#"
                      className="text-blue-600 bg-[#DDF4FF] rounded-sm p-1 dark:bg-[#111D2F]"
                    >
                      Yordanliiev2002:main
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
                      on Mar 17
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

            <div className="flex justify-between  border-b border-gray-400 items-center">
              <div>
                <ul id="tabs" className="flex pt-2 px-1 w-full">
                  <li className="bg-transparent px-4 text-gray-700 font-semibold dark:text-white py-2  rounded-t-md border-t border-r border-gray-400 border-l -mb-px">
                    <div className="flex items-center ">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Conversation
                      <Badge
                        variant="secondary"
                        className="ml-1 text-xs text-gray-700 dark:text-white"
                      >
                        3
                      </Badge>
                    </div>
                  </li>
                  <li className="px-4 text-gray-700 font-semibold dark:text-white py-2 rounded-t  ">
                    <div className="flex items-center">
                      <GitCommit className="h-4 w-4 mr-1" />
                      Commits
                      <Badge
                        variant="secondary"
                        className="ml-1 text-xs text-gray-700 dark:text-white"
                      >
                        1
                      </Badge>
                    </div>
                  </li>
                  <li className="px-4 text-gray-700 font-semibold dark:text-white py-2 rounded-t  ">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 mr-1" />
                      Checks
                      <Badge
                        variant="secondary"
                        className="ml-1 text-xs text-gray-700 dark:text-white"
                      >
                        5
                      </Badge>
                    </div>
                  </li>
                  <li className="px-4 text-gray-700 font-semibold dark:text-white py-2 rounded-t  ">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      Files changed
                      <Badge
                        variant="secondary"
                        className="ml-1 text-xs text-gray-700 dark:text-white"
                      >
                        1
                      </Badge>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="text-[#238636]">+1</div>
                  <div className="text-[#DA3633]">-1</div>
                  <div className="flex items-center ml-2">
                    <div className="h-[12px] w-[12px] border border-gray-700 bg-[#238636]"></div>
                    <div className="h-[12px] w-[12px] border border-gray-700 bg-[#DA3633]"></div>
                    <div className="h-[12px] w-[12px] border ml-1 border-gray-700 "></div>
                    <div className="h-[12px] w-[12px] border border-gray-700 "></div>
                    <div className="h-[12px] w-[12px] border border-gray-700 "></div>
                  </div>
                </div>
              </div>
            </div>

            <div id="tab-contents">
              <div
                id="first"
                className="p-4 relative border-b-4 border-gray-400"
              >
                <div
                  className="absolute left-[89px] top-10 bottom-0 w-px bg-gray-300 dark:bg-gray-700 "
                  style={{ zIndex: "0 !important" }}
                ></div>

                <div className="grid grid-cols-12 z-10">
                  <div className="col-span-9 z-10">
                    {/* Timeline */}
                    <div className="space-y-4">
                      {/* Comment 1 */}
                      <div className="flex ">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="Yordanliiev2002"
                          />
                          <AvatarFallback>YL</AvatarFallback>
                        </Avatar>
                        <div className="border w-full border-gray-200 dark:border-gray-800 rounded-lg">
                          <div className="flex w-full items-center dark:bg-gray-800 bg-[#F6F8FA] rounded-t-lg">
                            <div className="h-6 w-6 -ml-1  border bg-[#F6F8FA] border-[#F6F8FA] dark:border-gray-800 dark:bg-gray-800  rotate-45 "></div>

                            <div className="flex w-full items-center justify-between p-3 bg-[#F6F8FA] dark:bg-gray-800 rounded-t-lg">
                              <div className="flex items-center">
                                <Link
                                  href="#"
                                  className="text-sm font-semibold hover:underline text-black dark:text-white"
                                >
                                  Yordanliiev2002
                                </Link>
                                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                                  commented on Mar 14
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Badge
                                  variant="outline"
                                  className="text-xs text-black dark:text-white border border-gray-500 dark:border-gray-400 bg-gray-100 dark:bg-[#25292E] rounded-full px-2 py-1"
                                >
                                  Contributor
                                </Badge>
                                <svg
                                  aria-label="Show options"
                                  role="img"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  className="text-gray-500 dark:text-gray-400 fill-current ml-2"
                                >
                                  <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg dark:bg-[#0D1117] bg-white">
                            <p className="text-sm text-black dark:text-white">
                              There was a typo
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Comment 2 - Vercel Bot */}
                      <div className="flex ">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="Yordanliiev2002"
                          />
                          <AvatarFallback>YL</AvatarFallback>
                        </Avatar>
                        <div className="border w-full border-gray-200 dark:border-gray-800 rounded-lg">
                          <div className="flex w-full items-center bg-[#F6F8FA] dark:bg-gray-800 rounded-t-lg">
                            <div className="h-6 w-6 -ml-1  border bg-[#F6F8FA] border-[#F6F8FA] dark:border-gray-800 dark:bg-gray-800  rotate-45 "></div>

                            <div className="flex w-full items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-t-lg">
                              <div className="flex items-center">
                                <Link
                                  href="#"
                                  className="text-sm font-semibold hover:underline text-black dark:text-white"
                                >
                                  Yordanliiev2002
                                </Link>
                                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                                  commented on Mar 14
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  aria-label="Show options"
                                  role="img"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  className="text-gray-500 dark:text-gray-400 fill-current ml-2"
                                >
                                  <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg dark:bg-[#0D1117] bg-white">
                            <p className="text-sm text-black dark:text-white">
                              <span className="font-semibold">
                                @Yordanliiev2002
                              </span>{" "}
                              is attempting to deploy a commit to the shadcn-pro
                              Team on{" "}
                              <Link
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                Vercel
                              </Link>
                              .
                            </p>
                            <p className="text-sm mt-2 text-black dark:text-white">
                              A member of the Team first needs to{" "}
                              <Link
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                authorize it
                              </Link>
                              .
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item - Title Change */}
                      <div className="flex items-center">
                        <div className="h-10 w-10 mr-4"></div>
                        <div className="flex items-center">
                          <div className="mr-2 mt-1 border p-2 rounded-full border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="text-gray-500 dark:text-gray-400 fill-current"
                            >
                              <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <Avatar className="h-5 w-5 mr-1">
                                <AvatarImage
                                  src="/placeholder.svg?height=40&width=40"
                                  alt="Yordanliiev2002"
                                />
                                <AvatarFallback>YL</AvatarFallback>
                              </Avatar>
                              <Link
                                href="#"
                                className="text-sm font-semibold hover:underline text-black dark:text-white"
                              >
                                Yordanliiev2002
                              </Link>
                              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                changed the title Fix css selector for Zinc
                                theme in website docs: typo in CSS selector on
                                Mar 14
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item - Commit */}
                      <div className="flex items-center">
                        <div className="h-10 w-10 mr-4"></div>
                        <div className="flex items-center">
                          <div className="mr-2 mt-1 px-2 dark:bg-[#0D1117] bg-white">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="text-gray-500 dark:text-gray-400 fill-current"
                            >
                              <path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
                            </svg>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center">
                              <span className="text-sm text-black dark:text-white">
                                <span className=" bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs">
                                  docs: fix typo in CSS selector
                                </span>
                              </span>
                              <Check className="h-4 w-4 text-green-500 ml-2" />
                              <span className="text-xs text-gray-500 ml-1">
                                5a72857
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item - Title Change 2 */}
                      <div className="flex items-center">
                        <div className="h-10 w-10 mr-4"></div>
                        <div className="flex items-center">
                          <div className="mr-2 mt-1 border p-2 rounded-full border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="text-gray-500 dark:text-gray-400 fill-current"
                            >
                              <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <Avatar className="h-5 w-5 mr-1">
                                <AvatarImage
                                  src="/placeholder.svg?height=40&width=40"
                                  alt="Yordanliiev2002"
                                />
                                <AvatarFallback>YL</AvatarFallback>
                              </Avatar>
                              <Link
                                href="#"
                                className="text-sm font-semibold hover:underline text-black dark:text-white"
                              >
                                Yordanliiev2002
                              </Link>
                              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                changed the title docs: typo in CSS selector
                                docs: fix typo in CSS selector on Mar 14
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item - Force Push */}
                      <div className="flex items-center">
                        <div className="h-10 w-10 mr-4"></div>
                        <div className="flex items-center">
                          <div className="mr-2 mt-1 border p-2 rounded-full border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="text-gray-500 dark:text-gray-400 fill-current"
                            >
                              <path d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.493 2.493 0 0 1 3.5 9h3.25a.75.75 0 0 1 0 1.5H3.5a1 1 0 0 0 0 2h5.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5Zm13.23 7.79h-.001l-1.224-1.224v6.184a.75.75 0 0 1-1.5 0V9.066L10.28 10.29a.75.75 0 0 1-1.06-1.061l2.505-2.504a.75.75 0 0 1 1.06 0L15.29 9.23a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <Avatar className="h-5 w-5 mr-1">
                                <AvatarImage
                                  src="/placeholder.svg?height=40&width=40"
                                  alt="Yordanliiev2002"
                                />
                                <AvatarFallback>YL</AvatarFallback>
                              </Avatar>
                              <Link
                                href="#"
                                className="text-sm font-semibold hover:underline text-black dark:text-white"
                              >
                                Yordanliiev2002
                              </Link>
                              <Link
                                href="#"
                                className="text-sm text-gray-500 dark:text-gray-400 ml-1 hover:underline"
                              >
                                force-pushed
                              </Link>
                              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                the
                              </span>
                              <span className="text-sm  bg-gray-100 dark:bg-gray-800 px-1  rounded  ml-1">
                                main
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                                branch from
                              </span>
                              <span className="text-sm    ml-1">2bc1149</span>
                              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                to
                              </span>
                              <span className="text-sm    ml-1">5a72857</span>
                              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                last month
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item - Approved */}
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="Yordanliiev2002"
                          />
                          <AvatarFallback>YL</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center w-full">
                          <div className="mr-2 mt-1 border p-2 rounded-full border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="text-gray-500 dark:text-gray-400 fill-current"
                            >
                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 w-full">
                            <div className="flex w-full items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-5 w-5 mr-1">
                                  <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="jacksonmills"
                                  />
                                  <AvatarFallback>JM</AvatarFallback>
                                </Avatar>
                                <Link
                                  href="#"
                                  className="text-sm font-semibold hover:underline text-black dark:text-white"
                                >
                                  jacksonmills
                                </Link>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                  approved these changes on Mar 15
                                </span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs bg-transparent border-none"
                              >
                                View reviewed changes
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item - Approved 2 */}
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="Yordanliiev2002"
                          />
                          <AvatarFallback>YL</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center w-full">
                          <div className="mr-2 mt-1 border p-2 rounded-full border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="text-gray-500 dark:text-gray-400 fill-current"
                            >
                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 w-full">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-5 w-5 mr-1">
                                  <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="matevugh"
                                  />
                                  <AvatarFallback>MV</AvatarFallback>
                                </Avatar>
                                <Link
                                  href="#"
                                  className="text-sm font-semibold hover:underline text-black dark:text-white"
                                >
                                  matevugh
                                </Link>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                  approved these changes on Mar 16
                                </span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs bg-transparent border-none"
                              >
                                View reviewed changes
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item - Approved 3 */}
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="Yordanliiev2002"
                          />
                          <AvatarFallback>YL</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center w-full">
                          <div className="mr-2 mt-1 border p-2 rounded-full border-gray-200 dark:border-gray-800 bg-[#238636]">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="text-white dark:text-white fill-current "
                            >
                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 w-full">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-5 w-5 mr-1">
                                  <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="shadcn"
                                  />
                                  <AvatarFallback>SC</AvatarFallback>
                                </Avatar>
                                <Link
                                  href="#"
                                  className="text-sm font-semibold hover:underline text-black dark:text-white"
                                >
                                  shadcn
                                </Link>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                  approved these changes on Mar 17
                                </span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs bg-transparent border-none"
                              >
                                View reviewed changes
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Comment 3 - shadcn */}

                      <div className="flex ">
                        <div className="h-10 w-10 mr-4"></div>
                        <div className="border w-full border-gray-200 bg-[#F6F8FA] dark:bg-[#0D1117] dark:border-gray-800 rounded-lg">
                          <div className=" w-full items-center dark:bg-gray-800 rounded-t-lg">
                            <div className="flex w-full items-center z-20 justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-t-lg">
                              <div className="flex items-center">
                                <Link
                                  href="#"
                                  className="text-sm font-semibold hover:underline text-black dark:text-white"
                                >
                                  Yordanliiev2002
                                </Link>
                                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                                  commented on Mar 14
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Badge
                                  variant="outline"
                                  className="text-xs text-black dark:text-white border border-gray-500 dark:border-gray-400 bg-gray-100 dark:bg-[#25292E] rounded-full px-2 py-1"
                                >
                                  Collaborator
                                </Badge>
                                <svg
                                  aria-label="Show options"
                                  role="img"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  className="text-gray-500 dark:text-gray-400 fill-current ml-2"
                                >
                                  <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg dark:bg-[#0D1117] bg-white">
                            <p className="text-sm text-black dark:text-white">
                              Thank you
                            </p>
                            <div className="flex items-center mt-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs h-6 text-black dark:text-white"
                              >
                                <Heart className="h-3 w-3 mr-1 text-red-500" />2
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Comment 4 - Vercel Bot */}

                      <div className="flex ">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="Yordanliiev2002"
                          />
                          <AvatarFallback>YL</AvatarFallback>
                        </Avatar>
                        <div className="border w-full border-gray-200 bg-[#F6F8FA] dark:bg-[#0D1117] dark:border-gray-800 rounded-lg">
                          <div className="flex w-full items-center dark:bg-gray-800 rounded-t-lg">
                            <div className="h-6 w-6 -ml-1  border border-[#F6F8FA] dark:border-gray-800 bg-[#F6F8FA] dark:bg-gray-800  rotate-45 "></div>

                            <div className="flex w-full items-center justify-between p-3 bg-[#F6F8FA] dark:bg-gray-800 rounded-t-lg">
                              <div className="flex items-center">
                                <Link
                                  href="#"
                                  className="text-sm font-semibold hover:underline text-black dark:text-white"
                                >
                                  Vercel
                                  <Badge
                                    variant="outline"
                                    className="ml-1 text-xs text-black dark:text-white"
                                  >
                                    bot
                                  </Badge>
                                </Link>
                                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                                  commented on Mar 14
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  aria-label="Show options"
                                  role="img"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  className="text-gray-500 dark:text-gray-400 fill-current ml-2"
                                >
                                  <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg dark:bg-[#0D1117]  bg-white">
                            <div className="flex">
                              <p className="text-sm font-semibold text-black dark:text-white">
                                The latest updates on your projects. Learn more
                                about
                              </p>
                              <Link
                                href="#"
                                className="text-sm pl-2 text-blue-500 hover:underline flex items-center"
                              >
                                Vercel for Git{" "}
                                <ArrowRight className="h-3 w-3 ml-1" />
                              </Link>
                            </div>

                            <table className="w-2/4 mt-3 text-sm text-black dark:text-white">
                              <thead>
                                <tr className="border border-gray-200 dark:border-gray-700">
                                  <th className="text-left py-2 font-medium border border-gray-200 dark:border-gray-700 p-2">
                                    Name
                                  </th>
                                  <th className="text-left py-2 font-medium border border-gray-200 dark:border-gray-700 p-2">
                                    Status
                                  </th>
                                  <th className="text-left py-2 font-medium border border-gray-200 dark:border-gray-700 p-2">
                                    Preview
                                  </th>
                                  <th className="text-left py-2 font-medium border border-gray-200 dark:border-gray-700 p-2">
                                    Updated (UTC)
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border border-gray-200 dark:border-gray-700">
                                  <td className="py-2 border border-gray-200 dark:border-gray-700 p-2">
                                    ui
                                  </td>
                                  <td className="py-2 border border-gray-200 dark:border-gray-700 p-2">
                                    <span className="flex items-center m-1">
                                      <Check className="h-4 w-4 text-green-500 mr-1" />{" "}
                                      Ready (
                                      <Link
                                        href="#"
                                        className="text-blue-500 hover:underline"
                                      >
                                        Inspect
                                      </Link>
                                      )
                                    </span>
                                  </td>
                                  <td className="py-2 border border-gray-200 dark:border-gray-700 p-2">
                                    <Link
                                      href="#"
                                      className="text-blue-500 hover:underline"
                                    >
                                      Visit Preview
                                    </Link>
                                  </td>
                                  <td className="py-2 border border-gray-200 dark:border-gray-700 p-2">
                                    Mar 17, 2025 10:54am
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-2 border border-gray-200 dark:border-gray-700 p-2">
                                    v4
                                  </td>
                                  <td className="py-2 border border-gray-200 dark:border-gray-700 p-2">
                                    <span className="flex items-center m-1">
                                      <Check className="h-4 w-4 text-green-500 mr-1" />{" "}
                                      Ready (
                                      <Link
                                        href="#"
                                        className="text-blue-500 hover:underline"
                                      >
                                        Inspect
                                      </Link>
                                      )
                                    </span>
                                  </td>
                                  <td className="py-2 border border-gray-200 dark:border-gray-700 p-2">
                                    <Link
                                      href="#"
                                      className="text-blue-500 hover:underline"
                                    >
                                      Visit Preview
                                    </Link>
                                  </td>
                                  <td className="py-2 border border-gray-200 dark:border-gray-700 p-2">
                                    Mar 17, 2025 10:54am
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item - Deployment */}

                      <div className="flex items-center w-full">
                        <div className="h-10 w-10 mr-4"></div>
                        <div className="flex items-center w-full">
                          <div className="mr-2 mt-1 border p-2 rounded-full border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="text-gray-500 dark:text-gray-400 fill-current"
                            >
                              <path d="M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 w-full">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-5 w-5 mr-1 bg-black">
                                  <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="vercel"
                                  />
                                  <AvatarFallback>V</AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-semibold text-black dark:text-white">
                                  vercel
                                </span>
                                <Badge
                                  variant="outline"
                                  className="ml-1 text-xs text-black dark:text-white"
                                >
                                  bot
                                </Badge>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                  deployed to
                                </span>
                                <span className="text-sm font-semibold ml-1 text-black dark:text-white">
                                  Preview - ui
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                  last month
                                </span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs text-gray-800 dark:text-white bg-[#EFF2F5] dark:bg-[#262C36] border-gray-600"
                              >
                                View deployment
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item - Label */}
                      <div className="flex items-center">
                        <div className="h-10 w-10 mr-4"></div>
                        <div className="flex items-center">
                          <div className="mr-2 mt-1 border p-2 rounded-full border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="text-gray-500 dark:text-gray-400 fill-current"
                            >
                              <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <Avatar className="h-5 w-5 mr-1">
                                <AvatarImage
                                  src="/placeholder.svg?height=40&width=40"
                                  alt="shadcn"
                                />
                                <AvatarFallback>SC</AvatarFallback>
                              </Avatar>
                              <Link
                                href="#"
                                className="text-sm font-semibold hover:underline text-black dark:text-white"
                              >
                                shadcn
                              </Link>
                              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                added the
                              </span>
                              <Badge className="ml-1 bg-[#18E022] border border-[#18E022] bg-opacity-10 text-[#18E022] text-xs">
                                automerge
                              </Badge>

                              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                label on Mar 17
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item - Deployment 2 */}
                      <div className="flex items-center w-full">
                        <div className="h-10 w-10 mr-4"></div>
                        <div className="flex items-center w-full">
                          <div className="mr-2 mt-1 border p-2 rounded-full border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="text-gray-500 dark:text-gray-400 fill-current"
                            >
                              <path d="M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 w-full">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-5 w-5 mr-1 bg-black">
                                  <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="vercel"
                                  />
                                  <AvatarFallback>V</AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-semibold text-black dark:text-white">
                                  vercel
                                </span>
                                <Badge
                                  variant="outline"
                                  className="ml-1 text-xs text-black dark:text-white"
                                >
                                  bot
                                </Badge>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                  deployed to
                                </span>
                                <span className="text-sm font-semibold ml-1 text-black dark:text-white">
                                  Preview - v4
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                  last month
                                </span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs text-gray-800 dark:text-white bg-[#EFF2F5] dark:bg-[#262C36] border-gray-600"
                              >
                                View deployment
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item - Merge */}
                      <div className="flex items-center w-full">
                        <div className="h-10 w-10 mr-4"></div>
                        <div className="flex items-center w-full">
                          <div className="mr-2 mt-1 p-2 border rounded-full border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="text-gray-500 dark:text-gray-400 fill-current"
                            >
                              <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 w-full">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-5 w-5 mr-1">
                                  <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="kodiakhq"
                                  />
                                  <AvatarFallback>KH</AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-semibold text-black dark:text-white">
                                  kodiakhq
                                </span>
                                <Badge
                                  variant="outline"
                                  className="ml-1 text-xs text-black dark:text-white"
                                >
                                  bot
                                </Badge>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                  merged commit
                                </span>
                                <span className="text-sm mx-1">61e21a3</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                  into
                                </span>
                                <span className="text-xs text-blue-600 bg-[#DDF4FF] rounded-sm p-1 mx-1 dark:bg-[#111D2F]">
                                  shadcn-ui:main
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                  on Mar 17
                                </span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs text-gray-800 dark:text-white bg-[#EFF2F5] dark:bg-[#262C36] border-gray-600"
                              >
                                View details
                              </Button>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              7 checks passed
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-6 col-span-3">
                    {/* Sidebar */}
                    <div className="w-full">
                      <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none ">
                        <div className="p-4">
                          <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
                            Reviewers
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-5 w-5 mr-2">
                                  <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="shadcn"
                                  />
                                  <AvatarFallback>SC</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-black dark:text-white">
                                  shadcn
                                </span>
                              </div>
                              <Check className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-5 w-5 mr-2">
                                  <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="jacksonmills"
                                  />
                                  <AvatarFallback>JM</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-black dark:text-white">
                                  jacksonmills
                                </span>
                              </div>
                              <Check className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-5 w-5 mr-2">
                                  <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="matevugh"
                                  />
                                  <AvatarFallback>MV</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-black dark:text-white">
                                  matevugh
                                </span>
                              </div>
                              <Check className="h-4 w-4 text-green-500" />
                            </div>
                          </div>
                        </div>
                      </Card>
                      <div className="w-full border-b border-gray-600 "></div>
                      <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none">
                        <div className="p-4">
                          <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
                            Assignees
                          </h3>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            No one assigned
                          </div>
                        </div>
                      </Card>
                      <div className="w-full border-b border-gray-600 "></div>

                      <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none ">
                        <div className="p-4">
                          <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
                            Labels
                          </h3>
                          <div>
                            <Badge className="ml-1 bg-[#18E022] border border-[#18E022] bg-opacity-10 text-[#18E022] text-xs">
                              automerge
                            </Badge>
                          </div>
                        </div>
                      </Card>
                      <div className="w-full border-b border-gray-600 "></div>

                      <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none ">
                        <div className="p-4">
                          <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
                            Projects
                          </h3>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            None yet
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
                            No milestone
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
                            Successfully merging this pull request may close
                            these issues.
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            None yet
                          </div>
                        </div>
                      </Card>
                      <div className="w-full border-b border-gray-600 "></div>

                      <Card className="mb-4 bg-white dark:bg-[#0d1117] border-none ">
                        <div className="p-4">
                          <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
                            4 participants
                          </h3>
                          <div className="flex space-x-1 mt-2">
                            <Avatar className="h-8 w-8 border-2 border-gray-600 dark:border-gray-900">
                              <AvatarImage
                                src="/placeholder.svg?height=40&width=40"
                                alt="Yordanliiev2002"
                              />
                              <AvatarFallback>YL</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-8 w-8 border-2 border-gray-600 dark:border-gray-900">
                              <AvatarImage
                                src="/placeholder.svg?height=40&width=40"
                                alt="shadcn"
                              />
                              <AvatarFallback>SC</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-8 w-8 border-2 border-gray-600 dark:border-gray-900">
                              <AvatarImage
                                src="/placeholder.svg?height=40&width=40"
                                alt="jacksonmills"
                              />
                              <AvatarFallback>JM</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-8 w-8 border-2 border-gray-600 dark:border-gray-900">
                              <AvatarImage
                                src="/placeholder.svg?height=40&width=40"
                                alt="matevugh"
                              />
                              <AvatarFallback>MV</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              <div id="second" className="hidden p-4">
                Second tab
              </div>
              <div id="third" className="hidden p-4">
                Third tab
              </div>
              <div id="fourth" className="hidden p-4">
                Fourth tab
              </div>
            </div>
            {/* Sign Up Banner */}
            <div className="mt-8 p-4  bg-[#FFF8C5] dark:bg-[#272115] rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Button className="bg-green-600 hover:bg-green-700 text-white mr-2">
                    Sign up for free
                  </Button>
                  <span className="text-sm text-black dark:text-white">
                    to join this conversation on GitHub. Already have an
                    account?
                  </span>
                  <Link href="#" className="text-blue-500 hover:underline ml-1">
                    Sign in to comment
                  </Link>
                </div>
              </div>
            </div>
            {/* Footer */}
            <footer className="mt-8 pt-6 ">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <svg
                    height="24"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="24"
                    data-view-component="true"
                    className="text-gray-500 dark:text-gray-400 fill-current mr-2"
                  >
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                  </svg>
                  <span>© 2025 GitHub, Inc.</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Link
                    href="#"
                    className="hover:underline text-gray-700 dark:text-white"
                  >
                    Terms
                  </Link>
                  <Link
                    href="#"
                    className="hover:underline text-gray-700 dark:text-white"
                  >
                    Privacy
                  </Link>
                  <Link
                    href="#"
                    className="hover:underline text-gray-700 dark:text-white"
                  >
                    Security
                  </Link>
                  <Link
                    href="#"
                    className="hover:underline text-gray-700 dark:text-white"
                  >
                    Status
                  </Link>
                  <Link
                    href="#"
                    className="hover:underline text-gray-700 dark:text-white"
                  >
                    Docs
                  </Link>
                  <Link
                    href="#"
                    className="hover:underline text-gray-700 dark:text-white"
                  >
                    Contact
                  </Link>
                  <Link
                    href="#"
                    className="hover:underline text-gray-700 dark:text-white"
                  >
                    Manage cookies
                  </Link>
                  <Link
                    href="#"
                    className="hover:underline text-gray-700 dark:text-white"
                  >
                    Do not share my personal information
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
