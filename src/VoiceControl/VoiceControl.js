import "./VoiceControl.css";
import interfaceIcon from "../images/interface_img.png";
import avatar from "../images/avatar.png";
import gsap from "gsap";
import { useLayoutEffect, useEffect, useState, useRef } from "react";

function VoiceControl({}) {
  const [width, setWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        ".voicecontrol__black-hole",
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      )
      .to(".voicecontrol__black-hole", {
        width: width < 350 ? 250 : 400,
        duration: 1,
      })
      .fromTo(".voicecontrol__avatart", { top: 40 }, { top: -790, duration: 2 })

      .to(".voicecontrol__black-hole", {
        width: 200,
        duration: 1,
      })
      .to(
        ".voicecontrol__avatart",
        { top: -750, yoyo: true, repeat: -1, duration: 2 },
        "+=1"
      );
  }, []);

  return (
    <section className="voicecontrol">
      <div className="voicecontrol-container">
        <div className="voicecontrol__title">
          <h1 className="voicecontrol__title-title">Yamaguchi</h1>
          <span> Voice Control</span>
        </div>
        <p className="voicecontrol__description">
          Вы можете управлять программами массажа или самим креслом с помощью
          голосовых команд, приведённых ниже. Коснитесь кратковременно кнопки
          голосового управления, расположенной на левом подлокотнике,
          для запуска сеанса голосового управления.
          <br />
          <br />
          Произнесите одну из доступных команд. Если произнесённая команда
          распознана, вы услышите ответ и кресло приступит к выполнению запроса.
        </p>
        <div className="voicecontrol__avatart-container">
          <div className="voicecontrol__black-hole">
            <img src={avatar} className="voicecontrol__avatart"></img>
          </div>
        </div>

        <img src={interfaceIcon} className="voicecontrol__interface"></img>
        <div className="voicecontrol__phrase">
          <p className="voicecontrol__phrase-say">СКАЖИ:</p>
          <div className="voicecontrol__phrases-container">
            <p className="voicecontrol__phrase-ok">«ОКЕЙ, </p>
            <p className="voicecontrol__phrase-ymaguchi">ЯМАГУЧИ» </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VoiceControl;
