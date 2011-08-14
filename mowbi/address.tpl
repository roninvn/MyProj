      <div class="address-box"> 
        <address> 
        <strong>{$op.PageTitle}</strong>
        {$op.Address|nl2br} {if $op.City neq ''}{$op.City},{else} {if $directory.City neq ''} {$directory.City} {/if} {/if} {$op.State} {$op.ZIP}
        </address> 
      </div>