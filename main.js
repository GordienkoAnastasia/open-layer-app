import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new TileLayer({
        source: new TileWMS({
        url: 'http://localhost:8080/geoserver/study/wms',
        params: {'LAYERS': 'study:red_border', 'TILED': true}, // слой с красной линией Минусинска
        serverType: 'geoserver',
        // Countries have transparency, so do not fade tiles:
        transition: 0,
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([91.6875, 53.7103]),
    zoom: 12.1
  })
});
