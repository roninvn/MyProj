Ext.define('HeaderFilterExample.model.Simpsons',{
    extend:'Ext.data.Model',
    fields:[
        {name:'name',type:'string'},
        {name:'email',type:'string'},
        {name:'phone',type:'string'},
        {name:'birthday',type:'date',dateFormat:'m/d/Y'},
        {name:'id',type:'int'}
    ]
});