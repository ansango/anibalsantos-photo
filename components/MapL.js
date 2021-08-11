import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { LIGHTMAP, DARKMAP } from '@/lib/maps'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

const colorMarker = '#34D399'

const MapLight = ({ mapSettings, onLocationSelected, viewPage }) => {
  const { coordinates, center, zoom } = mapSettings
  const router = useRouter()
  return (
    <>
      {viewPage ? (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="map-leaf">
          <TileLayer url={LIGHTMAP} />
          {coordinates.map((coordinate, index) => {
            return (
              <CircleMarker
                key={index}
                center={coordinate.loc}
                fillOpacity={1}
                radius={10}
                pathOptions={{ color: colorMarker }}
                stroke={false}
                eventHandlers={{
                  click: () => {
                    onLocationSelected(coordinate.place.name)
                    router.push('/places#gallery')
                  },
                }}
              >
                <Tooltip>
                  <div className="font-bold">{coordinate.place.name}</div>
                </Tooltip>
              </CircleMarker>
            )
          })}
        </MapContainer>
      ) : (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="map-leaf">
          <TileLayer url={LIGHTMAP} />
          {coordinates.map((coordinate, index) => {
            return (
              <CircleMarker
                key={index}
                center={coordinate.loc}
                fillOpacity={1}
                radius={10}
                pathOptions={{ color: colorMarker }}
                stroke={false}
              >
                <Tooltip>
                  <div className="font-bold">{coordinate.place.name}</div>
                </Tooltip>
              </CircleMarker>
            )
          })}
        </MapContainer>
      )}
    </>
  )
}

const MapDark = ({ mapSettings, onLocationSelected, viewPage }) => {
  const { coordinates, center, zoom } = mapSettings
  const router = useRouter()
  return (
    <>
      {viewPage ? (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="map-leaf">
          <TileLayer url={DARKMAP} />
          {coordinates.map((coordinate, index) => {
            return (
              <CircleMarker
                key={index}
                center={coordinate.loc}
                fillOpacity={1}
                radius={10}
                pathOptions={{ color: colorMarker }}
                stroke={false}
                eventHandlers={{
                  click: () => {
                    onLocationSelected(coordinate.place.name)
                    router.push('/places#gallery')
                  },
                }}
              >
                <Tooltip>
                  <div className="font-bold">{coordinate.place.name}</div>
                </Tooltip>
              </CircleMarker>
            )
          })}
        </MapContainer>
      ) : (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="map-leaf">
          <TileLayer url={DARKMAP} />
          {coordinates.map((coordinate, index) => {
            return (
              <CircleMarker
                key={index}
                center={coordinate.loc}
                fillOpacity={1}
                radius={10}
                pathOptions={{ color: colorMarker }}
                stroke={false}
              >
                <Tooltip>
                  <div className="font-bold">{coordinate.place.name}</div>
                </Tooltip>
              </CircleMarker>
            )
          })}
        </MapContainer>
      )}
    </>
  )
}

const MapL = ({ mapSettings, onLocationSelected, viewPage = false, title = null }) => {
  const { theme } = useTheme()
  return (
    <div>
      {title && (
        <h3 className="font-bold text-3xl md:text-4xl py-6 md:py-8">
          {title}
          <span className="text-2xl md:text-3xl" role="img" aria-label="">
            🌍
          </span>
        </h3>
      )}

      {theme !== 'dark' ? (
        <MapLight
          mapSettings={mapSettings}
          onLocationSelected={onLocationSelected}
          viewPage={viewPage}
        />
      ) : (
        <MapDark
          mapSettings={mapSettings}
          onLocationSelected={onLocationSelected}
          viewPage={viewPage}
        />
      )}
    </div>
  )
}

export default MapL
