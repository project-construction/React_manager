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
    const onSelect = (time) => {
        setStartTime(time);
        setIsSelected(true);
        setEndTime(null);
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

            <div>
                <div className={"schedule"}>
                    <input placeholder={"일정"} />
                </div>

                <div>
                    <DatePicker
                        selected={startTime}
                        onChange={onSelect}
                        locale={ ko }
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
                {isSelected ? // 시작 시간을 선택해야 종료 시간 선택 가능
                    <div>
                        <DatePicker
                        selected={endTime}
                        onChange={(time) => setEndTime(time)}
                        locale={ ko }
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        minTime={startTime}
                        maxTime={dayjs().endOf("day").toDate()}
                        timeCaption="Time"
                        dateFormat="aa h:mm"
                        placeholderText="종료 시간"
                        className="end_time"
                    />
                    </div>

                    : null
                }
            </div>

            <div className="button-container">
                <button >일정 추가</button>
            </div>
        </div>
    );
};

export default Cards;
