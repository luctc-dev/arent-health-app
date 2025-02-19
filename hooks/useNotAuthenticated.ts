import { useEffect } from "react";
import { useAppSelector } from "./store";
import { useRouter } from "next/navigation";

function useNotAuthenticated() {
  const router = useRouter()
  const isLogin = useAppSelector((state) => state.isLogin);

  useEffect(() => {
    if (isLogin) {
      router.push('/')
    }
  }, [isLogin, router])
}

export { useNotAuthenticated }