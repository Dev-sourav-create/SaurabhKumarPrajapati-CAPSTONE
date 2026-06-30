import React from "react";

const IngredientCard = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} flex gap-8 border-b border-dashed rounded-xl border-gray-300 min-w-xs items-center p-3 justify-between`}
    >
      {children}
    </div>
  );
};

const Icon = ({ icon, className = "" }) => {
  return (
    <div
      className={`
        flex h-10 w-10 items-center justify-center
        rounded-full bg-gray-100 text-3xl
        ${className}
      `}
    >
      {icon}
    </div>
  );
};

const IngredientDetails = ({ ingredientName, price }) => {
  return (
    <div className="flex flex-col items-start">
      <span className="font-semibold">{ingredientName}</span>
      <span className="text-sm font-light">₹{price}</span>
    </div>
  );
};

const InputCheckBox = ({ id, checked = false, onChange, label = "Add" }) => {
  return (
    <label
      htmlFor={id}
      className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 cursor-pointer transition-all duration-200 select-none
        ${
          checked
            ? "border-amber-500 text-amber-600 bg-amber-50"
            : "border-gray-300 text-gray-700 hover:border-amber-400"
        }
      `}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3 w-3 accent-amber-500 cursor-pointer"
      />

      <span className="font-semibold  text-xs">
        {checked ? "Added" : label}
      </span>
    </label>
  );
};

IngredientCard.Icon = Icon;
IngredientCard.IngredientDetails = IngredientDetails;
IngredientCard.InputCheckBox = InputCheckBox;

export default IngredientCard;
