import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SalesChart = () => {

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 2,
      },
    },
    colors: ["#AFEEEE", "#B0E0E6", "#87CEFA","#00BFFF","#4169E1"],
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };


  const series = [
    {
      name: "현장1",
      data: [20, 40, 50, 30, 40, 50],
    },
    {
      name: "현장2",
      data: [10, 20, 40, 60, 20, 40],
    },
    {
      name: "현장3",
      data: [30, 10, 20, 90, 70, 40],
    },
    {
      name: "현장4",
      data: [10, 20, 40, 60, 20, 40],
    },
    {
      name: "현장5",
      data: [20, 40, 50, 30, 40, 50],
    },
  ];

  const categories = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Set","Oct","Nov","Dec"
  ];

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedCategories = chunkArray(categories, 6);

  const chartSlides = chunkedCategories.map((chunk, index) => (
      <SwiperSlide key={index}>
        <Chart options={{ ...options, xaxis: { categories: chunkedCategories[index] } }} series={series} type="bar" height="379" />
      </SwiperSlide>
  ));

  return (
      <Card>
        <CardBody>
          <CardTitle tag="h5">출석률</CardTitle>
          <CardSubtitle className="text-muted" tag="h6">
            현장별 출석 그래프
          </CardSubtitle>
          <Swiper
              className="banner"
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
          >
            {chartSlides}
          </Swiper>
        </CardBody>
      </Card>
  );
};

export default SalesChart;