import React from 'react'
import { FormControl, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Controller, FieldValues, Control, Path } from 'react-hook-form';

interface FormFieldProps <T extends FieldValues>{
      control: Control<T>;
      name: Path<T>;
      label: string;
      placeholder?:string;
      type?: 'text' | 'email' | 'password' | 'fie'
}
const FormField = ({control, name, label, placeholder, type='text'} : FormFieldProps<T>) =>(
    <Controller name={name} control = {control} render={({field}) =>(
       <FormItem>
              <FormLabel className='label'>{label}</FormLabel>
              <FormControl>
                <Input className=' !bg-dark-200 rounded-full min-h-12 px-5 placeholder text-light-100' placeholder={placeholder}
                type={type}
                 {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
    )}
     />       
       
);

export default FormField