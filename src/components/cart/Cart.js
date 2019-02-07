import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { placeOrder, deleteItemFromcart } from '../../actions/cartAction/order';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0
    };
    this._placeOrder = this._placeOrder.bind(this);
    this._deleteItem = this._deleteItem.bind(this);
  }

  _placeOrder = () => {
    this.token = localStorage.getItem('fastFoodToken');
    {
      !this.token
        ? toast.error('Please login to place order', {
            position: toast.POSITION.TOP_CENTER
          })
        : this.props.placeOrder(this.props.cart);
    }
  };
  _deleteItem = (id) => {
    this.props.deleteItemFromcart(id);
  };
  render() {
    let tp = 0;
    {
      this.props.response
        ? toast.success('Order placed successfuly', {
            position: toast.POSITION.TOP_CENTER
          })
        : null;
    }
    //const todayDate = new Date().toISOString().slice(0, 10);
    const cartItems = (this.props.cart || []).map(
      (item) => (
        (tp += parseInt(item.price)),
        (
          <tr key={item.id}>
            <td>
              <img src={item.img} className="table-img" />
            </td>
            <td>{item.name}</td>
            <td>&#8358;{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <button
                className="button-sm"
                onClick={() => {
                  this._deleteItem(item.id);
                }}
              >
                Remove
              </button>
            </td>
          </tr>
        )
      )
    );

    return (
      <Fragment>
        <section className="food-items">
          <div className="container">
            <div id="history">
              <h3 className="header-bg">Items In Cart</h3>
              {this.props.cart.length > 0 ? (
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Item Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems}
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td>
                        <h3>
                          <strong>Total:</strong>&#8358;{tp}
                        </h3>
                      </td>
                      <td>
                        {!this.props.isLoading ? (
                          <span className="button">
                            <a onClick={this._placeOrder}>CHECKOUT</a>
                          </span>
                        ) : (
                          <center>
                            <ClipLoader
                              sizeUnit="px"
                              size={30}
                              color={'#e8491d'}
                              loading={this.props.isLoading}
                            />
                          </center>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <p>No item in your cart</p>
              )}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state.cart
});
export default connect(
  mapStateToProps,
  { placeOrder, deleteItemFromcart }
)(Cart);
