import React from 'react';
import { ReactComponent as UserIcon } from "../../../assets/img/signin_user.svg";
import { ReactComponent as EmailIcon } from "../../../assets/img/signin_mail.svg";
import { ReactComponent as PasswordIcon } from "../../../assets/img/signin_password.svg";
import { useForm } from "react-hook-form";



import cn from "./Input.module.scss";



export const Input = ({ typeInput, placeholder, style, label, register, required }) => {


  const getInputIcon = (typeInput) => {
    switch (typeInput) {
      case "email":
        return <div className={`${cn.icon} ${cn.child_icon} `}><EmailIcon /></div>;
      case "password":
        return <div className={`${cn.icon} ${cn.child_icon} `}><PasswordIcon /></div>;
      case "user":
        return <div className={`${cn.icon} ${cn.child_icon} `}><UserIcon /></div>;
      default:
        return <div className={`${cn.icon} ${cn.without_icon} `}>{typeInput}</div>
    }
  }

  const inputIcon = getInputIcon(typeInput);


  return (
    <div className={`${cn.wrapper_input} ${cn.parent} ${cn[`${style}`]}`}>
      {/* <div className={`${cn.icon} ${cn.child_icon} `}>{inputIcon}</div> */}
      {inputIcon}
      <input
        {...register(label, { required })}
        className={`${cn.input} ${cn.child_input}`}
        placeholder={placeholder}
      />
    </div>
  )
};


export const Input2 = ({ typeInput, placeholder, style,
  registerName }) => {

  const {
    register,
  } = useForm();

  const getInputIcon = (typeInput) => {
    switch (typeInput) {
      case "email":
        return <div className={`${cn.icon} ${cn.child_icon} `}><EmailIcon /></div>;
      case "password":
        return <div className={`${cn.icon} ${cn.child_icon} `}><PasswordIcon /></div>;
      case "user":
        return <div className={`${cn.icon} ${cn.child_icon} `}><UserIcon /></div>;
      default:
        return <div className={`${cn.icon} ${cn.without_icon} `}>{typeInput}</div>
    }
  }

  const inputIcon = getInputIcon(typeInput);

  return (
    <div className={`${cn.wrapper_input} ${cn.parent} ${cn[`${style}`]}`}>
      {inputIcon}
      <input
        className={`${cn.input} ${cn.child_input}`}
        {...register(`${registerName}`)}
        placeholder={placeholder}
      />
    </div>
  )
}

export const WrapperInput = ({ typeInput, style, children }) => {

  const getInputIcon = (typeInput) => {
    switch (typeInput) {
      case "email":
        return <div className={`${cn.icon} ${cn.child_icon} `}><EmailIcon /></div>;
      case "password":
        return <div className={`${cn.icon} ${cn.child_icon} `}><PasswordIcon /></div>;
      case "user":
        return <div className={`${cn.icon} ${cn.child_icon} `}><UserIcon /></div>;
      default:
        return <div className={`${cn.icon} ${cn.without_icon} `}>{typeInput}</div>
    }
  }

  const inputIcon = getInputIcon(typeInput);

  return (
    <div className={`${cn.wrapper_input} ${cn.parent} ${cn[`${style}`]}`}>
      {inputIcon}
      {children}
    </div>
  )
}
