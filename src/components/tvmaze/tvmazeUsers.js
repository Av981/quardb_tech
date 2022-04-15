import React from "react";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const TvmazeUsers = ({ users }) => {
  let navigate =useNavigate();
  const goSecondPage=(id)=>{
    if(id){ 
    navigate(`/movie/${id}`)
    }
  }

  return (
    <div>
      <h1 id="main-heading">
        <span>TV</span>MAZE
      </h1>
     < div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            const { score, show } = curElem;
            return (
              <div  onClick={()=> goSecondPage(show.id)} className="col-10 col-md-4 mt-5" key={show.id}>
               
                <div className="card p-2">
                
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={show.image.original}
                        alt="movieimage"
                        className="rounded"
                        width="155"
                        height="250"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">
                     {show.name} <FcLike />
                      </h4>
                      <div className="p-2 mt-2 m-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span>Score</span>
                          {score.toFixed(3)}
                        </div>
                        <div className="d-flex flex-column">
                          <span>Rating</span>
                          {show.rating.average}
                        </div>
                        <div className="d-flex flex-column">
                          <span>Language</span> {show.language}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TvmazeUsers;

