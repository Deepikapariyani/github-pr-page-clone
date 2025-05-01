import React from "react";
import { useStarCount } from "@/components/store/Context";
import { useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Heart } from "lucide-react";
interface ConversationsProps {
  onStarClick?: () => void;
}
export default function Conversations({ onStarClick }: ConversationsProps) {
  const { incrementStarCount } = useStarCount();

  return (
    <>
      <div className="p-4 relative border-b-4 border-gray-400">
        <div
          className="absolute left-[89px] top-10 bottom-0 w-px bg-gray-300 dark:bg-gray-700 "
          style={{ zIndex: "0 !important" }}
        ></div>

        <div className="grid grid-cols-12 z-10">
          <div className="col-span-12 z-10">
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
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs bg-transparent border-none"
                          // onClick={incrementStarCount}
                          onClick={onStarClick}
                        >
                          Click me
                        </Button>
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
                    </div>
                  </div>

                  <div className="p-3 rounded-lg dark:bg-[#0D1117] bg-white">
                    <p className="text-sm text-black dark:text-white">
                      <span className="font-semibold">@Yordanliiev2002</span> is
                      attempting to deploy a commit to the shadcn-pro Team on{" "}
                      <Link href="#" className="text-blue-500 hover:underline">
                        Vercel
                      </Link>
                      .
                    </p>
                    <p className="text-sm mt-2 text-black dark:text-white">
                      A member of the Team first needs to{" "}
                      <Link href="#" className="text-blue-500 hover:underline">
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
                        changed the title Fix css selector for Zinc theme in
                        website docs: typo in CSS selector on Mar 14
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
                        changed the title docs: typo in CSS selector docs: fix
                        typo in CSS selector on Mar 14
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
                        The latest updates on your projects. Learn more about
                      </p>
                      <Link
                        href="#"
                        className="text-sm pl-2 text-blue-500 hover:underline flex items-center"
                      >
                        Vercel for Git <ArrowRight className="h-3 w-3 ml-1" />
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
        </div>
      </div>
    </>
  );
}
