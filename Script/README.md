# 自用脚本、重写合集
## 模块合集[VentusAll.sgmodule](https://raw.githubusercontent.com/ventusyu/ventus/main/Script/VentusAll.sgmodule)
  
## 苹果天气空气质量数据[Apple_Weather.js](https://raw.githubusercontent.com/ventusyu/ventus/main/Script/Apple_Weather.js)  
  ```bash
  #!name= Replace Apple Weather with 🇺🇸US @waqi.info
  #!desc=切换空气质量数据源为waqi.info，并更改标准为AQI(US)
  
  [Script]
  http-response ^https?:\/\/weather-data\.apple\.com\/(v1|v2)\/weather.*(?!dataSets=forecastNextHour)(include=.*air_quality.*|dataSets=.*airQuality.*).*(country=[A-Z]{2})?.* script-path=https://raw.githubusercontent.com/ventusyu/ventus/main/Script/Apple_Weather.js, requires-body=true, tag=Apple_Weather
  
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
## 微信 去除公众号文章底部广告[Wechat.js](https://raw.githubusercontent.com/ventusyu/ventus/main/Script/Wechat.js)
  ```bash
  [Script]
  http-response ^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ventusyu/ventus/main/Script/Wechat.js

  [MITM]
  hostname = mp.weixin.qq.com
  ```
## 京东、淘宝比价[jd_tb_price.js](https://raw.githubusercontent.com/ventusyu/ventus/main/Script/jd_tb_price.js)
  ```bash
  [Script]
  # > 京东App 历史价格 by Small
  京东比价 = type=http-response,requires-body=1,pattern=^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig),script-path=https://raw.githubusercontent.com/ventusyu/ventus/main/Script/jd_tb_price.js
  # > 淘宝App 历史价格 修改Surge语法 by Small
  淘宝比价 = type=http-request,requires-body=1,pattern=^http://.+/amdc/mobileDispatch,script-path=https://raw.githubusercontent.com/ventusyu/ventus/main/Script/jd_tb_price.js
  淘宝比价 = type=http-response,requires-body=1,pattern=^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail,script-path=https://raw.githubusercontent.com/ventusyu/ventus/main/Script/jd_tb_price.js

  [MITM]
  hostname = %INSERT% api.m.jd.com, trade-acs.m.taobao.com
  ```
## 皮皮虾去广告去水印[PPX.js](https://raw.githubusercontent.com/ventusyu/ventus/main/Script/PPX.js)
  ```bash
  [Script]
  http-response ^https?://.*\.snssdk\.com/bds/(feed/stream|comment/cell_reply|cell/cell_comment|cell/detail|ward/list|user/favorite|user/cell_coment|user/cell_userfeed|user/publish_list) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/ventusyu/ventus/main/Script/PPX.js
  
  [MITM]
  hostname = *.snssdk.com
  ```
## Bigshot vip[Bigshot.js](https://raw.githubusercontent.com/ventusyu/ventus/main/Script/Bigshot.js)
  ```bash
  [Script]
  http-response ^https:\/\/vni\.kwaiying\.com\/api\/v1\/user\/profile requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ventusyu/ventus/main/Script/Bigshot.js

  [MITM]
  hostname = vni.kwaiying.com
  ```
## 驾校一点通 vip[jxydt.js](https://raw.githubusercontent.com/ventusyu/ventus/main/Script/jxydt.js)
  ```bash
  [Script]
  驾校e点通VIP= type=http-response,requires-body=1,pattern=^https:\/\/vipapi\.jxedt\.com\/vip\/check,max-size=0,script-path=https://raw.githubusercontent.com/ventusyu/ventus/main/Script/jxydt.js
  
  [MITM]
  hostname = vipapi.jxedt.com
  ```
## TikTok[TikTok.js](https://raw.githubusercontent.com/ventusyu/ventus/main/Script/TikTok.js)
  ```bash
  [URL Rewrite]
(?<=_region=)CN(?=&) JP 307
(^h.+v5\/)(.+) $1 302
(?<=&mcc_mnc=)4 2 307
(?<=eme\/v)2(?=\/f\w{2}d\/\?.*) 1 302

  [Script]
http-response https?:\/\/.*\.tiktokv\.com\/aweme\/v\d\/(feed|mix\/aweme|aweme\/post|(multi\/)?aweme\/detail|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list|aweme\/favorite) script-path=https://raw.githubusercontent.com/ventusyu/ventus/main/Script/TikTok.js, requires-body=true, timeout=10, tag=TK去水印

  [MITM]
  hostname = %APPEND% *.tiktokv.com,*.byteoversea.com,*.tik-tokapi.com
  ```
## TF修正下载[TF.js](https://raw.githubusercontent.com/ventusyu/ventus/main/Script/TF.js)
  ```bash
  #!name=TestFlight区域限制解除
  #!desc=该模块适用于更新TestFlight App时, 提示"APP不可用"问题.
  #!system=ios

  [Script]
  TF下载修正 = type=http-request,pattern=^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ventusyu/ventus/main/Script/TF.js

  [MITM]
  hostname = %APPEND% testflight.apple.com
  ```
