import { useEffect } from 'react'
import { site } from '../Components/Data/Site'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : site.name
  }, [title])
}