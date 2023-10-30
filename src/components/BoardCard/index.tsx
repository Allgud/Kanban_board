import { Stack, Grid, Typography, IconButton, Box } from "@mui/material";
import OpenIcon from "@mui/icons-material/Launch";
import { POSSIBLE_BOARD_COLORS } from "../../constants";


const BoardCard = ({ name, color, created_at }) => {
  return (
    <Grid item xs={3}>
      <Stack
        p={2}
        bgcolor="background.paper"
        borderLeft="5px solid"
        borderColor={POSSIBLE_BOARD_COLORS[color]}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width="50%">
            <Typography
              fontWeight={400}
              variant="h6"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {name}
            </Typography>
          </Box>

          <IconButton size="small">
            <OpenIcon />
          </IconButton>
        </Stack>
        <Typography variant="caption">{created_at}</Typography>
      </Stack>
    </Grid>
  );
};

export default BoardCard;