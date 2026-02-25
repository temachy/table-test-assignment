import styles from "./HeaderCell.module.css";
import { FilterSvg, SortDownSvg, SortUpSvg } from "./Icons";

type HeaderCellProps = {
  label: string;
  name: string;
  onSortSelect: (name: string) => void;
  sortValue?: "asc" | "desc";
  searchValue?: string;
  onSearch: (name: string, value: string) => void;
};

const HeaderCell = ({
  label,
  name,
  onSortSelect,
  sortValue,
  searchValue,
  onSearch,
}: HeaderCellProps) => (
  <th>
    <div className={styles.headerCell}>
      <p>{label}</p>

      <button onClick={() => onSortSelect(name)} className={styles.sortButton}>
        <SortUpSvg color={sortValue === "asc" ? "blue" : "black"} />
        <SortDownSvg color={sortValue === "desc" ? "blue" : "black"} />
      </button>
      <button
        popoverTarget={`filters-popover-${name}`}
        className={styles.sortButton}
      >
        <FilterSvg color={searchValue ? "blue" : "black"} />
      </button>

      <div
        popover="auto"
        id={`filters-popover-${name}`}
        className={styles.filtersPopover}
      >
        <input
          type="search"
          value={searchValue}
          onChange={(e) => onSearch(name, e.target.value)}
          placeholder="Search"
          className={styles.search}
          autoFocus
        />
      </div>
    </div>
  </th>
);

export default HeaderCell;
