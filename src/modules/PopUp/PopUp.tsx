import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { editUserSchema, userSchema } from "../../schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Label from "../Label/Label";

export default function PopUp( {onClose, isEdit}: any) {
  const queryClient = useQueryClient();
  const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<any>({
  resolver: zodResolver(
    isEdit ? editUserSchema : userSchema
  ),
});

  const updateUser = (oldUser: any) => {
    queryClient.setQueryData(["users"], (oldData: any) => {
      if (!oldData) return oldData;
        
      console.log(oldUser);
    
      return {
        ...oldData,
        users: oldData.users.map((user: any) =>
            user.id == oldUser.id
            ? {
                ...user,
                ...Object.fromEntries(
                    Object.entries(oldUser).filter(
                    ([_, value]) => value !== "" && value !== null && value !== undefined
                    )
                ),
                }
            : user
        ),
    };
    });
  };

  const addUser = (newUser: any) => {
    queryClient.setQueryData(["users"], (oldData: any) => {
        if (!oldData) return oldData;

        const newId = Math.max(
        ...oldData.users.map((user: any) => user.id),
        0
        ) + 1;

        return {
        ...oldData,
        users: [
            ...oldData.users,
            {
            ...newUser,
            id: newId,
            },
        ],
        };
    });
    };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="relative bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl w-200">
            <button className='absolute w-5 h-5 top-4 right-4 cursor-pointer' onClick={onClose}>
              <img src="buttons/close.png" alt="Close" />
            </button>



            { isEdit ? <h3 className="text-3xl font-bold mb-10">Edit Info</h3>
            : <h3 className="text-3xl font-bold mb-10">Add Customer</h3>}

            <form onSubmit={handleSubmit((data) => {
                if (isEdit) { 
                    console.log("gia");
                    const result = editUserSchema.safeParse(data);

                    if (result.success) {
                        console.log(data);
                        updateUser(data);
                    }
                }
                else { 
                    addUser(data);
                }
            })}>
              
                {isEdit ? <Label name="ID" field="id" register={register} error={errors.id}></Label> : null}

                <Label name="Full name" field="fullName" register={register} error={errors.fullName}></Label>
                <Label name="City" field="city" register={register} error={errors.city}></Label>
                <Label name="State" field="state" register={register} error={errors.state}></Label>
                <Label name="Address" field="address" register={register} error={errors.address}></Label>
                <Label name="Phone Number" field="phone" register={register} error={errors.phone}></Label>
                <Label name="Balance" field="balance" register={register} error={errors.balance}></Label>

                
                <div className="text-right">
                    {isEdit ? 
                    
                    <button type="submit" className="w-42 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer 
                  hover:bg-[#1C7FDA] hover:text-white mr-2">Edit</button> : 
                  
                  <button type="submit" className="w-42 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer 
                  hover:bg-[#1C7FDA] hover:text-white mr-2">Add</button>
                    }
                  
                </div>
            </form>
        </div>
    </div>
  )
}

