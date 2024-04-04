

const Card = ({movie}) => {
    const {reward,totalViews,shortDescription,releaseDate,rating,movieName,bannerURL} =movie;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{movieName}</h2>
    <p>{shortDescription}</p>
    <div className="card-actions">
     <h3>totalView : {totalViews}</h3>
    </div>
  </div>
</div>
    );
};

export default Card;