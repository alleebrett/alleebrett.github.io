import React from 'react';

var App = React.createClass({
	propTypes: {
		txt: React.PropTypes.string
	},
	render: function(){
		return (
			<div>
				<h1>{this.props.txt}</h1>
			<div>
		)
	}
	}):
	
	React.render(<App txt="this is a prop text" />, document.body);		
		