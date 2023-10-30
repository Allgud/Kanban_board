import { useState, useEffect } from "react";
import { Stack, Grid } from "@mui/material";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import CreateBoardModal from "../../components/CreateBoardModal";
// import NoBoardsComponent from "../../components/NoBoardsComponent";
import BoardCard from "../../components/BoardCard";
import { useAppService } from "../../services/useAppService";
import useBoardStore from "../../store/useBoardsStore";

const BoardScreen = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false);
  const { fetchBoards } = useAppService()
  const { boards, areBoardsFetched } = useBoardStore()

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleLoading = () => {
    setLoading(false)
  }

  useEffect(() => {
    if (!areBoardsFetched) { fetchBoards(handleLoading) }
    else setLoading(false)
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <Header onCreateBoardClick={handleShowModal} />
      {showModal && <CreateBoardModal onCloseModal={handleShowModal} />}
      {/* <NoBoardsComponent /> */}
      <Stack mt={5} px={2}>
        <Grid container spacing={4}>
          {
            boards.map(board => (
              < BoardCard
                key={board.id} {...board} />
            ))
          }
        </Grid>
      </Stack>
    </>
  );
};

export default BoardScreen;