import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <section id="banner">
          <div className="container">
            <h1> Order fast food on the go </h1>
            <p> ...Chops - The fastest way to your stomach</p>
          </div>
        </section>
        <section className="food-items">
          <div className="container">
            <aside id="cart">
              <h3 className="header-bg">Your Order</h3>
              <div>
                <table className="table table-hover table-bordered">
                  <tbody id="cartItems" />
                  <tbody>
                    <tr id="checkout">
                      <td />
                      <td>
                        <h3>
                          <strong>Total</strong>
                        </h3>
                      </td>
                      <td id="total-price">0</td>
                      <td>
                        <span className="button">
                          <Link to="">CHECKOUT</Link>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
              </div>
            </aside>
            <div className="category" id="popular">
              <div className="header-bar">
                <h2> Popular Meals</h2>
              </div>
              <div
                className="card"
                data-name="Citizen Meal"
                data-price={600}
                data-id={2}
                data-img="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/image_1.jpg"
              >
                <img src="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/image_1.jpg" />
                <h3>Citizen Meal</h3>
                <p>₦600</p>
                <button className="button-sm">Order Now</button>
              </div>
              <div
                className="card"
                data-name="Citizen Meal"
                data-price={700}
                data-id={3}
                data-img="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/image_1.jpg"
              >
                <img src="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/image_1.jpg" />
                <h3>Citizen Meal</h3>
                <p>₦700</p>
                <button className="button-sm">Order Now</button>
              </div>
              <div
                className="card"
                data-name="Citizen Meal"
                data-price={800}
                data-id={4}
                data-img="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/image_1.jpg"
              >
                <img src="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/image_1.jpg" />
                <h3>Citizen Meal</h3>
                <p>₦800</p>
                <button className="button-sm">Order Now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="food-items">
          <div className="container">
            <div className="header-bar">
              <h2>More Meals</h2>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/amma-jamma-rodo-sauce.jpg" />
              <h3>Amma Jamma Sauce</h3>
              <p>₦600</p>
              <p>
                <span className="button-sm">Order Now</span>
              </p>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/meat-pie.jpg" />
              <h3>Meat Pie</h3>
              <p>₦600</p>
              <p>
                <span className="button-sm">Order Now</span>
              </p>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/pasta_chicken.png" />
              <h3>Pasta Chicken</h3>
              <p>₦600</p>
              <p>
                <span className="button-sm">Order Now</span>
              </p>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/rice-and-beans.jpg" />
              <h3>Rice and Beans</h3>
              <p>₦600</p>
              <p>
                <span className="button-sm">Order Now</span>
              </p>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/image_3.png" />
              <h3>Naija Girl</h3>
              <p>₦600</p>
              <p>
                <span className="button-sm">Order Now</span>
              </p>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default HomePage;
