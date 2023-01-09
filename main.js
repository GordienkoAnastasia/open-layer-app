import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';