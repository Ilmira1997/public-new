import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/UI/AppButton/AppButton";
import AppInput from "../../components/UI/AppInput/AppInput";
import AppLink from "../../components/UI/AppLink/AppLink";
import { AppRegistration } from "../../components/UI/AppRegistration/AppRegistration";
import { SCLoginPAge } from "./LoginPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
// import { useSelector,  } from "react-redux";
// import { RootState } from "../../store/store";
import { useEffect } from 'react';
// import { changeUser } from "../../store/userSlice";
import { useLoginUserMutation } from "../../store/Api/authApi";

const loginFormSchema = yup.object({
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup.string().min(4, "Пароль").required("Обязательное поле!"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
    resolver: yupResolver(loginFormSchema),
  });

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const user = useSelector((state: RootState) => state.userSlice.user);
 

 
  interface ILoginForm {
    useremail: string;
    userpassword: string;
  }

  const [loginUser,{data:userData}]=useLoginUserMutation()

  const onLoginSubmit = (data: ILoginForm) => {
    // dispatch(changeUser(data))
    // console.log(data);
    // if (data) {
    //   navigate("/profile-page");
    // }
    loginUser({email:data.useremail,password:data.userpassword})
  };
 
  useEffect(()=>{
    if(userData?.user_id){
      navigate("/profile-page")
    }
    console.log(userData);
    
  },[userData,navigate])
 
  
  return (
    <SCLoginPAge className="LoginPage">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
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
      <AppLink linkText="Забыли пароль?" />
      <AppRegistration linkText="Зарегестроваться" linkTo="/register-page"/>
    </SCLoginPAge>
  );
};
