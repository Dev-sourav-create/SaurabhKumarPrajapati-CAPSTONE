import React from "react";

const ContentSection = ({ reverse = false, children, className = "" }) => {
  return (
    <section
      className={`
        flex flex-col gap-10 my-10
        lg:flex-row
       px-2
       py-10
       border-t border-gray-200
        ${reverse ? "lg:flex-row-reverse" : ""}
        ${className}
      `}
    >
      {children}
    </section>
  );
};

const Image = ({ src, alt, className = "" }) => {
  return (
    <div className="flex-1 duration-200  flex justify-center">
      <img
        src={src}
        alt={alt}
        className={` rounded-xl object-cover shadow-md ${className}`}
      />
    </div>
  );
};

const Content = ({ children }) => {
  return (
    <div className=" flex-1 flex flex-col justify-center space-y-4">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return <h2 className="text-2xl text-left  font-bold">{children}</h2>;
};

const Description = ({ children }) => {
  return <p className="text-justify ">{children}</p>;
};

ContentSection.Image = Image;
ContentSection.Content = Content;
ContentSection.Title = Title;
ContentSection.Description = Description;

export default ContentSection;
