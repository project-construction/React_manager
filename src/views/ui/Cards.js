import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import "./Cards.css";


const Cards = () => {
    const { control, handleSubmit } = useForm();
    // 시작 시간
    const [startTime, setStartTime] = useState(null);
    // 종료 시간
    const [endTime, setEndTime] = useState(null);
    // 시작 시간을 선택했는지
    const [isSelected, setIsSelected] = useState(false);
    // 일정 추가
    const [schedules, setSchedules] = useState([{ schedule: "", startTime: null, endTime: null }]);

    const onSelect = (time) => {
        setStartTime(time);
        setIsSelected(true);
        setEndTime(null);
    };

    // 일정 추가 버튼 누르면 일정 추가
    const handleAddSchedule = () => {
        setSchedules([...schedules, { schedule: "", startTime: null, endTime: null }]);
    };

    // 현재 시간을 가져오는 함수
    const getCurrentTime = () => new Date();

    return (
        <div className="card-container">
            <div className="date">
                <Controller
                    name="participation_started_at"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <DatePicker
                            dateFormat="yyyy년 MM월 dd일"
                            dateFormatCalendar="yyyy년 MM월"
                            locale={ko}
                            timeCaption="날짜 선택"
                            placeholderText="날짜 선택"
                            selected={value}
                            minDate={new Date()}
                            onChange={(data) => onChange(data)}
                            dayClassName={(date) =>
                                dayjs(date).day() === 6
                                    ? "saturday"
                                    : dayjs(date).day() === 0
                                        ? "sunday"
                                        : null
                            }
                        />
                    )}
                />
            </div>

            {schedules.map((schedule, index) => (
                <div key={index}>
                    <div className={"schedule"}>
                        <input
                            placeholder={"일정"}
                            value={schedule.schedule}
                            onChange={(e) => {
                                const updatedSchedules = [...schedules];
                                updatedSchedules[index].schedule = e.target.value;
                                setSchedules(updatedSchedules);
                            }}
                        />
                    </div>
                    <div>
                        <DatePicker
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
                    {isSelected && (        // 시작 시간을 선택해야 종료 시간 선택 가능
                        <div>
                            <DatePicker
                                selected={schedule.endTime}
                                onChange={(time) => {
                                    const updatedSchedules = [...schedules];
                                    updatedSchedules[index].endTime = time;
                                    setSchedules(updatedSchedules);
                                }}
                                locale={ko}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={30}
                                minTime={schedule.startTime}
                                maxTime={dayjs().endOf("day").toDate()}
                                timeCaption="Time"
                                dateFormat="aa h:mm"
                                placeholderText="종료 시간"
                                className="end_time"
                            />
                        </div>
                    )}
                </div>
            ))}


            <div className="button-container">
                <button onClick={handleAddSchedule}>일정 추가</button>
                <button >저장</button>
            </div>
        </div>
    );
};

export default Cards;
