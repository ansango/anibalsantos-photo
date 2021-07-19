import { useTheme } from 'next-themes'
import { DARKMAP, LIGHTMAP } from '@/lib/maps'

import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

const MapLeaf = ({ isActive = false, mapSettings = null }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  if (!mapSettings || !isActive) {
    return <></>
  }
  const { coordinates = [{ name: '', loc: [0, 0] }], center = [0, 0], zoom = 0 } = mapSettings

  return (
    <div className="pb-10 mx-auto container">
      <h3 className="font-bold text-3xl md:text-4xl py-6 md:py-8">
        Locations{' '}
        <span className="text-2xl md:text-3xl" role="img" aria-label="">
          🌍
        </span>
      </h3>
      {isDark && (
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
              >
                <Tooltip>
                  <div className="font-bold">{coordinate.name}</div>
                </Tooltip>
              </CircleMarker>
            )
          })}
        </MapContainer>
      )}
      {!isDark && (
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
              >
                <Tooltip>
                  <div className="font-bold">{coordinate.name}</div>
                </Tooltip>
              </CircleMarker>
            )
          })}
        </MapContainer>
      )}
    </div>
  )
}

export default MapLeaf

// pk.eyJ1IjoiYW5zYW5nbyIsImEiOiJja3JiMnJycDgzbjlqMm5tbmc4aWxtdmlxIn0.0ZKpvIf7qhxHGwZpZD0LEQ

//https://api.mapbox.com/styles/v1/ansango/{style_id}/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5zYW5nbyIsImEiOiJja3JiMnJycDgzbjlqMm5tbmc4aWxtdmlxIn0.0ZKpvIf7qhxHGwZpZD0LEQ
//https://api.mapbox.com/styles/v1/ansango/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5zYW5nbyIsImEiOiJja3JiMnJycDgzbjlqMm5tbmc4aWxtdmlxIn0.0ZKpvIf7qhxHGwZpZD0LEQ
