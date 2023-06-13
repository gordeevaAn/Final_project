import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAuthStarted,
  fetchAuthSuccess,
  fetchAuthError,
} from "../../storage/actions/authActions";
import { fetchRequest } from "../../fetch/fetchRequest";
import Loader from "../loader/Loader";
import Result from "../result/Result";
import AuthorizationForm from "../authorizationForm/AuthorizationForm";
import css from "./Authorization.module.css";
import RegAndAuthResult from "../regAndAuthResult/RegAndAuthResult";

const Authorization = () => {
  const [isFormAuthError, setFormAuthError] = useState(false);
  const [isLogged, setLogged] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    //POST Запрос авторизации сотрудника
    event.preventDefault();

    const officer = {
      email: values.email,
      password: values.password,
      clientId: "377c95b6-5cb8-4763-a10a-eb8a9cabada0",
    };

    dispatch(fetchAuthStarted());
    console.log("Запрос авторизации сотрудника");
    await fetchRequest(
      "auth/sign_in",
      "POST",
      {
        email: `${officer.email}`,
        password: `${officer.password}`,
        clientId: "",
      },
      false,
      dispatch,
      fetchAuthSuccess,
      fetchAuthError,
      setLogged,
      setFormAuthError,
      isFormAuthError
    );
  };

  return (
    <>
      {!isLogged && !isFormAuthError ? (
        <AuthorizationForm
          values={values}
          setValues={setValues}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Result>
          <RegAndAuthResult isFormAuthError={isFormAuthError} />
        </Result>
      )}
      {auth.isLoading && (
        <>
          <div className={css.wrap}>
            <Loader />
          </div>
        </>
      )}
    </>
  );
};
export default Authorization;
