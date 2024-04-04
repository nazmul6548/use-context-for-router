import { useContext } from "react";
import { JewelContext } from "./ContextComponent";
import Card from "../component/Card";


const TopMOvies = () => {
    const {topMovies} = useContext(JewelContext)
    console.log(topMovies);
    return (
        
             <div className="grid grid-cols-3 gap-10 mt-10">
           {
            topMovies.map((movie,index) =><Card key={index} movie={movie}></Card>)
           }
        </div>
        
    );
};

export default TopMOvies;