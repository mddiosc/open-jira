import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useRouter } from "next/router";
import { Entry } from "../../interfaces";
import { UIContext } from "../../context/ui";
import { dateFunctions } from "../../utils";

interface EntryCardProps {
  entry: Entry;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  const { endDragging, startDragging } = useContext(UIContext);
  const { push } = useRouter();

  const onDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData("text/plain", entry._id);
    startDragging();
  };

  const onDragEnd = (event: React.DragEvent) => {
    endDragging();
  };

  const onClick = () => {
    push(`/entries/${entry._id}`);
  };

  return (
    <Card
      onClick={onClick}
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
          <Typography variant="body2">
            {dateFunctions.getFormatDistanceToNow(new Date(entry.createdAt))}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
