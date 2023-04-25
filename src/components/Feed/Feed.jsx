import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed({userProfile, tweets, setTweets, tweetText, setTweetText}) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox
        userProfile={userProfile}
        setTweets={setTweets}
        tweetText={tweetText}
        setTweetText={setTweetText}
      />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
        /* ADD CODE HERE */
        tweets.map((tweet) => {
          console.log({
            context: "Feed/twitter-feed",
            tweet: tweet
          });

          return (
            <Tweet key={tweet.id} tweet={tweet}/>
          )
        })
      }</div>
    </div>
  )
}
