'use clinet'

import Imgae from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter()
  return (
    <img 
    src="/images/logo.png" 
    alt="Logo"
    className="hidden
    md:block
    cursor-pointer
    "
    height="30"
    width="50" />
  )
}
export default Logo