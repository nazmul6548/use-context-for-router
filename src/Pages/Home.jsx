import { useEffect, useState } from "react";
import Card from "../component/Card";


const Home = () => {
    const [movies,setMovies]= useState([])
    useEffect(()=> {
fetch("fake.json")
.then((res) => res.json())
.then((data) => setMovies(data))
    },[])
    console.log(movies);

    return (
        <div className="grid grid-cols-3 gap-10 mt-10">
           {
            movies.map((movie,index) =><Card key={index} movie={movie}></Card>)
           }
        </div>
    );
};

export default Home;