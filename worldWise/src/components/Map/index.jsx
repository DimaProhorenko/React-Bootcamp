import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMap,
	useMapEvents,
} from 'react-leaflet';
import PropTypes from 'prop-types';
import styles from './Map.module.css';
import { useCities } from '../../contexts/CitiesContext';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useUrlPosition } from '../../hooks/useUrlPosition';
import { Button, Spinner } from '../';

function Map() {
	const { cities } = useCities();
	// const [searchParams, setSearchParams] = useSearchParams();
	const [mapPosition, setMapPosition] = useState([40, 0]);
	const {
		isLoading: isGeolocationLoading,
		position: geoPosition,
		getPosition: getGeoPosition,
	} = useGeolocation();
	const [mapLat, mapLng] = useUrlPosition();

	// const mapLat = searchParams.get('lat');
	// const mapLng = searchParams.get('lng');

	useEffect(() => {
		if (mapLat && mapLng) {
			setMapPosition([mapLat, mapLng]);
		}
	}, [mapLat, mapLng]);

	useEffect(() => {
		if (geoPosition) {
			setMapPosition([geoPosition.lat, geoPosition.lng]);
		}
	}, [geoPosition]);

	return (
		<div className={styles.mapContainer}>
			{!geoPosition && (
				<Button type="position" onClick={getGeoPosition}>
					{isGeolocationLoading ? <Spinner /> : 'Use your position'}
				</Button>
			)}
			<MapContainer
				center={mapPosition}
				zoom={6}
				scrollWheelZoom={false}
				className={styles.map}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
				/>
				{cities.map((city) => (
					<Marker
						key={city.id}
						position={[city.position.lat, city.position.lng]}
					>
						<Popup>{city.notes}</Popup>
					</Marker>
				))}
				<ChangeCenter position={mapPosition} />
				<DetectClick />
			</MapContainer>
		</div>
	);
}

ChangeCenter.propTypes = {
	position: PropTypes.array.isRequired,
};

function ChangeCenter({ position }) {
	const map = useMap();
	map.setView(position);
	return null;
}

function DetectClick() {
	const navigate = useNavigate();

	useMapEvents({
		click: (e) => {
			const { lat, lng } = e.latlng;
			navigate(`form?lat=${lat}&lng=${lng}`);
		},
	});
}

export default Map;
