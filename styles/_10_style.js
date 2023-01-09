var size = 0;
var placement = 'point';

var style__10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 9.999999999999998 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(47,81,92,0.7254901960784313)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), fill: new ol.style.Fill({color: 'rgba(56,132,159,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
