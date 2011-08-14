{* craig pls retain this layout / modify according to your needs*}
{include file="dir/10/head.tpl"}
<!-- Main Content Area Starts -->
<div id="memberlist">
    <table width="768" border="0" cellspacing="0" cellpadding="0" class="searchT">
        <tr class="search">
            <td valign="top">
                <a VALUE="Go Back"
                    ONCLICK="history.go(-1)" ><img src="/tpl/dir/10/assets/images/back.png" style="margin-top:6px" /><div class="back">Back</div></a>

                <h2 style="padding-left:10px;"><br />Narrow Search By</h2>      <br />

                {if $value eq false}

                {if $q!==false}
                Searching for &quot;{$q}&quot;
                <form method='GET'>
                    <input type="text" name="q" value="{$q}">
                    <input type="submit" value="Search" />
                </form>

                {else}Listing members nearby - closest to furthest.

                {/if}
                {else}
                {literal}
                <script type="text/javascript"> 
                    $(document).ready(function() {
                        $("select").bind("touchstart", function(e) {
                            openWheelPicker(e, this);                                                                                        
                        });    
                    });    
                </script> 
                {/literal}
                <form method="GET">
                    <table class="sorter">
                        {foreach item=i from=$fields_o  }
                        {assign var="fid" value=$i.FieldID}
                        <input type="hidden" name="fields[]" value="{$i.FieldID}" />
                        <tr ><Td colspan="2"><select name="value[]" id="websites{$fid}" style="width:258px !important;" class="dsearch" onchange="this.form.submit()">
                                    <option value="" style="font-weight:normal !important">
                                        {if $i.FieldName=='City/Region'}
                                        City/Town

                                        {else}{ $i.FieldName}
                                        {/if}
                                    </option>
                                    <option value="">----</option>	
                                    {foreach item=j from=$i.values}
                                    {if $j!= ""}	
                                    <option value="{$j}" {/if}	

                                        {if $selected_values.$fid eq $j}
                                        selected="Selected" 
                                        {/if}>
                                        {$j}</option>	
                                    {/foreach}	 </select></Td></tr>

                        {/foreach}
                    </table>
                    <p id="result"></p> 
                    <div align="center"><br />
                        <input class="searchButton" type="submit" value="Refine Search"  />
                    </div>
                </form>
                {/if}
                <br /> <br /><br />
                <div style="padding-left:10px;"><b>Maine Restaurant Association Members</b><br />
                  <br /><br />
                    <div class="member-image" style="width:30px;padding-left:3px;"><img src="/tpl/dir/10/assets/images/emember.png" /></div> 
                  <div class=""> Indicates Enhanced Listing</div><br /><br />
                    <div class="member-image" style="width:30px;height:30px;"><img src="/tpl/dir/10/assets/images/pmember.png" /></div>
                    <div class="member-image"> Indicates Premium Listing</div><br />
              </div>
          </td>

            <td id="results">
                <div id="searchWrapper">
                    <div id="searchScroller" class="resultsControl">
                        <div class="resultsTitle"> Results For: {foreach item=i from=$fields_o  }

                            {assign var="fid" value=$i.FieldID}
                            {if $selected_values.$fid neq ""}
                            {if $addcomma eq 1}
                            ,
                            {/if}
                            {$selected_values.$fid}
                            {assign var="addcomma" value=1}
                            {/if}

                            {/foreach}
                            {if $addcomma neq 1}
                            All listings
                            {/if}
                        </div>
                        {if $members|@count>0}
                        <ul>{foreach item=i from=$members}
                            <li>


                                {if $i.MemberLevel eq 2 or $i.MemberLevel eq 3}<br /><div class="member-image" style="padding-left:3px;"><img src="{$MowbiDirectory->getLevelImage($i.MemberLevel)}" /></div><a href="http://{$i.URL}.{$DOMAIN}">{$i.Title|substr:0:52}</a>

                                {/if}

                                {*
                                {else}{if $i.MemberStatus == 'Premium-Member'}<div class="member-image"><img src="/tpl/dir/10/assets/images/pmember.png" /></div><a href="http://{$i.URL}.{$DOMAIN}">{$i.Title|substr:0:52}</a>{else}<div class="member-image" style="width:30px"></div><a>{$i.Title|substr:0:52}</a>{/if}{/if} *}<br />



                                {if $i.MemberLevel eq 1}<div class="member-image" ><img src="/tpl/dir/10/assets/images/blankMem.png" /></div>{$i.Title|substr:0:52}<br/>{/if} 
                                <div class="address-box">
                                    <address>{$i.Address|nl2br} </address><address>
                                        {if $i.City neq ''}{$i.City},
                                        {else}
                                        {if $directory.City neq ''} {$directory.City}
                                        {/if}<br /> 
                                        {/if} {$i.State} {$i.ZIP|string_format:"%05s"}
                                    </address>
                                </div>           <br />       {$op.Content}
                            </li>
                            {/foreach}
                        </ul>
                        {else}
                        <br /><b>No results found</b>
                        {/if}
                    </div>
                </div>
            </td>
        </tr>
    </table>
</div>

{literal}
<script type="text/javascript">

    function showvalue(arg) {
        alert(arg);
        //arg.visible(false);
    }

    // Use jQuery via $j(...)
    $(document).ready(function($){

        try {
            $("#websites1").msDropDown({mainCSS:'dd2'});
            $("#websites2").msDropDown({mainCSS:'dd2'});
            $("#websites3").msDropDown({mainCSS:'dd2'});
            $("#websites4").msDropDown({mainCSS:'dd2'});
            $("#websites5").msDropDown({mainCSS:'dd2'});
            $("#websites6").msDropDown({mainCSS:'dd2'});
            //alert($.msDropDown.version);
            //$.msDropDown.create("body select");
            $("#ver").html($.msDropDown.version);
        } catch(e) {
            //alert("Error: "+e.message);
        }
    })


</script>
{/literal}
<!-- Main Content Area Ends -->{include file="dir/10/foot.tpl"}
