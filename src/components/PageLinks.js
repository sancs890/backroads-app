import { pageLinks } from '../data'
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((page) => {
        return (
          <li key={page.id}>
            <a href={page.href} className={itemClass}>
              {page.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLinks
