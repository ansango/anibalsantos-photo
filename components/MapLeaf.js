import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { useTheme } from 'next-themes'
import { DARKMAP, LIGHTMAP } from '@/lib/maps'

export const MapLeaf = ({ isActive = false, mapSettings, title = null }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  if (!mapSettings || !isActive) {
    return <></>
  }

  const { coordinates, center, zoom } = mapSettings

  return (
    <div className="pb-10 mx-auto container">
      {!title && (
        <h3 className="font-bold text-3xl md:text-4xl py-6 md:py-8">
          Locations{' '}
          <span className="text-2xl md:text-3xl" role="img" aria-label="">
            🌍
          </span>
        </h3>
      )}
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
                eventHandlers={{
                  click: () => {
                    console.log(coordinate?.slug)
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
