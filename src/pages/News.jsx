import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList'

const News= ()=> {
    const [news, setNews] = useState([])
    const[loading, setLoading]= useState(false)
   

    useEffect(()=>{
       const getNews= async ()=>{
           setLoading(true)
           try{
               
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=se&category=sports&apiKey=8e61a71b96ab40f5a70934daa426d498`)
            if (response.ok){
                const news = await response.json()
                  setNews(news.articles)
               
            }else{
            console.log('No News found')
         }
            
           }catch(error){
                console.log(error)
           }

           setLoading(false)
        }
         getNews()
    },[])
    return (
        <div>
            <NewsList news={news} loading={loading}/>
        </div>
    )
}

export default News
