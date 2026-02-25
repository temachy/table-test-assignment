import { useMemo, useState } from "react";
import type { Athlete } from "../../../types/athlete.types";

export const useSort = (data: Athlete[]) => {
  const [activeSort, setActiveSort] = useState<{
    column: string;
    direction: "asc" | "desc";
  } | null>(null);

  const onSortSelect = (column: string) => {
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

  const sortedAthletes = useMemo(() => {
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

  return { activeSort, onSortSelect, sortedAthletes };
};
