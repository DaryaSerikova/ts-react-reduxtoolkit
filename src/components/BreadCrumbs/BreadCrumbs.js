import React from 'react';
import { ReactComponent as HomeRun } from '../../assets/img/home_run.svg';
import { ReactComponent as Ellipse } from '../../assets/img/ellipse.svg';

import cn from "./BreadCrumbs.module.scss";

export const BreadCrumbs = () => {
  return (
    <div className={cn.bread_crumbs}>
      <HomeRun />
      <Ellipse className={cn.ellipse}/>
      <div className={cn.bread_crumbs_item}>Новости</div>
    </div>
  )
}
