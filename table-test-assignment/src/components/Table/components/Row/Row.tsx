import type { Athlete } from "../../../../types/athlete.types";
import Cell from "../Cell";
import styles from "./Row.module.css";

type RowProps = {
  data: Athlete;
};

const Row = ({ data }: RowProps) => (
  <tr className={styles.row}>
    <Cell value={data.id} />
    <Cell value={data.athleteCode} />
    <Cell value={data.firstName} />
    <Cell value={data.lastName} />
    <Cell value={data.gender} />
    <Cell value={data.dateOfBirth} />
    <Cell value={data.age} />
    <Cell value={data.country} />
    <Cell value={data.sport} />
    <Cell value={data.position} />
    <Cell value={data.team} />
    <Cell value={data.ranking} />
    <Cell value={data.medals} />
    <Cell value={data.matchesPlayed} />
    <Cell value={data.winRate} />
    <Cell value={data.heightCm} />
    <Cell value={data.weightKg} />
    <Cell value={data.yearsPro} />
    <Cell value={data.salaryUsd} />
    <Cell value={data.isOlympian} />
    <Cell value={data.status} />
    <Cell value={data.lastUpdated} />
  </tr>
);

export default Row;
