import { useState } from "react";
import { MessageSquare, GitCommit, Check, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { TabType } from "@/types";

interface TabContentProps {
  onTabClick?: (tab: TabType) => void;
  pageDetails?: {
    conversations?: number;
    commits?: number;
    checks?: number;
    filesChanged?: number;
  };
}
export const TabContent: React.FC<TabContentProps> = ({
  onTabClick,
  pageDetails,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.CONVERSATION);
  const handleClick = (tab: TabType) => {
    setActiveTab(tab);
    onTabClick?.(tab);
  };
  const isActive = (tab: TabType) =>
    activeTab === tab
      ? "bg-transparent px-4 text-gray-700 font-semibold dark:text-white py-2  rounded-t-md border-t border-r border-gray-400 border-l -mb-px"
      : "px-4 text-gray-700 font-semibold dark:text-white py-2 rounded-t";

  return (
    <>
      <div className="flex justify-between border-b border-gray-400 items-center">
        <div>
          <ul id="tabs" className="flex pt-2 px-1 w-full">
            <li
              className={isActive(TabType.CONVERSATION)}
              onClick={() => handleClick(TabType.CONVERSATION)}
            >
              <div className="flex items-center cursor-pointer">
                <MessageSquare className="h-4 w-4 mr-1" />
                Conversation
                <Badge
                  variant="secondary"
                  className="ml-1 text-xs text-gray-700 dark:text-white"
                >
                  {pageDetails?.conversations || 0}
                </Badge>
              </div>
            </li>
            <li
              className={isActive(TabType.COMMITS)}
              onClick={() => handleClick(TabType.COMMITS)}
            >
              <div className="flex items-center cursor-pointer">
                <GitCommit className="h-4 w-4 mr-1" />
                Commits
                <Badge
                  variant="secondary"
                  className="ml-1 text-xs text-gray-700 dark:text-white"
                >
                  {pageDetails?.commits || 0}
                </Badge>
              </div>
            </li>
            <li
              className={isActive(TabType.CHECKS)}
              onClick={() => handleClick(TabType.CHECKS)}
            >
              <div className="flex items-center cursor-pointer">
                <Check className="h-4 w-4 mr-1" />
                Checks
                <Badge
                  variant="secondary"
                  className="ml-1 text-xs text-gray-700 dark:text-white"
                >
                  {pageDetails?.checks || 0}
                </Badge>
              </div>
            </li>
            <li
              className={isActive(TabType.FILES_CHANGED)}
              onClick={() => handleClick(TabType.FILES_CHANGED)}
            >
              <div className="flex items-center cursor-pointer">
                <FileText className="h-4 w-4 mr-1" />
                Files changed
                <Badge
                  variant="secondary"
                  className="ml-1 text-xs text-gray-700 dark:text-white"
                >
                  {pageDetails?.filesChanged || 0}
                </Badge>
              </div>
            </li>
          </ul>
        </div>

        {/* commit section */}
        <div>
          <div className="flex items-center">
            <div className="text-[#238636]">+1</div>
            <div className="text-[#DA3633]">-1</div>
            <div className="flex items-center ml-2">
              <div className="h-[12px] w-[12px] border border-gray-700 bg-[#238636]"></div>
              <div className="h-[12px] w-[12px] border border-gray-700 bg-[#DA3633]"></div>
              <div className="h-[12px] w-[12px] border ml-1 border-gray-700"></div>
              <div className="h-[12px] w-[12px] border border-gray-700"></div>
              <div className="h-[12px] w-[12px] border border-gray-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content
      <div id="tab-contents" className="pt-4">
        {activeTab === TabType.CONVERSATION && <Conversations />}
        {activeTab === TabType.COMMITS && <Commits />}
        {activeTab === TabType.CHECKS && <Checks />}
        {activeTab === TabType.FILES_CHANGED && <FilesChanged />}
      </div> */}
    </>
  );
};

export default TabContent;
