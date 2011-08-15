/*
 * Posted Job Page
 */
Page.extend("PostedJobPage",
// static methods 
{},
// prototype methods
{
  jobList: null,
  jobItemTemplate : null,
  
  init : function(id){
	  this._super(id);	  
	  
	  
	  this.jobList = this.el.find("#jobList");
	  this.jobList.listview();
	  this.jobItemTemplate = this.el.find("#jobListItem");
	  
	  this.loadData();
	  
	  
  },//end init
  
  
  /*
   * load data for page
   */
  loadData: function(){
	  var me = this;
	  AjaxService.getMyPostedJobs(function(d){
			  if(!$.isArray(d))
				  d = [d];
			  
			  me.afterGetPostedJob(d);
		  });
  },
  /*
   * adter load jobs data
   */
  afterGetPostedJob: function(jobs){	  
	  this.jobList.empty();
	  
	  this.jobItemTemplate.tmpl(jobs).appendTo(this.jobList);
	  var me = this;
	  this.jobList.find("a").live("tap", function(e, ui){me.listItemClicked(e)});	  
	  this.jobList.listview("refresh");
	  
  },
  
  listItemClicked: function(e, ui){	
	e.stopPropagation();
	var btn = $(e.target);
	var jDate = btn.attr("job-date"),
	  	jRegion = btn.attr("job-region"),
	  	jid = btn.attr("data-messageId");
	
	var pap = $('#PeopleAvailPage');
	pap.find("#availDate").text(jDate);
	pap.find("#availRegion").text(jRegion);
	pap.attr("data-messageId",jid);
	
  },
  
  /*
   * main page show
   */
  onPageShow: function(e, ui){	  
	  this._super(e, ui);
  }
  
});