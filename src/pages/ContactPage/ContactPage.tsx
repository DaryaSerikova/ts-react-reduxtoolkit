import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
// import ModalSent from '../../modals/ModalSent/ModalSent';
import { ReactComponent as WarningIcon } from '../../assets/img/warning.svg';
import { ReactComponent as ContactIcon1 } from '../../assets/img/contact_icon_1.svg';
import { ReactComponent as ContactIcon2 } from '../../assets/img/contact_icon_2.svg';
import { ReactComponent as ContactIcon3 } from '../../assets/img/contact_icon_3.svg';
import { ReactComponent as ContactIcon4 } from '../../assets/img/contact_icon_4.svg';
import { ReactComponent as UserIcon } from '../../assets/img/contact_user.svg';
import { ReactComponent as MailIcon } from '../../assets/img/contact_mail.svg';
import { ReactComponent as NetworkRight1 } from '../../assets/img/contact_network_r1.svg';
import { ReactComponent as NetworkRight2 } from '../../assets/img/contact_network_r2.svg';
import { ReactComponent as NetworkRight3 } from '../../assets/img/contact_network_r3.svg';
import { ReactComponent as PurpleNetworkIcon3 } from '../../assets/img/purple_network_3.svg';
import { ReactComponent as PurpleNetworkIcon4 } from '../../assets/img/purple_network_4.svg';
import { ReactComponent as PurpleNetworkIcon5 } from '../../assets/img/purple_network_5.svg';
import background from "../../assets/img/contact_background.png";
import cn from "./ContactPage.module.scss";
import { PurpleBackground } from '../../components/Common/PurpleBackground/PurpleBackground';




interface IFields {
  email: string
  name: string
  message: string
}

const ContactPage = () => {

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset, //все поля
    resetField, //конкретное поле
    // getValues, // getValues('name')
    // getFieldState, // getFieldState('name')
    watch,
    // setValue // позволяет заменить данные setValue('name', 'Max')

  } = useForm<IFields>({
    mode: 'onChange',
    // defaultValues: {
    //   'email': 'test@gmail.com',
    // }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => 
  //     console.log(value, name, type));
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  // const watchName = watch('name');

  const onSubmit:SubmitHandler<IFields> = (data : IFields) => {
    console.log('data:', data);
    reset();
  }

  return (
    <>
      <main className={`${cn.contact_page} ${cn.parent}`}>
        <PurpleBackground>
          <img 
            className={cn.white_background} 
            src={background} 
            alt={"white-background"}
          />
        </PurpleBackground>

        <div className={`${cn.container} ${cn.child_content}`}>
          <div className={cn.wrapper_contact}>

            <h1 className={cn.title}>Контакты</h1>
            <div className={cn.text}>
              Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.
            </div>

            <div className={cn.contacts_with_icons}>
              <div className={cn.contact_icons}>
                <ContactIcon1 className={cn.contact_icon} fill={"#FFFFFF"}/>
                <ContactIcon2 className={cn.contact_icon}/>
                <ContactIcon3 className={cn.contact_icon}/>
                <ContactIcon4 className={cn.contact_icon}/>
                
              </div>
              <div className={cn.contact_text}>
                <div className={cn.contact_item}>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</div>
                <div className={`${cn.contact_item} ${cn.phone_with_icons}`}>
                  <div>+375 29 621-48-33 </div>
                  <div className={cn.phone_icons}>
                    <PurpleNetworkIcon3 className={cn.phone_icon}/>
                    <PurpleNetworkIcon4 className={cn.phone_icon}/>
                    <PurpleNetworkIcon5 className={cn.phone_icon}/>
                  </div> 
                </div>
                <div className={`${cn.contact_item} ${cn.email}`}>sdaem@sdaem.by</div>
                <div className={`${cn.contact_item} ${cn.working_hours}`}>Режим работы: 08:00-22:00</div>
              </div>
            </div>

            <div className={cn.ie_text}>
              <div className={cn.ie_text_item}>ИП Шушкевич Андрей Викторович</div>
              <div className={cn.ie_text_item}>УНП 192602485 Минским горисполкомом 10.02.2016</div>

            </div>
            <div className={cn.warning}>
              <div>
                <WarningIcon />
              </div>
              <div>Администрация сайта не владеет информацией о наличии свободных квартир</div>
            </div>

          </div>


          <div className={cn.wrapper_form}>
            <form className={cn.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={cn.wrapper_inputs}>

                <label className={cn.label}>
                  Ваше имя
                  {/* <UserIcon /> */}
                  <input 
                    { ...register('name',
                      { required: 'Name is required field' }
                    )} 
                    type="text"/>
                    {errors?.name && <div style={{color: 'red'}}>{errors.name.message}</div>}
                </label>

                <label className={cn.label}>
                  Ваша электронная почта
                  {/* <MailIcon /> */}
                  <input 
                    {...register('email', { 
                      required: 'Email is required field',
                      pattern: {
                        value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                        message: 'Please enter a valid email address',

                      }
                    })} 
                    type="email"/>
                    {errors?.email && <div style={{color: 'red'}}>{errors.email.message}</div>}
                </label>

              </div>
              <div className={cn.wrapper_textarea}>
                {/* <label> */}
                  <div className={`${cn.label} ${cn.label_textarea}`}>Ваше сообщение</div>
                  <textarea 
                    {...register('message')}
                    className={cn.textarea}
                    placeholder="Сообщение"
                    />
                {/* </label> */}
              </div>


              <div className={cn.wrapper_btn}>
                <button
                  className={cn.btn}
                  type="submit"
                >
                  Отправить
                </button>
              </div>

              
            </form>
          </div>

          <div className={cn.icons} >
            <NetworkRight1 />
            <NetworkRight2 />
            <NetworkRight3 />
          </div>
        </div>



      </main>
    </>
  )
}

export default ContactPage;
