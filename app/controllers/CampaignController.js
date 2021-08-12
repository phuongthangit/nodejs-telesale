class CampaignController{
    //GET /user/create
    create(req, res, next){
        const data = {
            title: 'Cập nhật thông tin chiến dịch',
        };
        res.render('campaign/create',data);
    }

    //GET /user/:id
    edit(req, res, next){
        const data = {
            title: 'Chỉnh sửa thông tin chiến dịch',
        };
        res.render('campaign/edit',data);
    }
};
module.exports = new CampaignController;