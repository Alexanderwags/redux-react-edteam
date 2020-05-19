import React from "react";
import { connect } from "react-redux";
function CardCounter({ cardLength }) {
  return (
    <li>
      <button className="button tiny ghost">{`Carrito : ${cardLength.length}`}</button>
    </li>
  );
}
const mapStateToProps = (state) => {
  return {
    cardLength: state.cart,
  };
};
const mapDispacthToProps = () => {};
export default connect(mapStateToProps, mapDispacthToProps)(CardCounter);
