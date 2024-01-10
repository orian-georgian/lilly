const countriesEnum = {
  Can: "CAN",
  Fra: "FRA",
  Deu: "DEU",
  Ita: "ITA",
  Esp: "ESP",
  Gbr: "GBR",
};

const nationalityList = [
  { value: countriesEnum.Can, label: "Canada" },
  { value: countriesEnum.Fra, label: "France" },
  { value: countriesEnum.Deu, label: "Germany" },
  { value: countriesEnum.Ita, label: "Italy" },
  { value: countriesEnum.Esp, label: "Spain" },
  { value: countriesEnum.Gbr, label: "United Kingdom" },
];

const languageList = [
  { value: countriesEnum.Can, label: "Canadian English" },
  { value: countriesEnum.Fra, label: "French" },
  { value: countriesEnum.Deu, label: "German" },
  { value: countriesEnum.Ita, label: "Italian" },
  { value: countriesEnum.Esp, label: "Spanish" },
  { value: countriesEnum.Gbr, label: "English - UK" },
];

const Countries = {
  Enum: countriesEnum,
  Nationality: nationalityList,
  Language: languageList,
};

export default Countries;
