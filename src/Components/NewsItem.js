import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import url from 'url';
import './News.css';

class NewsItem extends Component {
  constructor(){
    super();
    this.state = {
      data: {}
    }
  }

  componentWillMount(){
    let id = this.props.id;
    var _this= this;
    this.serverRequest = 
      axios
        .get(" https://hacker-news.firebaseio.com/v0/item/"+id+".json")
        .then(function(result) {
          _this.setState({
            data: result.data
          });
        })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  getUrl() {
    if(this.state.data){
      if(this.state.data.url){
        return(this.state.data.url);
      }
      else{
        return("https://news.ycombinator.com/item?id="+this.state.data.id)
      }
    }
  }

  getDomain() {
    return(
      url.parse(this.getUrl().toString()).hostname
    );
  }

  getTitle() {
    return(
      <div className="newsItem-title">
        <a className="newsItem-titleLink" href={this.getUrl()}>{this.state.data.title}</a>
        <span className="newsItem-domain">
            ({this.getDomain()})
        </span>
        <span className="newsItem-by">
          | by <a href={'https://news.ycombinator.com/user?id=' + this.state.data.by}>{this.state.data.by}</a> | {moment.utc(this.state.data.time * 1000).fromNow()}
        </span>
      </div>
    );
  }

  getCommentLink() {
    var commentText = 'discuss';
    if (this.state.data.kids&& this.state.data.kids.length){
      commentText = this.state.data.kids.length + ' comments';      /*only the top level comments*/
    }
    return(
      <a href={'https://news.ycombinator.com/item?id=' + this.state.data.id}>{commentText}</a> 
    );
  }

  getSubtext() {
    return(
      <div className="newsItem-subtext">
        {this.state.data.score} points | {this.getCommentLink()}
      </div>
    );
  }

  getRank(){
    return(
      <div className="newsItem-rank">
        {this.props.position + 1}.  
      </div>
    );
  }

  render() {
    // console.log(this.props.id);
    // console.log(this.props.position);
    // console.log(this.state.data.url);
    console.log(this.state.data);
    return (
      <div className="newsItem">
        {this.getRank()}
        <div className="newsItem-itemText">
          {this.getTitle()}
          {this.getSubtext()}
        </div>
      </div>
    );
  }
}

export default NewsItem;