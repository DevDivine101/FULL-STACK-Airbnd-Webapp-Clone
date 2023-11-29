"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SumbmitHandle, useForm } from "react-hook-form";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";
import Button from "../Button";
import useLoginModal from "../hooks/useLoginModal";
import useRegisterModal from "../hooks/useRegisterModel";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SumbmitHandle<FieldValues> = (data: any) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        loginModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" center />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        required
        errors={errors}
        register={register}
      />
      <Input
        id="name"
        label="Name"
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
            onClick={loginModal.onOpen!}
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
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModal.onClose}
        onSumbit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
};

export default RegisterModal;
