import styles from "./Cell.module.css";

type CellProps = {
  value: string | number | boolean;
};

const Cell = ({ value }: CellProps) => (
  <td className={styles.cell}>{String(value)}</td>
);

export default Cell;
