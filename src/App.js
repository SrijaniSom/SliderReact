import React,{useEffect} from 'react'
import people from './data'
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import './styles.css'

const App = () => {
  const [People, setPeople] = React.useState(people);
  const [Index, setIndex] = React.useState(0);


  useEffect(() => {
   const lastIndex=people.length-1;
   if(Index <0)
    setIndex(lastIndex);
  if(Index>lastIndex)
    setIndex(0);
  }, [Index,people])

  useEffect(()=>{
    let slider=setInterval(()=>{
      setIndex(Index+1);
    },5000)
  },[Index]);

  return (
    <>
      <section className="section">

        <section className="top">
          <div className="slash">/</div>
          <div className="heading">Reviews</div>
        </section>

     
        <div className="section-center">
         {People.map((currElem,CurrIndex)=>{
           let position='nextSlide';
           if(CurrIndex === Index)
            {
              position='activeSlide';
            }
            if(CurrIndex === Index-1 || (Index === 0 && CurrIndex === people.length - 1))
            {
              position='lastSlide';
            }
            return(
            <article className="Mid-Part" className={position} key={currElem.id}>

                <div className="ImageContainer">
                  <img src={currElem.image} className="pic"/>
                </div>

                <div className="Name">
                  {currElem.name}
                </div>

                <div className="job">
                  {currElem.title}
                </div>

                <div className="des">
                  {currElem.quote}
                </div>

                
                <FaQuoteRight className="icon"/>
                
                
            </article>
            
            )
          

          })}
      
        </div>

        <section className="Buttons">
      <button className="prev" onClick={() => setIndex(Index-1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(Index+1)}>
          <FiChevronRight />
        </button>
      </section>
      </section>

     
    </>
  )
}

export default App
