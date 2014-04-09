var chart = AmCharts.makeChart("chartdiv", {
    "type": "pie",
    "theme": "none",
    "dataProvider": [{
        "country": "Lithuania",
        "value": 260
    }, {
        "country": "Ireland",
        "value": 201
    }, {
        "country": "Germany",
        "value": 65
    }, {
        "country": "Australia",
        "value": 39
    }, {
        "country": "UK",
        "value": 19
    }, {
        "country": "Latvia",
        "value": 10
    }],
    "valueField": "value",
    "titleField": "country",
    "outlineAlpha": 0.4,
    "depth3D": 15,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "angle": 30,
    "exportConfig":{	
      menuItems: [{
      icon: '/lib/3/images/export.png',
      format: 'png'	  
      }]  
	}
});