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
	return (
		<li>
            <NavLi>
                <Link href={props.href}>
                    <a>
			            {props.children}
                    </a>
                </Link>
            </NavLi>
		</li>
	)
}