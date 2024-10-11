import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:7000",
    issuerBaseURL: "https://dev-862lkkkvx3yc5qxr.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck