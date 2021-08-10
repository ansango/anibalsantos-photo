import dynamic from 'next/dynamic'

const ComponentDynamic = dynamic(
  () => {
    return import('./MapL')
  },
  { ssr: false }
)

const Places = ({ mapSettings, onLocationSelected, viewPage }) => {
  return (
    <ComponentDynamic
      mapSettings={mapSettings}
      onLocationSelected={onLocationSelected}
      viewPage={viewPage}
    ></ComponentDynamic>
  )
}

export default Places
