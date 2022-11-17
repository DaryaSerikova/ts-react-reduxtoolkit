import React from 'react';
import { ICardWithDetails } from './CardWithDetailsInterface';
import { ReactComponent as UserIcon } from "../../assets/img/user.svg";

import { ReactComponent as LocationIcon } from "../../assets/img/point_3.svg";
import { ReactComponent as SubwayIcon } from "../../assets/img/subway.svg";
import { ReactComponent as EllipseIcon } from "../../assets/img/ellipse_52.svg";

import { ReactComponent as PhoneIcon } from "../../assets/img/phone_1.svg";


import cn from "./CardWithDetails.module.scss";



const CardWithDetails = ( props:ICardWithDetails ) => {
  const { gold, price, duration,
    // people,
    amount_rooms, square, city, address, subway_station, neighborhood
   } = props;

  return (
    <div className={cn.box}>
      <div className={cn.container}>

        <div className={cn.wrapper_img}>
          {gold ? <div className={cn.gold}>Gold</div> : <></>}

        </div>
        <div className={`${cn.description} ${cn.container_desc}`}>

          <div className={cn.details}>
            <div className={cn.price_with_duration}>
              <div className={cn.price}>{price} BYN</div>
              <div className={cn.duration}>{duration}</div>
            </div>
            <div className={cn.condo_details}>
              <div className={cn.people}>
                <UserIcon />
                <div>4 (2+2)</div>
              </div>
              <div className={cn.amount_rooms}>{amount_rooms} комн.</div>
              <div className={cn.square}>{square} м²</div>
            </div>
          </div>

          <div className={cn.location}>
            <div className={cn.address}>
              <LocationIcon className={cn.location_icon}/>
              <div>{city}, {address}</div>
            </div>
            <div className={cn.subway_with_neighborhood}>
              <div className={cn.subway_station}>
                <SubwayIcon className={cn.subway_icon}/>
                <div>{subway_station}</div>
              </div>
              <div className={cn.neighborhood}>
                <div className={cn.wrapper_ellipse}>
                  <EllipseIcon className={cn.ellipse_icon}/>
                </div>
                <div>{neighborhood}</div>  
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
