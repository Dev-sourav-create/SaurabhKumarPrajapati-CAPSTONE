import React from "react";
import Container from "./Container";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="py-6 text-center text-sm text-orange-500">
          © {new Date().getFullYear()} Pizzeria. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
