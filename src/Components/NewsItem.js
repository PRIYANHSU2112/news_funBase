import React from "react";

export default function NewsItem(props) {
  let{title,description,imageUrl,newsUrl,author,date}= props;

  return (
    <div>
      <div className="card">
        <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/tech/img/2024/02/10/1600x900/brano-tLFHQIqALz0-unsplash_1685329752753_1707572454112.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text"><small class="text-muted">By: {author?author:"unkown"} , Date: {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl}  className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  )
}


// {{style="width: 18rem;"}}
