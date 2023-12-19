import { useTranslation } from "react-i18next";
import "./i18n";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang: "de" | "en") => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <button onClick={() => setNumber(number + 1)}>+</button>
      <h1>{t("countular", { count: number })}</h1>
      <h1>{t("salutaion", { name: "there" })}</h1>
      <button onClick={() => changeLanguageHandler("de")}>de</button>
      <button onClick={() => changeLanguageHandler("en")}>en</button>
      <Comp1 />
      <hr />
      <Comp2 />
      <hr />
      <Comp3 />
    </div>
  );
}

export default App;
