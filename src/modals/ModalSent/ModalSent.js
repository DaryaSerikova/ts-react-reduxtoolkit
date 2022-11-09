import React from 'react';
import cn from "./ModalSent.module.scss";



const ModalSent = () => {
  return (
    <div>
      <div className={cn.black_opacity}>black opacity</div>
      <div className={cn.wrapper_window}>
        <div className={cn.window}>
          <div className={cn.title}>
            Ваше письмо отправлено!
          </div>
          <div className={cn.text}>
            Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.
          </div>
          <div className={cn.wrapper_btn}>
            <div className={cn.btn}>Закрыть окно</div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default ModalSent;
