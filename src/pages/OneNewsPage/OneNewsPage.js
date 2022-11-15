import React from 'react';
import Card from '../../components/Card/Card';
import { ReactComponent as PurpleRectangle1 } from '../../assets/img/purple_rectangle_news.svg';
import { ReactComponent as YellowDots } from '../../assets/img/onenews_yellow_dots.svg';

import { ReactComponent as PurpleNetworkIcon1 } from '../../assets/img/purple_network_1.svg';
import { ReactComponent as PurpleNetworkIcon2 } from '../../assets/img/purple_network_2.svg';
import { ReactComponent as PurpleNetworkIcon3 } from '../../assets/img/purple_network_3.svg';
import { ReactComponent as PurpleNetworkIcon4 } from '../../assets/img/purple_network_4.svg';
import { ReactComponent as PurpleNetworkIcon5 } from '../../assets/img/purple_network_5.svg';

import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { CardsInfo } from './OneNewsCardsInfo';
import cn from "./OneNewsPage.module.scss";
import Cards from '../../components/Cards/Cards';
import photo from "../../assets/img/photo_2.jpg";




const OneNewsPage = () => {

  const Cards = CardsInfo.map(
    item => <Card 
      title={item.title}
      description={item.description}
      date={item.date}
    />)

  return (
    <main className={`${cn.one_news} ${cn.parent}`}>
    
      <div className={cn.child_background_1}>
        <PurpleRectangle1 />
      </div>

      {/* <div className={cn.child_background}>
        <YellowDots />
      </div> */}

      <div className={`${cn.container_text} ${cn.content} ${cn.child_content}`}>

        <header >
          <BreadCrumbs />
          <h1 className={cn.title}>Линия Сталина: суровый отдых в усадьбах на сутки </h1>

          <div className={cn.date_with_icons}>
            <div className={cn.date}>14 Января 2008</div>
            <div className={cn.wrapper_networks}>
              <div className={cn.networks_text}>Поделиться</div>
              <div className={cn.networks_icons}>
                <PurpleNetworkIcon1 />
                <PurpleNetworkIcon2 />
                <PurpleNetworkIcon3 />
                <PurpleNetworkIcon4 />
                <PurpleNetworkIcon5 />
              </div>
            </div>
          </div>
        </header>

        <article>
          <div className={cn.wrapper_photo}>
            <img src={photo} alt={photo}/>
          </div>
          <div className={cn.description}>
            <p>
            Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.
            </p>
            <p>
            «Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом. Поэтому желательно приезжать сюда в хорошую погоду. Его территория поистине огромна: целых 26 га. Такое название дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века именовали цепь укреплений, созданную для защиты государственной границы СССР. Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.
            </p>
            <p>
            Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день. Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке. Проголодались? Загляните в кафе и насладитесь сытным домашним обедом.
            </p>
            <p>
            Посетить «Линию Сталина» будет интересно как взрослым, так и детям. Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже. На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант. Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!
            </p>
            <p>
            Отличная усадьба в 10 км от "Линии Сталина".
            </p>

          </div>
        </article>
      
      </div>

      <div className={`${cn.content_footer} ${cn.parent}`}>
        <div className={`${cn.purple_background} ${cn.child_background_2}`}></div>

        <div className={`${cn.child_content} ${cn.footer_container}`}>
          {/* <div className={cn.child_content}> */}
            <div className={cn.content_footer_title}>Читайте также</div>
            <div className={cn.content_footer_cards}>
              {/* <Cards arr={CardsInfo}/> */}
              {Cards}
            </div>
          {/* </div> */}
        </div>



      </div>


    </main>
  )
}

export default OneNewsPage;
