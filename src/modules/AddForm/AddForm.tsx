import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, UserFormData } from "../../schemas/userSchema";
import { User, UsersResponse } from "../../types/user";
import { z } from "zod";
import Label from "../Label/Label";
import { labels } from "../../constants/fields";


export default function AddForm({ onClose }: {
  onClose: () => void
}) {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const addUser = (newUser: UserFormData) => {
    queryClient.setQueryData<UsersResponse>(
      ["users"],
      (oldData) => {
        if (!oldData) return oldData;

        const newId =
          Math.max(
            ...oldData.users.map((user) => user.id),
            0
          ) + 1;

        const user: User = {
          ...newUser,
          id: newId,
          balance: Number(newUser.balance),
        };

        return {
          ...oldData,
          users: [
            ...oldData.users,
            user,
          ],
        };
      }
    );
  };

  const onSubmit = (data: UserFormData) => {
    addUser(data);
    onClose();
  };

  return (
    <>
      <h3 className="text-3xl font-bold mb-10">Add Customer</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {labels.filter((label) => label.name != "id").map((label) => (
          <Label name={label.title} field={label.name} register={register} error={errors[label.name as keyof UserFormData]}/>
        ))}        

        <div className="text-right">
          <button type="submit" className="w-42 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] 
          rounded-xs cursor-pointer hover:bg-[#1C7FDA] hover:text-white mr-2">
            Add
          </button>
        </div>
      </form>
    </>
  );
}