'use client'

import { Info, Search, Home, List, Hotel } from 'lucide-react';
import { NavbarDes } from './navbarDes';
import { NavbarItems } from '@/types';
import { useMediaQuery } from 'usehooks-ts';
import { NavbarMob } from './navbarMob';

const navbarItems: NavbarItems = {
	links: [
		{ label: 'Home', href: '/', icon: Home },
		{ label: 'Benefits', href: '/explore', icon: Search },
		{ label: 'Features', href: '/hotels', icon: Hotel },
		{ label: 'Early Access', href: '/rooms', icon: Hotel },
		{ label: 'About', href: '/about', icon: Info },
		{ label: 'Contact', href: '/contact', icon: List, },
		{ label: 'FAQ', href: '/rooms', icon: Hotel },
	],
}
const navbarItemsMobile: NavbarItems = {
	links: [
		{ href: '/home', icon: Home },
		{ href: '/explore', icon: Search },
		{ href: '/hotels', icon: Hotel },
		{ href: '/rooms', icon: Hotel },
		{ href: '/about', icon: Info, },
		{ href: '/contact', icon: List },
	]
}

export function Navbar() {

	const isDesktop = useMediaQuery('(min-width: 900px)', { initializeWithValue: false });

	if (isDesktop) {
		return (
			<div className='h-[100px]'>
				<NavbarDes navbarItems={navbarItems} />
			</div>
		);
	}

	return (
		<NavbarMob navbarItems={navbarItemsMobile} />
	);

}