import { FilterRow, FilterButton } from "./FilterBar.styled";
const FILTERS = ["All", "Indoor", "Outdoor", "Available"];

export default function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <FilterRow>
      {FILTERS.map((filter) => (
        <FilterButton
          key={filter}
          $active={activeFilter === filter}
          onClick={() => onFilterChange(filter)}
          aria-label={`Filter by ${filter}`}
        >
          {filter}
        </FilterButton>
      ))}
    </FilterRow>
  );
}
