import React, {useRef, useState} from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import "./Cards.css";


const Cards = ({onCreate}) => {
    // 일정 추가
    const [schedules, setSchedules] = useState([{ schedule: "", startTime: null, time : "" }]);
    // 선택한 날짜를 로컬 상태로 저장
    const [selectedDate, setSelectedDate] = useState(null);
    const [date, setDate] = useState(null);
    // 일정 칸이 비어있는지 확인
    const [isEmpty, setIsEmpty] = useState(false);

    // 현재 시간을 가져오는 함수
    const getCurrentTime = () => new Date();
    const scheduleInput=useRef();
    const startTimeInput=useRef();

    // 일정 추가 버튼 누르면 일정 추가
    const handleAddSchedule = () => {
        setSchedules([...schedules, { schedule: "", startTime: null }]);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date); // 선택한 날짜를 로컬 상태에 저장
        const year = selectedDate.getFullYear().toString();
        const month = (selectedDate.getMonth()+1).toString().padStart(2, '0');
        const day = selectedDate.getDay().toString().padStart(2, '0');
        setDate(year+'-'+month+'-'+day);
    };

    // 저장하기
    const handleSubmit=async ()=>{



        console.log(schedules[0].startTime);

        for(let i=0;i<schedules.length;i++){
            const hour = schedules[i].startTime.getHours().toString().padStart(2, '0');
            const minute = schedules[i].startTime.getMinutes().toString().padStart(2, '0');
            schedules[i].time = hour + ':' + minute;
        }

        console.log(schedules);


        if(selectedDate===null){
            alert("날짜를 선택해주세요")
            return;
        }
        for (let i = 0; i < schedules.length; i++) {
            if(schedules[i].schedule.length<1){
                alert("일정을 입력해주세요")
                scheduleInput.current.focus();
                setIsEmpty(true);
                return;
            }
            else if(schedules[i].startTime==null){
                alert("시간을 입력해주세요");
                return;
            }
        }
        if(isEmpty){
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date, schedules}),
            mode: 'cors'
        };

        fetch('http://localhost:8080/notice/write', requestOptions)
            .then(response => response)
            .then(data => {
                console.log('submitted:', data);
            })
            .catch(error => {
                console.error('Error submitting:', error);
            });



        alert("저장성공!")
        setSchedules([
            {
                schedule: "",
                startTime: null,
            }
        ]);
    }

    return (
        <div className="card-container">
            <h2>일정 추가</h2>
            <div>
                <DatePicker className="date"
                            dateFormat="yyyy년 MM월 dd일 eee요일"
                            dateFormatCalendar="yyyy년 MM월"
                            locale={ko}
                            timeCaption="날짜 선택"
                            timeCaption="날짜 선택"
                            placeholderText="날짜 선택"
                            selected={selectedDate}
                            minDate={getCurrentTime()}
                            onChange={handleDateChange}
                            dayClassName={(date) =>
                                dayjs(date).day() === 6
                                    ? "saturday"
                                    : dayjs(date).day() === 0
                                        ? "sunday"
                                        : null
                            }
                />
            </div>

            {schedules.map((schedule, index) => (
                <div key={index}>
                    <div>
                        <input className={"schedule"}
                               ref={scheduleInput}
                                placeholder="일정"
                                value={schedule.schedule}
                                onChange={(e) => {
                                    const updatedSchedules = [...schedules];
                                    updatedSchedules[index].schedule = e.target.value;
                                    setSchedules(updatedSchedules);
                                }}
                            />
                    </div>
                        <div>
                            <DatePicker className={"start_time"}
                                ref={startTimeInput}
                                selected={schedule.startTime}
                                onChange={(time) => {
                                    const updatedSchedules = [...schedules];
                                    updatedSchedules[index].startTime = time;
                                    setSchedules(updatedSchedules);
                                }}
                                locale={ko}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={30}
                                minTime={getCurrentTime()}
                                maxTime={dayjs().endOf("day").toDate()}
                                timeCaption="Time"
                                dateFormat="aa h:mm ~"
                                placeholderText="시작 시간"
                                className="start_time"
                            />

                        </div>
                </div>
            ))}


            <div>
                <button onClick={handleAddSchedule}
                        name="schedule-bot"
                        >일정 추가</button>
                <button onClick={handleSubmit}
                        name="save-bot"
                        >저장</button>
            </div>
        </div>
    );
};

export default Cards;