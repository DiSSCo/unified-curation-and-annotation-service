import Keycloak from "keycloak-js";


const keycloak = new Keycloak({
    url: "https://login-demo.dissco.eu/auth",
    realm: "dissco",
    clientId: "orchestration-service"
});

const initKeyCloak = (callback) => {
    keycloak.init({
        onLoad: "check-sso",
        silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
        pkceMethod: "S256"
    })
        .then((authenticated) => {
            if (!authenticated) {
                console.log("User is not authenticated");
            }

            callback();
        })
        .catch(console.error);
}

const doLogin = keycloak.login;

const doLogout = keycloak.logout;

const getToken = () => keycloak.token;

const isLoggedIn = () => !!keycloak.token;

const updateToken = (successCallback) =>
    keycloak.updateToken(5)
        .then(successCallback)
        .catch(doLogin);

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const getGivenName = () => keycloak.tokenParsed?.given_name;

const getFamilyName = () => keycloak.tokenParsed?.family_name;

const getSubject = () => keycloak.subject;

const hasRole = (roles) => roles.some((role) => keycloak.hasRealmRole(role));

const UserService = {
    initKeyCloak,
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    getSubject,
    updateToken,
    getUsername,
    getGivenName,
    getFamilyName,
    hasRole
};

export default UserService;