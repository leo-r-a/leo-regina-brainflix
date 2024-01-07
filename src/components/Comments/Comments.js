import "./Comments.scss";
import mohan from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";

const Comments = ({ selectedVideoDetails }) => {
  function commentsDate(commentTimestamp) {
    const date = new Date(commentTimestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const parsedDate = month + "/" + day + "/" + year;
    return parsedDate;
  }

  return (
    <main className="comments">
      <h2 className="comments__title">3 Comments</h2>
      <div className="comments__entry">
        <div className="comments__entry--div-for-mohan">
        <img className="comments__entry--mohan" src={mohan} alt="photo of man in profile with purple background"/>
        </div>
       
        <div className="comments__entry--side">
          <h2 className="comments__entry--top">JOIN THE CONVERSATION</h2>
          <input
            className="comments__entry--form"
            placeholder="Add a new comment"
          />
          <button className="comments__entry--button">
            <img src={commentIcon} alt="small speech bubble with a blue plus sign on a white background "/> COMMENT
          </button>
        </div>
      </div>
      <div className="comments__container">
        {selectedVideoDetails.comments.map((comment) => (
          <div key={comment.id} className="comments__container-default">
            <div className="comments__container-image">
              <div className="comments__container-default-top--image"></div>
            </div>
            <div className="comments__container-default-top">
              <h2 className="comments__container-default-top--name">
                {comment.name}
              </h2>
              <h3 className="comments__container-default-top--date">
                {commentsDate(comment.timestamp)}
              </h3>
            </div>
            <div className="comments__container-default-bottom">
              <p className="comments__container-default-bottom--text">
                {comment.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Comments;
