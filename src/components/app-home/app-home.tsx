import { Component, h } from '@stencil/core';
import Leaflet from 'leaflet';
import "leaflet.fullscreen/Control.FullScreen.js";
import "leaflet.fullscreen";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  protected map: Leaflet.Map;
  private mapContainer: HTMLElement;

  render() {
    return (
      <div class="app-home">
        <p>
          In the <b>top left</b> of the below map is the box for the icon, but no icon.
        </p>
        <div class={'map-wrapper '} ref={el => this.mapContainer = el} />
      </div>
    );
  }

  componentDidLoad() {
    this.map = Leaflet.map(this.mapContainer, {
      zoomControl: false,
      zoom: 10,
      zoomDelta: 0.5,
      zoomSnap: 0,
      center: [50, 30],
      attributionControl: false,
      doubleClickZoom: false,
      preferCanvas: true,
      tap: false,
    });

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      minZoom: 0,
      maxZoom: 24,
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    Leaflet.control.fullscreen({
      position: "topleft", // change the position of the button can be topleft, topright, bottomright or bottomleft, default topleft
      title: "Show me the fullscreen !", // change the title of the button, default Full Screen
      titleCancel: "Exit fullscreen mode", // change the title of the button when fullscreen is on, default Exit Full Screen
      content: null, // change the content of the button, can be HTML, default null
    }).addTo(this.map);
  }
}
