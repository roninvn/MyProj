Geezeo.views.CSRDetail = Ext.extend(Ext.Sheet, {
	layout : 'fit',
	modal: true,
	hideOnMaskTap: true,
	enter: 'right',
	exit: 'right',
	width: '70%',
	stretchY: true,
	cls : 'crsdetail',
	scroll : "vertical",
	
	data: {},
	tpl:   '<div class="detailBlock"><div class="detailTitle">REQUEST FROM</div><div class="detailcontent">XXXX</div></div>' //{reqfrom}
		 + '<div class="detailBlock"><div class="detailTitle">SHIP NAME</div><div class="detailcontent">{ShipName}</div></div>'
		 + '<div class="detailBlock"><div class="detailTitle">C.O.N</div><div class="detailcontent">{CON}</div></div>'
		 + '<div class="detailBlock"><div class="detailTitle">FAMILY</div><div class="detailcontent">{EquipmentFamily}</div></div>'
		 + '<div class="detailBlock"><div class="detailTitle">CSR DATE</div><div class="detailcontent">{CSRDate}</div></div>'
		 + '<div class="detailBlock"><div class="detailTitle">E.T.A PLACE</div><div class="detailcontent">{ETAPlace}</div></div>'
		 + '<div class="detailBlock"><div class="detailTitle">E.T.A COUNTRY</div><div class="detailcontent">{ETACountry}</div></div>'
		 + '<div class="detailBlock"><div class="detailTitle">E.T.A DATE</div><div class="detailcontent">{ETADate}</div></div>'
		 + '<div class="detailBlock"><div class="detailTitle">E.T.D DATE</div><div class="detailcontent">{ETDDate}</div></div>'
		 + '<div class="detailBlock"><div class="detailTitle">ORDER NUMBER</div><div class="detailcontent">{OrderNumber}</div></div>'
		 + '<div class="detailBlock"><div class="detailTitle">ISSUED BY</div><div class="detailcontent">{OrderIssuedByPICL2}</div></div>'
		 + '<div class="shipdetailIndicator"></div>',
		 
	/* dockedItems: [
	               {
	                   dock : 'bottom',
	                   xtype: 'button',
	                   text : 'Detail',
	                   scope: this,
	                   handler: function(){
	                	   //console.log(this.getXTypes());
	                	   detailWin.hide();
	                	   Geezeo.viewport.setActiveItem(Geezeo.views.CSRDetailList,'slide');
	                   }
	               }
	           ],*/
	           
       listeners:{
    	   afterrender: function(sh){
    		   //console.log(sh.getEl());
    		   sh.getEl().addListener("click", function(){
    			   //console.log('aaa');
    			   detailWin.hide();
            	   Geezeo.viewport.setActiveItem(Geezeo.views.CSRDetailList,'slide');
    		   });
    	   }
       }
	
});

Ext.reg('CSRDetail', Geezeo.views.CSRDetail);

var detailWin = Ext.create({xtype: 'CSRDetail'});
