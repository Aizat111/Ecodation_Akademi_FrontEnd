// import * as Yup from "yup";
import { object, string, ref } from "yup";

export const signupValidation = object({
  name: string()
    .required("Zorunlu alan")
    .min(2, "En az 2 karakterden oluşmalı"),
  email: string().email("E-Posta formatına uymuyor").required("Zorunlu alan"),
  password: string().min(5, "En az 5 karakter olmalı").required("Zorunlu alan"),
  cpassword: string()
    .oneOf([ref("password")], "Şifreler eşleşmiyor")
    .required("Zorunlu alan"),
});
