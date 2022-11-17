import React from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { Tag } from '../../components/Tag/Tag';
import cn from "./CondosCatalog.module.scss";



export const CondosCatalog = () => {

  const tagsInfo = [ 
    "Недорогие",
    "1-комнатные",
    "2-комнатные",
    "3-комнатные",
    "4-комнатные",
    "5-комнатные",
    "Заводской р.",
    "Ленинский р. ",
    "Московский р. ",
    "Октябрьский р. ",
    "Партизанский р.",
    "Первомайский р.",
    "Советский р.",
    "Фрунзенский р.",
    "Центральный р.",
  ]

  const tags = tagsInfo.map(el => <Tag text={el} />)

  return (
    <main>
      <header className={cn.parent} >
        <div className={`${cn.purple_bg} ${cn.child_background}`}></div>
        <div className={`${cn.container} ${cn.child_content}`}>
          <BreadCrumbs></BreadCrumbs>
          <h1 className={cn.title}>Аренда квартир на сутки в Минске</h1>
          <div className={cn.recommendation}>Рекомендуем посмотреть</div>
          <div className={cn.tags}>
            {tags}
          </div>
        </div>

        
      </header>
      <article>
        <div className={cn.style}>Найдено 234 результата</div>

        <div className={cn.style}></div>

      </article>
      <footer></footer>
    </main>
  )
}
