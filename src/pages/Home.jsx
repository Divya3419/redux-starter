import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { getFeedApi } from "../store/feeds/feeds.action";

const Home = () => {
  const dispatch=useDispatch()
  const {data,getFeed}=useSelector((state)=>state.feed)


  useEffect(() => {
    if(data.length===0){
    dispatch(getFeedApi())
    }
    
  }, [dispatch]);


  return (
    <div>
      <h1>Home</h1>
      <br />
      {getFeed.loading && <h1>LOADING....</h1>}
      {getFeed.error && <h1>ERROR....</h1>}

      {!getFeed.loading && data.map((ele) => (
        <div
          key={ele.id}
          style={{
            padding: "10px",
            margin: "auto",
            marginTop: "10px",
            border: "1px solid grey",
            maxWidth: "200px",
          }}
        >
          <div>{ele.title}</div>
          <div>{ele.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
