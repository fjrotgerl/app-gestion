import { IconHamburger } from "../icons/IconHamburger"
import { Separator } from "../misc/Separator"
import { UserIcon } from "../ui/user/UserIcon"

export const NavMobile = () => {
    return (
        <div className="flex justify-between items-center border-b p-2 bg-white">
            <IconHamburger />
            <div className="flex items-center justify-center gap-3 h-8 ">
                <Separator position="vertical"></Separator>
                <UserIcon />
            </div>
            
        </div>
    )
}