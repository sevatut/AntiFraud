import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUserSchema } from "../../schemas/userSchema";
import { UsersResponse } from "../../types/user";
import { z } from "zod";
import Label from "../Label/Label";

type EditUserFormData = z.input<typeof editUserSchema>;

export default function EditForm({ onClose }: {
  onClose: () => void;
}) {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserFormData>({
    resolver: zodResolver(editUserSchema),
  });

  const updateUser = (oldUser: EditUserFormData) => {
    queryClient.setQueryData<UsersResponse>(
      ["users"],
      (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,

          users: oldData.users.map((user) =>
            user.id === oldUser.id
              ? {
                  ...user,

                  ...Object.fromEntries( Object.entries(oldUser).filter( ([_, value]) => value !== "" && value !== null && value !== undefined ) )
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
        Edit Info
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Label name="ID" field="id" register={register} error={errors.id}/>

        <Label name="Full name" field="fullName" register={register} error={errors.fullName}/>
        
        <Label name="City" field="city" register={register} error={errors.city}/>

        <Label name="State" field="state" register={register} error={errors.state}/>

        <Label name="Address" field="address" register={register} error={errors.address}/>

        <Label name="Phone Number" field="phone" register={register} error={errors.phone} />

        <Label name="Balance" field="balance" register={register} error={errors.balance}/>

        <div className="text-right">
          <button
            type="submit" className="w-42 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer 
            hover:bg-[#1C7FDA] hover:text-white mr-2">
            Edit
          </button>
        </div>
      </form>
    </>
  );
}