import {React, useState} from "react";
import { useParams } from "react-router-dom";
import { BiRupee} from "react-icons/bi";
import "./book.css";
const Book = ({ users }) => {
  const { showid } = useParams();
  const bookAlart = () => {
    alert("ticket book succefully");
  };
  const [name, setName] = useState("");
  const [mobile,setMobile]=useState();
  const [person, setPerson]=useState(0);
  return (

    <>
      <div className=" book_container">
        <div className="row">
          {users.map((curElem) => {
            const { show } = curElem;
            if (show.id === parseInt(showid)) {
              return (
                <>
                  <div className="book-image">
                    <img src={show.image.original} alt="movieimage" />
                  </div>
                  <div class=" customer_details">
                   <h2>{show.name} </h2>
                    <form>
                      <label>
                        Enter your name:
                        <input
                          type="text"
                          value={name}
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                      </label>
                      <label>
                        Enter your mobile number:
                        <input
                          type="number"
                          value={mobile}
                          required
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </label>
                      <label>
                        Enter total number of adults:
                        <input
                          type="number"
                          value={person}
                          required
                          onChange={(e) => setPerson(e.target.value)}
                        />
                      </label>
                    </form>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => bookAlart(show.id)}
                    >
                      Book Now
                    </button>

                  </div>
                  <div className="total_cost">
                      <h3>Total Amount=<BiRupee/>{400*person}</h3>
                  </div>
                </>
              );
            } else {
              return;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Book;
