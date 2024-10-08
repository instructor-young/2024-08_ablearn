"use client";

import { supabase } from "@/supabase/client.supabase";
import { Database } from "@/supabase/database.types";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { ComponentProps, FormEvent } from "react";

type CustomFormEvent = FormEvent<HTMLFormElement> & {
  target: FormEvent<HTMLFormElement>["target"] & {
    image: HTMLInputElement;
    title: HTMLInputElement;
    content: HTMLInputElement;
    location: HTMLInputElement;
    price: HTMLInputElement;
  };
};

type CreateDealData = Database["public"]["Tables"]["deals"]["Insert"];

function CreateDealForm() {
  const router = useRouter();

  const { mutateAsync } = useMutation({
    mutationFn: async (data: CreateDealData) =>
      await supabase.from("deals").insert(data).select("*").single(),
  });

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (
    e: CustomFormEvent
  ) => {
    e.preventDefault();

    const image = e.target.image.files?.[0];
    const title = e.target.title.value;
    const content = e.target.content.value;
    const location = e.target.location.value;
    const price = Number(e.target.price.value);

    if (!image) return alert("이미지를 선택해 주세요");

    const extension = image.name.split(".").slice(-1)[0];
    const filename = nanoid();
    const path = `${filename}.${extension}`;

    const response = await supabase.storage
      .from("deals")
      .upload(path, image, { upsert: true });
    if (response.error) return alert("이미지 업로드에 실패했습니다");

    const imageUrl = response.data.fullPath;
    const data: CreateDealData = { title, content, location, price, imageUrl };

    const { data: deal, error } = await mutateAsync(data);

    if (error) return alert("판매글 작성에 실패했습니다");

    alert("판매글 생성에 성공했습니다");
    router.push(`/deals/${deal.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="image" type="file" />
      <input name="title" type="text" placeholder="제목" />
      <input name="content" type="text" placeholder="내용" />
      <input name="location" type="text" placeholder="거래 장소" />
      <input name="price" type="number" placeholder="가격" />
      <button>만들기</button>
    </form>
  );
}

export default CreateDealForm;
