import React from 'react';
import { ReactComponent as ContactIcon1 } from '../../assets/img/contact_icon_1.svg';
import { ReactComponent as ContactIcon2 } from '../../assets/img/contact_icon_2.svg';
import { ReactComponent as ContactIcon3 } from '../../assets/img/contact_icon_3.svg';
import { ReactComponent as ContactIcon4 } from '../../assets/img/contact_icon_4.svg';
import cn from "./ContactPage.module.scss";


const ContactPage = () => {
  return (
    <div className={`${cn.contact_page} ${cn.container}`}>

      <div className={cn.wrapper_contact}>

        <div className={cn.title}>Контакты</div>
        <div className={cn.text}>
        Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.
        </div>

        <div className={cn.contacts_with_icons}>
          <div className={cn.contact_icons}>
            <ContactIcon1 />
            <ContactIcon2 />
            <ContactIcon3 />
            <ContactIcon4 />
            
          </div>
          <div className={cn.contact_text}>
            <div className={cn.contact_item}>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</div>
            <div className={cn.contact_item}>+375 29 621-48-33  </div>
            <div className={cn.contact_item}>sdaem@sdaem.by</div>
            <div className={cn.contact_item}>Режим работы: 08:00-22:00</div>
          </div>
        </div>

        <div className={cn.ie_text}>
          <div className={cn.ie_text_item}>ИП Шушкевич Андрей Викторович</div>
          <div className={cn.ie_text_item}>УНП 192602485 Минским горисполкомом 10.02.2016</div>

        </div>
        <div className={cn.warning}>
          <div></div>
          <div>Администрация сайта не владеет информацией о наличии свободных квартир</div>
        </div>

      </div>



      <div className={cn.wrapper_form}>
        <form>
          <input />
          <input />
          <textarea />

          <button 
            type="submit"
          >
            Отправить
          </button>
          
        </form>
      </div>

      <div className={cn.icons} ></div>

    </div>
  )
}

export default ContactPage;
