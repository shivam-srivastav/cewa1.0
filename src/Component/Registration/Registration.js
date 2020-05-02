import React from "react";
import axios from "axios";
import { addReg } from "../../js/action/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Registration.scss";
import register from "../../assets/register.png";

function mapDispatchToProps(dispatch) {
  return {
    addReg: (name) => dispatch(addReg(name)),
  };
}

const mapStateToProps = (state) => {
  return { name: state.name, classs: state.classs, email: state.email };
};

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      classs: "",
      email: "",
      password: "",
    };
    // this.onClickHandel=this.onClickHandel.bind(this)
  }

  onChangeHandel = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitHandel = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name,
      classs: this.state.classs,
      email: this.state.email,
      password: this.state.password,
    };
    const { name, classs, email } = this.state;
    this.props.addReg({ name }, { classs }, { email });
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        //   console.log(res);
        //   console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="sign-up">
        <div className="Home-navbar">
          <h1>Home Quarntine</h1>
        </div>
        <div className="image">
          <img src={register} alt="register"></img>
        </div>
        <div className="X">
          <div className="X-reg">
            <h1>SIGN-UP</h1>
            <form
              onChange={this.onChangeHandel}
              onSubmit={this.onSubmitHandel}
              className="reg-form"
            >
              <div className="reg-form-name">
                {this.state.name}
                <input type="text" name="name" placeholder="Full Name" />
              </div>
              <br />
              <div className="reg-form-classs">
                {this.state.classs}
                <input
                  type="text"
                  name="classs"
                  // value={this.state.class}
                  placeholder="Class"
                />
              </div>
              <br />
              <div className="reg-form-email">
                {this.state.email}
                <input type="email" name="email" placeholder="Email" />
              </div>
              <br />
              <div className="reg-form-password">
                {this.state.password}
                <input type="password" name="password" placeholder="Password" />
              </div>
              <br />
              <button className="reg-form-button">Registration</button>
            </form>
            <br />
            <br />
            <div className="reg-signin">
              <p>Already have an account?</p>
              <div>
                <Link to="/signin">Sign-in</Link>
              </div>
            </div>
            {/* { console.log(this.props)}
        <h1>Hey {this.props.name}</h1>
        <p>You are Registered Successfully and your email is {this.props.email} and class is {this.props.classs}</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
// export default Registration;
