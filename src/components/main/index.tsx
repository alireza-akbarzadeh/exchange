import React from "react";


export const Main: React.FC = () => {
  return (
    <div className="container px-4 mx-auto max-w-screen-2xl">
      <div className="md:grid-cols-12 grid gap-1">
        <div className="col-span-3 border border-borderColor">left</div>
        <div className="col-span-6 border border-borderColor">main</div>
        <div className="col-span-3 border border-borderColor">right</div>
      </div>
    </div>
  );
};
