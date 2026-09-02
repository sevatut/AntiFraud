import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form"

export default function Label({name, field, register, error}: 
    {name: string, field: string, register: UseFormRegister<any>, error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined }) {
    return (
        <label className="flex flex-col mb-5">
            <p className="text-2xl font-medium mb-2">{name}</p>

            <input
                {...register(field)}
                type="text"
                className={`text-xl border rounded-md p-2 ${
                error ? 'border-red-500' : 'border-gray-300'
                }`}
            />

            {error && (
                <p className="text-red-500 text-sm mt-1">
                {error.message?.toString()}
                </p>
            )}
        </label>
    )
}