import React, {useEffect} from "react";
import {Container, Row, Spinner} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {useCookies} from "react-cookie";
import {UserInfo} from "./UserInfo";
import {useStoreState} from "pullstate";

function Logout() {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const userInfoState = useStoreState(UserInfo)
    useEffect(() => {
        removeCookie('userToken')
        UserInfo.update(s => {
            s.userLoggedIn = false;
            s.userToken = '';
            s.userId = '';
            s.userEmail = '';
        })
    })
    if (!userInfoState.userLoggedIn) {
        return (
            <Redirect to={{
                pathname: "/login",
            }}/>
        );
    } else {
        return (
            <Container>
                <Row>
                    <Spinner animation="border" variant="info"/>
                </Row>
            </Container>
        )
    }

}

export default Logout;