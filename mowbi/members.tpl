{include file="dir/10/head.tpl"}
	{* Main Content Area Starts *}
		<div id="rbody">
			<div id="activecat">
				<div style="float:left; width:215px;"><a href="#">All Member Listings</a></div>
			</div>			
			
			<div id="cetalist">
				<ul>
					{* This will list all members if no selected parent category via _GET. If parent is selected, list only for that category *}
					{foreach item=i from=$cats }
					<li><a href="category.html?id={$i.CatID}">{$i.Title}test{$m.Description} ({$i.cnt})</a></li>
					{/foreach}
				</ul>
			</div>
			<div style="clear:both;"></div>
		</div>

		<div id="interval1">
			<div style="clear:both; margin-top:25px;"></div>
			<img src="/tpl/dir/6/assets/images/rope.png" />
		</div>

	{* Main Content Area Ends *}
{include file="dir/6/foot.tpl"}