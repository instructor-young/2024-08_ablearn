"use client";

import { supabase } from "@/supabase/client.supabase";
import { Tables } from "@/supabase/database.types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface AllDealsProps {
  deals: Tables<"deals">[];
}

function AllDeals({ deals: passedDeals }: AllDealsProps) {
  const { data: deals } = useQuery({
    queryKey: ["deals"],
    queryFn: async () =>
      await supabase
        .from("deals")
        .select()
        .then((response) => response.data),
    initialData: passedDeals,
  });

  return (
    <ul>
      {deals?.map((deal) => (
        <li key={deal.id}>
          <Link href={`/deals/${deal.id}`} className="border border-black">
            {deal.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default AllDeals;
