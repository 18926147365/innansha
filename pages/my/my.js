var appInstance = getApp();


var pageData    = {
  data: {"user_center1":{"type":"user-center","style":"height:550.78125rpx;color:rgb(255, 255, 255);opacity:1;margin-left:auto;","content":"","customFeature":{"with-horizontal":true,"mode":1,"appendComponent":["myAddress","myOrder","shoppingCart"]},"animations":[],"page_form":"","compId":"user_center1","parentCompid":"user_center1"},"static_vessel2":{"type":"static-vessel","style":"background-color:rgb(255, 255, 255);margin-top:4.6875rpx;opacity:1;margin-left:auto;","content":[{"type":"layout-vessel","style":"height:38;background-color:rgb(255, 255, 255);margin-top:-14.0625rpx;opacity:1;min-height:auto;margin-left:auto;","content":{"leftEles":[{"type":"picture","style":"height:51.5625rpx;width:51.5625rpx;margin-left:23.4375rpx;margin-right:auto;margin-top:-2.34375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_56d6b0e95d984.jpg","customFeature":[],"animations":[],"compId":"data.content.leftEles[0]","parentCompid":null}],"rightEles":[{"type":"layout-vessel","style":"height:28;min-height:auto;margin-left:auto;","content":{"leftEles":[{"type":"text","style":"font-size:30.46875rpx;margin-top:-21.09375rpx;margin-bottom:11.71875rpx;margin-left:auto;","content":"我的优惠券","customFeature":[],"animations":[],"compId":"data.content.leftEles[0]","parentCompid":null}],"rightEles":[{"type":"layout-vessel","style":"height:23;margin-top:-46.875rpx;min-height:auto;margin-left:auto;","content":{"leftEles":[],"rightEles":[{"type":"picture","style":"height:35.15625rpx;width:21.09375rpx;margin-top:-7.03125rpx;margin-left:23.4375rpx;margin-right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_56d6af09e1ca1.png","customFeature":[],"animations":[],"compId":"data.content.rightEles[0]","parentCompid":null}]},"customFeature":{"cellWidth":87},"animations":[],"parentCompid":null,"cell_style_1":"width:87%;margin-left:auto;","cell_style_2":"width:13%;border-left-style:;margin-left:auto;"}]},"customFeature":{"cellWidth":25},"animations":[],"parentCompid":null,"cell_style_1":"width:25%;margin-left:auto;","cell_style_2":"width:75%;border-left-style:;margin-left:auto;"}]},"customFeature":{"cellWidth":13},"animations":[],"parentCompid":"static_vessel2","cell_style_1":"width:13%;margin-left:auto;","cell_style_2":"width:87%;border-left-style:;margin-left:auto;"}],"customFeature":[],"animations":[],"page_form":"","compId":"static_vessel2"},"breakline3":{"type":"breakline","style":"border-color:rgb(243, 243, 243);margin-left:auto;","content":"<div><\/div>","customFeature":[],"animations":[],"page_form":"","compId":"breakline3","parentCompid":"breakline3"},"static_vessel4":{"type":"static-vessel","style":"background-color:rgb(255, 255, 255);margin-top:2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"layout-vessel","style":"height:39;background-color:rgb(255, 255, 255);margin-top:-18.75rpx;opacity:1;min-height:auto;margin-left:auto;","content":{"leftEles":[{"type":"picture","style":"height:51.5625rpx;width:51.5625rpx;margin-left:23.4375rpx;margin-right:auto;margin-top:-2.34375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_56d6b10249384.jpg","customFeature":[],"animations":[],"compId":"data.content.leftEles[0]","parentCompid":null}],"rightEles":[{"type":"layout-vessel","style":"height:29;opacity:1;min-height:auto;margin-left:auto;","content":{"leftEles":[{"type":"text","style":"font-size:30.46875rpx;margin-top:-18.75rpx;margin-bottom:11.71875rpx;margin-left:auto;","content":"推荐好友有礼","customFeature":[],"animations":[],"compId":"data.content.leftEles[0]","parentCompid":null}],"rightEles":[{"type":"layout-vessel","style":"height:28;margin-top:-46.875rpx;opacity:1;min-height:auto;margin-left:auto;","content":{"leftEles":[],"rightEles":[{"type":"picture","style":"height:35.15625rpx;width:21.09375rpx;margin-top:2.34375rpx;margin-left:25.78125rpx;margin-right:auto;opacity:1;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_56d6af09e1ca1.png","customFeature":[],"animations":[],"compId":"data.content.rightEles[0]","parentCompid":null}]},"customFeature":{"cellWidth":85},"animations":[],"parentCompid":null,"cell_style_1":"width:85%;margin-left:auto;","cell_style_2":"width:15%;border-left-style:;margin-left:auto;"}]},"customFeature":{"cellWidth":32},"animations":[],"parentCompid":null,"cell_style_1":"width:32%;margin-left:auto;","cell_style_2":"width:68%;border-left-style:;margin-left:auto;"}]},"customFeature":{"cellWidth":13},"animations":[],"parentCompid":"static_vessel4","cell_style_1":"width:13%;margin-left:auto;","cell_style_2":"width:87%;border-left-style:;margin-left:auto;"}],"customFeature":[],"animations":[],"page_form":"","compId":"static_vessel4"},"breakline5":{"type":"breakline","style":"","content":"<div><\/div>","customFeature":[],"animations":[],"page_form":"","compId":"breakline5","parentCompid":"breakline5"},"text6":{"type":"text","style":"text-align:center;color:rgb(153, 153, 153);margin-top:23.4375rpx;margin-left:auto;","content":"这里，你可以编辑你想要的","customFeature":[],"animations":[],"page_form":"","compId":"text6","parentCompid":"text6"},"has_tabbar":1
  ,userInfo:appInstance.globalData.userInfo
  
  },
  page_router: 'page10005',
    page_form: 'none',
      list_compids_params: [],
      goods_compids_params: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      onLoad: function (e) {
    this.setData({
      addShoppingCartHidden: true
    });
    appInstance.setPageUserInfo();
    if(e.detail){
      this.dataId = e.detail;
    }
    appInstance.checkLogin();

    this.suspensionBottom();
    
  },
  dataInitial: function(){
    appInstance.dataInitial();
  },
  onShareAppMessage: function(){
    var pageRouter = this.page_router;

    // 统计用户分享APP
    appInstance.countUserShareApp();
    
    return {
      title: appInstance.getAppTitle() || '即速应用',
      desc: appInstance.getAppDescription() || '即速应用，拖拽生成app，无需编辑代码，一键打包微信小程序',
      path: '/pages/'+pageRouter+'/'+pageRouter
    }
  },
  onShow: function(){
    var that = this;
    setTimeout(function(){
      appInstance.setPageUserInfo();
    });
  },

  suspensionBottom: function(){
    for (let i in this.data) {
      if(/suspension/.test(i)){
        let suspension = this.data[i],
            newdata = {};

        if(this.data.has_tabbar == 1){
          newdata[i + '.suspension_bottom'] = (+suspension.suspension_bottom - 56)*2.34;
        }else{
          newdata[i + '.suspension_bottom'] = (+suspension.suspension_bottom)*2.34;
        }
        this.setData(newdata);
      }
    }
  },
  pageScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    appInstance.pageScrollFunc(compid, curpage);
  },
  goodsScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    appInstance.goodsScrollFunc(compid, curpage);
  },
  franchiseeScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    appInstance.franchiseeScrollFunc(compid, curpage);
  },
  changeCount: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.changeCount(dataset);
  },
  inputChange: function (e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.inputChange(dataset, value);
  },
  bindDateChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value   = e.detail.value;
    appInstance.bindDateChange(dataset, value);
  },
  bindTimeChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value   = e.detail.value;
    appInstance.bindTimeChange(dataset, value);
  },
  bindSelectChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.bindSelectChange(dataset, value);
  },
  bindScoreChange: function(e){
    let dataset = e.currentTarget.dataset;
    appInstance.bindScoreChange(dataset);
  },
  submitForm: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.submitForm(dataset);
  },
  udpateVideoSrc: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.udpateVideoSrc(dataset);
  },
  tapMapDetail: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.tapMapDetail(dataset);
    // appInstance.turnToPage("../mapDetail/mapDetail?eventParams=" + event.currentTarget.dataset.eventParams);
  },
  uploadFormImg: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.uploadFormImg(dataset);
  },
  listVesselTurnToPage: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.listVesselTurnToPage(dataset);
  },
  UserCenterTurnToPage: function (e) {
    let router = e.currentTarget.dataset.router;
    appInstance.turnToPage('../' + router + '/' + router +'?from=userCenterEle');
  },
  turnToGoodsDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    let contact = e.currentTarget.dataset.contact;
    appInstance.turnToPage('../goodsDetail/goodsDetail?detail=' + id +'&contact=' + contact);
  },
  turnToFranchiseeDetail: function(e){
    let dataset = e.currentTarget.dataset,
        id = dataset.id;
    appInstance.turnToPage('../franchiseeDetail/franchiseeDetail?detail=' + id);
  },
  sortListFunc: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.sortListFunc(dataset);
  },
  bbsInputComment: function(e){
    var dataset = e.target.dataset,
        comment = e.detail.value;
    appInstance.bbsInputComment(dataset, comment);
  },
  bbsInputReply: function(e){
    var dataset = e.target.dataset,
        comment = e.detail.value;
    appInstance.bbsInputReply(dataset, comment);
  },
  uploadBbsCommentImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsCommentImage(dataset);
  },
  uploadBbsReplyImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsReplyImage(dataset);
  },
  deleteCommentImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.deleteCommentImage(dataset);
  },
  deleteReplyImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.deleteReplyImage(dataset);
  },
  bbsPublishComment: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishComment(dataset);
  },
  clickBbsReplyBtn: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.clickBbsReplyBtn(dataset);
  },
  bbsPublishReply: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishReply(dataset);
  },
  keywordList:{},
  bindSearchTextChange : function(e){
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  searchList:function(e){
    let dataset = e.currentTarget.dataset;
    appInstance.searchList(dataset);

  },
  

  
  
  tapGoodsTradeHandler: function(event) {
    appInstance.tapGoodsTradeHandler(event);
  },
  tapInnerLinkHandler: function(event) {
    appInstance.tapInnerLinkHandler(event);
  },
  tapPhoneCallHandler: function(event) {
    appInstance.tapPhoneCallHandler(event);
  },
  tapRefreshListHandler: function(event) {
    var _this = this;
    appInstance.tapRefreshListHandler(event, _this);
  },
  tapGetCouponHandler: function(event) {
    appInstance.tapGetCouponHandler(event);
  },
  tapCommunityHandler: function(event) {
    appInstance.tapCommunityHandler(event);
  },
  turnToCommunityPage: function(event){
    let id = event.currentTarget.dataset.id;
    appInstance.turnToPage('../communityPage/communityPage?detail=' + id);
  },
  tapFranchiseeLocation: function(event){
    appInstance.tapFranchiseeLocation(event);
  },
  showAddShoppingcart: function(event) {
    var that = this,
        goods_id = event.currentTarget.dataset.id;
    appInstance.sendRequest({
      url: '/index.php?r=AppShop/getGoods',
      data: {
        data_id: goods_id
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          var goods = res.data[0].form_data,
              defaultSelect = goods.model_items[0],
              goodsModel = [],
              selectModels = [],
              goodprice = 0,
              goodstock = 0,
              goodid ;
          if(goods.model_items.length){
            goodprice = defaultSelect.price;
            goodstock = defaultSelect.stock;
            goodid = defaultSelect.id;
          }else{
            goodprice = goods.price;
            goodstock = goods.stock;
          }
          for(let key in goods.model){
            if(key){
              let model = goods.model[key];
              goodsModel.push(model);
              selectModels.push(model.subModelId[0]);
            }
          }
          goods.model = goodsModel;
          that.setData({
            goodsInfo: goods ,
            addShoppingCartHidden: false,
            'selectGoodsModelInfo.price': goodprice,
            'selectGoodsModelInfo.stock': goodstock,
            'selectGoodsModelInfo.buyCount': 1,
            'selectGoodsModelInfo.models': selectModels,
            'selectGoodsModelInfo.modelId': goodid
          });
        }
      }
    });
  },
  hiddeAddShoppingcart: function(){
    this.setData({
      addShoppingCartHidden: true
    });
  },
  selectGoodsSubModel: function(e){
    let dataset = e.target.dataset,
        modelIndex = dataset.modelIndex,
        submodelIndex = dataset.submodelIndex,
        data = {};

    data['selectGoodsModelInfo.models['+modelIndex+']'] = this.data.goodsInfo.model[modelIndex].subModelId[submodelIndex];
    this.setData(data);
    this.resetSelectCountPrice();
  },
  resetSelectCountPrice: function(){
    let selectModelIds = this.data.selectGoodsModelInfo.models.join(','),
        modelItems = this.data.goodsInfo.model_items,
        data = {};

    for (let i = modelItems.length - 1; i >= 0; i--) {
      if(modelItems[i].model == selectModelIds){
        data['selectGoodsModelInfo.stock'] = modelItems[i].stock;
        data['selectGoodsModelInfo.price'] = modelItems[i].price;
        data['selectGoodsModelInfo.modelId'] = modelItems[i].id;
        break;
      }
    }
    this.setData(data);
  },
  clickGoodsMinusButton: function(e){
    let count = this.data.selectGoodsModelInfo.buyCount;

    if(count <= 1){
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyCount': count - 1
    });
  },
  clickGoodsPlusButton: function(e){
    let selectGoodsModelInfo = this.data.selectGoodsModelInfo,
        count = selectGoodsModelInfo.buyCount,
        stock = selectGoodsModelInfo.stock;

    if(count >= stock) {
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyCount': count + 1
    });
  },
  sureAddToShoppingCart: function(){
    var that = this,
        param = {
          goods_id: this.data.goodsInfo.id,
          model_id: this.data.selectGoodsModelInfo.modelId || '',
          num: this.data.selectGoodsModelInfo.buyCount,
          sub_shop_app_id : ''
        };

    appInstance.sendRequest({
      url: '/index.php?r=AppShop/addCart',
      data: param,
      success: function(res){
        appInstance.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 1500
        });

        setTimeout(function(){
          appInstance.hideToast();
          setTimeout(function(){
            that.hiddeAddShoppingcart();
          }, 500);
        }, 1500);
      }
    })
  }
};
Page(pageData);
