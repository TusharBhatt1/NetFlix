import "./style.scss"
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Detailsbanner from "./detailsBanner/Detailsbanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideoSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/Footer";

export default function Details() {

let {mediaType, id} = useParams()  

const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
const {data: credits, loading:creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)

console.log(data)
  return (
    <div>
    <Header/>
      <Detailsbanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    <Footer/>
    </div>
  )
}


           
     