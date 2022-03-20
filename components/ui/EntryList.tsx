import { List, Paper } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";
import styles from "./EntryList.module.css";

interface EntryListProps {
  status: EntryStatus;
}

const EntryList: React.FC<EntryListProps> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: React.DragEvent<HTMLDivElement>) => {
    const entryId = event.dataTransfer.getData("text/plain");
    console.log("entryId", { id: entryId });
    const entry = entries.find((entry) => entry._id === entryId)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          overflow: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
