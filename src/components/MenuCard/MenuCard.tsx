import React from 'react';
import { ReactComponent as CircleArrow } from "../../assets/img/main_circle_arrow.svg";
import { Tag } from '../Common/Tag/Tag';
import { MainPageTagInfo } from '../Common/Tag/MainPageTagInfo';
import cn from "./MenuCard.module.scss";



type TMenuCardProps = {
  key: string;
  id: number;
  subtitle: string;
  title: string;
  cities: string[] | "";
  img: string;

}

const MenuCard = ({ subtitle, title, cities, id, img: src }: TMenuCardProps) => {

  const tags = MainPageTagInfo.map(el => 
    <Tag 
      key={el.key}
      id={el.id}
      text={el.text} 
      value={el.value} 
      typeTag="main" />)

  return (
    <div className={`${cn.box} ${cn.parent}`}>
      <div className={`${cn.child_background} ${cn.wrapper_img}`}>
        <img src={src} alt={`background-img-${id}`} />
      </div>
      <div className={`${cn.child_background} ${cn.black_opacity}`}></div>

      <div className={`${cn.container} ${cn.child_content}`}>
        <div className={cn.subtitle}>{subtitle}</div>
        <div className={cn.title}>{title}</div>
        <div className={`${cn.smth} ${cities === "" ? cn.right_down : ""}`}>

          {/* {(cities !== "") ? <div className={cn.cities}></div> : {tags}} */}
          {(cities === "") ?
            <button className={cn.btn_arrow}>
              <CircleArrow />
            </button>
            : <div className={cn.tags}>{tags}</div>}
        </div>

      </div>
    </div>
  )
}

export default MenuCard;
