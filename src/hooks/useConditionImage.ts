import sunny from "../assets/images/day/sunny.png"
import cloudy from "../assets/images/day/cloudy.png"
import overcast from "../assets/images/day/overcast&partCloudy.png"
import night from "../assets/images/night/night.png"
import nightOvercast from "../assets/images/night/night&overcast.png"
import mist from "../assets/images/day/mist.png"
import mistNight from "../assets/images/night/mistNight.png"
import possibleRain from "../assets/images/day/possibleRain.png"
import possibleNightRain from "../assets/images/night/possibleNightRain.png"
import possibleSnow from "../assets/images/day/possibleSnow.png"
import possibleNightSnow from "../assets/images/night/possibleNightSnow.png"
import possibleSleet from "../assets/images/day/possibleSleet.png"
import possibleNightSleet from "../assets/images/night/possibleNightSleet.png"
import possibleThundery from "../assets/images/day/possibleThundery.png"
import possibleNightThundery from "../assets/images/night/possbileNightThundery.png"
import snow from "../assets/images/day/snow.png"







const useConditionImage = (code: number, isDay: number) => {
  
    switch (code) {
      case 1000:
        if(isDay === 1) {
            return sunny;
        } else {
            return night
        }
      case 1003:
        if(isDay === 1) {
            return overcast;
        } else {
            return nightOvercast
        }
      case 1006:
        if(isDay === 1) {
            return cloudy;
        } else {
            return nightOvercast
        }
        
      case 1009:
        if(isDay === 1) {
            return cloudy;
        } else {
            return nightOvercast
        }
      case 1030:
        if(isDay === 1) {
            return mist;
        } else {
            return mistNight
        }
      case 1063:
        if(isDay === 1) {
            return possibleRain;
        } else {
            return possibleNightRain
        }
      case 1066:
        if(isDay === 1) {
            return possibleSnow;
        } else {
            return possibleNightSnow
        }
      case 1069:
        if(isDay === 1) {
            return possibleSleet;
        } else {
            return possibleNightSleet
        }
      case 1072:
        if(isDay === 1) {
            return possibleRain;
        } else {
            return possibleNightRain
        }
      case 1087:
        if(isDay === 1) {
            return possibleThundery;
        } else {
            return possibleNightThundery
        }
      case 1114:
        return snow;
      case 1117:
        return snow;
      case 1135:
        return sunny;
      case 1147:
        return sunny;
      case 1150:
        return sunny;
      case 1153:
        return sunny;
      case 1168:
        return sunny;
      case 1171:
        return sunny;
      case 1180:
        return sunny;
      case 1183:
        return sunny;
      case 1186:
        return sunny;
      case 1189:
        return sunny;
      case 1192:
        return sunny;
      case 1195:
        return sunny;
      case 1198:
        return sunny;
      case 1201:
        return sunny;
      case 1204:
        return sunny;
      case 1207:
        return sunny;
      case 1210:
        return sunny;
      case 1213:
        return sunny;
      case 1216:
        return sunny;
      case 1219:
        return sunny;
      case 1222:
        return sunny;
      case 1225:
        return sunny;
      case 1237:
        return sunny;
      case 1240:
        return sunny;
      case 1243:
        return sunny;
      case 1246:
        return sunny;
      case 1249:
        return sunny;
      case 1252:
        return sunny;
      case 1255:
        return sunny;
      case 1258:
        return sunny;
      case 1261:
        return sunny;
      case 1264:
        return sunny;
      case 1273:
        return sunny;
      case 1276:
        return sunny;
      case 1279:
        return sunny;
      case 1282:
        return sunny;
  
      default:
        return sunny;
    }

  };


  export default useConditionImage;