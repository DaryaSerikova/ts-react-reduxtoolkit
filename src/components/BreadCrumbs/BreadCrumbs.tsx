import React from 'react';
// import { useLocation } from "react-router-dom";
import { ReactComponent as HomeRun } from '../../assets/img/home_run.svg';
import { ReactComponent as Ellipse } from '../../assets/img/ellipse.svg';

import cn from "./BreadCrumbs.module.scss";


type TPartOfBreadCrumbs = {
  text: string;
  noActive: boolean;
}

type TBreadCrumbs = {
  typeBreadCrumbs: "/news" | "/onenews" | "/catalog";
  // city?: "minsk" | "vitebsk" | "grodno" | "gomel" | "brest" | "mogilev" | undefined;
  city?: string;

}

const PartOfBreadCrumbs = ({text, noActive}: TPartOfBreadCrumbs) => {
  return (<>
    <Ellipse className={cn.ellipse}/>
    <div className={`${cn.bread_crumbs_item} ${ noActive ? cn.no_active : ''}`}>{text}</div>
  </>)
}


export const BreadCrumbs = ({ typeBreadCrumbs, city }: TBreadCrumbs) => {

  // const location = useLocation();
  // const path = location.pathname;
  // console.log('path (BreadCrumbs):', path);


  return (
    <div className={cn.bread_crumbs}>
      <HomeRun />
      {(typeBreadCrumbs === "/onenews" || typeBreadCrumbs === "/news") ? <PartOfBreadCrumbs text="Новости" noActive={typeBreadCrumbs === "/onenews" ? true : false}/> : <></>}
      {typeBreadCrumbs !== "/onenews" ? <></> : <PartOfBreadCrumbs text="Линия Сталина: суровый отдых в усадьбах на сутки" noActive={false}/>}
      {typeBreadCrumbs !== "/catalog" ? <></> : <PartOfBreadCrumbs text={`Квартиры в ${city}`} noActive={false} />}

    </div>
  )
}
