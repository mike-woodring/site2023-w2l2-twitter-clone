import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox({userProfile, setTweets, tweetText = "", setTweetText}) {
  function handleOnTweetTextChange(ev) {
    console.log({
      context: "TweetBox.handleOnTweetTextChange",
      ev: ev
    })
    
    setTweetText(ev.target.value);
  }

  function handleOnSubmit(ev) {

    var newTweet = {
      name: userProfile.name,
      handle: userProfile.handle,
      text: tweetText,
      comments: 0,
      retweets: 0,
      likes: 0
    };

    console.log({
      context: "TweetBox.handleOnSubmit",
      userProfile: userProfile,
      setTweets: setTweets,
      tweetText: tweetText,
      setTweetText: setTweetText,
      newTweet: newTweet,
      ev: ev
    })

    setTweets((oldTweets) => {
      var newTweets = [...oldTweets, { ...newTweet, id: oldTweets.length }];

      console.log({
        context: "TweetBox.handleOnSubmit.setTweets",
        oldTweets: oldTweets,
        newTweets: newTweets
      })

      return newTweets
    })

    setTweetText("");
  }
  
  return (
    <div className="tweet-box">
      <TweetInput value={tweetText} handleOnChange={handleOnTweetTextChange} />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

export function TweetSubmitButton({handleOnSubmit}) {
  /*
  console.log({
    context: "TweetSubmitButton.ctor",
    handleOnSubmit: handleOnSubmit
  })
  */

  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit}>Tweet</button>
    </div>
  )
}
