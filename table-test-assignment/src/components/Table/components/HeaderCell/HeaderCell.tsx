import styles from "./HeaderCell.module.css";

type HeaderCellProps = {
  label: string;
  onSortSelect: () => void;
  sortValue?: "asc" | "desc";
};

const SortUpSvg = ({ color }: { color: string }) => (
  <svg
    viewBox="0 0 1024 1024"
    focusable="false"
    data-icon="caret-up"
    width="14px"
    height="14px"
    fill={color}
    aria-hidden="true"
  >
    <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
  </svg>
);
const SortDownSvg = ({ color }: { color: string }) => (
  <svg
    viewBox="0 0 1024 1024"
    focusable="false"
    data-icon="caret-down"
    width="14px"
    height="14px"
    fill={color}
    aria-hidden="true"
  >
    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
  </svg>
);

const HeaderCell = ({ label, onSortSelect, sortValue }: HeaderCellProps) => (
  <th>
    <div className={styles.headerCell}>
      <p>{label}</p>

      <button onClick={onSortSelect} className={styles.sortButton}>
        <SortUpSvg color={sortValue === "asc" ? "blue" : "black"} />
        <SortDownSvg color={sortValue === "desc" ? "blue" : "black"} />
      </button>
    </div>
  </th>
);

export default HeaderCell;
