import Page from "@/components/Page";
import { supabase } from "@/supabase/client.supabase";
import { redirect } from "next/navigation";

interface DealDetailPageProps {
  params: {
    dealId: string;
  };
  searchParams: {};
}

async function DealDetailPage(props: DealDetailPageProps) {
  const dealId = Number(props.params.dealId);
  const response = await supabase
    .from("deals")
    .select()
    .eq("id", dealId)
    .single();
  const deal = response.data;

  if (!deal) return redirect("/404");

  return (
    <Page>
      <img
        src={
          `https://elecdfdaxkagkyaxadhn.supabase.co/storage/v1/object/public/` +
          deal.imageUrl
        }
      />
      <h1>{deal.title}</h1>
      <hr />
      <p>{deal.content}</p>
      <time>{deal.createdAt}</time>
      <div>작성자 ID: {deal.authorId}</div>
    </Page>
  );
}

export default DealDetailPage;
