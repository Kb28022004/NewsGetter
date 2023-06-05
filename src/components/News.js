import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {

  static defaultProps={
    country:"in",
    pageSize:8,
    category:"general",
    totalResults:0
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title=`${this.props.category}-NewsGetter`
  }



  async componentDidMount() {
    this.props.setprogress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b503ef7de243407cb5f02cd20c4fd59b&page=1
    &pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true,
    })
    let data = await fetch(url);
    this.props.setprogress(30)
    let parsedata = await data.json();
    this.props.setprogress(70)
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading:false
    });
    this.props.setprogress(100)
  }
 

  fetchMoreData=async()=>{
    this.setState({
      page:this.state.page+1
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b503ef7de243407cb5f02cd20c4fd59b&page=${this.state.page}
    &pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
  
    });
  }

  render() {
    return (
     <>
     
        <div className="text-center" style={{margin:"20px 0px ",marginTop:"90px"}}>
          <h1>{this.props.category} - Top Headlines</h1>
        </div>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}
        >
<div className="container">
        <div className="row">
          { this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  NewsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        
        </>
     
    )
  }
}
