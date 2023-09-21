export default function News(props) {
  let img;
  if (!props.image || props.image.includes("mp4")) {
    img = "https://picsum.photos/id/180/200";
  } else {
    img = props.image;
  }
  let description;
  if (!props.description) {
    description = props.full;
  } else {
    description = props.description;
  }
  let author;
  if (!props.creator) {
    author = "Author: None";
  } else {
    author = "Author: " + props.creator;
  }
  function handleClick(event) {
    event.target.parentElement.remove();
  }
  return (
    <div className="news">
      <div className="close" onClick={handleClick}>
        X
      </div>
      <img className="image" src={img} alt="" />
      <a className="title" href={props.link}>
        {props.title}
      </a>
      <h4 className="creator">{author}</h4>
      <p className="description">{description}</p>
    </div>
  );
}
