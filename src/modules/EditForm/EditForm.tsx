import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUserSchema, EditUserFormData } from "../../schemas/userSchema";
import { UsersResponse } from "../../types/user";
import Label from "../Label/Label";
import { fields } from "../../constants/fields";
import { useTranslation } from "react-i18next";

export default function EditForm({ onClose }: {
  onClose: () => void;
}) {
  const queryClient = useQueryClient();

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<EditUserFormData>({
    resolver: zodResolver(editUserSchema),
  });

  const id = watch("id");

  useEffect(() => {
    if (!id) {
      reset({
          id: "",
          fullName: "",
          city: "",
          state: "",
          address: "",
          phone: "",
          balance: "",
      });
    };

    const usersData = queryClient.getQueryData<UsersResponse>(["users"]);

    if (!usersData) return;

    const user = usersData.users.find(
      (user) => user.id === Number(id)
    );

    if (!user) {
      reset({
          id: "",
          fullName: "",
          city: "",
          state: "",
          address: "",
          phone: "",
          balance: "",
      });
      return;
    };

    reset({
      id: String(user.id),
      fullName: user.fullName ?? "",
      city: user.city ?? "",
      state: user.state ?? "",
      address: user.address ?? "",
      phone: user.phone ?? "",
      balance: user.balance != null ? String(user.balance) : "",
    });
  }, [id, queryClient, reset]);

  const updateUser = (oldUser: EditUserFormData) => {
    queryClient.setQueryData<UsersResponse>(
      ["users"],
      (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,

          users: oldData.users.map((user) =>
            user.id === Number(oldUser.id)
              ? {
                  ...user,
                  ...Object.fromEntries(
                    Object.entries(oldUser).filter(
                      ([_, value]) =>
                        value !== "" &&
                        value !== null &&
                        value !== undefined
                    )
                  ),
              }
              : user
          ),
        };
      }
    );
  };

  const onSubmit = (data: EditUserFormData) => {
    updateUser(data);
    onClose();
  };

  return (
    <>
      <h3 className="text-3xl font-bold mb-10">
        {t("reports.popUp.edit.header")}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((label) => (
          <Label key={label} field={label} register={register} error={errors[label]}/>
        ))}

        <div className="text-right">
          <button
            type="submit"
            className="w-42 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer
            hover:bg-[#1C7FDA] hover:text-white mr-2">
            {t("reports.popUp.edit.button")}
          </button>
        </div>
      </form>
    </>
  );
}