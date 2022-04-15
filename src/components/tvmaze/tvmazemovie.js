import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./tvmazemovie.css";
const TvmazeMovie = ({ users }) => {
  const { showid } = useParams();
  let navigate =useNavigate();
  const bookTicket=(id)=>{
    if(id){ 
      navigate(`/book_ticket/${id}`)
      }
    }
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            const { score, show } = curElem;
            if (show.id === parseInt(showid)) {
              return (
                <div className="container" key={show.id}>
                  <div className="image_name">
                    <img
                      src={show.image.original}
                      alt="movieimage"
                    />
                    <h1>{show.name} </h1>
                    <h4><span>Score:</span> {score}</h4>
                    <h4><span>Genres:</span>{`${show.genres}`}</h4>
                    <h4><span>URL:</span>{`${show.url}`} </h4>
                    <h4><span>Summary:</span> 
                    <small>{ `${show.summary}` }</small></h4>
                    <button type="button" class="btn btn-primary" onClick={()=>bookTicket(show.id)}>Book Now</button>
                  </div>
                  
                </div>
              );
            } else {
              return;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TvmazeMovie;
