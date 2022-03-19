import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Entry } from "../../interfaces";

interface EntryCardProps {
  entry: Entry;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  return (
    <Card
      sx={{
        marginBottom: 1,
      }}
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
