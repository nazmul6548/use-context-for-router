import { useContext } from "react";
import Card from "../component/Card";
import { JewelContext } from "./ContextComponent";

const Home = () => {
    const {movies} =useContext(JewelContext)
    

    return (
        <div className="grid grid-cols-3 gap-10 mt-10">
           {
            movies.map((movie,index) =><Card key={index} movie={movie}></Card>)
           }
        </div>
    );
};

export default Home;