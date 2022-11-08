import React from 'react';
import cn from "./Contact.module.scss";


export const Contact = () => {
  return (
    <div className={`${cn.contact_page} ${cn.container}`}>

      <div className={cn.wrapper_contact}></div>

      <div className={cn.wrapper_form}>
        <form>
          <input />
          <input />
          
        </form>
      </div>

      <div className={cn.icons} ></div>

    </div>
  )
}
