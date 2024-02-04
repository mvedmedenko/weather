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
import lightDrizzle from "../assets/images/day/lightDrizzle.png"
import frizzingDrizzle from "../assets/images/day/freezingDrizzle.png"
import heavyRain from "../assets/images/day/heavyRain.png"
import lightFreezingRain from "../assets/images/day/lightFreezingRain.png"
import snowThunder from "../assets/images/day/snowThunder.png"







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
        if(isDay === 1) {
          return mist;
      } else {
          return mistNight
      }
      case 1147:
        return snow;
      case 1150:
        if(isDay === 1) {
          return possibleRain;
      } else {
          return possibleNightRain
      }
      case 1153:
        if(isDay === 1) {
          return lightDrizzle;
      } else {
          return possibleNightRain
      }
      case 1168:
        return frizzingDrizzle;
      case 1171:
        return frizzingDrizzle;
      case 1180:
        if(isDay === 1) {
          return possibleRain;
      } else {
          return possibleNightRain
      }
      case 1183:
        return lightDrizzle;
      case 1186:
        return lightDrizzle;
      case 1189:
        return lightDrizzle;
      case 1192:
        return heavyRain;
      case 1195:
        return heavyRain;
      case 1198:
        return lightFreezingRain;
      case 1201:
        return possibleSleet;
      case 1204:
        return possibleSleet;
      case 1207:
        return possibleSleet;
      case 1210:
        return frizzingDrizzle;
      case 1213:
        return snow;
      case 1216:
        return snow;
      case 1219:
        return snow;
      case 1222:
        return snow;
      case 1225:
        return snow;
      case 1237:
        return possibleSleet;
      case 1240:
        if(isDay === 1) {
          return possibleRain;
      } else {
          return possibleNightRain
      }
      case 1243:
        if(isDay === 1) {
          return possibleRain;
      } else {
          return possibleNightRain
      }
      case 1246:
        if(isDay === 1) {
          return possibleRain;
      } else {
          return possibleNightRain
      }
      case 1249:
        if(isDay === 1) {
          return possibleRain;
      } else {
          return possibleNightRain
      }
      case 1252:
        if(isDay === 1) {
          return possibleRain;
      } else {
          return possibleNightRain
      }
      case 1255:
        return snow;
      case 1258:
        return snow;
      case 1261:
        return lightDrizzle;
      case 1264:
        return lightDrizzle;
      case 1273:
        return heavyRain;
      case 1276:
        return lightFreezingRain;
      case 1279:
        return snowThunder;
      case 1282:
        return snowThunder;
  
      default:
        return sunny;
    }

  };


  export default useConditionImage;