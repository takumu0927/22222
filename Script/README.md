# 自用脚本、重写合集
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
