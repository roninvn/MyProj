Ext.regModel('TransactionModel', {
    fields:["id","balance","check_number",{name:"created_at",type:'date'},
    	"deleted_at", "memo","nickname","original_name","posted_at","reference_id","tags","transaction_type"]
});