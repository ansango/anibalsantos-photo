import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
const position = [46.2406, 8.7207]
const MapLeaf = ({ data }) => {
  const locations = data.flat()
  return (
    <div className="p-5 mx-auto container">
      <MapContainer center={position} zoom={5} scrollWheelZoom={true} className="map-leaf">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <CircleMarker
            key={index}
            center={location}
            pathOptions={"fillColor: 'green'"}
            radius={10}
          />
        ))}
      </MapContainer>
    </div>
  )
}

export default MapLeaf
