import { useState } from "react";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../Components/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../Components/carousel/Carousel";


const Popular=()=> {

const [endpoint, setEndPoint] = useState("movie")

const {data, loading}= useFetch(`/${endpoint}/popular`)


const onTabchange=(tab)=>{

    setEndPoint(tab === "Movie" ? "movie" : "tv")

}

  return (
    <div className="carouselSection">
    <ContentWrapper >
    <span className="carouselTitle">What's Popular</span>
    <SwitchTab data ={["Movie", "Tv Shows"]} onTabchange={onTabchange} />
    </ContentWrapper>

    <Carousel endpoint={endpoint} data={data?.results} loading={loading} />
    </div>
  )
}
export default Popular