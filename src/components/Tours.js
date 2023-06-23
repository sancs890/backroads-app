import Title from './Title'
import { tours } from '../data'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title heading="featured" subHeading="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const {
            id,
            img,
            date,
            title,
            description,
            country,
            noOfDays,
            price,
          } = tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>{`${noOfDays} days`}</p>
                  <p>{`from $${price}`}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
