import { fishFarm } from "./fishFarm.js";
import { fishStock500Over, fishPrice9to12,fishBeWinter,fishEntriExDate} from "./function.js";

console.log(`5000 kilodan fazla olana blaiklar \n` +fishStock500Over(fishFarm))
console.log(`9 ila 12 arasinda olana baliklar \n`+fishPrice9to12(fishFarm))
console.log(`Be ve Kis arasinda olana baliklar \n`+fishBeWinter(fishFarm))
console.log(`baliklari son kullanma tarihine gore siralanmis hali \n`+fishEntriExDate(fishFarm))