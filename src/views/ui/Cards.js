import React from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import "./Cards.css";

const Cards = () => {
    const { control, handleSubmit } = useForm();

    return (
        <div className="card-container">
            <div className="date-time-card">
                <Controller
                    name="participation_started_at"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <DatePicker
                            dateFormat="yyyy년 MM월 dd일 a hh시"
                            dateFormatCalendar="yyyy년 MM월"
                            locale={ko}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={60}
                            timeCaption="시작시간"
                            placeholderText="시작시간"
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
            <div className="date-time-card">
                <Controller
                    name="participation_ended_at"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <DatePicker
                            dateFormat="yyyy년 MM월 dd일 a hh시"
                            dateFormatCalendar="yyyy년 MM월"
                            locale={ko}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={60}
                            timeCaption="종료시간"
                            placeholderText="종료시간"
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

            <div className="button-container">
                <button>추가</button>
            </div>
        </div>
    );
};

export default Cards;
