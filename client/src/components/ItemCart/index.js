import React from "react";
import "./assets/style.scss";

function ItemCart(props) {
  console.log(props);
  return (
    <div className="item-cart">
      {props.items.map((item) => (
        <div class="card small blue-grey lighten-2">
          <div className="row ">
            <div className="col m6 m3">
              <div className="">
                {" "}
                <img
                  key={item._id}
                  className="item-img-cart section"
                  src={item.image}
                  alt="Course"
                />
              </div>
              <div className="col m10 card-content">
                <div className="row">
                  <div className="col s6">
                    {" "}
                    <span class="card-title">
                      {" "}
                      <h6>{item.name}</h6>
                    </span>
                  </div>
                  <div className="col s6">
                    {" "}
                    <p>${item.price}</p>
                  </div>
                </div>

                <div className="row remove-row">
                  <div className="col  ">
                    <p
                      id={item._id}
                      value={item}
                      className="waves-effect waves-light btn-small  red darken-3 center-align"
                      onClick={props.deleteItem}>
                      <i class="fas fa-minus-circle pr-2"></i> Remove
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCart;
