import { type NextPage } from "next";

import { trpc } from "../utils/trpc";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const MyAwesomeMap = dynamic(() => import("../component/Map"), {
    ssr: false,
  });

  return (
    <>
      <div className="border-slate-200 flex flex-row items-center justify-between bg-gray p-3 font-minipax text-coral">
        Ping Pong in Paris
      </div>
      <div className="bg-white px-3 pb-1 pt-10 text-center ">
        <MyAwesomeMap />
      </div>
      <div className="bg-white px-3 pb-1 pt-10 text-center ">
        <button className="bg-transparent focus:shadow-xs inline-flex h-16 cursor-pointer select-none items-center justify-center rounded-full border-2 border-solid border-coral px-10 py-0 text-center align-middle text-xl font-semibold text-coral no-underline transition-all duration-300 ease-in-out hover:border-dark-gray hover:text-dark-gray focus:no-underline">
          Add a table
        </button>
      </div>
    </>
  );
};

export default Home;
