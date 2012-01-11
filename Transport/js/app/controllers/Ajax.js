Ext.util.JSONP = {
            queue: [],
            current: null,
            request : function(o) {
                o = o || {};
                if (!o.url) {
                    return;
                }

                var me = this;
                o.params = o.params || {};
                if (o.callbackKey) {
                    o.params[o.callbackKey] = 'Ext.util.JSONP.callback';
                }
                var params = Ext.urlEncode(o.params);

                var script = document.createElement('script');
                script.type = 'text/javascript';
                Ext.fly(script).on({
                    error: Ext.util.Functions.createDelegate(this.onScriptResponseFailure, this)
                });

                this.queue.push({
                    url: o.url,
                    script: script,
                    callback: o.callback || function(){},
                    onFailure: o.onFailure || function(){},
                    scope: o.scope || window,
                    params: params || null
                });

                if (!this.current) {
                    this.next();
                }
            },
            next : function() {
                this.current = null;
                if (this.queue.length) {
                    this.current = this.queue.shift();
                    this.current.script.src = this.current.url + (this.current.params ? ('?' + this.current.params) : '');
                    document.getElementsByTagName('head')[0].appendChild(this.current.script);
                }
            },
            callback: function(json) {
                this.current.callback.call(this.current.scope, json);
                document.getElementsByTagName('head')[0].removeChild(this.current.script);
                this.next();
            },
            onScriptResponseFailure: function(json, data) {
                this.current.onFailure.call(this.current.scope, json);
                document.getElementsByTagName('head')[0].removeChild(this.current.script);
                this.next();
            }
        };


var Ajax = {
	baseUrl : 'http://217.18.115.228/CSRInterop/Service.aspx/',
	services : {
		login : 'Login',
		loadCSRActive : 'CSR/List/Active',
		loadCSRClose: 'CSR/List/Closed',
		loadAllClose: 'CSR/List',
		loadDetailList: 'CSR/Detail/',
		searchCSR : 'CSR/List',
		loadCountry: 'Country/List',
		loadManufacturer: 'Manufacturer/List',
		loadShipList: 'Ship/List',
		saveCSR: 'CSR/New'
	},
	
	/*
	 * Ajax request via JSONP
	 */
	request : function(funcName, params, callback) {
		
		var url = Ajax.baseUrl + Ajax.services[funcName];
		//has connection
		if(navigator && navigator.network && navigator.network.connection.type && 
				(navigator.network.connection.type == Connection.ETHERNET 
						|| navigator.network.connection.type == Connection.WIFI 
						|| navigator.network.connection.type == Connection.CELL_3G
						|| navigator.network.connection.type == Connection.CELL_4G) )
			params.r = Math.random();
		else if(!navigator || !navigator.network)
			params.r = Math.random();
		
		//request
		Ext.util.JSONP.request({
			url : url,
			params: params,
			callbackKey : 'jsoncallback',
			callback : callback,
			onFailure:function(){Ext.Msg.alert('Network Error', 'Try Later!');}
		});
	}	
};
