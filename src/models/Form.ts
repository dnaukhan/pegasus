import * as yup from "yup";
export const authFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .min(6, "Password should be a minimum length of 6")
    .max(12, "Password should have a maximum length of 12")
    .required("Passwrd is required"),
});

export interface AuthFormData {
  email: string;
  password: string;
}
