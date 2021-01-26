import React, { ReactNode } from "react";
import Link from "next/link";

interface Props {
	children: ReactNode
}

interface LinkProps {
	children: ReactNode,
	href: string,
	blank: boolean
}

export default function NavLi(props: Props) {
	return (
			<div className="hover:underline hover:text-select transition cursor-pointer">
				{props.children}
			</div>
	)
}

export function LinkNavLi(props: LinkProps) {
	const blank = props.blank;
	return (
		<NavLi>
		   <Link href={props.href}>
				<a target={props.blank ? '_blank' : '_self'}>
					{props.children}
				</a>
			</Link>
		</NavLi>
	)
}
