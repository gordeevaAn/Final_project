import React from "react";
import css from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={css.mainPage}>
      <div className={css.wrapper}>
        <div className={css.main}></div>
        <div className={css.left}>
          <p className={css.text}>
            <em className={css.em}>Велосипед</em>— доступный и удобный транспорт
            для приятного отдыха. Это прекрасная альтернатива пешим прогулкам с
            максимальной пользой для здоровья и фигуры. В последнее время
            участились случаи кражи велосипедов, поэтому мы ведём учет этих
            случаев. В разделе “СООБЩИТЬ О КРАЖЕ” можно без регистрации оставить
            информацию о случае кражи велосипеда.
          </p>
        </div>
        <div className={css.right}></div>
      </div>
    </div>
  );
};
export default MainPage;
