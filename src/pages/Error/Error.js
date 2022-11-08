import React from 'react';

export const Error = () => {
  return (
    <div>
      <div className={title}>Ошибка 404</div>
      <div className={text}></div>
      <button>
        <div className={cn.btn_icon}></div>
        <div className={cn.btn_text}>Вернуться на главную</div>
      </button>
      
    </div>
  )
}
