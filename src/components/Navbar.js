import Image from "next/image"
import Link from "next/link"
import Logo from '../assets/imgs/logo-anatomo.png'
import { Menu } from "lucide-react"

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
        <header className="relative bg-white">
            <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                    <div className="ml-4 flex lg:ml-0">
                        <Link href="/">
                            <Image className="w-32" src={Logo} alt="logo" />
                        </Link>
                    </div>
                    <Menu className="mr-5 lg:hidden" />
                </div>
            </div>

        </header>
    </div>
  )
}

export default Navbar