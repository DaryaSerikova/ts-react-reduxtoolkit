import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { PurpleBackground } from '../../components/Common/PurpleBackground/PurpleBackground';
import { ReactComponent as HomeRun } from "../../assets/img/home_run_2.svg"
import { ReactComponent as YellowDots } from '../../assets/img/onenews_yellow_dots.svg';
import background from "../../assets/img/error404_background.png";
import cn from "./Error404Page.module.scss";




const Error404Page = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <main className={`${cn.parent}`}>

      <PurpleBackground>
        <img className={cn.white_background} src={background} alt={"white-background"} />
      </PurpleBackground>

      <div className={`${cn.container} ${cn.child_content}`}>
        <div className={cn.page_error404}>

          <div className={`${cn.first_column} ${cn.parent}`}>
            <div className={`${cn.child_background_2}`}>
              <YellowDots />
            </div>
            <h1 className={cn.title}>Ошибка 404</h1>
            <div className={cn.text}>Возможно, у вас опечатка в адресе страницы, или её просто не существует</div>
            <button className={cn.btn}>
              <div className={cn.btn_icon}>
                <HomeRun />
              </div>
              <Link to="/" className={cn.btn_text}>Вернуться на главную</Link>
            </button>
          </div>

          <div className={`${cn.second_column} ${cn.parent}`}>
            <div className={cn.huge_error404}>404</div>
            <div className={`${cn.child_background_3}`}>
              <YellowDots />
              {/* WhiteDots !!!!!!!!!!!!!!!!!!!!!!! */}
            </div>
          </div>

        </div>
      </div>
    </main>

  )
}

export default Error404Page;
