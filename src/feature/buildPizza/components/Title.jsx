import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="sm:font-bold font-semibold sm:text-4xl text-lg ">
        {title}
      </h1>
      <p>{subtitle}</p>
    </section>
  );
};

export default Title;
