import { useState, ChangeEvent } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import useToastrStore from "../store/useToastrStore";
import { FirebaseError } from "@firebase/util";
import { ERRORS_MAP } from "../constants";

interface IAuthForm {
  email: string;
  password: string;
}

const initForm = {
  email: "",
  password: "",
};

export const useAuthScreen = () => {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [form, setForm] = useState<IAuthForm>(initForm);
  const { setToastr } = useToastrStore()

  const onLinkClick = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (evt: ChangeEvent) => {
    const target = evt.target as HTMLInputElement;
    setForm((oldForm) => ({
      ...oldForm,
      [target.name]: target.value,
    }));
  };

  const handleAuth = async () => {
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, form.email, form.password);
      } else {
        await createUserWithEmailAndPassword(auth, form.email, form.password);
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        const msg = err.code.split("/")[1]
        setToastr(ERRORS_MAP[msg as keyof typeof ERRORS_MAP])
      }
      setLoading(false);
    }
  };

  return {
    isLogin,
    onLinkClick,
    form,
    handleChange,
    loading,
    handleAuth,
  };
};