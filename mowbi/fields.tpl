{* craig pls retain this layout / modify according to your needs*}
{include file="dir/10/head.tpl"}
{php}
$ar=array('1'=>'city.jpg','2'=>'cuisinetype.jpg','3'=>'rest_style.jpg','4'=>'price_range.jpg','5'=>'other.jpg');
{/php}
<div id="rbody">
<div id="categories"><table width="760" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td rowspan="8" align="left" valign="top"><img src="tpl/dir/10/assets/images/left_ad.jpg" /></td>
            <td align="left" valign="top"><a class="home" href="/search.html?q=" onclick="toggleSearchBox(event)"><img src="/tpl/dir/10/assets/images/rest_name.jpg" /></a></td>
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
        {php}

        foreach($ar as $k=>$v)
        {
        $this->assign('current_key',$k);
        echo '  <tr>
            <td align="left" valign="top"><a class="home" href="/fields.html?field='.$k.'"><img src="/tpl/dir/10/assets/images/'.$v.'" /></a></td>
        </tr>';

        {/php}

        {if $id == $current_key}
        <tr>  <td colspan="2" align="left" valign="top">
                <div class="categ" >
                    <!-- op -->
                    {foreach item=i from=$field_values }
                    <a href="/search.html?fields[]={$id}&value[]={$i|urlencode}">{$i}</a><br /><br />
                    {/foreach}</div>
            </td></tr>{/if}
        {php}
        }

        {/php}



        <tr>
            <td align="left" colspan="2" valign="top"><a class="home" href="/page.html?z=31"><img src="/tpl/dir/10/assets/images/coupons.jpg" /></a></td>
        </tr>
    </table>
</div>


{include file="dir/10/foot.tpl"}
