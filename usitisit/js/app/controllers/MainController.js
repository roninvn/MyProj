/*
 * This file will define Login Controller and its function
 */
USitISit.controllers.MainController = new Ext.Controller({
	/*
	 * request a sitter
	 */
	reqSitter : function() {

		// validate
		var params = Utils.getFormParams(USitISit.views.ReqSitterForm);

		if(params.fromDate == null || params.fromDate == "" || params.toDate == null || params.toDate == "") {
			Ext.Msg.alert('Error', 'Please fill in all information.', Ext.emptyFn);
			return;
		}

		params.from_month = params.fromDate.getMonth() + 1;
		params.from_date = params.fromDate.getDate();
		delete params.fromDate;

		params.to_month = params.toDate.getMonth() + 1;
		params.to_date = params.toDate.getDate();
		delete params.toDate;

		params.request_place = "My home";
		params.number_of_children = 2;
		params.number_of_pets = 1;

		Utils.applyAuthInfo(params);

		Utils.showLoadMask();

		Utils.ajaxRequest('createSitterRequest', params, function(result) {

			Utils.hideLoadMask();

			if(result && result.response) {

				Ext.Msg.alert('Success', 'Request successfully.', function() {
					USitISit.viewport.setActiveItem(USitISit.views.DashboardForm);
				});
			} else {
				Ext.Msg.alert('Failed', 'Request failed.', Ext.emptyFn);
			}

		});
	},
	/*
	 * load list of requested
	 */
	openFriendReqForm : function() {
		params = {};
		Utils.applyAuthInfo(params);

		Utils.showLoadMask();

		Utils.ajaxRequest('getFriendsSittingRequests', params, function(result) {

			Utils.hideLoadMask();

			if(result) {

				var list = USitISit.views.FriendReqForm.getComponent('reqList');
				list.removeAll(true);

				for(var i = 0; i < result.length; i++) {

					var f = result[i];

					var c = {
						xtype : "panel",
						items : [{
							html : "<hr /><b>" + f.name + "</b><br />" + f.request_from + " - " + f.request_to + " <br />" + f.home_address + "<br /><b>Point Value:</b> " + f.number_of_points
						}, {
							xtype : "panel",
							border : "1",
							layout : {
								type : 'hbox',
								align : 'left'
							},
							items : [{
								xtype : "button",
								ui : 'orange-round',
								text : "Sorry, Unavailable",
								width : '49.5%',
								cls : 'x-button-verysmall',
								friend_user_id : f.friend_user_id,
								request_id : f.request_id,
								handler : function() {
									USitISit.controllers.MainController.rejectRequest(this.request_id);
								}
							}, {
								xtype : 'spacer'
							}, {
								xtype : "button",
								ui : 'orange-round',
								text : "Yes, I'll Sit",
								width : '49.5%',
								cls : 'x-button-verysmall',
								friend_user_id : f.friend_user_id,
								request_id : f.request_id,
								handler : function() {
									USitISit.controllers.MainController.acceptRequest(this.request_id);
								}
							}]
						}]
					};

					list.add(c);

				}

				list.doLayout();
				//switch form
				USitISit.viewport.setActiveItem(USitISit.views.FriendReqForm);
			} else {
				Ext.Msg.alert('Failed', 'Loading data failed.', Ext.emptyFn);
			}

		});
	},
	rejectRequest : function(request_id) {
		var params = {
			request_id : request_id
		};
		Utils.applyAuthInfo(params);
		Utils.showLoadMask();
		Utils.ajaxRequest('rejectRequest', params, function(result) {
			Utils.hideLoadMask();

			if(result && result.response) {

				Ext.Msg.alert('Success', 'Reject successfully.', Ext.emptyFn);

			} else {
				Ext.Msg.alert('Failed', 'Reject failed.', Ext.emptyFn);
			}

		});
	},
	acceptRequest : function(request_id) {
		var params = {
			request_id : request_id
		};
		Utils.applyAuthInfo(params);
		Utils.showLoadMask();
		Utils.ajaxRequest('acceptRequest', params, function(result) {
			Utils.hideLoadMask();

			if(result && result.response) {

				Ext.Msg.alert('Success', 'Accept successfully.', Ext.emptyFn);

			} else {
				Ext.Msg.alert('Failed', 'Accept failed.', Ext.emptyFn);
			}

		});
	}
});

Ext.regController('MainController', USitISit.controllers.MainController);
