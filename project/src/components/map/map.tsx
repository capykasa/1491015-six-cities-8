import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import { Offer, OfferLocation } from '../../types/offers';
import { MarkerUrl } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: OfferLocation;
  points: Offer[];
  selectedPoint: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: MarkerUrl.DefaultMarker,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: MarkerUrl.CurrentMarker,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

function Map(props: MapProps): JSX.Element {
  const { city, points, selectedPoint } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const markersRef = useRef<Marker[]>([]);

  useEffect(() => {
    if (markersRef.current) {
      markersRef.current.forEach((marker) => marker.remove);
      markersRef.current = [];
    }


    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        const addedMarker = marker
          .setIcon(
            selectedPoint !== null && selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
        markersRef.current.push(addedMarker);
      });
    }
  }, [map, points, selectedPoint]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
