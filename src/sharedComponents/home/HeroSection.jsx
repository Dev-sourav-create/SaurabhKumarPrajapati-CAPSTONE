import React from "react";

const HeroSection = ({ title, children }) => {
  return (
    <section className="mt-8">
      <h2 className="mb-5 text-4xl font-bold text-center ">{title}</h2>

      <div className="space-y-5">{children}</div>
    </section>
  );
};

const Typography = ({ children, className = "" }) => {
  return (
    <p className={`text-justify leading-8 text-shadow-current  ${className}`}>
      {children}
    </p>
  );
};

HeroSection.Typography = Typography;

export default HeroSection;
