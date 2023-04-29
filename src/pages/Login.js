import React, { useRef } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { Content } from "../components/Content";
import * as fetchers from "../middleware/fetchers";
import { CONSULT_EVALUATION_ROUTE, FORM_ROUTE } from "../middleware/constants";

export const Login = () => {
  const loginMutation = useMutation({
    mutationFn: fetchers.login,
    onSuccess: (data) => {
      if (data.role === "student") {
        navigate(FORM_ROUTE);
      } else {
        navigate(CONSULT_EVALUATION_ROUTE);
      }
    },
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  return (
    <Content>
      <div className="container">
        <p className="title">Iniciar Sesión</p>
        <input placeholder="Correo" ref={emailRef} />
        <input ref={passwordRef} placeholder="Contraseña" type="password" />
        <button
          disabled={loginMutation.isLoading}
          onClick={() =>
            loginMutation.mutate({
              email: emailRef.current.value,
              password: passwordRef.current.value,
            })
          }
        >
          Entrar
        </button>
      </div>
    </Content>
  );
};
