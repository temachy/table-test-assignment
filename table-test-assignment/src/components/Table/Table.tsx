import { useMemo, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { Athlete } from "../../types/athlete.types";
import Row from "../Row";
import styles from "./Table.module.css";
import { HeaderCell } from "./components";

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

const useSort = (data: Athlete[]) => {
  const [activeSort, setActiveSort] = useState<{
    column: string;
    direction: "asc" | "desc";
  } | null>(null);

  const onSortSelect = (column: string) => () => {
    setActiveSort((prev) => {
      if (prev?.column === column) {
        if (prev.direction === "asc") {
          return { column, direction: "desc" };
        }
        return null;
      }
      return { column, direction: "asc" };
    });
  };

  const sortedTrips = useMemo(() => {
    if (!activeSort) return data;

    const sorted = [...data].sort((a, b) => {
      const aValue = a[activeSort.column as keyof Athlete];
      const bValue = b[activeSort.column as keyof Athlete];
      if (aValue < bValue) return activeSort.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return activeSort.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data, activeSort]);

  return { activeSort, onSortSelect, sortedTrips };
};

const Table = ({ data }: TableProps) => {
  const parentRef = useRef(null);

  const { activeSort, onSortSelect, sortedTrips } = useSort(data);

  const rowVirtualizer = useVirtualizer({
    count: sortedTrips.length,
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
              label={header.label}
              onSortSelect={onSortSelect(header.name)}
              sortValue={
                activeSort?.column === header.name
                  ? activeSort.direction
                  : undefined
              }
            />
          ))}
        </tr>
      </thead>
      <tbody ref={parentRef} className={styles.tableBody}>
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <Row key={virtualItem.index} data={sortedTrips[virtualItem.index]} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
