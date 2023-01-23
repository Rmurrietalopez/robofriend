import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
constructor() {
	super()
	this.state = {
		robots : [],
		SearchField:''
	}
}


componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
.then(users=>this.setState({robots:users}))
}


OnSearchChange = (event) =>{
this.setState({ SearchField: event.target.value})
}

render(){

	const FilteredRobots = this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
	})
   
return(

<div className='tc'>
<h1 className='f1'>Robofriends</h1>
<SearchBox SearchChange={this.OnSearchChange}/>
<Scroll>
 <CardList Robots={FilteredRobots}/>
</Scroll>
</div>
	);
}
}

export default App;