
// 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
// 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
// 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
// 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
// 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
// 6) Toplam balik stoku ne kadardir?
// 7) En pahali olan balik hangisidir?
// 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
// 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
// 10) TC Kantonu icin stokta toplam ne kadar balik mevcuttur?
// 11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?


const fishStock500Over = (pParams) => {
  return pParams

    .filter((fish) => fish.stockVolumeInKg > 500)
    .map((fish) => `${fish.fishType}\n`)
    .join(``)
}

const fishPrice9to12 = (pParams) => {
  return pParams
    .filter((fish) => fish.price > 9 && fish.price < 12)
    .map((fish) => `${fish.fishType}\n`)
    .join(``)

}

const fishBeWinter = (pParams) => {
  return pParams
    .filter((fish) => fish.saleLocations.includes("BE") && fish.season === "Winter")
    .map((fish) => fish.fishType)
    .join(`\n`)
}

const fishEntriExDate = (pParams) => {
  return pParams
    .map((fish) => {
      return {
        date: fish.entryDate.setDate(fish.entryDate.getDate(fish.durationInDays)),
        fishName: fish.fishType
      }
    })
    .sort((a, b) => a.date - b.date)
    .map((fish) => fish.fishName)
    .join(`\n`)
}

export { fishStock500Over, fishPrice9to12, fishBeWinter, fishEntriExDate }

