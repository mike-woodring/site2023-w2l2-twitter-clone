import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  function handleOnSubmit() {
    var newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: "",
      comments: 0,
      retweets: 0,
      likes: 0
    };

    console.log({
      context: "TweetBox.handleOnSubmit",
      props: props,
      newTweet: newTweet
    })

    props.setTweets((oldTweets) => {
      var newTweets = [...oldTweets, { ...newTweet, id: oldTweets.length }];

      console.log({
        context: "TweetBox.handleOnSubmit.setTweets",
        oldTweets: oldTweets,
        newTweets: newTweets
      })

      return newTweets
    })
  }
  
  return (
    <div className="tweet-box">
      <TweetInput />

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
  console.log({
    context: "TweetSubmitButton.ctor",
    handleOnSubmit: handleOnSubmit
  })

  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit}>Tweet</button>
    </div>
  )
}
