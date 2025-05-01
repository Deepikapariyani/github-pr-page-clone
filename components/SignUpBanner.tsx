import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignUpBanner() {
  return (
    <>
      {/* Sign Up Banner */}
      <div className="mt-8 p-4  bg-[#FFF8C5] dark:bg-[#272115] rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white mr-2">
              Sign up for free
            </Button>
            <span className="text-sm text-black dark:text-white">
              to join this conversation on GitHub. Already have an account?
            </span>
            <Link href="#" className="text-blue-500 hover:underline ml-1">
              Sign in to comment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
