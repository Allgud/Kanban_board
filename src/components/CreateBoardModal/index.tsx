import {
  Dialog,
  Stack,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ModalHeader from "../ModalHeader";
import { POSSIBLE_BOARD_COLORS } from "../../constants";
import { v4 } from "uuid";
import { useBoardProps } from "../../hooks/useBoardProps";
import { useAppService } from '../../services/useAppService'
import { useLoading } from "../../hooks/useLoading";

type CreateBoardModalProps = {
  onCloseModal: () => void;
};

const CreateBoardModal = ({ onCloseModal }: CreateBoardModalProps) => {
  const { boardTitle, boardColor, handleChangeTitle, handleChangeColor } =
    useBoardProps();
  const { createBoard } = useAppService()

  const { isLoading, handleLoading } = useLoading()
  const handleCreateBoard = async () => {
    try {
      handleLoading(true)
      await createBoard({ name: boardTitle, color: boardColor })
      onCloseModal()
    } catch (err) {
      handleLoading(false)
      console.log(err)
      throw err
    }
  }

  return (
    <Dialog open onClose={() => onCloseModal()} fullWidth maxWidth="xs">
      <Stack p={2}>
        <ModalHeader
          text="Создать новую доску"
          onClose={() => onCloseModal()}
        />
        <Stack my={5} spacing={3}>
          <TextField
            value={boardTitle}
            onChange={(evt) => handleChangeTitle(evt.target.value)}
            placeholder="Название доски"
          ></TextField>
          <Stack direction="row" spacing={1.5}>
            <Typography>Выбери цвет доски: </Typography>
            {POSSIBLE_BOARD_COLORS.map((color, idx) => (
              <Box
                key={v4()}
                height={25}
                width={25}
                bgcolor={color}
                borderRadius="50%"
                sx={{
                  cursor: "pointer",
                  border: boardColor === idx ? "3px solid #383838" : "none",
                  outline: `2px solid ${color}`,
                }}
                onClick={() => handleChangeColor(idx)}
              />
            ))}
          </Stack>
        </Stack>
        <Button size="large" disabled={isLoading} variant="contained" onClick={() => handleCreateBoard()}>Создать</Button>
      </Stack>
    </Dialog>
  );
};

export default CreateBoardModal;
