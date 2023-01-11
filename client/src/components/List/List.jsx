import './list.scss';
import {ArrowBackIosOutlined,ArrowForwardIosOutlined} from '@mui/icons-material';
import Listitem from '../Listitem/Listitem';
import { useRef,useState } from "react";

function List({list}) {
    const [ismoved,setismoved]=useState(false);
    const [slideNumber,setSlideNumber]=useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);



    const listRef = useRef();
    const handleClick=(direction)=>{
        setismoved(true);
        let distance = listRef.current.getBoundingClientRect().x-50
        if(direction==="left" && slideNumber > 0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction==="right" && slideNumber < 10 - clickLimit){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    } 
  return (
    <div className='list'>
        <span className='listTitle'>{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")}
            style={{display: !ismoved && "none"}} />
            <div className="container" ref={listRef}>
                {list.content.map((item,i)=>(
                   <Listitem index={i} item={item} />
                ))}
                
                
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")} />
        </div>
    </div>
  )
}

export default List