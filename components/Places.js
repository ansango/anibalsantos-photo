import dynamic from 'next/dynamic'

const ComponentDynamic = dynamic(
  () => {
    return import('./MapL')
  },
  { ssr: false }
)

const Places = ({ mapSettings, onLocationSelected }) => {
  return (
    <ComponentDynamic
      mapSettings={mapSettings}
      onLocationSelected={onLocationSelected}
    ></ComponentDynamic>
  )
}

export default Places
