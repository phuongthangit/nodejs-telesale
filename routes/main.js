const authRouter = require('./auth');
const userRouter = require('./user');
const campaignRouter = require('./campaign');
function route(app){

    app.use('/user',userRouter);
    app.use('/campaign',campaignRouter);
    app.use('/',authRouter);
}

module.exports  = route;