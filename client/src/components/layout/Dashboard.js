import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;
    return (
     /* <div  className="container text-center mt-15">
        <div className="row">
          <div className="col-sm-12">*/
     const dataArray = new FormData();
    dataArray.append("uploadFile", uploadFile);

    axios
      .post("api_url_here", dataArray, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((response) => {
      })
      .catch((error) => {
      });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          onChange={(e) => setSuperHero(e.target.value)}
          placeholder={"Superhero Name"}
        />
        <br />
        <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
        <br />
        <input type="submit" />
      </form>
    </div>
  

        
            
            <button
              onClick={this.onLogout}
              className="btn btn-large btn-light hoverable font-weight-bold"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);