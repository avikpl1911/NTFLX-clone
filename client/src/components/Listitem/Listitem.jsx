import "./listitem.scss";
import { useEffect, useState } from "react";
import { PlayArrow,Add,ThumbUpAltOutlined,ThumbDownAltOutlined } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";

function Listitem({index,item}) {
  const [isHovered, setIsHovered]=useState(false);
  const [movie, setMovie]=useState({});
  
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/movies/find/" + item, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accesstoken,
          },
        });
        setMovie(res.data);
        
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);




  return (
  <Link to={{pathname:"/watch",movie:movie}}>
    <div className='listitem'
    style={{left: isHovered && index * 225 - 50 + index * 2.5 }}
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)}
    >
        <img src={movie.imgSm} alt="" />
        {isHovered && (<><video style={{height:"140px",width:"100%",objectfit:"cover"}} src={movie.trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icons"/>
          <Add className="icons"/>
          <ThumbUpAltOutlined className="icons"/>
          <ThumbDownAltOutlined className="icons"/>
        </div>
        <div className="itemInfoTop">
          <span>{movie.duration}</span>
          
          <span className="limit">+{movie.limit}</span>
          <span>{movie.year}</span>
        </div>
        <div className="desc">
          {movie.desc}

        </div>
        <div className="genre">{movie.genre}</div>
      </div></>)} 
        
    </div>
  </Link>
  );
}

export default Listitem