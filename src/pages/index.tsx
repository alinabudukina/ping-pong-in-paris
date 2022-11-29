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
    </>
  );
};

export default Home;
