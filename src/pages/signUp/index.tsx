import { useNavigate } from "react-router-dom";
import { Button } from "../../component/button";
import InputField from "../../component/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../schema";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

export const SignUp = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    console.log(data); // Handle form submission
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField<SignUpFormValues>
            name="name"
            control={control}
            label="Name"
            placeholder="Enter your name"
            error={errors.name?.message}
            className="w-full"
          />
          <InputField<SignUpFormValues>
            name="email"
            control={control}
            label="Email"
            placeholder="Enter your email"
            error={errors.email?.message}
            className="w-full"
          />
          <InputField<SignUpFormValues>
            name="password"
            control={control}
            label="Password"
            type="password"
            placeholder="Enter your password"
            error={errors.password?.message}
            className="w-full"
          />
          <Button
            type="submit"
            buttonColor="primary"
            buttonSize="medium"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
          >
            Sign Up
          </Button>
        </form>
        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
