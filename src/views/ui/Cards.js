import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const Cards = () => {
    const [startDate, setStartDate]= useState(new Date());


  return (
   <div className={"schedule"}>
     <h4>일정 추가</h4>
       <DatePicker
           selected={startDate}
           onChange={(date) => setStartDate(date)}
           dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
       />
       <div className={"time"}>
        

       </div>
       <div className={"content"}>
           <input placeholder= "일정"/>
       </div>

       <button>추가</button>
   </div>

  );
};

export default Cards;
