import { create } from "zustand";

const useRouterStore = create((set) => ({
  currentLocation: "list", // 가능한 location 목록 : 'list', 'detail/:todoId', "new"
  navigate: (nextLocation) => set({ currentLocation: nextLocation }),
}));

export const useNavigate = () => useRouterStore((state) => state.navigate);

export default useRouterStore;
