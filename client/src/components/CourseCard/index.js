import React, { useState, useContext } from "react";
import API from "../../Utils/API";
import { CartContext } from "../../CartContex";

function CourseCard(props) {
  const [cart, setCart] = useContext(CartContext);
  const [added, setAdd] = useState(false);
  const [selected, setSelect] = useState(0);

  function handleChange(event) {
    console.log(event);
    let selectedValue = event.target.value;

    setSelect(selectedValue);
  }

  function addToCart(item) {
    const productData = {
      name: item.name,
      price: item.price,
      image: item.image,
      id: item._id,
    };

    let result = cart.some((el) => productData.name === el.name);
    if (result) {
      console.log(productData);
      let id = item._id;
      let data = productData;

      API.updateCart(id, data).then((res) => {
        console.log(res);
      });
      setCart([...cart, productData]);
    } else {
      API.addToCart(productData).then((res) => {});
      setCart([...cart, productData]);
    }
  }

  return (
    <div className=" container course-card-container " id="products">
      <div className="row center-align">
        <div className="col m12">
          <h2>A World-Class Learning Experience</h2>
          <h4>Online and in Real Time</h4>
          <h4> Get Hired by Amazing Companies </h4>
        </div>
        <div className="row">
          {props.products.map((item) => (
            <div
              className="col s12 m4
      ">
              <div className="card medium" style={{ width: "16rem" }}>
                <img
                  key={item._id}
                  className="card-image responsive-img section"
                  src={item.image}
                  alt="Course"
                />

                <div className="card-body  ">
                  <div className="course-card ">
                    <h6 className="card-title">{item.name}</h6>
                    <p className="card-link">${item.price}</p>
                    <div className="row">
                      <div className="col"></div>
                      <div className="col">
                        <button
                          className="waves-effect waves-light btn-large center-align"
                          onClick={() => addToCart(item)}>
                          {" "}
                          <i class="material-icons left">add</i>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
