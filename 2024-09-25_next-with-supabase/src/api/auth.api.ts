import supabase from "@/supabase/client";

async function getMyProfile() {
  const response = await supabase.auth.getUser();
  const user = response.data.user;

  return user;
}

const authAPI = {
  getMyProfile,
};

export default authAPI;
