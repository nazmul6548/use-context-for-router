import { useContext } from "react";
import { JewelContext } from "./ContextComponent";
import Card from "../component/Card";


const Rewardmovies = () => {
    const {awardMovies} = useContext(JewelContext)
    console.log(awardMovies);
    return (
        <div className="grid grid-cols-3 gap-10 mt-10">
        {
         awardMovies.map((movie,index) =><Card key={index} movie={movie}></Card>)
        }
     </div>
    );
};

export default Rewardmovies;