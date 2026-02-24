import type { Athlete } from "../../types/athlete.types";
import styles from "./Table.module.css";

type TableProps = {
  data: Athlete[];
};

const Table = ({ data }: TableProps) => (
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
    <tbody>
      <tr>
        <td>item</td>
      </tr>
    </tbody>
  </table>
);

export default Table;
