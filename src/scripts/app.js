import React from 'react';
import ReactDOM from 'react-dom';
import {ajax} from 'jquery';

const apiKey = "lmaYqqmX9hmshjss7LPRrHpkU3W6p1HAl7AjsnAILtU4QG0HMz";

class App extends React.Component {
	constructor() {
		super();
	}
	componentWillMount(){
		console.log('Mounting');
	}
	render(){
		return (
			<div>
				<h1>Hello!</h1>
			</div>
		)
	}
	componentDidMount(){
		console.log('Mounted');
		ajax({
			url: `https://wordsapiv1.p.mashape.com/words/`,
			type: 'GET',
			data:{
				random:'true',
				partOfSpeech: 'verb'
				// frequencymax: '8.03',
				// frequencymin: '5',
				// letterpattern: '^a.{4}$',
				// limit:'40',
				// lettersmax:'10',
				// lettersmin:'4',
				// pronounciationpattern:'.*æm$'

			},
		   dataType: 'json',
		   success: function(data) { console.dir((data.source)); },
		   error: function(err) { alert(err); },
		   beforeSend: function(xhr) {
		   	xhr.setRequestHeader("X-Mashape-Authorization", apiKey); // Enter here your Mashape key
		   }
			}).then((data) =>{
			console.log(data);
		});
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
