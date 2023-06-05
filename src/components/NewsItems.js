import React, { Component } from "react";

export default class NewsItems extends Component {
  render(props) {
    let { title, description, imageUrl, NewsUrl, author, date, source } =
      this.props;
    return (
      <>   
         <div className="my-4 mx-10">
        <div className="card" style={{ width: "20rem" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : " "
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              <span className="position-absolute top-0 start-60 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}  > 
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="cart-text">
              <small className="text-danger">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={NewsUrl} target="-blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
      </>

    );
  }
}
