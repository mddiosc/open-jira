import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Entry } from "../../interfaces";
import { useContext } from "react";
import { UIContext } from "../../context/ui";

interface EntryCardProps {
  entry: Entry;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  const { endDragging, startDragging } = useContext(UIContext);

  const onDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData("text/plain", entry._id);
    startDragging();
  };

  const onDragEnd = (event: React.DragEvent) => {
    endDragging();
  };

  return (
    <Card
      sx={{
        marginBottom: 1,
      }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">Hace 30min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
