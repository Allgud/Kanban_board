import { Stack, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ModalHeaderProps = {
  text: string;
  onClose: () => void;
};

const ModalHeader = ({ text, onClose }: ModalHeaderProps) => {
  return (
    <Stack justifyContent="space-between" direction="row" alignItems="center">
      <Typography variant="h6">{text}</Typography>
      <IconButton onClick={() => onClose()} size="small">
        <CloseIcon />
      </IconButton>
    </Stack>
  );
};

export default ModalHeader;