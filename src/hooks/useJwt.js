import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function useJwt() {
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(window.location.search);

  if (searchParams.get("userId")) {
    localStorage.setItem("userId", searchParams.get("userId"));
  }

  if (searchParams.get("token")) {
    localStorage.setItem("token", searchParams.get("token"));
  }

  const userData = {
    userId: localStorage.getItem("userId"), // dal localStorate o dall'url........
    token: localStorage.getItem("token"),
  };

  useEffect(() => {
    // Se non c'è un userId o il token reindirizzo l'utente alla pagina di login
    if (!userData.userId || !userData.token) {
      navigate("/");
    }

    if (window.location.search) {
      navigate(window.location.pathname);
    }
  }, [userData.userId, userData.token, navigate]);

  return userData;
}
