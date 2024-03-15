import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News=(props)=>{

  const [articles, setArticles] = useState([])

  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  //    document.title=props.category


  // we create updatenews function to short the line of code.
    const updatenews=async()=>{
      // setprogress ka use loding bar ko control karne ke liye use hua hai
      props.setProgress(10);
      // apikey ko save rakhne ke liye env file me rakhte hai
      let url=`https://newsapi.org/v2/top-headlines?apiKey=${props.apikey}&category=${props.category}&country=${props.country}&page=${page}&pagesize=${props.pagesize}`;
      setLoading(true)
      let data= await fetch(url);
      // props.setProgress(70);
      let parsedData=await data.json()
      setArticles(parsedData.articles)
      setLoading(false)
      setTotalResults(parsedData.totalResults)
      props.setProgress(100);
  }

  useEffect(() => {
    updatenews()
    document.title=props.category
  // ejek
  },[])
  


  const hendlPreClick= async()=>{ 
    setPage(page-1);
    updatenews()

    }
  const hendlNextClick= async ()=>{
    setPage(page+1);
    updatenews()
  }

    return (
        <div className="container my-3">
          <div className="container my-3"><h1>News-top Hadelins</h1></div>
          {/* if(state.loading true hai to spinner run kara do) */}
          <div className="container d-flex justify-content-center ">{loading && <Spinner/>} 
          </div>
           <div className="row">
            {!loading && articles.map((elm)=>{
            
            return <div className="col-md-4" key={elm.url}>
             <NewsItem 
            //  if any elm has null we can fixed the problem by tornary opretor.
               title={elm.title}
               description={elm.description}
               imageUrl={elm.urlToImage}
               newsUrl={elm.url}
               author={elm.author}
               date={elm.publishedAt}
             />
           </div>
            })}
          </div>
          <div className="coantainer d-flex justify-content-between my-3">
            <button disabled={page<=1} type="button" class="btn btn-primary " onClick={hendlPreClick}  >&larr;Previous</button>
            <button disabled={page+1>Math.ceil(totalResults/props.pagesize)} type="button" class="btn btn-primary" onClick={hendlNextClick} >Next &rarr;</button>
          </div>
        </div> 
    );
  }


News.defaultProps={
  country:"in",
  pagesize:6,
  category:"general",
}
News.propTypes={
country:PropTypes.string,
pagesize:PropTypes.number,
category:PropTypes.string,
}

export default News