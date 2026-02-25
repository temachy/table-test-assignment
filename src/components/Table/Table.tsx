import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { Athlete } from "../../types/athlete.types";
import { Row } from "./components";
import styles from "./Table.module.css";
import { HeaderCell } from "./components";
import { useSearch } from "./hooks/useSearch";
import { useSort } from "./hooks/useSort";

type TableProps = {
  data: Athlete[];
};

const HEADERS = [
  { name: "id", label: "ID" },
  { name: "athleteCode", label: "Code" },
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "gender", label: "Gender" },
  { name: "dateOfBirth", label: "Date of Birth" },
  { name: "age", label: "Age" },
  { name: "country", label: "Country" },
  { name: "sport", label: "Sport" },
  { name: "position", label: "Position" },
  { name: "team", label: "Team" },
  { name: "ranking", label: "Ranking" },
  { name: "medals", label: "Medals" },
  { name: "matchesPlayed", label: "Matches Played" },
  { name: "winRate", label: "Win Rate" },
  { name: "heightCm", label: "Height (cm)" },
  { name: "weightKg", label: "Weight (kg)" },
  { name: "yearsPro", label: "Years Pro" },
  { name: "salaryUsd", label: "Salary (USD)" },
  { name: "isOlympian", label: "Is Olympian" },
  { name: "status", label: "Status" },
  { name: "lastUpdated", label: "Last Updated" },
];

const Table = ({ data }: TableProps) => {
  const parentRef = useRef(null);

  const { activeSort, onSortSelect, sortedAthletes } = useSort(data);
  const { search, onSearch, filteredAthletes } = useSearch(sortedAthletes);

  const rowVirtualizer = useVirtualizer({
    count: filteredAthletes.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          {HEADERS.map((header) => (
            <HeaderCell
              key={header.name}
              name={header.name}
              label={header.label}
              onSortSelect={onSortSelect}
              sortValue={
                activeSort?.column === header.name
                  ? activeSort.direction
                  : undefined
              }
              onSearch={onSearch}
              searchValue={search[header.name]}
            />
          ))}
        </tr>
      </thead>
      <tbody ref={parentRef} className={styles.tableBody}>
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <Row
            key={virtualItem.index}
            data={filteredAthletes[virtualItem.index]}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
