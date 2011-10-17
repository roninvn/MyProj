USitISit.views.DashboardForm = Ext.extend(Ext.Panel, {    
                                          //scroll: 'vertical',
                                          fullscreen: true,
                                          styleHtmlContent:true,
                                          layout:{
                                          type:'vbox',
                                          align:'stretch'
                                          },
                                          dockedItems: [{
                                                        xtype: 'toolbar',
                                                        dock: 'top',
                                                        title: 'USitISit',
                                                        items: [
                                                                {
                                                                text: 'Account'
                                                                },{xtype: 'spacer'},
                                                                {
                                                                text: 'My profile',
                                                                align: 'right'
                                                                }
                                                                ]
                                                        },{
                                                        xtype: "toolbar",
                                                        dock : "bottom",		
                                                        title: "Ad"
                                                        }],
                                          
                                          items: [{
                                                  html:"Dashboard",
                                                  style:{'text-align':'center'}
                                                  },{
                                                  xtype:"panel",
                                                  style:{border:'1px solid black', width:'100%','margin-top':'10px'},
                                                  layout: {
                                                  type: 'hbox',
                                                  align: 'stretch'
                                                  },
                                                  items:[{
                                                         html: '8 points',
                                                         style:{
                                                         height: '100%',
                                                         'padding-top': '12%'
                                                         }		
                                                         },{
                                                         html:"<ul><li>2 friends' requests</li><li>1 requested sitter</li><li>1 upcoming sit</li><li>1 circle invitation</li></ul>"    		
                                                         }]
                                                  },{
                                                  xtype:"panel",
                                                  style:{'margin-top':'10px'},
                                                  layout: {
                                                  type: 'hbox'
                                                  },
                                                  items:[{
                                                         xtype:"button",
                                                         text: "Request A Sitter",
                                                         style:{'margin-right': '5px','margin-bottom': '10px',width:'150px', height:'90px'},
                                                         handler: function(){
                                                         USitISit.viewport.setActiveItem(USitISit.views.ReqSitterForm);
                                                         }
                                                         },{
                                                         xtype:"button",
                                                         style:{'margin-bottom': '10px',width:'150px', height:'90px'},
                                                         text: "Friends' Requests",
                                                         handler: function(){
                                                         USitISit.viewport.setActiveItem(USitISit.views.FriendReqForm);
                                                         }
                                                         }]
                                                  },{
                                                  xtype:"panel",
                                                  layout: {
                                                  type: 'hbox',
                                                  align: 'left'
                                                  },
                                                  items:[{
                                                         xtype:"button",
                                                         text: "Sit Schedule",
                                                         style:{'margin-right': '5px','margin-bottom': '10px',width:'150px', height:'90px'},
                                                         handler: function(){
                                                         USitISit.viewport.setActiveItem(USitISit.views.SitScheduleForm);
                                                         }
                                                         },{
                                                         xtype:"button",
                                                         style:{'margin-right': '5px','margin-bottom': '10px',width:'150px', height:'90px'},
                                                         text: "My Circle",
                                                         handler: function(){
                                                         USitISit.viewport.setActiveItem(USitISit.views.MyCircleForm);
                                                         }
                                                         }]
                                                  }]
                                          });

Ext.reg('DashboardForm', USitISit.views.DashboardForm);