import { connect } from "react-redux";
import AddCar from "../components/AddCar";
import { addCar } from "../redux/actions";

// add mapDispatchToProps function here

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car)),
  };
};

export default connect(null, mapDispatchToProps)(AddCar);
