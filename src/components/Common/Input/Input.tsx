import React from 'react';
import { useForm, UseFormRegister, Path } from "react-hook-form";
import { ReactComponent as UserIcon } from "../../../assets/img/signin_user.svg";
import { ReactComponent as EmailIcon } from "../../../assets/img/signin_mail.svg";
import { ReactComponent as PasswordIcon } from "../../../assets/img/signin_password.svg";
import { IFormValues } from '../../Filters/Filters';
import cn from "./Input.module.scss";

// interface IFormValues {
//   "city": string;
//   "amount_rooms": string;
//   "price_from": string;
//   "price_to": string;
// }

type TInput = {
  typeInput: string;
  typeIcon: string;
  placeholder: string;
  style: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}

type TWrapperInput = {
  typeIcon: string;
  style: string;
  children?: JSX.Element;
}

export const Input = ({ typeInput, typeIcon, placeholder, style, label, register, required }: TInput) => {


  const getInputIcon = (typeIcon: string) => {
    switch (typeIcon) {
      case "email":
        return <div className={`${cn.icon} ${cn.child_icon} `}><EmailIcon /></div>;
      case "password":
        return <div className={`${cn.icon} ${cn.child_icon} `}><PasswordIcon /></div>;
      case "user":
        return <div className={`${cn.icon} ${cn.child_icon} `}><UserIcon /></div>;
      default:
        return <div className={`${cn.icon} ${cn.without_icon} `}>{typeIcon}</div>
    }
  }

  const inputIcon = getInputIcon(typeIcon);


  return (
    <div className={`${cn.wrapper_input} ${cn.parent} ${cn[`${style}`]}`}>
      {/* <div className={`${cn.icon} ${cn.child_icon} `}>{inputIcon}</div> */}
      {inputIcon}
      <input
        {...register(label, { required })}
        className={`${cn.input} ${cn.child_input}`}
        placeholder={placeholder}
        type={typeInput}
      />
    </div>
  )
};


export const WrapperInput = ({ typeIcon, style, children }: TWrapperInput) => {

  const getInputIcon = (typeIcon: string) => {
    switch (typeIcon) {
      case "email":
        return <div className={`${cn.icon} ${cn.child_icon} `}><EmailIcon /></div>;
      case "password":
        return <div className={`${cn.icon} ${cn.child_icon} `}><PasswordIcon /></div>;
      case "user":
        return <div className={`${cn.icon} ${cn.child_icon} `}><UserIcon /></div>;
      default:
        return <div className={`${cn.icon} ${cn.without_icon} `}>{typeIcon}</div>
    }
  }

  const inputIcon = getInputIcon(typeIcon);

  return (
    <div className={`${cn.wrapper_input} ${cn.parent} ${cn[`${style}`]}`}>
      {inputIcon}
      {children}
    </div>
  )
}
