"use client";

import { signIn } from "next-auth/react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";

import useRegisterModal from "@/app/hooks/useRegisterModel";
import { toast } from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModel";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const router = useRouter
  const LoginModal = useLoginModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
   
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials',{
      ...data,
      redirect:false,

    })
    .then((callback) => {
      setIsLoading(false);
      if(callback?.ok){
        toast.success('Logged in');
        router.refresh();
        LoginModal.onClose()
      }
      if(callback?.error){
        toast.error(callback.error)
      }
    })
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome black" subtitle="Login to your account!" center />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        required
        errors={errors}
        register={register}
      />

      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        required
        errors={errors}
        register={register}
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4">
      {/* <hr /> */}
      <Button
        outLine
        icon={FcGoogle}
        label="Continue with Google"
        onClick={() => {}}
      />
      <Button
        outLine
        label="Continue with GitHub"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className="
    text-neutral-500
    text-center
    font-light"
      >
        <div
          className="
    justify-center flex flex-row
    items-center gap-2"
        >
          <div
            className="
    cursor-pointer"
          >
            Already have an account
          </div>
          <div
            // onClick={loginModal.onOpen!}
            className="
    text-neutral-800
    cursor-pointer
    hover:underline
    "
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={LoginModal.isOpen}
        title="Login"
        actionLabel="Continue"
        onClose={LoginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
};

export default LoginModal;
