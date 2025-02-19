import { ReactNode } from "react"
import cls from "classnames"

type Props = {
  children?: ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return <div className={cls('max-w-[960px] mx-auto', className)}>{children}</div>
}

export default Container