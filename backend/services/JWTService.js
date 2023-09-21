const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN_SECRET,REFRESH_TOKEN_SECRET} = require('../config/index');
const RefreshToken = require('../models/token');
// const jwt = require('jsonwebtoken');
// const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = require('../config/index');
// const RefreshToken = require('../models/token');

// // const ACCESS_TOKEN_SECRET = "b7f9cc438abc512316b10c3fbf19727c30acff06c5452311cd7fc704170ec9335962b14964b197b63b2c9e5f27af55738be4043de411fbf0026cdd71bdc9d14b"

// // const REFRESH_T0KEN_SECRET = "6b396690972793eb2eca574de464ad9ea8034a88d97d5e76a667fb9abdef033b3d5e3ea3b90395ac20218018423edc1b9df65ffd884a69381520102f1c8b5c12"

// class JWTService{
//     // sign access token
//     // in this we have passed he secret key to variable but in future we dont change any secret key so we are going to 
//     // write this as direct pass which is shown below after the old funtion same for the refresh token

//     // signAccessToken(payload, expiryTime, secret=ACCESS_TOKEN_SECRET){
//     //     return jwt.sign(payload, secret, {expiresIn: expiryTime});
//     // }
//     static signAccessToken(payload, expiryTime){
//         return jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: expiryTime});
//     }
//     // sign refresh token

//     static signRefreshToken(payload, expiryTime){
//         return jwt.sign(payload, REFRESH_T0KEN_SECRET, {expiresIn: expiryTime});
//     }

//     // verify access token

//     static verifyAcessToken(token){
//         return jwt.verify(token,ACCESS_TOKEN_SECRET);
//     }

//     // verify refresh token

//     static verifyRefreshToken(token){
//         return jwt.verify(token,REFRESH_T0KEN_SECRET);
//     }

//     // store refresh token

//     static async storeRefreshToken(token,userID){
//         try {
//             coonst newToken = new RefreshToken({
//                 token:token,
//                 userID:userID
//             });
//             await newToken.save();
//         } catch (error) {
//             console.log(error);
//         }
//     }

// }

// module.exports = JWTService;



class JWTService{
    // sign access token
//     static signAccessToken(payload, expiryTime){
//         return jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: expiryTime});
//     }
    
    static signAccessToken(payload, expiryTime){
        return jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: expiryTime});
    }

    // sign refresh token
//     static signRefreshToken(payload, expiryTime){
//         return jwt.sign(payload, REFRESH_TOKEN_SECRET, {expiresIn: expiryTime});
//     }
    static signRefreshToken(payload, expiryTime){
        return jwt.sign(payload, REFRESH_TOKEN_SECRET, {expiresIn: expiryTime});
    }

    // verify access token
//     static verifyAcessToken(token){
//         return jwt.verify(token,ACCESS_TOKEN_SECRET);
//     }

    static verifyAccessToken(token){
        return jwt.verify(token, ACCESS_TOKEN_SECRET);
    }

    // verify refresh token

//     static verifyRefreshToken(token){
//         return jwt.verify(token,REFRESH_TOKEN_SECRET);
//     }

    static verifyRefreshToken(token){
        return jwt.verify(token, REFRESH_TOKEN_SECRET)
    }

    // store refresh token

    // static async storeRefreshToken(token,userID){
        //         try {
        //             const newToken = new RefreshToken({
        //                 token:token,
        //                 userID:userID
        //             });
        //             await newToken.save();
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }

    static async storeRefreshToken(token, userId){
        try{
            const newToken = new RefreshToken({
                token: token,
                userId: userId
            });

            // store in db
            await newToken.save();
        }
        catch(error){
            console.log(error);
        }
    }
}

// module.exports = JWTService;
module.exports = JWTService;