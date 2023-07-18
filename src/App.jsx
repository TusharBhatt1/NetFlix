import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { fetchDataFromApi } from "./utils/api"
import { getApiConfigurtion, getGenres } from "./Store/HomeSlice"
import { useDispatch , useSelector} from "react-redux"
import Home from "./Pages/Home/Home"
import Details from "./Pages/Details/Details"
import Explore from "./Pages/Explore/Explore"
import PageNotFound from "./Pages/404/PageNotFound"
import SearchResults from "./Pages/SearchResults/searchResults"
import Intro from "./Pages/intro/Intro"

function App() {
 
const dispatch = useDispatch()
const {url} = useSelector((state)=>state.home)

useEffect(()=>{
  fetchApiConfig()
  genresCall()
},[])  

const fetchApiConfig=()=>{ fetchDataFromApi("/configuration")
.then((res)=>{
  const url ={
    backdrop: res.images.secure_base_url + "original",
    poster: res.images.secure_base_url + "original",
    profile: res.images.secure_base_url + "original"
  }
dispatch(getApiConfigurtion(url))})
}

const genresCall= async()=>{
  let promises =[]
  let endpoints=["tv", "movie"]

  let allGenres={}

  endpoints.forEach(url => {
    promises.push(fetchDataFromApi(`/genre/${url}/list`))
  })

  const data = await Promise.all(promises)
  data.map(({genres})=>{
    return genres.map(item=>(allGenres[item.id]=item))
  })

  dispatch(getGenres(allGenres))
}

  return (
   <BrowserRouter>
   

    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Details/>}/>
      <Route path="/search/:query" element={<SearchResults/>} />
    
      <Route path="/explore/:mediatype" element={<Explore/>}/>
      <Route path="*" element={<PageNotFound/>}/>
     </Routes> 

   
   </BrowserRouter>
  )
}

export default App
