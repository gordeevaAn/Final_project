import React from "react";
import { useSelector } from "react-redux";
import css from "./TokenError.module.css;";

const TokenError = () => {
  const isError = useSelector((state) => state.auth.isError);
  return (
    <div>
      {isError && (
        <div>
          <p className={css.error}>Авторизуйтесь</p>
        </div>
      )}
    </div>
  );
};
export default TokenError;
