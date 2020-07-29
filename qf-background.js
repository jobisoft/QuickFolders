/*
 * Documentation:
 * https://github.com/thundernest/addon-developer-support/wiki/Using-the-WindowListener-API-to-convert-a-Legacy-Overlay-WebExtension-into-a-MailExtension-for-Thunderbird-78
 */

async function main() {
    messenger.WindowListener.registerDefaultPrefs("chrome/content/scripts/quickfoldersDefaults.js");
    
    messenger.WindowListener.registerChromeUrl([ 
        ["content", "quickfolders", "chrome/content/"],
        ["locale", "quickfolders", "en-US", "chrome/locale/en-US/"],
        ["locale", "quickfolders", "ca", "chrome/locale/ca/"],
        ["locale", "quickfolders", "de", "chrome/locale/de/"],
        ["locale", "quickfolders", "es-MX", "chrome/locale/es-MX/"],
        ["locale", "quickfolders", "es", "chrome/locale/es/"],
        ["locale", "quickfolders", "fr", "chrome/locale/fr/"],
        ["locale", "quickfolders", "hu-HU", "chrome/locale/hu-HU/"],
        ["locale", "quickfolders", "it", "chrome/locale/it/"],
        ["locale", "quickfolders", "ja-JP", "chrome/locale/ja-JP/"],
        ["locale", "quickfolders", "nl", "chrome/locale/nl/"],
        ["locale", "quickfolders", "pl", "chrome/locale/pl/"],
        ["locale", "quickfolders", "pt-BR", "chrome/locale/pt-BR/"],
        ["locale", "quickfolders", "ru", "chrome/locale/ru/"],
        ["locale", "quickfolders", "sl-SI", "chrome/locale/sl-SI/"],
        ["locale", "quickfolders", "sr", "chrome/locale/sr/"],
        ["locale", "quickfolders", "sv-SE", "chrome/locale/sv-SE/"],
        ["locale", "quickfolders", "vi", "chrome/locale/vi/"],
        ["locale", "quickfolders", "zh-CN", "chrome/locale/zh-CN/"],
        ["locale", "quickfolders", "zh-CHS", "chrome/locale/zh-CN/"],
        ["locale", "quickfolders", "zh", "chrome/locale/zh/"],
        ["locale", "quickfolders", "zh-CHT", "chrome/locale/zh/"],
        ["locale", "quickfolders", "zh-TW", "chrome/locale/zh/"]
    ]);
 
    messenger.WindowListener.registerOptionsPage("chrome://quickfolders/content/options.xhtml"); 
    
    messenger.WindowListener.registerWindow("chrome://messenger/content/messenger.xhtml", "chrome/content/scripts/qf-messenger.js");
    messenger.WindowListener.registerWindow("chrome://messenger/content/messenger.xul", "chrome/content/scripts/qf-messenger.js");

    messenger.WindowListener.registerStartupScript("chrome/content/scripts/qf-startup.js");
    messenger.WindowListener.registerShutdownScript("chrome/content/scripts/qf-shutdown.js");
    messenger.WindowListener.registerWindow("chrome://quickfolders/content/options.xul","chrome/content/scripts/qf-options.js");

 /*
  * Start listening for opened windows. Whenever a window is opened, the registered
  * JS file is loaded. To prevent namespace collisions, the files are loaded into
  * an object inside the global window. The name of that object can be specified via
  * the parameter of startListening(). This object also contains an extension member.
  */


    messenger.WindowListener.startListening();
}

main();