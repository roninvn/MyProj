Ext.define('Flower.model.BasketModel', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ["id","parent_id","ordering","type","flower_id","img","image_path_name_prefix","avail_image_list_postfix","thumb_filepath"]
});