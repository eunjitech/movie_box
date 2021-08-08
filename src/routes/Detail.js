import React from "react";
import "../reset.css";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    const title = document.querySelector("title");
    title.textContent = `Movie Box | ${location.state.title}`;
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail">
          <img
            className="detail__bg"
            src={location.state.bgImage}
            alt={location.state.title}
          />
          <img
            className="detail__large"
            src={location.state.detailPoster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="detail__text">
            <div className="title__gap">
              <span className="detail__title">{location.state.title} </span>
              <span className="detail__year">({location.state.year})</span>
            </div>
            <span className="detail__genres">
              {location.state.genres.map((genre, index) => (
                <li key={index} className="detail__genre">
                  {genre}
                </li>
              ))}
            </span>
            <p className="detail__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
