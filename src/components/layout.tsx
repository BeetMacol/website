import React, { Component, MouseEvent, MouseEventHandler } from "react";
import Head from "next/head";
import * as lucide from "lucide-react";
import Link from "next/link";

let languagesDropdown: DropdownMenu;
let dropdownScreenOverlay: DropdownScreenOverlay;

export default class Layout extends Component {
	render() {
		function toggleDropdown() {
			languagesDropdown.toggle();
		}

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

						<NavLi onClick={toggleDropdown}>
							<div className="relative z-10">
								<lucide.Languages />
								<DropdownMenu width={36} additionalClasses="-right-3 mt-1 dropdown1">
									<DropdownItem>English</DropdownItem>
									<DropdownItem>Polish</DropdownItem>
								</DropdownMenu>
							</div>
						</NavLi>
					</div>
				</nav>

				<div className="flex-grow p-3">
					{this.props.children}
				</div>

				<DropdownScreenOverlay />
			</div>
		)
	}
}

class NavLi extends Component<{onClick: MouseEventHandler}> {
	static defaultProps = {
		onClick: null
	}

	render() {
		return (
			<div className="hover:underline hover:text-select transition cursor-pointer" onClick={this.props.onClick}>
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

class DropdownMenu extends Component<{width: number, additionalClasses: string}, {open: boolean}> {
	static defaultProps = {
		width: 48,
		additionalClasses: ''
	}

	constructor(props: {width: number, additionalClasses: string}) {
		super(props);
		this.state = {open: false};
		languagesDropdown = this; // this will be changed as soon as other dropdown(s) will be added lol
	}

	setOpen(open: boolean) {
		this.setState({open: open});
		dropdownScreenOverlay.setOpen(open);
	}

	toggle() {
		this.setOpen(!this.state.open);
	}

	render() {
		return (
			<div className={"w-" + this.props.width + " bg-tertiary rounded-lg py-2 shadow-md absolute " + this.props.additionalClasses + (this.state.open?"":" hidden")}>
				{this.props.children}
			</div>
		)
	}
}

class DropdownItem extends Component {
	render() {
		return (
			<div className="px-4 py-1 cursor-pointer hover:bg-tertiary-hov">
				{this.props.children}
			</div>
		)
	}
}

class DropdownScreenOverlay extends Component<{}, {open: boolean}> {
	constructor(props: {}) {
		super(props);
		this.state = {open: false}
		dropdownScreenOverlay = this;
	}

	setOpen(open: boolean) {
		this.setState({open: open});
	}

	onClick() {
		dropdownScreenOverlay.setOpen(false);
		languagesDropdown.setOpen(false); // remember to change this to something like activeDropdown.setOpen, when you will add another dropdown
	}

	render() {
		return (
			<div className={"fixed top-0 right-0 bottom-0 left-0 bg-white opacity-5" + (this.state.open?"":" hidden")} onClick={this.onClick}></div>
		)
	}
}