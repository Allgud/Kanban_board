import { Snackbar } from "@mui/material"
import useToastrStore from "../../store/useToastrStore"

const SnackbarManager = () => {
  const { toastrMsg, setToastr } = useToastrStore()

  return (
    <Snackbar
      message={toastrMsg}
      open={!!toastrMsg}
      autoHideDuration={5000}
      onClose={() => setToastr('')}
    />
  )
}

export default SnackbarManager