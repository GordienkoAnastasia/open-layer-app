var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_500_2 = new ol.format.GeoJSON();
var features_500_2 = format_500_2.readFeatures(json_500_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_500_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_500_2.addFeatures(features_500_2);
var lyr_500_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_500_2, 
                style: style_500_2,
                interactive: true,
                title: '<img src="styles/legend/500_2.png" /> Радиус доступности автобусных остановок (500м)'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Автобусные остановки'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> ОКН'
            });
var lyr__5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Плотность достопримечательностей",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [10187351.141869, 7088810.039195, 10266153.161074, 7164847.634149]
                            })
                        });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: false,
                title: '<img src="styles/legend/_6.png" /> Другие достопримечательности'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: false,
                title: '<img src="styles/legend/_7.png" /> Природные объекты'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: false,
                title: '<img src="styles/legend/_8.png" /> Архитектурные объекты'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);cluster__9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource__9
});
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:cluster__9, 
                style: style__9,
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> Исторические объекты'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                interactive: false,
                title: '<img src="styles/legend/_10.png" /> Религиозные объекты'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                interactive: false,
                title: '<img src="styles/legend/_11.png" /> Развлекательные объекты'
            });
var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12.addFeatures(features__12);
var lyr__12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__12, 
                style: style__12,
                interactive: false,
                title: '<img src="styles/legend/_12.png" /> Культурные объекты'
            });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__13, 
                style: style__13,
                interactive: false,
                title: '<img src="styles/legend/_13.png" /> Военно-патриотические объекты'
            });
var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14.addFeatures(features__14);
var lyr__14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__14, 
                style: style__14,
                interactive: true,
                title: '<img src="styles/legend/_14.png" /> Граница города'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_500_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr__12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OSMStandard_1,lyr_500_2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__12,lyr__13,lyr__14];
lyr_500_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:city': 'addr:city', 'addr:country': 'addr:country', 'highway': 'highway', 'name': 'name', 'shelter': 'shelter', 'bench': 'bench', 'bin': 'bin', 'bus': 'bus', 'lit': 'lit', 'name:ru': 'name:ru', 'public_transport': 'public_transport', 'tactile_paving': 'tactile_paving', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:city': 'addr:city', 'addr:country': 'addr:country', 'highway': 'highway', 'name': 'name', 'shelter': 'shelter', 'bench': 'bench', 'bin': 'bin', 'bus': 'bus', 'lit': 'lit', 'name:ru': 'name:ru', 'public_transport': 'public_transport', 'tactile_paving': 'tactile_paving', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'building:levels': 'building:levels', 'addr:housenumber': 'addr:housenumber', 'addr:street': 'addr:street', 'source:addr': 'source:addr', 'name': 'name', 'shop': 'shop', 'website': 'website', 'layer': 'layer', 'amenity': 'amenity', 'email': 'email', 'official_name': 'official_name', 'opening_hours': 'opening_hours', 'phone': 'phone', 'tourism': 'tourism', 'office': 'office', 'addr:city': 'addr:city', 'addr:country': 'addr:country', 'addr:postcode': 'addr:postcode', 'bus': 'bus', 'public_transport': 'public_transport', 'healthcare': 'healthcare', 'contact:email': 'contact:email', 'contact:phone': 'contact:phone', 'contact:website': 'contact:website', 'denomination': 'denomination', 'religion': 'religion', 'abandoned': 'abandoned', 'ruins': 'ruins', 'height': 'height', 'power': 'power', 'building:use': 'building:use', 'roof:material': 'roof:material', 'brand': 'brand', 'ref': 'ref', });
lyr__6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr__7.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr__8.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr__9.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr__10.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr__11.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr__12.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr__13.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr__14.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ISO3166-2': 'ISO3166-2', 'addr:country': 'addr:country', 'admin_level': 'admin_level', 'boundary': 'boundary', 'gost_7.67-2003': 'gost_7.67-2003', 'int_ref': 'int_ref', 'is_in:continent': 'is_in:continent', 'is_in:country': 'is_in:country', 'is_in:country_code': 'is_in:country_code', 'name': 'name', 'name:be': 'name:be', 'name:ca': 'name:ca', 'name:cs': 'name:cs', 'name:de': 'name:de', 'name:en': 'name:en', 'name:es': 'name:es', 'name:fi': 'name:fi', 'name:fr': 'name:fr', 'name:hu': 'name:hu', 'name:ja': 'name:ja', 'name:lt': 'name:lt', 'name:pl': 'name:pl', 'name:ru': 'name:ru', 'name:sk': 'name:sk', 'name:zh': 'name:zh', 'name:zh-Hans': 'name:zh-Hans', 'name:zh-Hant': 'name:zh-Hant', 'official_name': 'official_name', 'ref': 'ref', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'name:it': 'name:it', 'name:la': 'name:la', 'name:nl': 'name:nl', 'name:pt': 'name:pt', 'oktmo:user': 'oktmo:user', 'short_name:sk': 'short_name:sk', 'timezone': 'timezone', 'official_status': 'official_status', 'addr:region': 'addr:region', 'population': 'population', 'addr:district': 'addr:district', });
lyr_500_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr:city': 'TextEdit', 'addr:country': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'shelter': 'TextEdit', 'bench': 'TextEdit', 'bin': 'TextEdit', 'bus': 'TextEdit', 'lit': 'TextEdit', 'name:ru': 'TextEdit', 'public_transport': 'TextEdit', 'tactile_paving': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr:city': 'TextEdit', 'addr:country': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'shelter': 'TextEdit', 'bench': 'TextEdit', 'bin': 'TextEdit', 'bus': 'TextEdit', 'lit': 'TextEdit', 'name:ru': 'TextEdit', 'public_transport': 'TextEdit', 'tactile_paving': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'type': 'TextEdit', 'building:levels': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:street': 'TextEdit', 'source:addr': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', 'website': 'TextEdit', 'layer': 'TextEdit', 'amenity': 'TextEdit', 'email': 'TextEdit', 'official_name': 'TextEdit', 'opening_hours': 'TextEdit', 'phone': 'TextEdit', 'tourism': 'TextEdit', 'office': 'TextEdit', 'addr:city': 'TextEdit', 'addr:country': 'TextEdit', 'addr:postcode': 'TextEdit', 'bus': 'TextEdit', 'public_transport': 'TextEdit', 'healthcare': 'TextEdit', 'contact:email': 'TextEdit', 'contact:phone': 'TextEdit', 'contact:website': 'TextEdit', 'denomination': 'TextEdit', 'religion': 'TextEdit', 'abandoned': 'TextEdit', 'ruins': 'TextEdit', 'height': 'TextEdit', 'power': 'TextEdit', 'building:use': 'TextEdit', 'roof:material': 'TextEdit', 'brand': 'TextEdit', 'ref': 'TextEdit', });
lyr__6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr__8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr__9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr__10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr__11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr__12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr__13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr__14.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ISO3166-2': 'TextEdit', 'addr:country': 'TextEdit', 'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'gost_7.67-2003': 'TextEdit', 'int_ref': 'TextEdit', 'is_in:continent': 'TextEdit', 'is_in:country': 'TextEdit', 'is_in:country_code': 'TextEdit', 'name': 'TextEdit', 'name:be': 'TextEdit', 'name:ca': 'TextEdit', 'name:cs': 'TextEdit', 'name:de': 'TextEdit', 'name:en': 'TextEdit', 'name:es': 'TextEdit', 'name:fi': 'TextEdit', 'name:fr': 'TextEdit', 'name:hu': 'TextEdit', 'name:ja': 'TextEdit', 'name:lt': 'TextEdit', 'name:pl': 'TextEdit', 'name:ru': 'TextEdit', 'name:sk': 'TextEdit', 'name:zh': 'TextEdit', 'name:zh-Hans': 'TextEdit', 'name:zh-Hant': 'TextEdit', 'official_name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'name:it': 'TextEdit', 'name:la': 'TextEdit', 'name:nl': 'TextEdit', 'name:pt': 'TextEdit', 'oktmo:user': 'TextEdit', 'short_name:sk': 'TextEdit', 'timezone': 'TextEdit', 'official_status': 'TextEdit', 'addr:region': 'TextEdit', 'population': 'TextEdit', 'addr:district': 'TextEdit', });
lyr_500_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:city': 'no label', 'addr:country': 'no label', 'highway': 'no label', 'name': 'no label', 'shelter': 'no label', 'bench': 'no label', 'bin': 'no label', 'bus': 'no label', 'lit': 'no label', 'name:ru': 'no label', 'public_transport': 'no label', 'tactile_paving': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:city': 'no label', 'addr:country': 'no label', 'highway': 'no label', 'name': 'no label', 'shelter': 'no label', 'bench': 'no label', 'bin': 'no label', 'bus': 'no label', 'lit': 'no label', 'name:ru': 'no label', 'public_transport': 'no label', 'tactile_paving': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'building:levels': 'no label', 'addr:housenumber': 'no label', 'addr:street': 'no label', 'source:addr': 'no label', 'name': 'no label', 'shop': 'no label', 'website': 'no label', 'layer': 'no label', 'amenity': 'no label', 'email': 'no label', 'official_name': 'no label', 'opening_hours': 'no label', 'phone': 'no label', 'tourism': 'no label', 'office': 'no label', 'addr:city': 'no label', 'addr:country': 'no label', 'addr:postcode': 'no label', 'bus': 'no label', 'public_transport': 'no label', 'healthcare': 'no label', 'contact:email': 'no label', 'contact:phone': 'no label', 'contact:website': 'no label', 'denomination': 'no label', 'religion': 'no label', 'abandoned': 'no label', 'ruins': 'no label', 'height': 'no label', 'power': 'no label', 'building:use': 'no label', 'roof:material': 'no label', 'brand': 'no label', 'ref': 'no label', });
lyr__6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr__8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr__9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr__10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr__11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr__12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr__13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr__14.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ISO3166-2': 'no label', 'addr:country': 'no label', 'admin_level': 'no label', 'boundary': 'no label', 'gost_7.67-2003': 'no label', 'int_ref': 'no label', 'is_in:continent': 'no label', 'is_in:country': 'no label', 'is_in:country_code': 'no label', 'name': 'no label', 'name:be': 'no label', 'name:ca': 'no label', 'name:cs': 'no label', 'name:de': 'no label', 'name:en': 'no label', 'name:es': 'no label', 'name:fi': 'no label', 'name:fr': 'no label', 'name:hu': 'no label', 'name:ja': 'no label', 'name:lt': 'no label', 'name:pl': 'no label', 'name:ru': 'no label', 'name:sk': 'no label', 'name:zh': 'no label', 'name:zh-Hans': 'no label', 'name:zh-Hant': 'no label', 'official_name': 'no label', 'ref': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'name:it': 'no label', 'name:la': 'no label', 'name:nl': 'no label', 'name:pt': 'no label', 'oktmo:user': 'no label', 'short_name:sk': 'no label', 'timezone': 'no label', 'official_status': 'no label', 'addr:region': 'no label', 'population': 'no label', 'addr:district': 'no label', });
lyr__14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});