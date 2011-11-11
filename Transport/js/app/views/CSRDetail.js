Geezeo.views.CSRDetail = Ext.extend(Ext.Panel, {
	fullscreen: true,
	styleHtmlContent : true,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'top',
		items:[{
			text : 'Back',
			ui : 'back',
			handler : function() {
				Geezeo.viewport.setActiveItem(Geezeo.views.DashboardForm,'slide');
			}
		}]
	}],
	
	data: {},
	tpl:   '<div class="detailBlock"><div class="detailTitle">REQUEST FROM</div><div class="detail2point">:</div><div class="detailcontent">{reqfrom}</div></div>'
		 + '<div class="detailBlock"><div class="detailTitle">SHIP NAME</div><div class="detail2point">:</div><div class="detailcontent">{reqfrom}</shipname></div>'
		 + '<div class="detailBlock"><div class="detailTitle">C.O.N</div><div class="detail2point">:</div><div class="detailcontent">{con}</shipname></div>'
		 + '<div class="detailBlock"><div class="detailTitle">FAMILY</div><div class="detail2point">:</div><div class="detailcontent">{family}</shipname></div>'
		 + '<div class="detailBlock"><div class="detailTitle">CSR DATE</div><div class="detail2point">:</div><div class="detailcontent">{csrdate}</shipname></div>'
		 + '<div class="detailBlock"><div class="detailTitle">E.T.A PLACE</div><div class="detail2point">:</div><div class="detailcontent">{etaplace}</shipname></div>'
		 + '<div class="detailBlock"><div class="detailTitle">E.T.A COUNTRY</div><div class="detail2point">:</div><div class="detailcontent">{etacountry}</shipname></div>'
		 + '<div class="detailBlock"><div class="detailTitle">E.T.A DATE</div><div class="detail2point">:</div><div class="detailcontent">{etadate}</shipname></div>'
		 + '<div class="detailBlock"><div class="detailTitle">E.T.D DATE</div><div class="detail2point">:</div><div class="detailcontent">{etddate}</shipname></div>'
		 + '<div class="detailBlock"><div class="detailTitle">ORDER NUMBER</div><div class="detail2point">:</div><div class="detailcontent">{orderno}</shipname></div>'
		 + '<div class="detailBlock"><div class="detailTitle">ISSUED BY</div><div class="detail2point">:</div><div class="detailcontent">{issuedby}</shipname></div>'
	
});

Ext.reg('CSRDetail', Geezeo.views.CSRDetail);
