import CardNews from './../../atoms/CardNews/index';

const Jumbotron = () => {
  return (
    <div className='m-5 lg:mx-20'>
      <CardNews isHeader/>
      <span className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
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
