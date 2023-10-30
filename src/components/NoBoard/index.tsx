import { Stack, Typography } from "@mui/material";

const NoBoardsComponent = () => {
  return (
    <Stack mt={15} textAlign="center" spacing={1}>
      <Typography variant="h5">Пока не создано ни одной доски.</Typography>
      <Typography>Самое время создать первую доску.</Typography>
    </Stack>
  );
};

export default NoBoardsComponent;