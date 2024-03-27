import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TPHFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const PHForm = ({ children, onSubmit: submit }: TPHFormProps) => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
    submit(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
