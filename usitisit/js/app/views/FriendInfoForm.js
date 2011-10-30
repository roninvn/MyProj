USitISit.views.FriendInfoForm = Ext.extend(Ext.Panel, {
                                           scroll : 'vertical',
                                           fullscreen : true,
                                           styleHtmlContent : true,
                                           dockedItems : [{
                                                          xtype : 'toolbar',
                                                          dock : 'top',
                                                          ui : 'yellow',
                                                          title : 'USitISit',
                                                          items : [{
                                                                   text : 'Back to My Circle',
                                                                   cls : 'smallbutton',
                                                                   handler : function() {
                                                                   USitISit.viewport.setActiveItem(USitISit.views.MyCircleForm);
                                                                   }
                                                                   }]
                                                          }, {
                                                          xtype : "toolbar",
                                                          dock : "bottom",
                                                          ui : 'yellow',
                                                          title : "Ad"
                                                          }],
                                           
                                           items : [{
                                                    xtype : 'panel',
                                                    layout : {
                                                    type : 'hbox'
                                                    },
                                                    style : {
                                                    left : 0,
                                                    top : 0,
                                                    position : 'absolute',
                                                    'background-color' : 'lightyellow'
                                                    },
                                                    width : '100%',
                                                    items : [{
                                                             html : "<b>Sit Request</b> 10/29 00:00pm",
                                                             style:{
                                                             'margin-left': '10px',
                                                             'font-size':'90%'
                                                             }
                                                             }, {
                                                             xtype : 'spacer'
                                                             }, {
                                                             xtype : 'button',
                                                             ui : 'orange-round',
                                                             text : 'Go to Friends\' <br /> Requests',
                                                             cls : 'x-button-smaller',
                                                             style : {
                                                             right : '0px',
                                                             'margin-right': '10px'
                                                             },
                                                             }]
                                                    }, {
                                                    html : "<div style='text-align:center;'><div class='FormTitle'>Friends' Name<br /> 6 points</div>Street Address Town ST</div>",
                                                    style : {
                                                    'margin-top' : '30px'
                                                    }
                                                    }, {
                                                    xtype : 'panel',
                                                    layout : {
                                                    type : 'hbox'
                                                    },
                                                    style : {
                                                    'margin-top' : '10px'
                                                    },
                                                    items : [{
                                                             xtype : 'button',
                                                             ui : 'orange-round',
                                                             text : 'Call...',
                                                             cls : 'x-button-smaller',
                                                             style : {
                                                             width : '90px'
                                                             }
                                                             }, {
                                                             xtype : 'button',
                                                             ui : 'orange-round',
                                                             cls : 'x-button-smaller',
                                                             text : 'Message...',
                                                             style : {
                                                             'margin-left' : '10px',
                                                             width : '90px'
                                                             }
                                                             }, {
                                                             xtype : 'button',
                                                             ui : 'orange-round',
                                                             cls : 'x-button-smaller',
                                                             text : 'Email...',
                                                             style : {
                                                             'margin-left' : '10px',
                                                             width : '90px'
                                                             }
                                                             }]
                                                    }, {
                                                    xtype : 'panel',
                                                    layout : {
                                                    type : 'hbox'
                                                    },
                                                    style : {
                                                    'margin-top' : '10px'
                                                    },
                                                    items : [{
                                                             xtype : 'button',
                                                             ui : 'orange-round',
                                                             cls : 'x-button-verysmall',
                                                             text : 'Delete from <br /> My Circle...',
                                                             style : {
                                                             'margin-left' : '0px',
                                                             height : '40px'
                                                             }
                                                             }, {
                                                             xtype : 'spacer'
                                                             }, {
                                                             xtype : 'button',
                                                             ui : 'orange-round',
                                                             cls : 'x-button-verysmall',
                                                             text : 'See Friends\' <br /> Circle',
                                                             style : {
                                                             'margin-left' : '5px',
                                                             height : '40px'
                                                             }
                                                             }]
                                                    }, {
                                                    html : 'Badges',
                                                    cls : 'FormTitle',
                                                    style:{
                                                    'margin-top' : '10px'
                                                    }
                                                    
                                                    }]
                                           });

Ext.reg('FriendInfoForm', USitISit.views.FriendInfoForm);
