import Card from "./Card";
import { data } from '../Data';

const Container = () => {
  return (
    <section className="pricing py-5">    
      <div className="container">
        <div className="row">
          {
            (data!==null && data!==undefined) ? (
              data.pricing.map(price => (
                <div className="col-lg-4" key={ Math.random() }>    {/* assigning a random key to each element returned from iteration */}
                  <Card data={ price }/>     {/* passing the data for each pricing category */}
                </div>
              ))
            ) : (
              <p>No data available</p>
            )
          }
        </div>
      </div>
    </section>
  )
}
export default Container;