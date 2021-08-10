import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { LIGHTMAP, DARKMAP } from '@/lib/maps'
import { useTheme } from 'next-themes'

const MapLight = ({ mapSettings, onLocationSelected }) => {
  const { coordinates, center, zoom } = mapSettings
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="map-leaf">
      <TileLayer url={LIGHTMAP} />
      {coordinates.map((coordinate, index) => {
        return (
          <CircleMarker
            key={index}
            center={coordinate.loc}
            fillOpacity={1}
            radius={10}
            pathOptions={{ color: 'red' }}
            stroke={false}
            eventHandlers={{
              click: () => {
                onLocationSelected(coordinate.name)
              },
            }}
          >
            <Tooltip>
              <div className="font-bold">{coordinate.name}</div>
            </Tooltip>
          </CircleMarker>
        )
      })}
    </MapContainer>
  )
}

const MapDark = ({ mapSettings, onLocationSelected }) => {
  const { coordinates, center, zoom } = mapSettings

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="map-leaf">
      <TileLayer url={DARKMAP} />
      {coordinates.map((coordinate, index) => {
        return (
          <CircleMarker
            key={index}
            center={coordinate.loc}
            fillOpacity={1}
            radius={10}
            pathOptions={{ color: 'red' }}
            stroke={false}
            eventHandlers={{
              click: () => {
                onLocationSelected(coordinate.name)
              },
            }}
          >
            <Tooltip>
              <div className="font-bold">{coordinate.name}</div>
            </Tooltip>
          </CircleMarker>
        )
      })}
    </MapContainer>
  )
}

const MapL = ({ mapSettings, onLocationSelected }) => {
  const { theme } = useTheme()
  return (
    <div className="pb-10 mx-auto container">
      <h3 className="font-bold text-3xl md:text-4xl py-6 md:py-8">
        Locations{' '}
        <span className="text-2xl md:text-3xl" role="img" aria-label="">
          🌍
        </span>
      </h3>
      {theme !== 'dark' ? (
        <MapLight mapSettings={mapSettings} onLocationSelected={onLocationSelected} />
      ) : (
        <MapDark mapSettings={mapSettings} onLocationSelected={onLocationSelected} />
      )}
    </div>
  )
}

export default MapL
