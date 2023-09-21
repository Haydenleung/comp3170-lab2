import NewsFeed from "./components/NewsFeed";
import News from "./components/News";
import newsJson from "../src/sample_news_stories.json";

import "./styles.css";

export default function App() {
  return (
    <div className="mainContainer">
      <h1>My News Feed</h1>
      <NewsFeed>
        {newsJson.results.map((item, index) => (
          <News
            image={item.image_url}
            title={item.title}
            link={item.link}
            creator={item.creator}
            description={item.description}
            full={item.full_description}
            key={index}
          />
        ))}
      </NewsFeed>
    </div>
  );
}
