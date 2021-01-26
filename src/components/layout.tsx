import React, { ReactNode } from "react";
import Head from "next/head";
import * as lucide from "lucide-react";

import NavLi, { LinkNavLi } from "./navli";

export default function Layout({children}: {children: ReactNode}) {
	return (
		<div className="bg-primary min-h-screen text-primary">
			<Head>
				<title>a website</title>
			</Head>

			<nav className="bg-secondary text-xl min-w-full py-2 flex container px-4">
				<div className="w-full my-auto flex space-x-4 flex-row">
					<LinkNavLi href="/" blank={false}>Home</LinkNavLi>
					<LinkNavLi href="/type/" blank={false}>Typing</LinkNavLi>
				</div>
				<div className="w-full my-auto flex space-x-4 flex-row-reverse space-x-reverse">
					<LinkNavLi href="https://github.com/BeetMacol/website" blank={true}><lucide.Github /></LinkNavLi>
					<NavLi><lucide.Layout /></NavLi>
					<NavLi><lucide.Languages /></NavLi>
				</div>
			</nav>

			<div className="flex-grow p-3">
				{children}
			</div>
		</div>
	)
}