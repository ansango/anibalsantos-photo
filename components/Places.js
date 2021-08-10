import dynamic from 'next/dynamic'

const Places = dynamic(
  () => {
    return import('./MapL')
  },
  { ssr: false }
)

export default Places
