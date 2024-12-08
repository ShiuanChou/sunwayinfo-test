/** Can you explain the problem with the following code, and how to fix it. **/
/** Explain: setState 是非同步的，所以在 handleAddCount 呼叫 3 次 setState 並不會即時更新，
			this.state.count 所用到的值都是相同的初始值 **/

class Count extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.handleAddCount = this.handleAddCount.bind(this);
	}

	// Wrong
	// handleAddCount() {
	// 	this.setState({ count: this.state.count + 1 });
	// 	this.setState({ count: this.state.count + 1 });
	// 	this.setState({ count: this.state.count + 1 });
	// }

	// Fix
	handleAddCount() {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
		this.setState((prevState) => ({ count: prevState.count + 1 }));
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	}

	render() {
		return (
			<div>
				<h2>{this.state.count}</h2>
				<button onClick={this.handleAddCount}>Add</button>
			</div>
		);
	}
}

ReactDOM.render(
	<Count />,
	document.getElementById('root')
);
