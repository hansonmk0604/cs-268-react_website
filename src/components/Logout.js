import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import {useCookies} from "react-cookie";
import {UserInfo} from "./UserInfo";

function Logout() {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
   removeCookie('userToken')
    UserInfo.update(s => {
        s.userLoggedIn = false;
        s.userToken = '';
        s.userId = '';
        s.userEmail = '';
    })
      return(
        <Redirect to = {{
          pathname: "/login",
        }} />
      );
}

export default Logout;