class UserController{
    //GET /user/create
    create(req, res, next){
        const data = {
            title: 'Cập nhật thông tin cá nhân',
        };
        res.render('user/create',data);
    }

    //GET /user/:id
    edit(req, res, next){
        const data = {
            title: 'Chỉnh sửa thông tin cá nhân',
        };
        res.render('user/edit',data);
    }
};
module.exports = new UserController;