import React, { ReactNode } from "react";
import Head from "next/head";

import NavLi, { LinkNavLi } from "./navli";
import Svg from "./svg";

export default function Layout({children}: {children: ReactNode}) {
	return (
		<div className="bg-primary min-h-screen text-primary">
			<Head>
				<title>a website</title>
			</Head>

			<nav className="bg-secondary text-xl min-w-full py-2 flex container px-4">
				<ul className="w-full my-auto flex space-x-4 flex-row">
					<LinkNavLi href="/" blank={false}>Home</LinkNavLi>
					<LinkNavLi href="/type/" blank={false}>Typing</LinkNavLi>
				</ul>
				<ul className="w-full my-auto flex space-x-4 flex-row-reverse space-x-reverse">
					<LinkNavLi href="https://github.com/BeetMacol/website" blank={true}><Svg><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></Svg></LinkNavLi>
					<NavLi><Svg><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></Svg></NavLi>
					<NavLi><Svg><line x1="5" y1="8" x2="11" y2="14" /><path d="M4 14L10 8L12 5" /><line x1="2" y1="5" x2="14" y2="5" /><line x1="7" y1="2" x2="8" y2="2" /><path d="M22 21L17 11L12 21" /><line x1="14" y1="17" x2="20" y2="17" /></Svg></NavLi>
				</ul>
			</nav>

			<div className="flex-grow p-3">
				{children}
			</div>
		</div>
	)
}