import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import Header from "../components/Header/Header";

const mapState = ({ auth }: any) => auth;

const mapDispatch = (dispatch: Dispatch) => ({
  openLoginModal: () => dispatch({ type: "loginModal" }),
});

export default connect(mapState, mapDispatch)(Header);
