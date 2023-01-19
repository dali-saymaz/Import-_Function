
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


// 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
const fishStock500Over = (pParams) => {
  return pParams

    .filter((fish) => fish.stockVolumeInKg > 500)
    .map((fish) => `${fish.fishType}\n`)
    .join(``)
}

// 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
const fishPrice9to12 = (pParams) => {
  return pParams
    .filter((fish) => fish.price > 9 && fish.price < 12)
    .map((fish) => `${fish.fishType}\n`)
    .join(``)

}
// 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
const fishBeWinter = (pParams) => {
  return pParams
    .filter((fish) => fish.saleLocations.includes("BE") && fish.season === "Winter")
    .map((fish) => fish.fishType)
    .join(`\n`)
}

// 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
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

// 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
const alphabeticalOrderTheFishFromEUandUnder10Fr = (pArr) => {
  return pArr
    .filter(
      (fish) =>
        fish.price < 10 &&
        (fish.originCountry === "Poland" ||
          fish.originCountry === "France" ||
          fish.originCountry === "Italy" ||
          fish.originCountry === "GREECE" ||
          fish.originCountry === "Spain")
    )
    .map((fish) => `${fish.fishType}\n`)
    .sort()
    .join(``);
};

// 6) Toplam balik stoku ne kadardir?
const totalFishStock = (pArr) => {
  return pArr
    .filter((fish) => fish.stockVolumeInKg)
    .map((fish) => fish.stockVolumeInKg)
    .reduce((acc, curr) => acc + curr);
};

// 7) En pahali olan balik hangisidir?
const mostExpensiveFish = (pArr) => {
  // the prices are sorted with sort method and with map method are written price and fish type
  return pArr
    .sort((a, b) => b.price - a.price)
    .map((fish) => `${fish.price}CHF ${fish.fishType}`)[0];
};

// 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
const mostStandFishfromCountry = (pArr) => {
  let highDurationDay = [];
  highDurationDay.push(
    pArr
      .sort((a, b) => b.durationInDays - a.durationInDays)
      .map((day) => day.durationInDays)[0]
  );
  return pArr
    .filter((fish) => fish.durationInDays == highDurationDay)
    .map(
      (fish) =>
        `${fish.durationInDays} ${fish.fishType} from ${fish.originCountry}`
    )
    .join(`\n`);
};

// 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?


export { fishStock500Over, fishPrice9to12, fishBeWinter, fishEntriExDate, alphabeticalOrderTheFishFromEUandUnder10Fr,totalFishStock,mostExpensiveFish,mostStandFishfromCountry}

