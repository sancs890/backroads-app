const Title = (props) => {
  const { heading, subHeading } = props
  return (
    <div className="section-title">
      <h2>
        {heading} <span>{subHeading}</span>
      </h2>
    </div>
  )
}
export default Title
