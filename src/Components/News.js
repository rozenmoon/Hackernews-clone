import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import './News.css';

class News extends Component {

  constructor(){
  	super();
  	this.state = {
  		newsIDs: []
  	}
  }

  componentDidMount(){
  	var _this= this;
  	this.serverRequest = 
  		axios
  			.get("https://hacker-news.firebaseio.com/v0/newstories.json")
  			.then(function(result) {
  				_this.setState({
  					newsIDs: result.data.slice(0,100)     			/*returnsa array of legth 500*/
  				});
  			})
  }

  componentWillUnmount() {
  	this.serverRequest.abort();
  }

  render() {
  	let newsID;
	if(this.state.newsIDs){
		// this.state.newsIDs = this.state.newsIDs.slice(0,100);
		newsID = this.state.newsIDs.map(id => {
			// console.log(id);
			return(
      				<NewsItem key={this.state.newsIDs.indexOf(id)} id={id} position={this.state.newsIDs.indexOf(id)}/>
				);
		});
	}
    return (
      <div className="News">
      	{newsID}
      </div>
    );
  }
}

export default News;