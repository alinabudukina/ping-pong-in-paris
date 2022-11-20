import { type NextPage } from "next";

import { trpc } from "../utils/trpc";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const MyAwesomeMap = dynamic(() => import("../component/Map"), {
    ssr: false,
  });

  return (
    <>
      <div className="border-slate-200 flex flex-row items-center justify-between border-b bg-coral p-3">
        Ping Pong in Paris
      </div>
      <MyAwesomeMap />
    </>
  );
};

export default Home;
