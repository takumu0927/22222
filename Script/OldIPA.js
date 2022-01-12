/*
Old_iPA_Downloader by LangKhach

[Script]
old_ipa = type=http-request,pattern=(https:\/\/.+\-buy\.itunes\.apple\.com\/WebObjects\/MZBuy.woa\/wa\/buyProduct)|(https:\/\/api\.unlimapps\.com\/.+\/apple_apps\/.+\/versions\?=),requires-body=1,max-size=0,debug=1,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/OldIPA.js

[MITM]
hostname = %APPEND% *-buy.itunes.apple.com, api.unlimapps.com
*/
var url = $request.url;
var obj = $request.body;

const api= "unlimapps";
const buy= "buyProduct";

if(url.indexOf(api) != -1){
var appidget = url.match(/\d{6,}$/);
console.log("🟢\n appid: " + appidget);
$persistentStore.write(appidget.toString(),"appid");
$notification.post('Old_iPA_Dowloader', 'iTunes PC search app and click Get', 'By @Lãng Khách');
$done({body});
}
if(url.indexOf(buy) != -1){ 
var appid= $persistentStore.read("appid");
var body= obj.replace(/\d{6,}/, appid);
console.log('🟢 Old_iPA_Downloader \nappid: ' + appid);
$notification.post("Old_iPA_Downloader rewrite stustus: OK","","");
$done({body});
}
