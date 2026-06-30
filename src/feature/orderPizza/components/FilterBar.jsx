import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

import { selectFilter, selectSearch, selectSort } from "../orderPizzaSelectors";

import { setFilter, setSearch, setSort } from "../orderPizzaSlice";

const filters = [
  { label: "All", value: "all" },
  { label: "Veg", value: "veg" },
  { label: "Non-Veg", value: "nonveg" },
];

const FilterBar = () => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector(selectFilter);
  const search = useAppSelector(selectSearch);
  const sort = useAppSelector(selectSort);

  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="w-full lg:max-w-md">
          <input
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            placeholder="Search pizza, ingredients or toppings..."
            className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none transition focus:border-amber-500"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {filters.map((item) => (
              <button
                key={item.value}
                onClick={() => dispatch(setFilter(item.value))}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition
                  ${
                    filter === item.value
                      ? "border-amber-500 bg-amber-500 text-white"
                      : "border-gray-300 text-slate-700 hover:border-amber-500"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center justify-between gap-3 lg:justify-start">
            <span className="text-sm font-medium whitespace-nowrap">
              Sort By:
            </span>

            <select
              value={sort}
              onChange={(e) => dispatch(setSort(e.target.value))}
              className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-amber-500 lg:w-56 lg:flex-none"
            >
              <option value="recommended">Recommended</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
