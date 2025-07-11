import { useEffect, useState } from "react"
import NewsItems from "./NewsItems";

const NewsBoard = (catogery) => {

    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&catogery=${catogery}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    },[catogery])

  return (
    <div>
        <h2 className="text-center fw-bold">Latest <span className="text-center badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItems key={index} title={news.title} descreption={news.descreption} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard