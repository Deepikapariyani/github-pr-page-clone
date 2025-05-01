"use client";

import type React from "react";
import { useStarCount } from "@/components/store/Context";
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
import { PRTitle } from "./PRTitle";
import Conversations from "./Coversations";

export function Header() {
  return (
    <>
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
    </>
  );
}
