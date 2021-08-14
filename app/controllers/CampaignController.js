class CampaignController{
    //GET /campaign/create
    create(req, res, next){
        const data = {
            title: 'Cập nhật thông tin chiến dịch',
        };
        res.render('campaign/create',data);
    }

    //GET /campaign/:id
    edit(req, res, next){
        const data = {
            title: 'Chỉnh sửa thông tin chiến dịch',
        };
        res.render('campaign/edit',data);
    }

    //GET /campaign
    index(req, res, next){
        const data = {
            title: 'Danh sách chiến dịch',
        };
        res.render('campaign/index',data);
    }

    //GET /campaign/slug/detail
    detail(req, res, next){
        const data = {
            title: 'Chi tiết chiến dịch',
        };
        res.render('campaign/detail',data);
    }
};
module.exports = new CampaignController;