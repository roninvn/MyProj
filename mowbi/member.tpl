{include file="dir/10/head.tpl"}
		<div id="sml-rbody">
			<div id="qwmenu">
				<ul>
					{* display the parent category title and allow the user to return to that section *}
					<li><a href="category.html?id={$category.id}">{$category.Title}</a></li>
				</ul>
			</div>
			<div style="clear:both;"></div>
		</div>

		<div id="conte">
			<div id="awlogo">
				{* display the member's logo *}
				<img class="" src="{$m.logo}" width="173px" alt="" height="100px" />
			</div>
			<div id="awpic">
				{* display the member's larger image *}
				<img class="" src="{$m.img}" width="147px" alt="" height="99px" />
			</div>
		</div>

		<div id="qwtxt">
			<span class="poi">{$m.Tile}</span><br/>
			<p>{$m.Description}</p>
		</div>

		<div id="qwlogs">
			{* display members contact information if it is filled out *}
			<a href="mailto:{$m.email}"><img class="aswq" src="assets/images/tytyer-Directory_03.jpg" width="36px" alt="" height="33px" /></a>
			{if $m.facebook!=""}<a href="{$m.facebook}"><img class="" src="assets/images/tytyer-Directory_05.jpg" width="34px" alt="" height="33px" /></a>{/if}
			{if $m.twitter!=""}<a href="{$m.website}">website<img class="" src="assets/images/phone.jpg" width="34px" alt="" height="33px" /></a>{/if}
		</div>


		<div id="ftp">
			{* members phone number *}
			<a href="tel:{$m.phone}"><img class="" src="assets/images/rqw_03.jpg" /></a>
		</div>



		<div id="gmaps">
			<div id="map" style="height:200px;"></div>
		</div>
	{* Main Content Area Ends *}
{include file="dir/10/foot.tpl"}
