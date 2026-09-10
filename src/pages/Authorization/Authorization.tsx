
import { useTranslation } from "react-i18next"
import { AuthorizationFormData, authorizationSchema } from "../../schemas/authorizationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../../services/auth";
import { Link, useNavigate } from "@tanstack/react-router";

export default function Authorization() {
  const { t } = useTranslation();
  
  const navigate = useNavigate();

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<AuthorizationFormData>({
      resolver: zodResolver(authorizationSchema),
    });


    const onSubmit = (data: AuthorizationFormData) => {
      if (!login(data.login, data.password)) {
        alert(t("authorization.alert"));
      } else {
        navigate({to: "/"});
      }
    };
  
  return (
    <div className="p-40 flex justify-center h-screen bg-[#E9EFF2]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center border border-[#E3E4E5] bg-white w-min px-10 py-10 rounded-xl">
        <h2 className="text-5xl mb-15 text-[#4E80D1]">{t("authorization.header")}</h2>
        <label className="flex flex-col mb-5">
            <p className="text-3xl font-medium mb-5">{t("authorization.login")}</p>

            <input {...register("login")} type="text" className="text-xl border rounded-md p-2" />
            {errors.login && (
                <p className="text-red-500 text-sm mt-1">
                {errors.login.message?.toString()}
                </p>
            )}
        </label>
        <label className="flex flex-col mb-12">
            <p className="text-3xl font-medium mb-5">{t("authorization.password")}</p>

            <input {...register("password")} type="password" className="text-xl border rounded-md p-2" />
            {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                {errors.password.message?.toString()}
                </p>
            )}
        </label>

        <button type="submit" className="w-48 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer
                            hover:bg-[#1C7FDA] hover:text-white mb-10">{t("authorization.button")}</button>

        <p className="text-xl">{t("authorization.question")} <Link to="/register" className="text-[#1d59b9] cursor-pointer">{t("authorization.link")}</Link></p>
      </form>
    </div>
  )
}