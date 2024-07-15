const topBarCenterText = `WSAU750 - EN82mq`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/VA3HDL", "1.7"],
  ["2196F3", "CONTEST", "https://www.contestcalendar.com/fivewkcal.html", "1",],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  ["2196F3", "LIGHTNING", "https://map.blitzortung.org/#3.87/36.5/-89.41", "1", "R",],
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  ["2196F3", "RADAR", "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON", "1", "R"],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  ["2196F3", "WEATHER", "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5", "1", "R", ],
  ["2196F3", "WINDS", "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000", "1", "R", ],
  ["2196F3", "TRAFFIC", "https://mdotjboss.state.mi.us/MiDrive/map?trafficLayer=true&cameras=true&lat=42.68538392674716&lon=-83.1466134847537&zoom=13", "1", "R", ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  ["LOCAL RADAR", "https://radar.weather.gov/ridge/standard/KDTX_loop.gif", ],
  //["LIGHTNING LOCAL", //"https://www.blitzortung.org/en/Images/image_b_ny.png",
  ["LOCAL WEATHER ACTIVITY", "https://www.wpc.ncep.noaa.gov/noaa/noaa.gif", "https://www.spc.noaa.gov/exper/mesoanalysis/activity_loop.gif", "https://www.spc.noaa.gov/products/watch/validww.png", "https://www.weather.gov/wwamap/png/US.png",   ],
  ["NOAA D-RAP", "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png", ],
  ["ISS & RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  ["SATELLITE CAN", "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/can/EXTENT3/GOES16-CAN-EXTENT3-1125x560.gif", ],
  //["SATELLITE CGL", "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/cgl/EXTENT3/GOES16-CGL-EXTENT3-600x600.gif",],
  ["LOCAL SATELLITE", "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/cgl/GEOCOLOR/300x300.jpg", ],
  ["LIGHTNING", "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa", ],
  ["GREY LINE", "https://www.timeanddate.com/scripts/sunmap.php?iso=now"],
  [
    "SW BROADCAST",
    //"https://www.short-wave.info/php/transmitter-site-map.php?mobile=false&lat=52.67|-21.96|-15.53|-9.42|-17.76|-17.53|46.34|50.73|42.81|39.75|50.89|29.60|6.23|39.40|-15.53|43.51|46.34|-21.96|34.38|44.15|39.36|46.34|39.91|39.91|46.34|27.46|24.88|27.46|36.28|39.36|42.04|36.28|36.21|12.69|18.22|24.17|42.04|29.60|-15.73|-7.90|36.21|12.69|36.21|29.15|30.65|-21.96|33.50|-38.83|36.28|36.21|27.46&lon=9.75|27.60|28.00|160.05|168.36|146.05|-67.83|4.39|23.19|116.81|-113.85|55.79|-10.70|32.86|28.00|-79.63|-67.83|27.64|108.61|86.90|75.72|-67.83|-76.58|-76.58|-67.83|-80.93|102.50|-80.93|-86.10|75.72|12.32|-86.10|-86.89|-8.02|-63.02|54.25|12.32|55.79|46.45|-14.38|-86.89|-8.02|-86.89|47.77|-87.09|27.64|-86.47|176.42|-86.10|-86.89|-80.93&freq=3975|4930|4965|5020|5040|5055|5130|5780|5900|5985|6030|6040|6050|6050|6065|6070|6160|6195|7285|7295|7415|7490|9265|9265|9330|9395|9440|9455|9475|9600|9705|9930|9980|11640|11775|11810|11870|11880|11965|12095|12160|13630|13845|15540|15555|15580|15610|15720|15810|15825|17790&az=ND|20|ND|ND|ND|ND|245|ND|126|257|ND|313|ND|310|315|ND|245|350|317|270|308|245|242|242|245|355|283|285|50|308|206|180|90|111|320|90|210|211|295|27|85|111|90|310|5|350|85|35|40|46|160",
   "http://www.short-wave.info/php/transmitter-site-map.php?mobile=false&lat=52.67|50.48|24.01|-21.96|-15.53|46.34|50.73|0.29|50.89|6.23|24.88|43.51|39.36|52.67|46.34|39.75|22.79|39.36|29.11|39.36|24.88|46.34|27.46|39.91|39.91|46.34|27.46|42.81|27.46|36.28|15.59|39.75|22.79|36.28|36.21|18.22|52.27|39.75|36.21|44.75|39.36|52.27|44.75|30.65|-21.96|27.46|36.28|35.47|-7.90|27.46|-7.90&lon=9.75|6.52|90.26|27.60|28.00|-67.83|4.39|6.75|-113.85|-10.70|102.49|-79.63|75.72|9.75|-67.83|116.81|108.19|75.72|119.31|75.72|102.49|-67.83|-80.93|-76.58|-76.58|-67.83|-80.93|23.19|-80.93|-86.10|32.45|116.81|108.19|-86.10|-86.89|-63.02|-2.83|116.81|-86.89|26.10|75.72|-2.83|26.10|-87.09|27.64|-80.93|-86.10|-77.20|-14.38|-80.93|-14.38&freq=3975|3985|4750|4930|4965|5130|5780|5940|6030|6050|6060|6070|6140|6160|6160|6165|6175|7235|7330|7410|7420|7490|7730|9265|9265|9330|9395|9400|9455|9475|9505|9570|9880|9930|9980|11775|11830|12015|12160|13750|13760|15140|15180|15555|15580|15770|15810|17530|17780|17790|17830&az=ND|ND|320|20|ND|245|ND|20|ND|ND|163|ND|173|ND|245|288|200|173|255|174|191|245|44|242|242|245|355|90|285|50|210|257|200|180|90|320|140|318|85|307|308|165|307|5|350|44|40|94|65|160|85"  
  ],
  ["10M PROPAGATION", "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG"],
  ["HF PROPAGATION",
  "https://www.hamqsl.com/solar101vhf.php",
  "https://www.hamqsl.com/solar100sc.php",
  "https://www.hamqsl.com/solarpich.php",
  "https://services.swpc.noaa.gov/experimental/images/aurora_dashboard/tonights_static_viewline_forecast.png",
  "https://services.swpc.noaa.gov/experimental/images/aurora_dashboard/tomorrow_nights_static_viewline_forecast.png",
  ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,10400,10700,10900,10800];
