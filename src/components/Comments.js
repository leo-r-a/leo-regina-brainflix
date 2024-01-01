import mohan from "../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../assets/Icons/add_comment.svg";

const Comments = ({ comments }) => {
  return (
    <main className="comments">
      <h2 className="comments__title">3 Comments</h2>
      <div className="comments__entry">
        <h2 className="comments__entry--top">JOIN THE CONVERSATION</h2>
        <img className="comments__entry--mohan" src={mohan} />
        <input
          className="comments__entry--form"
          placeholder="Add a new comment"
        />
        <button className="comments__entry--button">
          <img src={commentIcon} /> COMMENT
        </button>
      </div>
      <div className="comments__container">
        <div class="comments__container-default">
          <div class="comments__container-image">
            <div class="comments__container-default-top--image"></div>
          </div>
          <div class="comments__container-default-top">
            <h2 class="comments__container-default-top--name">
              this the commenters name
            </h2>
            <h3 class="comments__container-default-top--date">
              this is the date
            </h3>
          </div>
          <div class="comments__container-default-bottom">
            <p class="comments__container-default-bottom--text">
              this is where the comment goes
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Comments;
