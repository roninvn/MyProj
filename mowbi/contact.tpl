{include file="dir/10/head.tpl"}
		<div id="rbody">
			<div id="activecat">
				<div style="float:left; width:215px;"><a href="#">Contact Us</a></div>
			</div>

			<div id="bodytext">
				<br /><br /><p>Please click on the icon below to email us with any questions or conerns. We will be in touch with you very soon, Thank you.
				</p>
			</div>
			
			<div style="position:relative; float: left; margin-left:5px; margin-top:10px;">
			<a href="mailto:{$directory.Email}"><img src="/tpl/dir/6/assets/images/email.png" height="33px" width="36px" alt="Email" border="0" /></a> {* directory phone number *}
			<a href="tel:{$directory.phone}"><img class="" src="/tpl/dir/6/assets/images/phone.png" /></a>
			<br />Contact us for more details!
			</div>
            	
	{* Main Content Area Ends *}
{include file="dir/10/foot.tpl"}

