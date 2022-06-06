import './ZodiacCard.css';


export default function ZodiacCard({ name, dates }) {
  return (
    <div className='zodiac-card'>
      <p>{name}</p>
      <p>{dates}</p>
      <img src={`/images/${name}.png`} />
    </div>
  );
}

{/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */}