import { useEffect } from "react";
import { useAppSelector } from "./store";
import { useRouter } from "next/navigation";

function useAuthenticated() {
  const router = useRouter()
  const isLogin = useAppSelector((state) => state.isLogin);

  useEffect(() => {
    if (!isLogin) {
      router.push('/login')
    }
  }, [isLogin, router])
}

export { useAuthenticated }