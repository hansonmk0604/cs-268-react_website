import { Store } from "pullstate";
export const UserInfo = new Store({
    userId:'',
    userToken: '',
    userEmail: '',
    userLoggedIn: false
})