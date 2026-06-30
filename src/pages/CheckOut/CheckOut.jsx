import React from "react";
import Card from "../../sharedComponents/ui/Card";
import { BillSummary, MyCart } from "../../feature/checkOut/components";

const CheckOut = () => {
  return (
    <section className="max-w-6xl flex  flex-col sm:flex-row justify-center gap-6 mx-auto">
      <MyCart />
      <BillSummary />
    </section>
  );
};

export default CheckOut;
