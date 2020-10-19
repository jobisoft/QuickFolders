/* BEGIN LICENSE BLOCK

QuickFolders is released under the Creative Commons (CC BY-ND 4.0)
Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
For details, please refer to license.txt in the root folder of this extension

END LICENSE BLOCK */
// Script for splash screen displayed when updating this Extension

addEventListener("click", async (event) => {
	if (event.target.id.startsWith("register")) {
    messenger.Utilities.openLinkExternally("https://sites.fastspring.com/quickfolders/product/quickfolders?referrer=landing-update");
	}
  if (event.target.id.startsWith("extend") || event.target.id.startsWith("renew")) {
    messenger.Utilities.showXhtmlPage("chrome://quickfolders/content/register.xhtml");
    window.close(); // not allowed by content script!
  }

	if (event.target.id.startsWith("donate")) {
	  messenger.Utilities.openLinkExternally("https://quickfolders.org/donate.html#donate");
	}
});



addEventListener("load", async (event) => {
    const addonName = await browser.runtime.getManifest().name, // or mxUtilties.getAddonName()); == 'quickFilters'
          hoursWorked = 250,
          remindInDays = 10;
  const mxUtilties = messenger.Utilities;

    // force replacement for __MSG_xx__ entities
    // using John's helper method (which calls i18n API)
    i18n.updateDocument();
    
        
      
    let h1 = document.getElementById('heading-updated');
    if (h1) {
      // this api function can do replacements for us
      h1.innerText = messenger.i18n.getMessage('heading-updated', addonName);
    }
    
    let thanksInfo = document.getElementById('thanks-for-updating-intro');
    if (thanksInfo) {
      thanksInfo.innerText = messenger.i18n.getMessage("thanks-for-updating-intro", addonName);
    }
    
    let verInfo = document.getElementById('active-version-info');
    if (verInfo) {
      let addonVer = await mxUtilties.getAddonVersion(),
          appVer = await mxUtilties.getTBVersion();
      
      // use the i18n API      
      // You are now running <b class="versionnumber">version {version}</b> on Thunderbird {appver}.
      // for multiple replacements, pass an array
      verInfo.innerHTML = messenger.i18n.getMessage("active-version-info", [addonVer, appVer])
        .replace("{boldStart}","<b class='versionnumber'>")
        .replace("{boldEnd}","</b>");
    }
    
    let timeAndEffort =  document.getElementById('time-and-effort');
    if (timeAndEffort) {
      timeAndEffort.innerText = messenger.i18n.getMessage("time-and-effort", addonName);
    }
    
    let measuredEffort =  document.getElementById('hours-effort');
    if (measuredEffort) {
      measuredEffort.innerText = messenger.i18n.getMessage("hours-effort", hoursWorked);
    }
    
    let suggestion = document.getElementById('support-suggestion');
    if (suggestion) {
      suggestion.innerText = messenger.i18n.getMessage("support-suggestion", addonName);
    }
    
    let preference = document.getElementById('support-preference');
    if (preference) {
      preference.innerText = messenger.i18n.getMessage("support-preference", addonName);
    }
    
    let remind = document.getElementById('label-remind-me');
    if (remind) {
      remind.innerText = messenger.i18n.getMessage("label-remind-me", remindInDays);
      
    }
    
    let title = document.getElementById('window-title');
    title.innerText = messenger.i18n.getMessage("window-title", addonName);
           
    updateActions(addonName);

    addAnimation('body');

  });  

  addEventListener("unload", async (event) => {

	let remindMe = document.getElementById("remind").checked;


  });  





