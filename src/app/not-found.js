"use client";

import { useRouter } from "next/navigation";

import Header from "./components/Header";

const NotFound = () => {
  const router = useRouter();
  return (
    <div>
      <div className="px-4 mx-auto max-w-2xl">
        <Header />
      </div>

      <div className="text-center mt-40">
        <h1 className="text-4xl text-neutral-200">404</h1>
        <p className="text-sm text-neutral-400">
          Currently, the only page on this website is the home page.
        </p>
        <button
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer font-medium bg-neutral-200 text-neutral-900 px-3 py-0.5 mt-2 rounded-full hover:bg-neutral-300 transition-colors"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};
export default NotFound;
