import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async ()=>{
      try{
      const res = await axios.get("/users?new=true", {
        headers: {
          token: 
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWIwNjFkZTRkNWNjYmUxZjI5ZmJiOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzQ0MDM4MiwiZXhwIjoxNjMzODcyMzgyfQ.ifduORg62tnWl2MeMeLI8TrIgf5mIBHiSIEla3RPF8o"
        },
      });
      setNewUsers(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getNewUsers();
  },[]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {newUsers.map(user => (
        <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
