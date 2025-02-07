"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormField = z.infer<typeof schema>;
const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
      await new Promise((res) => setTimeout(res, 1000));
      console.log("Form Data:", data);
      router.push(`/`);
      reset();
  };

  return (
    <div className="flex px-4 md:px-0 pt-8 items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md relative">
          <Image src="/person-blue-shirt.png" width={150} height={150} priority className=" absolute -top-[130px] right-6" alt="logo form"/>
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700"> Login </h1>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2"> Email </label>
          <input id="email" {...register("email")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 "/>
          {errors.email && (<div className="text-red-500 pt-2">{errors.email.message}</div> )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
            Password </label>
          <input type="password" id="password" {...register("password")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2"/>
          {errors.password && ( <div className="text-red-500 pt-1">{errors.password.message}</div>)}
        </div>

        <button type="submit" disabled={isSubmitting}
          className="w-full text-white bg-orange-500 font-semibold py-2 rounded-md transition-colors">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>

      <div className=" text-right mt-2">
        <Link href="/Register" className="text-gray-500 text-sm py-2 font-medium hover:text-gray-700">create a new account </Link>
      </div>
      </form>
    </div>
  );
};

export default Login;
