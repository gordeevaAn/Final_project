import React from "react";
import { useState, Link } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchOfficerSendStarted,
  fetchOfficerSendSuccess,
  fetchOfficerSendError,
} from "../../storage/actions/officerActions";
import { fetchRequest } from "../../fetch/fetchRequest";
import uniqid from "uniqid";
import Loader from "../loader/Loader";
import css from "./Registration.module.css";
import Result from "../result/Result";
import RegAndAuthResult from "../regAndAuthResult/RegAndAuthResult";
import RegistrationForm from "../registrationForm/RegistrationForm";

const Registration = () => {
  const isRegResult = useSelector((state) => state.officers.isRegResult);
  const [isFormRegError, setFormRegError] = useState(false);
  const dispatch = useDispatch();
  const officers = useSelector((state) => state.officers);

  const [values, setValues] = useState({
    id: "",
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    clientId: "377c95b6-5cb8-4763-a10a-eb8a9cabada0",
    approved: true,
    isLoading: false,
  });

  const handleSubmitRegistration = async (e) => {
    e.preventDefault();

    const officer = {
      id: uniqid(),
      lastName: values.lastName,
      firstName: values.firstName,
      email: values.email,
      password: values.password,
      clientId: "377c95b6-5cb8-4763-a10a-eb8a9cabada0",
      approved: `${officers.length !== 1 ? "false" : "true"}`,
    };

    //Запрос для создания новой учетной записи:
    dispatch(fetchOfficerSendStarted());
    await fetchRequest(
      "auth/sign_up",
      "POST",
      {
        id: `${officer.id}`,
        lastName: `${officer.lastName}`,
        firstName: `${officer.firstName}`,
        email: `${officer.email}`,
        password: `${officer.password}`,
        clientId: "377c95b6-5cb8-4763-a10a-eb8a9cabada0",
      },
      false,
      dispatch,
      fetchOfficerSendSuccess,
      fetchOfficerSendError,
      isRegResult,
      setFormRegError,
      isFormRegError
    );
  };

  return (
    <>
      {officers.isLoading && (
        <div className={css.wrap}>
          <Loader />
        </div>
      )}

      {!isRegResult && !isFormRegError ? (
        <RegistrationForm
          values={values}
          setValues={setValues}
          handleSubmitRegistration={handleSubmitRegistration}
        />
      ) : (
        <Result>
          <RegAndAuthResult isFormRegError={isFormRegError} />
        </Result>
      )}
    </>
  );
};
export default Registration;
