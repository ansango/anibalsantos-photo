import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { isDesktop } from 'react-device-detect'

const MapLeaf = ({ isActive = false, mapSettings = null }) => {
  if (!mapSettings || !isActive) {
    return <></>
  }

  const { coordinates = [[0, 0]], center = [0, 0], zoom = 0 } = mapSettings

  return (
    <div className="pb-10 mx-auto container">
      <h3 className="font-bold text-3xl md:text-4xl py-6 md:py-8">
        Locations{' '}
        <span className="text-2xl md:text-3xl" role="img" aria-label="">
          🌍
        </span>
      </h3>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={isDesktop} className="map-leaf">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordinates.map((location, index) => {
          return (
            <CircleMarker
              key={index}
              center={location}
              pathOptions={"fillColor: 'green'"}
              radius={10}
            />
          )
        })}
      </MapContainer>
    </div>
  )
}

export default MapLeaf
