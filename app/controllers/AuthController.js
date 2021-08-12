class AuthController {
    //[GET] /
    login(req, res, next){
        const data = {
            title : 'Login'
        }
        res.render('auth/login',data);
    }

    //[GET] /register
    register(req, res, next){
        const data = {
            title : 'Register'
        }
        res.render('auth/register',data);
    }

    //[GET] /fogot/password
    forgotPassword(req, res, next){
        const data = {
            title : 'Forgot Password'
        }
        res.render('auth/forgot_password',data);
    }
};
module.exports = new AuthController;