"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface IssueForm {
  title: string;
  description: string;
}

export default function NewIssuePage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();

  const submitHandler = async (data: IssueForm) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(submitHandler)}>
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <TextArea placeholder="Description" {...register("description")} />
      <Button type="submit">Submit new Issue</Button>
    </form>
  );
}
