export default function Main ({data}) {

 // For data:
 // imageUrl on left
 // on right, text columns
 // col 1: location, googleMapsUrl
 // col 2: title
 // col 3: startDate-endDate
 // col 4: description
 console.log(data);

 return (
  <main>
   {data.map(item => {
    return (
     <div key={item.id}>
      <img src={`${item.imageUrl}`} alt="Mount Fuji"/>
      <p>{item.location} <a href={`${item.googleMapsUrl}`}>View on Google Maps</a></p>
      <h1>{item.title}</h1>
      <h4>{item.startDate}-{item.endDate}</h4>
      <p>{item.description}</p>
     </div>
    );
   })}
  </main>
 );
}