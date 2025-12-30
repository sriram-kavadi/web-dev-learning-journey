import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import StormIcon from '@mui/icons-material/Storm';
import "./App.css"
export default function Data({place,details,error}){
    let style1={marginLeft: "auto"}
    let style2={display:"flex"}
    let img={
        Hot__Dry:"https://newsimage.radio.gov.pk/20250602/13661469821748834558.jpg",
        Hot__Humid:"https://npr.brightspotcdn.com/dims4/default/4676403/2147483647/strip/true/crop/1920x1280+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwshu%2Ffiles%2F202106%2Fsunrise-2960057_1920.jpg",
        Warm:"https://www.wkbn.com/wp-content/uploads/sites/48/2022/06/sun-sunshine-trees-hot-warm-weather-generic.jpg?w=1280",
        Cool__Humid:"https://omin.b-cdn.net/wp-content/uploads/2025/06/tips_for_humid_weather-768x402.jpg",
        Cool:"https://www.elft.nhs.uk/sites/default/files/styles/news_page/public/2022-12/frost.jpg?itok=JhT10SE-",
        Cold:"https://www.kingheating.com/wp-content/uploads/2023/12/cold-weather.jpg",
        Stormy:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyutaOe7sXRxXQumKaMwh4vIV8CtSdrI2FyQJJraBAmlfvupEqSifF77G2uct9QHBoaa_DfnoIqrbpeZLk9GEgB122mqFLzX_gYIo1w8K1mlkF8rj7jd0zIPAKDNvrp4-C0x9jV8M9VJ6B/s1600/150129143040-large.jpg",
        Moderate:"https://alanbatnews.net/assets/2019-01-06/images/45e3e10e2480007866bf567029b80825.jpg"
    }
    if (!details || Object.keys(details).length === 0) {
        return null; 
    }
    const onclick=()=>{
        console.log(details)
    }
    return<>
    {!error? <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${img[(details.condition).replaceAll("&","")]}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={style2} gutterBottom variant="h5" component="div">
            {details.places}
            {(details.condition=="Hot_&_Dry" || details.condition=="Hot_&_Humid" || details.condition=="Warm" || details.condition=="Moderate")? <SunnyIcon style={style1}></SunnyIcon> :null}
            {(details.condition=="Cool_&_Humid" || details.condition=="cool" || details.condition=="Cold")?<AcUnitIcon style={style1}></AcUnitIcon>:null}
            {(details.condition=="Stormy")?<StormIcon style={style1}></StormIcon>:null}
          </Typography>
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            weather condition   = {(details.condition).replaceAll("_"," ")}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            temp       ≈ {details.temp}°C
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            feels_like ≈ {details.feels_like}°C
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            humidity   = {details.humidity}%
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            pressure   = {details.pressure} hPa
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>: null}
    
    </>
}