import { useMemo, useState } from "react";
import type { Athlete } from "../../../types/athlete.types";

export const useSearch = (data: Athlete[]) => {
  const [search, setSearch] = useState<Record<string, string>>({});

  const onSearch = (column: string, value: string) => {
    const updatedSearch = { ...search };
    if (!value) {
      delete updatedSearch[column];
      setSearch(updatedSearch);
      return;
    }
    updatedSearch[column] = value;
    setSearch(updatedSearch);
  };

  const filteredAthletes = useMemo(() => {
    if (Object.keys(search).length === 0) return data;

    return data.filter((athlete) =>
      Object.entries(search).every(([column, searchValue]) => {
        const athleteValue = String(
          athlete[column as keyof Athlete] || "",
        ).toLowerCase();
        return athleteValue.includes(searchValue.toLowerCase());
      }),
    );
  }, [data, search]);

  return { search, onSearch, filteredAthletes };
};
