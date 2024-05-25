import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const AddInput = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      users: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(`users.${index}.fullName`)}
            defaultValue={field.fullName} // make sure to set up defaultValue
          />

          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({ fullName: "" })}>
        Add User
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddInput;
