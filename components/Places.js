import dynamic from 'next/dynamic'

const ComponentDynamic = dynamic(
  () => {
    return import('./MapL')
  },
  { ssr: false }
)

const Places = ({ mapSettings, onLocationSelected, viewPage, title }) => {
  return (
    <ComponentDynamic
      mapSettings={mapSettings}
      onLocationSelected={onLocationSelected}
      viewPage={viewPage}
      title={title}
    ></ComponentDynamic>
  )
}

export default Places
