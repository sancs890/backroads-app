const PageLink = ({ page, itemClass }) => {
  return (
    <li key={page.id}>
      <a href={page.href} className={itemClass}>
        {page.text}
      </a>
    </li>
  )
}
export default PageLink
