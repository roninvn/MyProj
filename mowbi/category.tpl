{include file="dir/10/head.tpl"}
	{* Main Content Area Starts *}
		<div id="rbody">
        	<a href="http://feast-on-maine_dir.mowbi.com/"><div id="backbutton"></a>
				<div style="float:left; width:215px;"></div>
			</div>
			<div id="activecat">
				<div style="float:left; width:215px;"><a href="#"><b>Results for > </b>{$category.Title|substr:0:32}</a></div>
			</div>

			<div id="cetalist">
				<ul>
					{* This will list all members if no selected parent category via _GET. If parent is selected, list only for that category *}
					{foreach item=i from=$cats }
					<li><a href="category.html?id={$i.CatID}">{$i.Title} ({$i.cnt})</a></li>
					{/foreach}
				</ul>
			</div>

			{if $members|@count>0}
			<div id="memberlist">
				<ul>
					{foreach item=i from=$members }
					<li><a href="/member_reload.html?id={$i.EntryID}">{$i.Title|substr:0:32}TEST</a></li>
					{/foreach}
				</ul>
			</div>
			{/if}


			<div style="clear:both;"></div>
		</div>

	{* Main Content Area Ends *}
{include file="dir/10/foot.tpl"}