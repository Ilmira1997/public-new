import { SCRegisterPage } from "./RegisetrPage.style";
import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/UI/AppButton/AppButton";
import AppInput from "../../components/UI/AppInput/AppInput";
import { AppRegistration } from "../../components/UI/AppRegistration/AppRegistration";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../store/Api/authApi";
import { useEffect } from "react";


  const loginFormSchema = yup.object({
    useremail: yup.string().email().required("Обязательное поле!"),
    userpassword: yup.string().min(4, "Пароль").required("Обязательное поле!"),
    username: yup.string().max(50, "Имя не может больше 50 символов").required("Обязательное поле!"),
    phone_number:yup.string().required("Обязательное поле"),
    user_city: yup.string().max(50, "Город не может больше 50 символов").required("Обязательное поле!"),
  });
export const RegisterPage = () => {
    const navigate = useNavigate();
   
  const [registerUser,{data:userData}]=useRegisterUserMutation()

    interface ILoginForm {
      username:string;
      useremail: string;
      phone_number:string;
      userpassword: string;
      user_city:string

    }
    const onLoginSubmit = (data: ILoginForm) => {
     registerUser({email:data.useremail,name:data.username,password:data.userpassword,phone_number:data.phone_number,user_city:data.user_city})
    
    };
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        username:"",
        useremail: "",
        phone_number:"",
        userpassword: "",
        user_city:"",   
      },
      resolver: yupResolver(loginFormSchema),
    });


    useEffect(()=>{
      if(userData?.user_id){
        navigate("/profile-page")
      }
      console.log(userData);
      
    },[userData,navigate])
      
    return (
        <SCRegisterPage className="LoginPage">
      <h1>Зарегистрироваться</h1>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
      <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <AppInput
              isRequired={false}
              inputType="text"
              inputPlaceholder="Введите свое имя"
              isError={errors.username ? true : false}
              errorText={errors.username?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="useremail"
          render={({ field }) => (
            <AppInput
              isRequired={false}
              inputType="text"
              inputPlaceholder="Введите свой email"
              isError={errors.useremail ? true : false}
              errorText={errors.useremail?.message}
              {...field}
            />
          )}
        />
         <Controller
          control={control}
          name="phone_number"
          render={({ field }) => (
            <AppInput
              isRequired={false}
              inputType="text"
              inputPlaceholder="Введите свой номер"
              isError={errors.phone_number ? true : false}
              errorText={errors.phone_number?.message}
              {...field}
            />
          )}
        />
         <Controller
          control={control}
          name="user_city"
          render={({ field }) => (
            <AppInput
              isRequired={false}
              inputType="text"
              inputPlaceholder="Ваш город"
              {...field}
              isError={errors.user_city ? true : false}
              errorText={errors.user_city?.message}
            />
          )}
        />
         <Controller
          control={control}
          name="userpassword"
          render={({ field }) => (
            <AppInput
              isRequired={false}
              inputType="password"
              inputPlaceholder="Пароль"
              {...field}
              isError={errors.userpassword ? true : false}
              errorText={errors.userpassword?.message}
            />
          )}
        />
       
       

        <AppButton buttonText="Войти" buttonType="submit" />
      </form>
      <AppRegistration  linkText="Залогиниться" linkTo="/"/>
    </SCRegisterPage>
    );
};

