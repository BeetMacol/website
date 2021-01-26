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
        <li>
            <div className="hover:underline hover:text-select transition cursor-pointer">
                {props.children}
            </div>
        </li>
    )
}

export function LinkNavLi(props: LinkProps) {
    const blank = props.blank;
	return (
		<li>
            <NavLi>
                <Link href={props.href}>
                    <a target={props.blank ? '_blank' : '_self'}>
			            {props.children}
                    </a>
                </Link>
            </NavLi>
		</li>
	)
}
