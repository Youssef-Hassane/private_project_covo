"use client";

import { NavbarItems } from "@/types";
import { Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import { NavbarButtonSheet as NavbarButton } from "./navbar-button";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

interface NavbarMobileProps {
	navbarItems: NavbarItems;
}

export function NavbarMob(props: NavbarMobileProps) {
	const pathname = usePathname();

	return (
		<Sheet>
			<div className="fixed -bottom-[18px] bg-custom-dark-gray w-full h-[100px] z-50 lg:hidden">
				<Separator />

				<div className="flex justify-between items-center py-2 px-1 mx-5">
					{props.navbarItems.links.map((link, idx) => (
						<Link key={idx} href={link.href}>
							<NavbarButton
								variant={pathname === link.href ? "secondary" : "ghost"}
								icon={link.icon}
								className={`${
									pathname === link.href
										? "text-custom-dark-gray bg-custom-light-apricot"
										: ""
								} h-[50px] hover:bg-custom-light-apricot hover:text-custom-dark-gray flex flex-col rounded-[100%] justify-center items-center gap-0`}
							></NavbarButton>
						</Link>
					))}
				</div>
			</div>
		</Sheet>
	);
}
