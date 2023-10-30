import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import { IBoardProps } from "../interfaces";
import { useBoardsStore } from "../store";

export const useAppService = () => {
  const { currentUser } = getAuth()
  const boardCollectionRef = collection(db, `users/${currentUser?.uid}/boards`)
  const { setBoards, addBoard } = useBoardsStore()

  const converter = {
    toFirestore: (data: IBoardProps) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data()
  }

  const createBoard = async ({name, color}: IBoardProps) => {
    
    try {
      await addDoc(boardCollectionRef, {
        name,
        color,
        created_at: serverTimestamp()
      })
      addBoard({name, color, created_at: new Date().toLocaleDateString()})
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  const fetchBoards = async (handleLoading: () => void) => {
    try {
      const q = query(boardCollectionRef, orderBy("created_at", "desc")).withConverter(converter)
      const querySnapshot = await getDocs(q)
      const boards = querySnapshot.docs.map(doc => ({
        ...doc.data(),
          id: doc.id,
          created_at: doc.data().created_at.toDate().toLocaleDateString()
      })) 
      setBoards(boards)
      
    } catch (err) {
      console.log(err)
    } finally {
      if (handleLoading) handleLoading() 
    }
  }

  return {createBoard, fetchBoards}
}