'use client'
import { useUser, UserButton} from "@clerk/nextjs"
import Link from "next/link"
import Image from "next/image"
import { assets } from "@/assets/assets"

const StoreNavbar = () => {

    const {user} = useUser()

    return (
        <div className="flex items-center justify-between px-12 py-3 border-b border-slate-200 transition-all">
            <Link href="/store">
                <Image src={assets.gs_logo} alt="logo" className="h-9 w-auto" />
            </Link>
            <div className="flex items-center gap-3">
                <p>Hi, {user?.firstName}</p>
                <UserButton />
            </div>
        </div>
    )
}

export default StoreNavbar