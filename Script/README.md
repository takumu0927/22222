# 自用脚本、重写合集
## [模块合集](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/VentusAll.sgmodule)
  
## [苹果天气空气质量数据](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/Apple_Weather.js)  
  ```bash
  #!name= Replace Apple Weather with 🇺🇸US @waqi.info
  #!desc=切换空气质量数据源为waqi.info，并更改标准为AQI(US)
  
  [Script]
  # Apple 空气质量数据
  空气质量 = script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/Apple_Weather.js,requires-body=1,tag=Apple_Weather,type=http-response,pattern=^https?:\/\/weather-data\.apple\.com\/(v1|v2)\/weather.*(?!dataSets=forecastNextHour)(include=.*air_quality.*|dataSets=.*airQuality.*).*(country=[A-Z]{2})?.*,max-size=0,script-update-interval=0
  
  [MITM]
  hostname = %APPEND% weather-data.apple.com
  ```
## 苹果天气质量地图
  ```bash
  #!name= Replace Apple Weather Map with 🇺🇸US @waqi.info
  #!desc=切换空气质量地图数据源为waqi.info，并更改标准为AQI(US)

  [URL Rewrite]
  # Rewrite Apple Weather Air Quality Map
  ^https?:\/\/weather-map\.apple\.com\/(v1|v2)\/mapOverlay\/airQuality\?x=(-?\d+)&y=(-?\d+)&z=(-?\d+).*(country=CN)?.* https://tiles.waqi.info/tiles/usepa-aqi/$4/$2/$3.png?&scale=2&country=US&colorFormat=agr header

  [MITM]
  hostname = %APPEND% weather-map.apple.com, tiles.waqi.info
  ```
## [微信 去除公众号文章底部广告](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/Wechat.js)
  ```bash
  [Script]
  公众号去广告 = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/Wechat.js,type=http-response,pattern=^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad,script-update-interval=0

  [MITM]
  hostname = mp.weixin.qq.com
  ```
## [京东、淘宝比价](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/jd_tb_price.js)
  ```bash
  [Script]
  # > 京东App 历史价格 by Small
  京东比价 = type=http-response,requires-body=1,pattern=^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig),script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/jd_tb_price.js
  # > 淘宝App 历史价格 修改Surge语法 by Small
  淘宝比价 = type=http-request,requires-body=1,pattern=^http://.+/amdc/mobileDispatch,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/jd_tb_price.js
  淘宝比价 = type=http-response,requires-body=1,pattern=^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/jd_tb_price.js

  [MITM]
  hostname = %INSERT% api.m.jd.com, trade-acs.m.taobao.com
  ```
## [微信打开淘宝链接](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/WX-TB.js)
  ```bash
  [Script]
  微信打开淘宝链接 = type=http-response,pattern=^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/WX-TB.js

  [MITM] 
  hostname= weixin110.qq.com
  ```
## [皮皮虾去广告去水印](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/PPX.js)
  ```bash
  [Script]
  # 皮皮虾  Remove Ad & Logo
  皮皮虾去广告 = requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/PPX.js,type=http-response,pattern=^https?://.*\.snssdk\.com/bds/(feed/stream|comment/cell_reply|cell/cell_comment|cell/detail|ward/list|user/favorite|user/cell_coment|user/cell_userfeed|user/publish_list),script-update-interval=0
  
  [MITM]
  hostname = *.snssdk.com
  ```
## [Bigshot vip](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/Bigshot.js)
  ```bash
  [Script]
  # Bigshot解锁高级特权
  bigshot会员 = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/Bigshot.js,type=http-response,pattern=^https:\/\/vni\.kwaiying\.com\/api\/v1\/user\/profile,script-update-interval=0

  [MITM]
  hostname = vni.kwaiying.com
  ```
## [驾校一点通 vip](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/jxydt.js)
  ```bash
  [Script]
  驾校e点通VIP= type=http-response,requires-body=1,pattern=^https:\/\/vipapi\.jxedt\.com\/vip\/check,max-size=0,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/jxydt.js
  
  [MITM]
  hostname = vipapi.jxedt.com
  ```
## [TikTok](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/TikTok.js)
  ```bash
  [URL Rewrite]
(?<=_region=)CN(?=&) JP 307
(?<=&mcc_mnc=)4 2 307
^(https?:\/\/(tnc|dm)[\w-]+\.\w+\.com\/.+)(\?)(.+) $1$3 302
(^https?:\/\/*\.\w{4}okv.com\/.+&.+)(\d{2}\.3\.\d)(.+) $118.0$3 302
(?<=eme\/v)2(?=\/f\w{2}d\/\?.*) 1 302
  [Script]
  TK去水印 = type=http-response,pattern=https?:\/\/.*\.tiktokv\.com\/aweme\/v\d\/(feed|mix\/aweme|aweme\/post|(multi\/)?aweme\/detail|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list|aweme\/favorite),requires-body=1,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/TikTok.js

  [MITM]
  hostname = %APPEND% *.tiktokv.com,*.byteoversea.com,*.tik-tokapi.com
  ```
## [TF修正下载](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/TF.js)
  ```bash
  #!name=TestFlight区域限制解除
  #!desc=该模块适用于更新TestFlight App时, 提示"APP不可用"问题.
  #!system=ios

  [Script]
  TF下载修正 = type=http-request,pattern=^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/TF.js

  [MITM]
  hostname = %APPEND% testflight.apple.com
  ```
## [百度防跳转](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/baidu-no-redirect.js)
  ```bash
  #!name=百度搜索防跳转AppStore
  #!desc=使用网页版百度搜索,在搜索结果中点击关键词时防跳转AppStore
  
  [Script]
  百度防跳转 = type=http-response,pattern=^https:\/\/boxer\.baidu\.com\/scheme\?scheme,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/baidu-no-redirect.js

  [MITM]
  hostname = boxer.baidu.com
  ```
## [91](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/91.js)
  ```bash
  [Script]
  http-response ^https?:\/\/.+?\.(my10api|(.*91.*))\.(com|tips|app|xyz)(:\d{2,5}|)\/api.php$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/91.js

  [General]
  force-http-engine-hosts = *91*:8080, *my10api*:8080
  ```
## [VSCO vip](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/vsco.js)
  ```bash
  [Script]
  http-response ^https:\/\/(api\.revenuecat\.com\/v\d\/subscribers|vsco\.co\/api\/subscriptions\/\d\.\d\/user-subscriptions)\/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/vsco.js
  
  [MITM]
  hostname = vsco.co, api.revenuecat.com
  ```
## [哔哩哔哩, 港澳台番剧自动切换地区 & 显示豆瓣评分](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/Bili_Auto_Regions.js)
  ```bash
  [Script]
  Bili Region = type=http-response,pattern=^https:\/\/ap(p|i)\.bilibili\.com\/(pgc\/view\/(v\d\/)?app|x(\/v\d)?\/view\/video)\/(season|online)\?access_key,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/Bili_Auto_Regions.js

  #可选, 适用于搜索指定地区的番剧
  Bili Search = type=http-request,pattern=^https:\/\/app\.bilibili\.com\/x\/v\d\/search(\/type)?\?.+?%20(%E6%B8%AF|%E5%8F%B0|%E4%B8%AD)&,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/Bili_Auto_Regions.js

  [MITM]
  hostname = ap?.bilibili.com
  ```
## [JIBJAB vip](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/jibjab.js)
  ```bash
  [Script]
  http-response https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/jibjab.js
  [MITM]
  hostname = origin-prod-phoenix.jibjab.com
  ```
## [PDF Expert vip](https://raw.githubusercontent.com/ventusoon/ventus/main/Script/PDFexpert.js)
  ```bash
  [Script]
  Documents-PdfExpert = type=http-response,pattern=^https:\/\/license\.pdfexpert\.com\/api\/.+\/subscription\/(refresh$|check$),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/PDFexpert.js,script-update-interval=-1

  [MITM]
  hostname = license.pdfexpert.com
  ```



