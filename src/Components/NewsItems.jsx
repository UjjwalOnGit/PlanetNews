import image from '../assets/pctpay.png';
const NewsItems = ({title,descreption,src,url}) => {
  return (
    <div
      className="mb-3 d-inline-block my-3 mx-4 px-2 py-2 card shadow" style={{maxWidth: "343px",}}
    >
      <img src={src ? src : image} style={{ height: "200px", width: "325px" }} className="card-img-top rounded mb-3" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{descreption}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewsItems