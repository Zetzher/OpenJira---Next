import React, { FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";
import { EntryStatus } from "@/interfaces";
import { EntriesContext } from "../../context/entries/EntriesContext";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);
  const entriesByStatus = useMemo(
    () => entries.filter((data: any) => data.status === status),
    [entries]
  );
  return (
    <div>
      <Paper
        sx={{
          height: "calc(180vh - 250px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry: any) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
