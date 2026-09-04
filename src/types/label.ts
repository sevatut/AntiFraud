import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form"

export type LabelType = { 
        name: string, 
        field: string, 
        register: 
        UseFormRegister<any>, 
        error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined 
    }