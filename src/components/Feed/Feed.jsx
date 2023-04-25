import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox userProfile={props.userProfile} setTweets={props.setTweets} />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
        /* ADD CODE HERE */
        props.tweets.map((tweet) => {
          <Tweet key={tweet.id} tweet={tweet}/>
        })
      }</div>
    </div>
  )
}
