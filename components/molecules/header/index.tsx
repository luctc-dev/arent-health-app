'use client';
import Container from "@/components/atoms/container"
import MenuItem from "@/components/atoms/menu-item";
import { ChallengeSvg, InfoSvg, LogoSvg, MemoSvg } from "@/icons"
import { useRouter } from 'next/navigation'
import DrawerMenu from "../drawer-menu";
 
const Header = () => {
  const router = useRouter()

  const handleClickLogo = () => {
    router.push('/')
  }

  return (
    <div className="bg-dark-500">
      <Container className="flex justify-between">
        <LogoSvg className="block cursor-pointer" onClick={handleClickLogo} />
        <div className="flex items-center">
          <MenuItem icon={<MemoSvg />} label="自分の記録" href="/my-record" />
          <MenuItem icon={<ChallengeSvg />} label="チャレンジ" href="/column-list" />
          <MenuItem icon={<InfoSvg />} label="お知らせ" href="#" count={1} />
          <DrawerMenu />
        </div>
      </Container>
    </div>
  )
}

export default Header