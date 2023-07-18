import { useState } from "react";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../Components/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../Components/carousel/Carousel";


const TopRated=()=> {

const [endpoint, setEndPoint] = useState("movie")

const {data, loading}= useFetch(`/${endpoint}/top_rated`)


const onTabchange=(tab)=>{

    setEndPoint(tab === "Movie" ? "movie" : "tv")

}

  return (
    <div className="carouselSection">
    <ContentWrapper >
    <span className="carouselTitle">Top Rated</span>
    <SwitchTab data ={["Movie", "Tv Shows"]} onTabchange={onTabchange} />
    </ContentWrapper>

    <Carousel endpoint={endpoint} data={data?.results} loading={loading} />
    </div>
  )
}
export default TopRated