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
  
  const isDisabled = tweetText.length === 0 || tweetText.length > 140
  const charactersLeft = 140 - tweetText.length

  console.log({
    context: "TweetBox.handleOnSubmit",
    isDisabled: isDisabled,
    charactersLeft: charactersLeft
  });

  return (
    <div className="tweet-box">
      <TweetInput value={tweetText} handleOnChange={handleOnTweetTextChange} />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount charactersLeft={charactersLeft} />
        <TweetSubmitButton isDisabled={isDisabled} handleOnSubmit={handleOnSubmit} />
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

export function TweetCharacterCount({charactersLeft}) {
  // ADD CODE HERE
  const className = charactersLeft < 0 ? "red" : ""
  return <span className={`tweet-length ${className}`}>{charactersLeft}</span>
}

export function TweetSubmitButton({isDisabled, handleOnSubmit}) {
  console.log({
    context: "TweetSubmitButton.ctor",
    handleOnSubmit: handleOnSubmit,
    isDisabled: isDisabled
  })

  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" disabled={isDisabled} onClick={handleOnSubmit}>Tweet</button>
    </div>
  )
}
