import { Component } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-arcgismap',
  imports: [],
  templateUrl: './arcgismap.html',
  styleUrl: './arcgismap.css'
})
export class Arcgismap {

  constructor() {
    console.log('ArcgisMap constructor');
  }

  ngAfterViewInit() {
    console.log('ArcgisMap ngAfterViewInit');
    const map = new Map({ basemap: 'streets-navigation-vector' });
    new MapView({
      container: 'mapViewDiv',
      map,
      center: [-118.244, 34.052],
      zoom: 10
    });
  }
}
