import React, { useEffect, useState } from "react";
import Card from "../../custom/Card/Card";
import "./Home.css";

// const news = [
//   {
//     url: "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/04_apr/26_tue/img_1650952070616_902.jpg?",
//     title: "Elon Musk's old Twitter chat on 'buying Twitter' goes viral",
//     discription: `After Twitter accepted the world's richest man Elon Musk's bid to take over the social media company, an old Twitter chat between Musk and a Business Insider host has gone viral. In 2017, Musk tweeted, "I love Twitter," to which the host replied, "You should buy it then." Responding to the host, Musk had tweeted, "How much is it?"`,
//     link: "https://twitter.com/redletterdave/status/1518585718012059648?s=09&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
//   },
//   {
//     url: "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/04_apr/26_tue/img_1650952070616_902.jpg?",
//     title: "Elon Musk's old Twitter chat on 'buying Twitter' goes viral",
//     discription: `After Twitter accepted the world's richest man Elon Musk's bid to take over the social media company, an old Twitter chat between Musk and a Business Insider host has gone viral. In 2017, Musk tweeted, "I love Twitter," to which the host replied, "You should buy it then." Responding to the host, Musk had tweeted, "How much is it?"`,
//     link: "https://twitter.com/redletterdave/status/1518585718012059648?s=09&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
//   },
//   {
//     url: "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/04_apr/26_tue/img_1650952070616_902.jpg?",
//     title: "Elon Musk's old Twitter chat on 'buying Twitter' goes viral",
//     discription: `After Twitter accepted the world's richest man Elon Musk's bid to take over the social media company, an old Twitter chat between Musk and a Business Insider host has gone viral. In 2017, Musk tweeted, "I love Twitter," to which the host replied, "You should buy it then." Responding to the host, Musk had tweeted, "How much is it?"`,
//     link: "https://twitter.com/redletterdave/status/1518585718012059648?s=09&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
//   },
// ];

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summary from "../../custom/Summary/Summary.js";

const Home = ({ section }) => {
  const [page, setPage] = useState(1);

  const api = `https://newsapi.org/v2/top-headlines?country=in&category=${section.toLowerCase()}&pagSize=25&page=${page}&apiKey=bab0060b597e47a2a45b485f780621bd
`;

  console.log(api);

  const [news, setNews] = useState([]);

  // const PageIncrease = () => {
  //   setPage(page + 1);
  // };

  // const PageDecrease = () => {
  //   if (page >= 0) setPage(page - 1);
  // };

  console.log(page);

  useEffect(() => {
    fetchNews();
    window.scrollTo(0, 0);
  }, [section, page]);

  const fetchNews = async () => {
    try {
      const response = await fetch(api, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      console.log(data.articles);
      setNews(data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="home-main">
        {news.map((item) => (
          <>
            <Card
              url={item.urlToImage}
              title={item.title}
              description={item.description}
              link={item.url}
            />
          </>
        ))}
        <div className="btn-container">
          <button
            className="home-main-btn bg-primary"
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <button
            className="home-main-btn bg-primary"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
