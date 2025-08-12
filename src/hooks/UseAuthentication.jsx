import { useState, useEffect, useCallback } from "react";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { db } from "../firebase/Config";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = useCallback(() => {
    if (cancelled) return true;
    return false;
  }, [cancelled]);

  const handleError = (err) => {
    if (!err?.message) return "Ocorreu um erro. Tente novamente.";
    
    if (err.message.includes("Password")) return "A senha precisa conter pelo menos 6 caracteres";
    if (err.message.includes("email-already")) return "E-mail já cadastrado";
    if (err.message.includes("user-not-found")) return "Usuário não encontrado.";
    if (err.message.includes("wrong-password")) return "Senha incorreta.";
    
    return "Ocorreu um erro, por favor tente mais tarde.";
  };

  const createUser = async ({ email, password, displayName }) => {
    if (checkIfIsCancelled()) return;

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName });
      return user;
    } catch (err) {
      setError(handleError(err));
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password }) => {
    if (checkIfIsCancelled()) return;

    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(handleError(err));
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    if (checkIfIsCancelled()) return;

    setLoading(true);
    setError(null);

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError("Ocorreu um erro no login com o Google. Por favor, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    if (checkIfIsCancelled()) return;
    signOut(auth);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    login,
    loginWithGoogle,
    logout,
    error,
    loading
  };
};
