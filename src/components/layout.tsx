import React, { Component } from "react";
import Head from "next/head";
import * as lucide from "lucide-react";
import Link from "next/link";

export default class Layout extends Component {
	render() {
		return (
			<div className="bg-primary min-h-screen text-primary">
				<Head>
					<title>a website</title>
				</Head>

				<nav className="bg-secondary text-xl min-w-full py-2 flex container px-4">
					<div className="w-full my-auto flex space-x-4 flex-row">
						<LinkNavLi href="/">Home</LinkNavLi>
						<LinkNavLi href="/type/">Typing</LinkNavLi>
					</div>
					<div className="w-full my-auto flex space-x-4 flex-row-reverse space-x-reverse">
						<LinkNavLi href="https://github.com/BeetMacol/website" blank={true}><lucide.Github /></LinkNavLi>
						<NavLi><lucide.Layout /></NavLi>
						<NavLi><lucide.Languages /></NavLi>
					</div>
				</nav>

				<div className="flex-grow p-3">
					{this.props.children}
				</div>
			</div>
		)
	}
}

class NavLi extends Component {
	render() {
		return (
			<div className="hover:underline hover:text-select transition cursor-pointer">
				{this.props.children}
			</div>
		)
	}
}

class LinkNavLi extends Component<{href: string, blank: boolean}> {
	static defaultProps = {
		blank: false
	}

	render() {
		return (
			<NavLi>
			   <Link href={this.props.href}>
					<a target={this.props.blank ? '_blank' : '_self'}>
						{this.props.children}
					</a>
				</Link>
			</NavLi>
		)
	}
}