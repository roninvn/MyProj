{include file="dir/10/head.tpl"}
<div id="rbody">
    <div id="categories"><table width="760" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td rowspan="8" align="left" valign="top"><a href="http://maineinnkeepers.mowbi.com"><img src="tpl/dir/10/assets/images/left_ad.jpg" alt="Maine Inns" border="0" /></a></td>
                <td align="left" valign="top"><br /><a class="home" href="/search.html?q=" onclick="toggleSearchBox(event)"><img src="/tpl/dir/10/assets/images/rest_name.jpg" /></a></td>
            </tr>
            <tr>
                <td align="left" valign="top">
                    <div id="search-box" class="devbrats search-box">
                        <form action="/search.html" method="get">
                            <label>Search for a Restaurant</label>
                            <input name="q" placeholder="Search" type="text" /> <input value="Search" type="submit" />
                        </form>
                    </div>
                </td>
            </tr>
            <tr>
                <td align="left" valign="top">
                    <a class="home" href="/fields.html?field=1" onclick="openWheelPicker(event, '#button_1_values')"><img src="/tpl/dir/10/assets/images/city.jpg" /></a>
                    <select id="button_1_values" class="devbrats hide" onchange="window.location = this.value">
                        {foreach item=i from=$button_1_values }
                        <option value="/search.html?fields[]=1&value[]={$i|urlencode}">{$i}</option>
                        {/foreach}
                    </select>
                </td>
            </tr>
            <tr>
                <td align="left" valign="top">
                    <a class="home" href="/fields.html?field=2" onclick="openWheelPicker(event, '#button_2_values')"><img src="/tpl/dir/10/assets/images/cuisinetype.jpg" /></a>
                    <select id="button_2_values" class="devbrats hide" onchange="window.location = this.value">
                        {foreach item=i from=$button_2_values }
                        <option value="/search.html?fields[]=2&value[]={$i|urlencode}">{$i}</option>
                        {/foreach}
                    </select>
                </td>
            </tr>
            <tr>
                <td align="left" valign="top">
                    <a class="home" href="/fields.html?field=3" onclick="openWheelPicker(event, '#button_3_values')"><img src="/tpl/dir/10/assets/images/rest_style.jpg" /></a>
                    <select id="button_3_values" class="devbrats hide" onchange="window.location = this.value">
                        {foreach item=i from=$button_3_values }
                        <option value="/search.html?fields[]=3&value[]={$i|urlencode}">{$i}</option>
                        {/foreach}
                    </select>
                </td>
            </tr>
            <tr>
                <td align="left" valign="top">
                    <a class="home" href="/fields.html?field=4" onclick="openWheelPicker(event, '#button_4_values')"><img src="/tpl/dir/10/assets/images/price_range.jpg" /></a>
                    <select id="button_4_values" class="devbrats hide" onchange="window.location = this.value">
                        {foreach item=i from=$button_4_values }
                        <option value="/search.html?fields[]=4&value[]={$i|urlencode}">{$i}</option>
                        {/foreach}
                    </select>
                </td>
            </tr>
            <tr>
                <td align="left" valign="top">
                    <a class="home" href="/fields.html?field=5" onclick="openWheelPicker(event, '#button_5_values')"><img src="/tpl/dir/10/assets/images/other.jpg" /></a>
                    <select id="button_5_values" class="devbrats hide" onchange="window.location = this.value">
                        {foreach item=i from=$button_5_values }
                        <option value="/search.html?fields[]=5&value[]={$i|urlencode}">{$i}</option>
                        {/foreach}
                    </select>
                </td>
            </tr>
            <tr>
                <td align="left" valign="top"><a class="home" href="/page.html?z=31"><img src="/tpl/dir/10/assets/images/coupons.jpg" /></a></td>
            </tr>
        </table>
    </div>
    <div style="clear:both;"></div>
</div>
{* Main Content Area Ends *}
{include file="dir/10/foot.tpl"}