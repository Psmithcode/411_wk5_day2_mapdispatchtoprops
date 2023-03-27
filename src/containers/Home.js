import { connect } from "react-redux";
import Home from "../components/Home";
import { removeCar, addCar } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car)),
    removeCar: (index) => dispatch(removeCar(index)),
  };
};

export default connect(mapStateToProps)(Home);
