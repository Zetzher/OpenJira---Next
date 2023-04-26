import { FC } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { EntryStatus } from "../../interfaces/entry";

interface Props {
  entry: EntryStatus;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">Hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
