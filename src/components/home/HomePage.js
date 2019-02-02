import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadMenu } from '../../actions/homePageActions/getMenu';
import MenuLoader from '../../components/home/menuLoader/menuLoader';
class HomePage extends Component {
  componentDidMount() {
    this.props.loadMenu();
  }

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
        <button className="button-sm">Order Now</button>
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
const mapStateToProps = (state) => ({
  ...state.menu
});
export default connect(
  mapStateToProps,
  { loadMenu }
)(HomePage);
