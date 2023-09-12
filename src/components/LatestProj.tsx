import { FC } from "react";

interface LatestProjProps {}

const LatestProj: FC<LatestProjProps> = ({}) => {
  return (
    <section className="w-screen h-screen pt-24">
      <h1 className="p-10 font-bold tracking-widen text-lg text-center">
        LATEST PROJECTS
      </h1>
    </section>
  );
};

export default LatestProj;
