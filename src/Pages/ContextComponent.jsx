import { createContext, useEffect, useState } from "react";

export const JewelContext = createContext()

const ContextComponent= ({children})=> {


    const [movies,setMovies]= useState([])
    const [topMovies,setTopMovies]= useState([])
    const [awardMovies,setAwardMovies]= useState([])



useEffect(()=> {
fetch("fake.json")
.then((res) => res.json())
.then((data) =>{ setMovies(data);
console.log(movies);
const tmovie = [...data].sort((a,b) =>  b.totalViews-a.totalViews)
setTopMovies(tmovie);

const amovie =[...data].filter((d)=> d.reward.split(" ")[0] >=5 )
setAwardMovies(amovie);

    });},[]);

    return ( <JewelContext.Provider value={{movies,topMovies,awardMovies}} >{children}</JewelContext.Provider>)

    
}
export default ContextComponent;