import { Stack, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Stack alignItems="center" mt={10} pt={10}>
      <CircularProgress />
    </Stack>
  );
};

export default Loader;