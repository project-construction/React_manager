import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useForm } from "react-hook-form";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";

const Cards = ({ }) => {
    const { control, handleSubmit } = useForm(); // useForm 훅으로 제어 객체 생성

    return (
        

        <div>
            <Controller
                name="participation_started_at"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <DatePicker
                        dateFormat="yyyy년 MM월 dd일 a hh시"
                        dateFormatCalendar="yyyy년 MM월"
                        locale={ko}  // 수정: 한국어 로케일을 지정합니다.
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
            <p></p>
                <Controller
                    name="participation_started_at"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <DatePicker
                            dateFormat="yyyy년 MM월 dd일 a hh시"
                            dateFormatCalendar="yyyy년 MM월"
                            locale={ko}  // 수정: 한국어 로케일을 지정합니다.
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

            <div>
                <button>추가</button>
            </div>
        </div>
    );
};

export default Cards;
