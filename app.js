import { fishFarm } from "./fishFarm.js";
import { fishStock500Over, fishPrice9to12, fishBeWinter, fishEntriExDate, alphabeticalOrderTheFishFromEUandUnder10Fr,totalFishStock,mostExpensiveFish,mostStandFishfromCountry} from "./function.js";

console.log(`5000 kilodan fazla olana blaiklar \n` +fishStock500Over(fishFarm))
console.log(`9 ila 12 arasinda olana baliklar \n`+fishPrice9to12(fishFarm))
console.log(`Be ve Kis arasinda olana baliklar \n`+fishBeWinter(fishFarm))
console.log(`baliklari son kullanma tarihine gore siralanmis hali \n`+fishEntriExDate(fishFarm))

console.log(`(AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya\n`+alphabeticalOrderTheFishFromEUandUnder10Fr(fishFarm))
console.log(`Toplam balik stoku \n`+totalFishStock(fishFarm))
console.log(` En pahali olan balik \n`+mostExpensiveFish(fishFarm))
console.log(`En uzun sureli durabilen (birden fazla olabilir)baliklar \n`+mostStandFishfromCountry(fishFarm))
