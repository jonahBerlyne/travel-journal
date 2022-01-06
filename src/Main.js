export default function Main ({data}) {

 return (
  <main className="main">
   {data.map(item => {
    return (
     <div key={item.id} className="item">
      <div>
       <img className="img" src={`${item.imageUrl}`} alt={`${item.title}`}/>
      </div>
      <div className="content">
       <header className="header">
        <img className="location--icon" src="./images/locationIcon.jpeg"/>
        <p className="location"> {item.location.toUpperCase()} </p>
        <a href={`${item.googleMapsUrl}`} className="link--style">View on Google Maps</a>
       </header>
       <h1 className="title">{item.title}</h1>
       <h4 className="dates">{item.startDate} - {item.endDate}</h4>
       <p className="description">{item.description}</p>
      </div>
     </div>
    );
   })}
  </main>
 );
}