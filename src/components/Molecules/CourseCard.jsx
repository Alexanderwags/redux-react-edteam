import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/actionCreator";
import { connect } from "react-redux";

const CourseCard = ({
  id,
  title,
  image,
  price,
  professor,
  addCourseToCart,
}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div className="s-main-center">{professor}</div>
      <div className="s-main-center">
        <button
          className="button--ghost-alert button--tiny"
          onClick={() => addCourseToCart(id)}
        >
          {`$ ${price} USD`}{" "}
        </button>
      </div>
    </div>
  </article>
);

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string,
};

CourseCard.defaultProps = {
  title: "No se encontró título",
  image: "http://www.ciudaddelapunta.com/sitio/fotos/ciudad/miniaturas/006.jpg",
  price: "--",
  profesor: "",
};

const mapStateToProps = (state) => ({});
const mapDispacthToProps = (dispatch) => ({
  addCourseToCart(id) {
    dispatch(addToCart(id));
    // dispatch(prueba(id));
  },
});
// const prueba = (id) => ({
//   type: "maldita puta",
//   id,
// });
export default connect(mapStateToProps, mapDispacthToProps)(CourseCard);
