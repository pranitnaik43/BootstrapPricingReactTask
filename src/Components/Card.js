import React from 'react';

const Card = ({data}) => {
  return (
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{ data.name }</h5>
        <h6 className="card-price text-center">{ data.price }<span className="period">/month</span></h6>
        <hr/>
        <ul className="fa-ul">
        {
          data.features.map(feature => (
            (feature.ticked) ? (
              <li key={ Math.random() }>
                <span className="fa-li">
                  <i className="fa fa-check" aria-hidden="true"></i>
                </span>
                { feature.text }
              </li>
            ) : (
              <li className="text-muted" key={ Math.random() }>
                <span className="fa-li">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </span>
                { feature.text }
              </li>
            )
          ))
        }
        </ul>
        <div className="d-grid">
          <button className="btn btn-primary text-uppercase">Button</button>
        </div>
      </div>
    </div>
  )
}
export default Card;