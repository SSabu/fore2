var myMap = L.map('mapid', {minZoom: 9, maxZoom: 12}).setView([33.2818, -112.2291], 9);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox/light-v10',
accessToken: 'pk.eyJ1Ijoic2FidW1hZm9vIiwiYSI6ImNqMWE3cnlqcTA5dncyd216YjI0bnY4dGEifQ.fgmXgmkvialdBd3D405_BA'
}).addTo(myMap);

slider();

var maricopa = myMap.createPane("maricopa_county");

maricopa.style.opacity = 0.7;

var styleObject = {
  tracts: {
    fill: false,
    weight: 1,
    opacity: 0.2,
    color: 'gray'
  },
  geoFeature: {
      fillColor: false,
      weight: 0,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.2
  },
  click: {
    weight: 1,
    color: 'black'
  }
};

const geo1996 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/1996_foreclosure/MapServer', pane: maricopa
});

const geo1997 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/1997_foreclosure/MapServer', pane: maricopa
});

const geo1998 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/1998_foreclosure/MapServer', pane: maricopa
});

const geo1999 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/1999_foreclosure/MapServer', pane: maricopa
});

const geo2000 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2000_foreclosure/MapServer', pane: maricopa
});

const geo2001 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2001_foreclosure/MapServer', pane: maricopa
});

const geo2002 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2002_foreclosure/MapServer', pane: maricopa
});

const geo2003 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2003_foreclosure/MapServer', pane: maricopa
});

const geo2004 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2004_foreclosure/MapServer', pane: maricopa
});

const geo2005 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2005_foreclosure/MapServer', pane: maricopa
});

const geo2006 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2006_foreclosure/MapServer', pane: maricopa
});

const geo2007 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2007_foreclosure/MapServer', pane: maricopa
});

const geo2008 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2008_foreclosure/MapServer', pane: maricopa
});

const geo2009 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2009_foreclosure/MapServer', pane: maricopa
});

const geo2010 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2010_foreclosure/MapServer', pane: maricopa
});

const geo2011 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2011_foreclosure/MapServer', pane: maricopa
});

const geo2012 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2012_foreclosure/MapServer', pane: maricopa
});

const geo2013 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2013_foreclosure/MapServer', pane: maricopa
});

const geo2014 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2014_foreclosure/MapServer', pane: maricopa
});

const geo2015 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2015_foreclosure/MapServer', pane: maricopa
});

const geo2016 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2016_foreclosure/MapServer', pane: maricopa
});

const geo2017 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2017_foreclosure/MapServer', pane: maricopa
});

const geo2018 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2018_foreclosure/MapServer', pane: maricopa
});

const geo2019 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2019_foreclosure/MapServer', pane: maricopa
});

const geo2020 =  L.esri.tiledMapLayer({
url: 'https://tiles.arcgis.com/tiles/0OPQIK59PJJqLK0A/arcgis/rest/services/2020_foreclosure/MapServer', pane: maricopa
});

const featureGeo96 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/1996_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo97 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/1997_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo98 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/1998_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo99 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/1999_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo00 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2000_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo01 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2001_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo02 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2002_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo03 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2003_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo04 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2004_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo05 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2005_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo06 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2006_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo07 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2007_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo08 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2008_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo09 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2009_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo10 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2010_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo11 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2011_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo12 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2012_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo13 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2013_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo14 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2014_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo15 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2015_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo16 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2016_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo17 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2017_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo18 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2018_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo19 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2019_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

const featureGeo20 = L.esri.featureLayer({
  url: 'https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/2020_foreclosure/FeatureServer/0',
  style: styleObject.geoFeature,
});

geo1996.addTo(myMap);
featureGeo96.addTo(myMap);

featureGeo96.bindPopup(function(layer) {
  let name = layer.feature.properties.AGGTRACT;
  if (name.length > 4) {
    name = name.substring(0,4) + "." + name.substring(4,name.length);
  }
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo96.on("click", function(evt) {
  featureGeo96.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo97.bindPopup(function(layer) {
  let name = layer.feature.properties.AGGTRACT;
  if (name.length > 4) {
    name = name.substring(0,4) + "." + name.substring(4,name.length);
  }
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo97.on("click", function(evt) {
  featureGeo97.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo98.bindPopup(function(layer) {
  let name = layer.feature.properties.AGGTRACT;
  if (name.length > 4) {
    name = name.substring(0,4) + "." + name.substring(4,name.length);
  }
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo98.on("click", function(evt) {
  featureGeo98.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo99.bindPopup(function(layer) {
  let name = layer.feature.properties.AGGTRACT;
  if (name.length > 4) {
    name = name.substring(0,4) + "." + name.substring(4,name.length);
  }
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo99.on("click", function(evt) {
  featureGeo99.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo00.bindPopup(function(layer) {
  let name = layer.feature.properties.NAME;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo00.on("click", function(evt) {
  featureGeo00.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo01.bindPopup(function(layer) {
  let name = layer.feature.properties.NAME00;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo01.on("click", function(evt) {
  featureGeo01.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo02.bindPopup(function(layer) {
  let name = layer.feature.properties.NAME00;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo02.on("click", function(evt) {
  featureGeo02.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo03.bindPopup(function(layer) {
  let name = layer.feature.properties.NAME00;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo03.on("click", function(evt) {
  featureGeo03.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo04.bindPopup(function(layer) {
  let name = layer.feature.properties.NAME00;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo04.on("click", function(evt) {
  featureGeo04.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo05.bindPopup(function(layer) {
  let name = layer.feature.properties.NAME00;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo05.on("click", function(evt) {
  featureGeo05.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo06.bindPopup(function(layer) {
  let name = layer.feature.properties.NAME00;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo06.on("click", function(evt) {
  featureGeo06.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo07.bindPopup(function(layer) {
  let name = layer.feature.properties.NAME00;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo07.on("click", function(evt) {
  featureGeo07.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo08.bindPopup(function(layer) {
  let name = layer.feature.properties.NAME00;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo08.on("click", function(evt) {
  featureGeo08.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo09.bindPopup(function(layer) {
  let name = layer.feature.properties.NAME00;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>Census Tract '+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo09.on("click", function(evt) {

  featureGeo09.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo10.bindPopup(function(layer) {
  let name = layer.feature.properties.NAMELSAD10;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>'+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo10.on("click", function(evt) {
  featureGeo10.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo11.bindPopup(function(layer) {
  let name = layer.feature.properties.NAMELSAD;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>'+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo11.on("click", function(evt) {
  featureGeo11.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo12.bindPopup(function(layer) {
  let name = layer.feature.properties.NAMELSAD;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>'+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo12.on("click", function(evt) {
  featureGeo12.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo13.bindPopup(function(layer) {
  let name = layer.feature.properties.NAMELSAD;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>'+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo13.on("click", function(evt) {
  featureGeo13.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo14.bindPopup(function(layer) {
  let name = layer.feature.properties.NAMELSAD;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>'+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo14.on("click", function(evt) {
  featureGeo14.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo15.bindPopup(function(layer) {
  let name = layer.feature.properties.NAMELSAD;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>'+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo15.on("click", function(evt) {
  featureGeo15.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo16.bindPopup(function(layer) {
  let name = layer.feature.properties.NAMELSAD;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>'+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo16.on("click", function(evt) {
  featureGeo16.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo17.bindPopup(function(layer) {
  let name = layer.feature.properties.NAMELSAD;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>'+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo17.on("click", function(evt) {
  featureGeo17.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo18.bindPopup(function(layer) {
  let name = layer.feature.properties.NAMELSAD;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>'+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo18.on("click", function(evt) {
  featureGeo18.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo19.bindPopup(function(layer) {
  let name = layer.feature.properties.NAMELSAD;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>'+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo19.on("click", function(evt) {
  featureGeo19.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

featureGeo20.bindPopup(function(layer) {
  let name = layer.feature.properties.NAMELSAD;
  let rate = layer.feature.properties.rate_prcnt;
  let jc = layer.feature.properties.Join_Count;
  return L.Util.template('<p>'+name+'<br> Rate of foreclosures: <strong>'+rate.toFixed(2)+'%</strong> <br> Number of Foreclosures: <strong>'+jc+'</strong></p>', layer.feature.properties)
});

featureGeo20.on("click", function(evt) {
  featureGeo20.setStyle(styleObject.geoFeature);
  evt.layer.setStyle(styleObject.click);
  var center = evt.layer.getBounds().getCenter();

  var zoom = myMap.getZoom();

  if (zoom < 10) {
    myMap.setView([center.lat, center.lng], 10);
  } else {
    myMap.setView([center.lat, center.lng], zoom);
  }

});

var chartData = [{"year": 1996, "count": 8},
                 {"year": 1997, "count": 19},
                 {"year": 1998, "count": 16},
                 {"year": 1999, "count": 52},
                 {"year": 2000, "count": 249},
                 {"year": 2001, "count": 1996},
                 {"year": 2002, "count": 4860},
                 {"year": 2003, "count": 5101},
                 {"year": 2004, "count": 3090},
                 {"year": 2005, "count": 705},
                 {"year": 2006, "count": 2793},
                 {"year": 2007, "count": 18216},
                 {"year": 2008, "count": 51851},
                 {"year": 2009, "count": 58412},
                 {"year": 2010, "count": 49190},
                 {"year": 2011, "count": 29727},
                 {"year": 2012, "count": 18825},
                 {"year": 2013, "count": 7483},
                 {"year": 2014, "count": 4985},
                 {"year": 2015, "count": 3917},
                 {"year": 2016, "count": 2974},
                 {"year": 2017, "count": 2194},
                 {"year": 2018, "count": 1506},
                 {"year": 2019, "count": 1127},
                 {"year": 2020, "count": 90}];

legend();

function slider() {

  var dataTime = [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  var formatComma = d3.format(",");

  var chartData = [{"year": 1996, "count": 8},
                   {"year": 1997, "count": 19},
                   {"year": 1998, "count": 16},
                   {"year": 1999, "count": 52},
                   {"year": 2000, "count": 249},
                   {"year": 2001, "count": 1996},
                   {"year": 2002, "count": 4860},
                   {"year": 2003, "count": 5101},
                   {"year": 2004, "count": 3090},
                   {"year": 2005, "count": 705},
                   {"year": 2006, "count": 2793},
                   {"year": 2007, "count": 18216},
                   {"year": 2008, "count": 51851},
                   {"year": 2009, "count": 58412},
                   {"year": 2010, "count": 49190},
                   {"year": 2011, "count": 29727},
                   {"year": 2012, "count": 18825},
                   {"year": 2013, "count": 7483},
                   {"year": 2014, "count": 4985},
                   {"year": 2015, "count": 3917},
                   {"year": 2016, "count": 2974},
                   {"year": 2017, "count": 2194},
                   {"year": 2018, "count": 1506},
                   {"year": 2019, "count": 1127},
                   {"year": 2020, "count": 90}];

  d3.select("#value-time").text("1996");

  var sliderTime = d3.sliderBottom()
                     .min(d3.min(dataTime))
                     .max(d3.max(dataTime))
                     .step(1)
                     .width(700)
                     .tickFormat(d3.format("d"))
                     .tickValues(dataTime)
                     .on("onchange", val => {
                       d3.select("#value-time").text(val);

                       player(val);

                     });

  var gTime = d3.select("#slider-time")
                .append("svg")
                .attr("width", 730)
                .attr("height", 50)
                .append("g")
                .attr("transform", "translate(15,10)");

  gTime.call(sliderTime);

  var myTimer;

  var year = 1996;

  chartData.forEach(function(data){ if (data['year'] == 1996) { d3.select("#year-display").text("Year: 1996, Foreclosure Count: "+formatComma(data['count'])+" reflecting 80.0% of total records" ); }});

  d3.select("#play").on("click", function() {

     myTimer = setInterval(function() {
       sliderTime.value(++year);

       player(year);

       if (year === 2020) {
         clearInterval(myTimer);
       }
     }, 3000);
   });

   d3.select("#stop").on("click", function() {
     clearInterval(myTimer);
   });

   d3.select("#reload").on("click", function() {

     var currYear = sliderTime.value();

     sliderTime.value(1996);

     year = 1996;

     myMap.eachLayer(function (layer) {
          if (layer.options.id !== "mapbox/light-v10") {
            myMap.removeLayer(layer);
          }
     });

     geo1996.addTo(myMap);
     featureGeo96.addTo(myMap);

     // d3.select("#id_2014").attr("stroke","#a2b5e0").attr("stroke-width", 3.5);
     // d3.select("#id_2015").attr("stroke","").attr("stroke-width", 0);
     // d3.select("#id_2016").attr("stroke","").attr("stroke-width", 0);
     // d3.select("#id_2017").attr("stroke","").attr("stroke-width", 0);
     // d3.select("#id_2018").attr("stroke","").attr("stroke-width", 0);
     // d3.select("#id_2019").attr("stroke","").attr("stroke-width", 0);
     // d3.select("#id_2020").attr("stroke","").attr("stroke-width", 0);
     //
     // chartData1.forEach(function(data){ if (data['year'] == 2014) { d3.select("#year_display").text("Year: 2014, Eviction Count: "+formatComma(data['count']) +" reflecting 71.7% of total records" ); }});

   });

   d3.select("#right-arrow").on("click", function() {
     var currYrRt = sliderTime.value();
     sliderTime.value(++currYrRt);

     player(currYrRt);

   });

   d3.select("#left-arrow").on("click", function() {
     var currYrLft = sliderTime.value();
     sliderTime.value(--currYrLft);

     player(currYrLft);

   });



}

function player(time) {

  var formatComma = d3.format(",");

  // var chartData = [{"year": 1996, "count": 8},
  //                  {"year": 1997, "count": 19},
  //                  {"year": 1998, "count": 16},
  //                  {"year": 1999, "count": 52},
  //                  {"year": 2000, "count": 249},
  //                  {"year": 2001, "count": 1996},
  //                  {"year": 2002, "count": 4860},
  //                  {"year": 2003, "count": 5101},
  //                  {"year": 2004, "count": 3090},
  //                  {"year": 2005, "count": 705},
  //                  {"year": 2006, "count": 2793},
  //                  {"year": 2007, "count": 18216},
  //                  {"year": 2008, "count": 51851},
  //                  {"year": 2009, "count": 58412},
  //                  {"year": 2010, "count": 49190},
  //                  {"year": 2011, "count": 29727},
  //                  {"year": 2012, "count": 18825},
  //                  {"year": 2013, "count": 7483},
  //                  {"year": 2014, "count": 4985},
  //                  {"year": 2015, "count": 3917},
  //                  {"year": 2016, "count": 2974},
  //                  {"year": 2017, "count": 2194},
  //                  {"year": 2018, "count": 1506},
  //                  {"year": 2019, "count": 1127},
  //                  {"year": 2020, "count": 90}];

  switch(time) {
    case 1996:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo1996.addTo(myMap);
      featureGeo96.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo96.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 1996) { d3.select("#year-display").text("Year: 1996, Foreclosure Count: "+formatComma(data['count'])+" reflecting 80.0% of total records" ); }});

    break;

    case 1997:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo1997.addTo(myMap);
      featureGeo97.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo97.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 1997) { d3.select("#year-display").text("Year: 1997, Foreclosure Count: "+formatComma(data['count'])+" reflecting 95.0% of total records" ); }});

    break;

    case 1998:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo1998.addTo(myMap);
      featureGeo98.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo98.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 1998) { d3.select("#year-display").text("Year: 1998, Foreclosure Count: "+formatComma(data['count'])+" reflecting 88.9% of total records" ); }});

    break;

    case 1999:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo1999.addTo(myMap);
      featureGeo99.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo99.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 1999) { d3.select("#year-display").text("Year: 1999, Foreclosure Count: "+formatComma(data['count'])+" reflecting 96.2% of total records" ); }});

    break;

    case 2000:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2000.addTo(myMap);
      featureGeo00.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo00.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2000) { d3.select("#year-display").text("Year: 2000, Foreclosure Count: "+formatComma(data['count'])+" reflecting 98.4% of total records" ); }});

    break;

    case 2001:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2001.addTo(myMap);
      featureGeo01.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo01.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2001) { d3.select("#year-display").text("Year: 2001, Foreclosure Count: "+formatComma(data['count'])+" reflecting 98.7% of total records" ); }});

    break;

    case 2002:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2002.addTo(myMap);
      featureGeo02.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo02.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2002) { d3.select("#year-display").text("Year: 2002, Foreclosure Count: "+formatComma(data['count'])+" reflecting 98.9% of total records" ); }});

    break;

    case 2003:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2003.addTo(myMap);
      featureGeo03.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo03.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2003) { d3.select("#year-display").text("Year: 2003, Foreclosure Count: "+formatComma(data['count'])+" reflecting 98.9% of total records" ); }});

    break;

    case 2004:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2004.addTo(myMap);
      featureGeo04.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo04.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2004) { d3.select("#year-display").text("Year: 2004, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.0% of total records" ); }});

    break;

    case 2005:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2005.addTo(myMap);
      featureGeo05.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo05.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2005) { d3.select("#year-display").text("Year: 2005, Foreclosure Count: "+formatComma(data['count'])+" reflecting 98.2% of total records" ); }});

    break;

    case 2006:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2006.addTo(myMap);
      featureGeo06.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo06.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2006) { d3.select("#year-display").text("Year: 2006, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.2% of total records" ); }});

    break;

    case 2007:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2007.addTo(myMap);
      featureGeo07.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo07.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2007) { d3.select("#year-display").text("Year: 2007, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.6% of total records" ); }});

    break;

    case 2008:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2008.addTo(myMap);
      featureGeo08.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo08.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2008) { d3.select("#year-display").text("Year: 2008, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.6% of total records" ); }});

    break;

    case 2009:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2009.addTo(myMap);
      featureGeo09.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo09.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2009) { d3.select("#year-display").text("Year: 2009, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.6% of total records" ); }});

    break;

    case 2010:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2010.addTo(myMap);
      featureGeo10.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo10.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2010) { d3.select("#year-display").text("Year: 2010, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.9% of total records" ); }});

    break;

    case 2011:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2011.addTo(myMap);
      featureGeo11.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo11.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2011) { d3.select("#year-display").text("Year: 2011, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.9% of total records" ); }});

    break;

    case 2012:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2012.addTo(myMap);
      featureGeo12.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo12.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2012) { d3.select("#year-display").text("Year: 2012, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.9% of total records" ); }});

    break;

    case 2013:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2013.addTo(myMap);
      featureGeo13.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo13.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2013) { d3.select("#year-display").text("Year: 2013, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.9% of total records" ); }});

    break;

    case 2014:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2014.addTo(myMap);
      featureGeo14.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo14.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2014) { d3.select("#year-display").text("Year: 2014, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.9% of total records" ); }});

    break;

    case 2015:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2015.addTo(myMap);
      featureGeo15.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo15.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2015) { d3.select("#year-display").text("Year: 2015, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.9% of total records" ); }});

    break;

    case 2016:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2016.addTo(myMap);
      featureGeo16.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo16.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2016) { d3.select("#year-display").text("Year: 2016, Foreclosure Count: "+formatComma(data['count'])+" reflecting 99.9% of total records" ); }});

    break;

    case 2017:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2017.addTo(myMap);
      featureGeo17.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo17.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2017) { d3.select("#year-display").text("Year: 2017, Foreclosure Count: "+formatComma(data['count'])+" reflecting 100% of total records" ); }});

    break;

    case 2018:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2018.addTo(myMap);
      featureGeo18.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo18.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2018) { d3.select("#year-display").text("Year: 2018, Foreclosure Count: "+formatComma(data['count'])+" reflecting 100% of total records" ); }});

    break;

    case 2019:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2019.addTo(myMap);
      featureGeo19.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo19.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2019) { d3.select("#year-display").text("Year: 2019, Foreclosure Count: "+formatComma(data['count'])+" reflecting 97% of total records" ); }});

    break;

    case 2020:

      myMap.eachLayer(function (layer) {
           if (layer.options.id !== "mapbox/light-v10") {
             myMap.removeLayer(layer);
           }
      });

      geo2020.addTo(myMap);
      featureGeo20.addTo(myMap);

      myMap.on("click", function() {
        myMap.setView([33.2818, -112.2291], 9);
        featureGeo20.setStyle(styleObject.geoFeature);
      });

      chartData.forEach(function(data){ if (data['year'] == 2020) { d3.select("#year-display").text("Year: 2020, Foreclosure Count: "+formatComma(data['count'])+" reflecting 89% of total records" ); }});

    break;

  }

};

function legend() {

  var formatComma = d3.format(",");

  var chartData = [{"year": 1996, "count": 8},
                   {"year": 1997, "count": 19},
                   {"year": 1998, "count": 16},
                   {"year": 1999, "count": 52},
                   {"year": 2000, "count": 249},
                   {"year": 2001, "count": 1996},
                   {"year": 2002, "count": 4860},
                   {"year": 2003, "count": 5101},
                   {"year": 2004, "count": 3090},
                   {"year": 2005, "count": 705},
                   {"year": 2006, "count": 2793},
                   {"year": 2007, "count": 18216},
                   {"year": 2008, "count": 51851},
                   {"year": 2009, "count": 58412},
                   {"year": 2010, "count": 49190},
                   {"year": 2011, "count": 29727},
                   {"year": 2012, "count": 18825},
                   {"year": 2013, "count": 7483},
                   {"year": 2014, "count": 4985},
                   {"year": 2015, "count": 3917},
                   {"year": 2016, "count": 2974},
                   {"year": 2017, "count": 2194},
                   {"year": 2018, "count": 1506},
                   {"year": 2019, "count": 1127},
                   {"year": 2020, "count": 90}];

  var chartData1 = [{"year":2019,"count": 1127},
                   {"year":2020,"count": 90}];

  var chartMargin = {top: 20, right: 50, bottom: 20, left: 50},
      chartWidth = 500 - chartMargin.left - chartMargin.right,
      chartHeight = 200 - chartMargin.top - chartMargin.bottom;

  let chartX = d3.scaleLinear().range([0,chartWidth]);
  let chartY = d3.scaleLinear().range([chartHeight,0]);

  let pathgenerator = d3.line()
                       .defined(function(d) { return d.year !== 2020 })
                       .x(function(d) { return chartX(d.year); })
                       .y(function(d) { return chartY(d.count); });

  let pathgenerator1 = d3.line()
                         .x(function(d) { return chartX(d.year); })
                         .y(function(d) { return chartY(d.count); });

  let viz = d3.select("#visualization")
              .append("svg")
              .attr("width", chartWidth + chartMargin.left + chartMargin.right)
              .attr("height", chartHeight + chartMargin.top + chartMargin.bottom)
              .append("g")
              .attr("stroke", 1)
              .attr("transform","translate(" +(20+chartMargin.left) + "," + chartMargin.top + ")");

  let div = d3.select("body").append("div")
              .attr("class", "tooltip")
              .style("opacity", 0);

  chartX.domain(d3.extent(chartData, function(d) { return d.year; }));
  chartY.domain([0, d3.max(chartData, function(d) { return d.count; })]);

  viz.append("g").call(d3.axisLeft(chartY));

  viz.append("path")
     .data([chartData])
     .attr("class","line")
     .attr("d", pathgenerator)
     .style("fill", "none")
     .style("stroke", "black");

  viz.selectAll("circle")
     .data(chartData)
     .enter()
     .append("circle")
     .attr("r", 4)
     .attr("cx", function(d){return chartX(d.year); })
     .attr("cy", function(d){return chartY(d.count); })
     .attr("fill","steelblue")
     .attr("id",function(d){ return "id_"+d.year; })
     .on("mouseover", function(d) {
             div.style("opacity", .9);
             div.html("Count of Foreclosures: " + formatComma(d.count))
     .style("left", (d3.event.pageX - 40) + "px")
     .style("top", (d3.event.pageY - 50) + "px");
     })
     .on("mouseout", function(d) {
            div.style("opacity", 0);
     });

  viz.append("path")
     .data([chartData1])
     .attr("class","line")
     .attr("d", pathgenerator1)
     .style("fill", "none")
     .style("stroke", "black")
     .style("stroke-dasharray", "4,4");

  // viz.selectAll("circle")
  //    .data(chartData1)
  //    .enter()
  //    .append("circle")
  //    .attr("r",3)
  //    .attr("cx", function(d){return chartX(d.year); })
  //    .attr("cy", function(d){return chartY(d.count); })
  //    .attr("fill","steelblue")
  //    .attr("id",function(d){ return "id_"+d.year; })
  //    .on("mouseover", function(d) {
  //            div.style("opacity", .9);
  //            div.html("Count of Foreclosures: " + formatComma(d.count))
  //    .style("left", (d3.event.pageX - 200) + "px")
  //    .style("top", (d3.event.pageY - 18) + "px");
  //    })
  //    .on("mouseout", function(d) {
  //            div.style("opacity", 0);
  //    });

  let formatxAxis = d3.format('.0f');

  viz.append("g")
     .attr("transform", "translate(0," + chartHeight + ")")
     .call(d3.axisBottom(chartX).ticks(5).tickFormat(formatxAxis));

  // d3.select("#id_1996").attr("stroke","#a2b5e0").attr("stroke-width", 2.5);

  var legendTitle = d3.select("#dot-legend").append("svg").attr("width", 200).attr("height",195).attr("border", 1).attr("transform", "translate(165,35)");

  legendTitle.append("text")
             .text("Rate of Foreclosures")
             .attr("fill","black")
             .attr("x", 15)
             .attr("y", 25);

  legendTitle.append("rect")
             .attr("x",0)
             .attr("y",0)
             .attr("height", 185)
             .attr("width", 200)
             .attr("stroke","black")
             .attr("fill","none")
             .attr("stroke-width", 1);

  legendTitle.append("circle")
             .attr("cx", 62)
             .attr("cy", 55)
             .attr("r", 5)
             .attr("stroke", "black")
             .attr("fill", "#54278f");

  legendTitle.append("text")
             .attr("x", 72)
             .attr("y", 57)
             .text("25.51% - 58.97%")
             .style("font-size", "13px")
             .attr("alignment-baseline", "middle");

  legendTitle.append("circle")
             .attr("cx", 62)
             .attr("cy", 75)
             .attr("r", 5)
             .attr("stroke", "black")
             .attr("fill", "#756bb1");

   legendTitle.append("text")
              .attr("x", 72)
              .attr("y", 77)
              .text("16.01% - 25.50%")
              .style("font-size", "13px")
              .attr("alignment-baseline", "middle");

   legendTitle.append("circle")
              .attr("cx", 62)
              .attr("cy", 95)
              .attr("r", 5)
              .attr("stroke", "black")
              .attr("fill", "#a09cc9");

   legendTitle.append("text")
              .attr("x", 72)
              .attr("y", 97)
              .text("10.72% - 16.00%")
              .style("font-size", "13px")
              .attr("alignment-baseline", "middle");

   legendTitle.append("circle")
              .attr("cx", 62)
              .attr("cy", 115)
              .attr("r", 5)
              .attr("stroke", "black")
              .attr("fill", "#bfbddb");

   legendTitle.append("text")
              .attr("x", 72)
              .attr("y", 119)
              .text("6.80% - 10.71%")
              .style("font-size", "13px");

   legendTitle.append("circle")
              .attr("cx", 62)
              .attr("cy", 135)
              .attr("r", 5)
              .attr("stroke", "black")
              .attr("fill", "#e2deed");

    legendTitle.append("text")
               .attr("x", 72)
               .attr("y", 137)
               .text("0.01% - 6.79%")
               .style("font-size", "13px")
               .attr("alignment-baseline", "middle");

     legendTitle.append("circle")
                .attr("cx", 62)
                .attr("cy", 155)
                .attr("r", 5)
                .attr("stroke", "black")
                .attr("fill", "#FFF");

      legendTitle.append("text")
                 .attr("x", 72)
                 .attr("y", 157)
                 .text("0%")
                 .style("font-size", "13px")
                 .attr("alignment-baseline", "middle");


};
