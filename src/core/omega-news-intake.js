// omega-news-intake.js

require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const outputFile = path.resolve("./omega_news_feed.json");

async function fetchNews() {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        category: "business",
        language: "en",
        pageSize: 10,
        apiKey: process.env.NEWS_API_KEY
      }
    });

    const articles = response.data.articles.map((a, i) => ({
      id: i,
      title: a.title,
      source: a.source.name,
      summary: a.description,
      url: a.url,
      timestamp: new Date().toISOString()
    }));

    fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2));
    console.log(`📰 Omega ingested ${articles.length} news headlines.`);
    return articles;

  } catch (err) {
    console.error("❌ Omega News Intake Failed:", err.message);
    return [];
  }
}

fetchNews();
