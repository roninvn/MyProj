/*
 * Avail Job Page
 */
Page.extend("AvailJobPage",
// static methods 
{},
// prototype methods
{
  jobList: null,
  jobItemTemplate : null,
  ad : null,
  
  init : function(id){
	  this._super(id);
	  
	  this.jobList = this.el.find("#jobList");
	  this.jobList.listview();
	  this.jobItemTemplate = this.el.find("#jobListItem");
	  this.ad = this.el.find("#ad");
	  
	  this.getJobList();
	  
  },//end init
  
  
  /*
   * main page show
   */
  onPageShow: function(e, ui){	  
	  this._super(e, ui);
	  var me = this;
	  AjaxService.getAd(function(d){
		  if(d){
			  me.ad.attr("src", d);
		  	  me.ad.css({display:"block", visibility:"visible"});
		  }
	  });
  },
  /*
   * get the job list
   */
  getJobList: function(){
	  var me = this;
	  //get Job Available
	  AjaxService.getNumberJobOfUser(function(d){
		  if(!$.isArray(d))
			  d = [d];
		  
		  me.poplulateJobList(d);
		  
	  });	  
  },
  
  /*
   * populate the job list after getting data
   */
  poplulateJobList: function (jobs){
	  
	  this.jobList.empty();
	  
	  this.jobItemTemplate.tmpl(jobs).appendTo(this.jobList);
	  var me = this;
	  this.jobList.find("img").live("tap", function(e,ui){me.listItemButtonClicked(e)});
	  this.jobList.find("li").live("tap", function(e,ui){me.listItemClicked(e)});
	  
	  this.jobList.listview("refresh");
  },
  
  /*
   * button plus or minus clicked
   */
  listItemButtonClicked : function(e){	  
	  e.stopPropagation();
	  var btn = $(e.target);
	  var id = btn.attr("data-messageId");
	  var action = btn.attr("avail");
	  var me = this;
	  $(e.target).parent().remove();
	  AjaxService.markJobForUser(id, action, function(d){me.afterMarkJob(d)});
  },
  
  /*
   * call after a job is marked
   */
  afterMarkJob: function(d){
	  //console.log(d);
	  //this.getJobList();// refresh the list
	  
  },
  /*
   * show job info
   */
  listItemClicked: function(e){
	  var btn = $(e.target);
	  var jDate = btn.attr("job-date"),
	  		jRegion = btn.attr("job-region"),
  			jDesc = btn.attr("job-desc");
	  
	  Page.showDialog("Job Info", "Job Date : " + jDate + "<br /> Job Region : " + jRegion + "<br /> Job Description : " + jDesc);
  }
  
});