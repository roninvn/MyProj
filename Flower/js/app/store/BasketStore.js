Ext.define('Flower.store.BasketStore', {
    extend: 'Ext.data.Store',
    model: 'Flower.model.BasketModel',
    id:'BasketStore',
    autoLoad: true,
    
    proxy: {
        type: 'jsonp',
        url : 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="' + 'http://www.flowers.clubsareus.org/index.php?option=com_flower&task=read_basket_data&format=ajax' + '"') + '&format=json',        
        reader: {
            type: 'json',
            root: 'query.results.json.data'
        }
    }
});