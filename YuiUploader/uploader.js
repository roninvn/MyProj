YUI().add('MyUploader', function(Y) {
    function MyUploader(config) {
    	MyUploader.superclass.constructor.apply(this, [config]);
    }

    MyUploader.NAME = "MyUploader";

    MyUploader.ATTRS = {
    		myUploaderTarget: {value: null} // attribute holding who we shall say hello to
    };
    
    YUI({
	    //Last Gallery Build of this module
	    gallery: 'gallery-2011.02.09-21-32'
	}).use('gallery-progress-bar', 'uploader');

    Y.extend(MyUploader, Y.Widget, { // our "class" MyUploader inherits from Y.Widget
        // the renderUI function is part of the "lifecycle" functions that are called by render()
        renderUI: function() {
        	/*
        	
        	// render a hello message if the attribute helloTarget has been set
            if(this.get('myUploaderTarget')) {
                this.get('contentBox').append('Hello ' + this.get('myUploaderTarget'));
            }
            else { // helloTarget has not been set
                this.get('contentBox').append('No target specified. You must specify the helloTarget attribute when initializing this widget.');
            }
            */
        	
        	
        	
        }
    });

    // put this widget in a namespace
    Y.namespace('CustomWidget').MyUploader = MyUploader;
}, "1.0", { requires: ['widget']});