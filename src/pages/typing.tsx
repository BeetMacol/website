import React, {Component} from "react";

export default class TypingPage extends Component { 
	render() {
		return (
			<div>
				<div>
					<div className="text-2xl">Typing tests</div>
					<div className="text-sm text-secondary">coming soon</div>
				</div>
				<br/>
				<TypingArea />
			</div>
		)
	}
}

class TypingArea extends Component {
	render() {
		return (
			<div className="mx-4 h-20 bg-tertiary rounded-lg"></div>
		)
	}
}