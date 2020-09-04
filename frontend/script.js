var myMap = L.map('mapid', {minZoom: 9, maxZoom: 12}).setView([33.2818, -112.2291], 9);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox/light-v10',
accessToken: 'pk.eyJ1Ijoic2FidW1hZm9vIiwiYSI6ImNqMWE3cnlqcTA5dncyd216YjI0bnY4dGEifQ.fgmXgmkvialdBd3D405_BA'
}).addTo(myMap);

slider();

var maricopa = myMap.createPane("maricopa_county");

maricopa.style.opacity = 0.85;

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
  console.log(layer);
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
  console.log(layer);
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
  console.log(layer);
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
  console.log(layer);
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
  console.log(layer);
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
  console.log(layer);
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
  console.log(layer);
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
  console.log(layer);
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
  console.log(layer);
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
  console.log(layer);
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

myMap.on("click", function() {
  myMap.setView([33.2818, -112.2291], 9);
});

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

}

function player(time) {

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

  // map.eachLayer(function (layer) {
  //      map.removeLayer(layer);
  // });

  switch(time) {
    case 1996:

      console.log("1996");

      geo1997.removeFrom(myMap);
      featureGeo97.removeFrom(myMap);

      geo1996.addTo(myMap);
      featureGeo96.addTo(myMap);

    break;

    case 1997:

      console.log("1997");

      geo1996.removeFrom(myMap);
      featureGeo96.removeFrom(myMap);

      geo1998.removeFrom(myMap);
      featureGeo98.removeFrom(myMap);

      geo1997.addTo(myMap);
      featureGeo97.addTo(myMap);

    break;

    case 1998:

      console.log("1998");

      geo1997.removeFrom(myMap);
      featureGeo97.removeFrom(myMap);

      geo1999.removeFrom(myMap);
      featureGeo99.removeFrom(myMap);

      geo1998.addTo(myMap);
      featureGeo98.addTo(myMap);

    break;

    case 1999:

      console.log("1999");

      geo2000.removeFrom(myMap);
      featureGeo00.removeFrom(myMap);

      geo1998.removeFrom(myMap);
      featureGeo98.removeFrom(myMap);

      geo1999.addTo(myMap);
      featureGeo99.addTo(myMap);

    break;

    case 2000:

      console.log("2000");

      geo2001.removeFrom(myMap);
      featureGeo01.removeFrom(myMap);

      geo1999.removeFrom(myMap);
      featureGeo99.removeFrom(myMap);

      geo2000.addTo(myMap);
      featureGeo00.addTo(myMap);

    break;

    case 2001:

      console.log("2001");

      geo2002.removeFrom(myMap);
      featureGeo02.removeFrom(myMap);

      geo2000.removeFrom(myMap);
      featureGeo00.removeFrom(myMap);

      geo2001.addTo(myMap);
      featureGeo01.addTo(myMap);

    break;

    case 2002:

      console.log("2002");

      geo2001.removeFrom(myMap);
      featureGeo01.removeFrom(myMap);

      geo2003.removeFrom(myMap);
      featureGeo03.removeFrom(myMap);

      geo2002.addTo(myMap);
      featureGeo02.addTo(myMap);

    break;

    case 2003:

      console.log("2003");

      geo2002.removeFrom(myMap);
      featureGeo02.removeFrom(myMap);

      geo2004.removeFrom(myMap);
      featureGeo04.removeFrom(myMap);

      geo2003.addTo(myMap);
      featureGeo03.addTo(myMap);

    break;

    case 2004:

      console.log("2004");

      geo2003.removeFrom(myMap);
      featureGeo03.removeFrom(myMap);

      geo2005.removeFrom(myMap);
      featureGeo05.removeFrom(myMap);

      geo2004.addTo(myMap);
      featureGeo04.addTo(myMap);

    break;

    case 2005:

      console.log("2005");

      geo2004.removeFrom(myMap);
      featureGeo04.removeFrom(myMap);

      geo2006.removeFrom(myMap);
      featureGeo06.removeFrom(myMap);

      geo2005.addTo(myMap);
      featureGeo05.addTo(myMap);

    break;

    case 2006:

      console.log("2006");

      geo2005.removeFrom(myMap);
      featureGeo05.removeFrom(myMap);

      geo2007.removeFrom(myMap);
      featureGeo07.removeFrom(myMap);

      geo2006.addTo(myMap);
      featureGeo06.addTo(myMap);

    break;

    case 2007:

      console.log("2007");

      geo2006.removeFrom(myMap);
      featureGeo06.removeFrom(myMap);

      geo2008.removeFrom(myMap);
      featureGeo08.removeFrom(myMap);

      geo2007.addTo(myMap);
      featureGeo07.addTo(myMap);

    break;

    case 2008:

      console.log("2008");

      geo2007.removeFrom(myMap);
      featureGeo07.removeFrom(myMap);

      geo2009.removeFrom(myMap);
      featureGeo09.removeFrom(myMap);

      geo2008.addTo(myMap);
      featureGeo08.addTo(myMap);

    break;

    case 2009:

      console.log("2009");

      geo2008.removeFrom(myMap);
      featureGeo08.removeFrom(myMap);

      geo2010.removeFrom(myMap);
      featureGeo10.removeFrom(myMap);

      geo2009.addTo(myMap);
      featureGeo09.addTo(myMap);

    break;

    case 2010:

      console.log("2010");

      geo2011.removeFrom(myMap);
      featureGeo11.removeFrom(myMap);

      geo2009.removeFrom(myMap);
      featureGeo09.removeFrom(myMap);

      geo2010.addTo(myMap);
      featureGeo10.addTo(myMap);

    break;

    case 2011:

      console.log("2011");

      geo2010.removeFrom(myMap);
      featureGeo10.removeFrom(myMap);

      geo2012.removeFrom(myMap);
      featureGeo12.removeFrom(myMap);

      geo2011.addTo(myMap);
      featureGeo11.addTo(myMap);

    break;

    case 2012:

      console.log("2012");

      geo2013.removeFrom(myMap);
      featureGeo13.removeFrom(myMap);

      geo2011.removeFrom(myMap);
      featureGeo11.removeFrom(myMap);

      geo2012.addTo(myMap);
      featureGeo12.addTo(myMap);

    break;

    case 2013:

      console.log("2013");

      geo2012.removeFrom(myMap);
      featureGeo12.removeFrom(myMap);

      geo2014.removeFrom(myMap);
      featureGeo14.removeFrom(myMap);

      geo2013.addTo(myMap);
      featureGeo13.addTo(myMap);

    break;

    case 2014:

      console.log("2014");

      geo2013.removeFrom(myMap);
      featureGeo13.removeFrom(myMap);

      geo2015.removeFrom(myMap);
      featureGeo15.removeFrom(myMap);

      geo2014.addTo(myMap);
      featureGeo14.addTo(myMap);

    break;

    case 2015:

      console.log("2015");

      geo2014.removeFrom(myMap);
      featureGeo14.removeFrom(myMap);

      geo2016.removeFrom(myMap);
      featureGeo16.removeFrom(myMap);

      geo2015.addTo(myMap);
      featureGeo15.addTo(myMap);

    break;

    case 2016:

      console.log("2016");

      geo2017.removeFrom(myMap);
      featureGeo17.removeFrom(myMap);

      geo2015.removeFrom(myMap);
      featureGeo15.removeFrom(myMap);

      geo2016.addTo(myMap);
      featureGeo16.addTo(myMap);

    break;

    case 2017:

      console.log("2017");

      geo2016.removeFrom(myMap);
      featureGeo16.removeFrom(myMap);

      geo2018.removeFrom(myMap);
      featureGeo18.removeFrom(myMap);

      geo2017.addTo(myMap);
      featureGeo17.addTo(myMap);

    break;

    case 2018:

      console.log("2018");

      geo2017.removeFrom(myMap);
      featureGeo17.removeFrom(myMap);

      geo2019.removeFrom(myMap);
      featureGeo19.removeFrom(myMap);

      geo2018.addTo(myMap);
      featureGeo18.addTo(myMap);

    break;

    case 2019:

      console.log("2019");

      geo2018.removeFrom(myMap);
      featureGeo18.removeFrom(myMap);

      geo2020.removeFrom(myMap);
      featureGeo20.removeFrom(myMap);

      geo2019.addTo(myMap);
      featureGeo19.addTo(myMap);

    break;

    case 2020:

      console.log("2020");

      // geo1997.removeFrom(myMap);
      // featureGeo97.removeFrom(myMap);

      geo2019.removeFrom(myMap);
      featureGeo19.removeFrom(myMap);

      geo2020.addTo(myMap);
      featureGeo20.addTo(myMap);

    break;

  }

};
