import { List, Paper } from "@mui/material";
import { useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";

interface EntryListProps {
  status: EntryStatus;
}

const EntryList: React.FC<EntryListProps> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          overflow: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
