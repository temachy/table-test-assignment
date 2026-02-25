import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { Athlete } from "../../types/athlete.types";
import Row from "../Row";
import styles from "./Table.module.css";

type TableProps = {
  data: Athlete[];
};

const Table = ({ data }: TableProps) => {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th>ID</th>
          <th>Code</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Country</th>
          <th>Sport</th>
          <th>Position</th>
          <th>Team</th>
          <th>Ranking</th>
          <th>Medals</th>
          <th>Matches</th>
          <th>Win Rate</th>
          <th>Height (cm)</th>
          <th>Weight (kg)</th>
          <th>Salary (USD)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody ref={parentRef} className={styles.tableBody}>
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <Row key={virtualItem.index} data={data[virtualItem.index]} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
