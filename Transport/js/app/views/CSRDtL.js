Geezeo.views.CSRDetailList = Ext.extend(Ext.Panel,
				{
					fullscreen : true,
					scroll: 'vertical',
					layout: 'fit',
					layout : {
						type : "accordion"
					},
					dockedItems : [ {
						xtype : 'toolbar',
						dock : 'top',						
						cls:'logo',
						items : [ {
							text : 'Back',
							ui : 'back',
							handler : function() {
								Geezeo.viewport.setActiveItem(
										Geezeo.views.CSRForm.detailForm, 'slide');
							}
						} ]
					} ],

					items : [
							{
								xtype : "panel",
								title : "SHIP",
								tpl : '<div class="detailBlock"><div class="detailTitle">SHIP NAME</div><div class="detailcontent">{ShipName}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">CALL SIGN</div><div class="detailcontent">{CallSign}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">OWNER</div><div class="detailcontent">{OwnerName}</div></div>'
							},
							{
								xtype : "panel",
								title : "CSR",
								tpl : '<div class="detailBlock"><div class="detailTitle">CON</div><div class="detailcontent">{CON}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">DATE</div><div class="detailcontent">{CSRDate}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">PRIORITY</div><div class="detailcontent">{Priority}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">ISSUED BY</div><div class="detailcontent">XXXX</div></div>'
							},
							{
								xtype : "panel",
								title : "ETA",
								tpl : '<div class="detailBlock"><div class="detailTitle">PLACE</div><div class="detailcontent">{ETAPlace}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">COUNTRY</div><div class="detailcontent">{ETACountry}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">DATE</div><div class="detailcontent">{ETADate}</div></div>'
							},							
							{
								xtype : "panel",
								title : "ETD",
								tpl : '<div class="detailBlock"><div class="detailTitle">DATE</div><div class="detailcontent">{ETDDate}</div></div>'
							},
							{
								xtype : "panel",
								title : "SHIP'S AGENT",
								tpl : '<div class="detailBlock"><div class="detailTitle">NAME</div><div class="detailcontent">{ShipAgentName}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">PLACE</div><div class="detailcontent">{ShipAgentPlace}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">PHONE</div><div class="detailcontent">{ShipAgentPhone}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">FAX</div><div class="detailcontent">{ShipAgentFax}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">EMAIL</div><div class="detailcontent">{ShipAgentEmail}</div></div>'
							},
							{
								xtype : "panel",
								title : "FAULT ON EQUIPMENT",
								tpl : '<div class="detailBlock"><div class="detailTitle">MANUFACTURER</div><div class="detailcontent">{EquipmentManufacturer}</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">FAMILY</div><div class="detailcontent">{EquipmentFamily} </div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">MODEL</div><div class="detailcontent">{EquipmentModel} </div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">TYPE</div><div class="detailcontent">{EquipmentType} </div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">SERIAL NUMBER</div><div class="detailcontent">{EquipmentSerial} </div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">DESCRIPTION</div><div class="detailcontent">XXXX</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">NOTE</div><div class="detailcontent">XXXX</div></div>'
							},
							{
								xtype : "panel",
								title : "SERVICE COMPANY",
								tpl : '<div class="detailBlock"><div class="detailTitle">NAME</div><div class="detailcontent">XXXX</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">PLACE</div><div class="detailcontent">XXXX</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">COUNTRY</div><div class="detailcontent">XXXX</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">PHONE</div><div class="detailcontent">XXXX</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">FAX</div><div class="detailcontent">XXXX</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">EMAIL</div><div class="detailcontent">XXXX</div></div>'
							},
							{
								xtype : "panel",
								title : "ORDER NOTES",
								tpl : '<div class="detailBlock"><div class="detailTitle">NOTE</div><div class="detailcontent">XXXX</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">CONFIRMATION NOTE</div><div class="detailcontent">XXXX</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">ATTACH FILE</div><div class="detailcontent">XXXX</div></div>'
							} ]

				});

Ext.reg('CSRDetailList', Geezeo.views.CSRDetailList);
