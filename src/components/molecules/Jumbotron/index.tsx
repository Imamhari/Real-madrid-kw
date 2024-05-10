import CardNews from './../../atoms/CardNews/index';

const Jumbotron = () => {
  return (
    <div className='m-5'>
      <CardNews isHeader/>
      <span className='grid grid-cols-3 gap-3'>
      <CardNews/>
      <CardNews/>
      <CardNews/>
      <CardNews/>
      <CardNews/>
      <CardNews/>
      </span>
    </div>
  )
}

export default Jumbotron
