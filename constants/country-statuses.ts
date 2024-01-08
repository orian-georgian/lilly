enum CountryStatusesEnum {
  Enrolling = "enrolling",
}

const CountryStatusesList = [
  {
    value: CountryStatusesEnum.Enrolling,
    label: "Enrolling",
  },
];

const CountrytStatuses = {
  Enum: CountryStatusesEnum,
  List: CountryStatusesList,
};

export default CountrytStatuses;
