import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import Logo from "../../assets/logo.svg";
import Image from "../../utils/Image";
import LogoutIcon from "@mui/icons-material/ExitToApp";

type HeaderProps = {
  onCreateBoardClick: () => void;
};

const Header = ({ onCreateBoardClick }: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Image
          sx={{
            height: "50px",
          }}
          src={Logo}
          alt="logo"
        />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => onCreateBoardClick()}>
            Новая доска
          </Button>
          <Button startIcon={<LogoutIcon />} color="inherit">
            Выход
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;