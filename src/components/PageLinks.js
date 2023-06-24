import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((page) => {
        return <PageLink page={page} itemClass={itemClass} key={page.id} />
      })}
    </ul>
  )
}
export default PageLinks
