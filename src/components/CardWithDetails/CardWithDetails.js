import React from 'react';
import { ReactComponent as UserIcon } from "../../assets/img/user.svg";

import { ReactComponent as LocationIcon } from "../../assets/img/point_3.svg";
import { ReactComponent as SubwayIcon } from "../../assets/img/subway.svg";
import { ReactComponent as EllipseIcon } from "../../assets/img/ellipse_52.svg";

import { ReactComponent as PhoneIcon } from "../../assets/img/phone_1.svg";


import cn from "./CardWithDetails.module.scss";



const CardWithDetails = () => {
  return (
    <div className={cn.box}>
      <div className={cn.container}>

        <div className={cn.wrapper_img}>
          <div className={cn.gold}>Gold</div>

        </div>
        <div className={`${cn.description} ${cn.container_desc}`}>

          <div className={cn.details}>
            <div>
              <div className={cn.price}>65.00 BYN</div>
              <div className={cn.duration}>за сутки</div>
            </div>
            <div className={cn.people}>
              {/* <div>icon</div> */}
              <UserIcon />
              <div>4 (2+2)</div>
            </div>
            <div className={cn.amount_rooms}>4 комн.</div>
            <div className={cn.square}>179 м²</div>
          </div>

          <div className={cn.location}>
            <div className={cn.address}>
              <LocationIcon className={cn.location_icon}/>
              <div>Минск, б-р Мулявина, д. 10</div>
            </div>
            <div className={cn.subway_with_neighborhood}>
              <div className={cn.subway_station}>
                <SubwayIcon className={cn.subway_icon}/>
                <div>Грушевка</div>
              </div>
              <div className={cn.neighborhood}>
                <div className={cn.wrapper_ellipse}>
                  <EllipseIcon className={cn.ellipse_icon}/>
                </div>
                <div>Шабаны</div>  
              </div>
            </div>
          </div>

          <div className={cn.text}>
            Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...
          </div>
          <hr />
          <div className={cn.wrapper_buttons}>
            <button className={cn.button_contacts}>
              {/* <div>icon</div> */}
              <PhoneIcon />
              <div>Контакты</div>
            </button>
            <button className={cn.button_more_details}>Подробнее</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardWithDetails;
