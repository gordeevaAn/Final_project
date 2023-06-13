import { useDispatch } from "react-redux";
import {
  closeModal,
  closeRegistration,
} from "../../storage/actions/officerActions";
import Input from "../formElements/input/Input";
import Button from "../formElements/button/Button";
import ButtonClose from "../formElements/buttonClose/ButtonClose";
import css from "./RegistrationForm.module.css";

const RegistrationForm = (props) => {
  const { handleSubmitRegistration, values, setValues } = props;
  const dispatch = useDispatch();

  return (
    <div className={css.form} id="entry">
      <form onSubmit={handleSubmitRegistration}>
        <ButtonClose
          className={css.btnClose}
          onClick={() => {
            dispatch(closeModal());
            dispatch(closeRegistration());
          }}
        />
        <div className={css.container}>
          <p className={css.comment}>* Обязательные поля</p>
          <Input
            title={"Фамилия: *"}
            id={"lastNameRegistration"}
            type={"text"}
            name={"lastName"}
            value={values.lastName}
            required={"required"}
            placeholder="Иванов"
            onChange={(lastName) => setValues({ ...values, lastName })}
          />
          <Input
            title={"Имя:  *"}
            id={"firstNameRegistration"}
            type={"text"}
            name={"firstName"}
            value={values.firstName}
            placeholder="Иван"
            required={"required"}
            onChange={(firstName) => setValues({ ...values, firstName })}
          />
          <Input
            title={"E - mail: *"}
            id={"emailRegistration"}
            type={"email"}
            name={"email"}
            value={values.email}
            placeholder={"IvanovIvan@mail.ru"}
            required={"required"}
            onChange={(email) => setValues({ ...values, email })}
          />
          <div className={css.blank}></div>
          <Input
            title={"Пароль: *"}
            id={"passwordRegistration"}
            type={"password"}
            name={"password"}
            value={values.password}
            placeholder={"********"}
            minLength={"6"} //минимальное кол-во знаков
            required={"required"}
            onChange={(password) => setValues({ ...values, password })}
          />
          <div className={css.blank}></div>
          <div className={css.btn}>
            <Button type={"submit"} name={"Сохранить"} />
          </div>
        </div>
      </form>
    </div>
  );
};
export default RegistrationForm;
