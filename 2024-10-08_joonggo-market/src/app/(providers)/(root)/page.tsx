import Page from "@/components/Page";
import { supabase } from "@/supabase/client.supabase";
import AllDeals from "./_components/AllDeals";

// export const dynamic = "force-dynamic";
export const revalidate = 0;

async function HomePage() {
  const response = await supabase.from("deals").select();
  const deals = response.data;

  return (
    <Page title="전체 중고 물품">
      <AllDeals deals={deals!} />
    </Page>
  );
}

export default HomePage;
