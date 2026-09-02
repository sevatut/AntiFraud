import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../schemas/userSchema";
import { User, UsersResponse } from "../../types/user";
import { z } from "zod";
import Label from "../Label/Label";

type UserFormData = z.input<typeof userSchema>;

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
        <Label name="Full name" field="fullName" register={register} error={errors.fullName}/>

        <Label name="City" field="city" register={register} error={errors.city}/>

        <Label name="State" field="state" register={register} error={errors.state}/>

        <Label name="Address" field="address" register={register} error={errors.address}/>

        <Label name="Phone Number" field="phone" register={register} error={errors.phone} />

        <Label name="Balance" field="balance" register={register} error={errors.balance}/>

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