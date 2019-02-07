import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { loadMenu } from '../../actions/homePageActions/getMenu';
import { updateCount, updateCart } from '../../actions/cartAction/cart';
import MenuLoader from '../../components/home/menuLoader/menuLoader';
export class HomePage extends Component {
  constructor(props) {
    super(props);
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    this.state = {
      totalPrice: 0,
      cart: storedCart || [],
      totalCart: storedCart ? storedCart.length : 0
    };
  }
  componentDidMount() {
    this.props.loadMenu();
  }

  _addToCart = (name, price, img, id) => {
    const itemDetails = {
      name,
      price,
      img,
      id,
      quantity: 1
    };
    const currentCart = this.state.cart;
    const itemIndex = currentCart.findIndex(
      (item) => item.name === itemDetails.name
    );

    if (itemIndex === -1) {
      this.state.cart.push(itemDetails);
      localStorage.setItem('cart', JSON.stringify(this.state.cart));
      this.setState({
        totalCart: this.state.cart.length
      });
      this.props.updateCount(this.state.totalCart);
      toast.success('Item Added to Cart!');
      return;
    }

    this.state.cart[itemIndex].quantity += 1;
    this.state.cart[itemIndex].price += itemDetails.price;
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
    this.props.updateCart();
    this.setState({
      totalCart: this.state.cart.length
    });
    toast.success('Item Added to Cart!');
  };

  render() {
    const menus = (this.props.response || []).map((menu) => (
      <div
        className="card"
        data-name={menu.name}
        data-price={menu.price}
        data-id={menu.id}
        data-img={menu.imageurl}
        key={menu.id}
      >
        <img src={menu.imageurl} />
        <h3>{menu.name}</h3>
        <p>₦{menu.price}</p>
        <button
          className="button-sm"
          onClick={() => {
            this._addToCart(menu.name, menu.price, menu.imageurl, menu.id);
          }}
        >
          Add To Cart
        </button>
      </div>
    ));
    return (
      <Fragment>
        <section id="banner">
          <div className="container">
            <h1> Order fast food on the go </h1>
            <p>...Chops - The fastest way to your stomach</p>
          </div>
        </section>
        <section className="food-items">
          <div className="container">
            <div className="header-bar">
              <h2>Our Menu</h2>
            </div>
            {this.props.isLoading ? <MenuLoader /> : <div>{menus}</div>}
          </div>
        </section>
      </Fragment>
    );
  }
}
export const mapStateToProps = (state) => ({
  ...state.menu
});
export default connect(
  mapStateToProps,
  { loadMenu, updateCount, updateCart }
)(HomePage);
