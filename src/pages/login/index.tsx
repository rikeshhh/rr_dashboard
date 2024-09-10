import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../../component/input";
import { Button } from "../../component/button";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../schema";

interface LoginFormValues {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data); // Handle form submission
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField<LoginFormValues>
            name="email"
            control={control}
            label="Email"
            placeholder="Enter your email"
            error={errors.email?.message}
            className="w-full"
          />
          <InputField<LoginFormValues>
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
            Login
          </Button>
        </form>
        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
