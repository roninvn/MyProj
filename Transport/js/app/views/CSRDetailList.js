Geezeo.views.CSRDetailList = Ext.extend(Ext.Panel,
				{
					fullscreen : true,
					scroll : "vertical",
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
								html : '<div class="detailBlock"><div class="detailTitle">SHIP NAME</div><div class="detailcontent">CIELO DI MONFALCONE</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">CALL SIGN</div><div class="detailcontent">ICCW</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">OWNER</div><div class="detailcontent">D\'AMICO DI NAV.</div></div>'
							},
							{
								xtype : "panel",
								title : "CSR",
								html : '<div class="detailBlock"><div class="detailTitle">CON</div><div class="detailcontent">--</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">DATE</div><div class="detailcontent">12/04/2005</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">PRIORITY</div><div class="detailcontent">Normal</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">ISSUED BY</div><div class="detailcontent">CGT/ermi</div></div>'
							},
							{
								xtype : "panel",
								title : "ETA",
								html : '<div class="detailBlock"><div class="detailTitle">PLACE</div><div class="detailcontent">VANCOUVER</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">COUNTRY</div><div class="detailcontent">Canada</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">DATE</div><div class="detailcontent">15/04/2005</div></div>'
							},							
							{
								xtype : "panel",
								title : "ETD",
								html : '<div class="detailBlock"><div class="detailTitle">DATE</div><div class="detailcontent">15/04/2005</div></div>'
							},
							{
								xtype : "panel",
								title : "SHIP'S AGENT",
								html : '<div class="detailBlock"><div class="detailTitle">NAME</div><div class="detailcontent">ANGLO CANADIAN SHIPPING</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">PLACE</div><div class="detailcontent">--</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">PHONE</div><div class="detailcontent">+604 6834221</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">FAX</div><div class="detailcontent">--</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">EMAIL</div><div class="detailcontent">--</div></div>'
							},
							{
								xtype : "panel",
								title : "FAULT ON EQUIPMENT",
								html : '<div class="detailBlock"><div class="detailTitle">MANUFACTURER</div><div class="detailcontent">Sperry Marine</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">FAMILY</div><div class="detailcontent">RADAR</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">MODEL</div><div class="detailcontent">--</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">TYPE</div><div class="detailcontent">RADAR BME 343H/12</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">SERIAL NUMBER</div><div class="detailcontent">--</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">DESCRIPTION</div><div class="detailcontent">Suddenly the radar has gone in STAND-BY. The master has tried to restart it but the antenna gives strange noise and has a strange movement.</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">NOTE</div><div class="detailcontent">--</div></div>'
							},
							{
								xtype : "panel",
								title : "SERVICE COMPANY",
								html : '<div class="detailBlock"><div class="detailTitle">NAME</div><div class="detailcontent">Sperry Marine Canada/ West Coast</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">PLACE</div><div class="detailcontent">Vancouver/ Richmond</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">COUNTRY</div><div class="detailcontent">Canada</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">PHONE</div><div class="detailcontent">+ 1 604 821 2090</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">FAX</div><div class="detailcontent">+ 1 604 821 2091</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">EMAIL</div><div class="detailcontent">test.tm.pg@gmail.com</div></div>'
							},
							{
								xtype : "panel",
								title : "ORDER NOTES",
								html : '<div class="detailBlock"><div class="detailTitle">NOTE</div><div class="detailcontent">liaise with the agent for ETA/ETD. Arrange an attendance through your local depot to fix the radar. Very thanks for the attention.</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">CONFIRMATION NOTE</div><div class="detailcontent">service confirmed</div></div>'
										+ '<div class="detailBlock"><div class="detailTitle">ATTACH FILE</div><div class="detailcontent"></div></div>'
							} ]

				});

Ext.reg('CSRDetailList', Geezeo.views.CSRDetailList);
