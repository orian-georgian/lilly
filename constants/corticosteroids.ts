const corticosteroidEnums = {
  Corticosteroid: "corticosteroid",
  Dexamethasone: "dexamethasone",
  Methylprednisolone: "methylprednisolone",
  Prednisolone: "prednisolone",
  Prednisone: "prednisone",
  Triamcinolone: "triamcinolone",
  Deflazacort: "deflazacort",
  Hydrocortisone: "hydrocortisone",
  Betamethasone: "betamethasone",
};

const list = [
  { value: corticosteroidEnums.Corticosteroid, label: "Corticosteroid" },
  { value: corticosteroidEnums.Dexamethasone, label: "Dexamethasone" },
  {
    value: corticosteroidEnums.Methylprednisolone,
    label: "Methylprednisolone",
  },
  { value: corticosteroidEnums.Prednisolone, label: "Prednisolone" },
  { value: corticosteroidEnums.Prednisone, label: "Prednisone" },
  { value: corticosteroidEnums.Triamcinolone, label: "Triamcinolone" },
  { value: corticosteroidEnums.Deflazacort, label: "Deflazacort" },
  { value: corticosteroidEnums.Hydrocortisone, label: "Hydrocortisone" },
  { value: corticosteroidEnums.Betamethasone, label: "Betamethasone" },
];

const Corticosteroids = {
  Enum: corticosteroidEnums,
  List: list,
};

export default Corticosteroids;
