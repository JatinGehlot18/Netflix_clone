import './listItem.scss'
import {PlayArrow,Add,ThumbUpAltOutlined,ThumbDownOffAltOutlined} from "@mui/icons-material";
import { useState } from 'react';

export default function ListItem({index}) {

  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/watch?v=srx7fSBwvF"

  return (
    <div className="listItem" style={{left:isHovered && index*225-50+index*2.5}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/24/w900X450/Netflix_YOU.jpg?w=400&dpr=2.6" alt="" />
        {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow/>
              <Add/>
              <ThumbUpAltOutlined/>
              <ThumbDownOffAltOutlined/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
        )}
         
    </div>
  )
}
