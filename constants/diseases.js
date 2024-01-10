const diseasesEnum = {
  RA: "RA",
  PsA: "PsA",
  aXSpA: "aXSpA",
};

const list = [
  { value: diseasesEnum.RA, label: "Rheumatoid Arthritis" },
  { value: diseasesEnum.PsA, label: "Psoriatic Arthritis" },
  { value: diseasesEnum.aXSpA, label: "Axial Spondyloarthritis" },
];

const Diseases = {
  Enum: diseasesEnum,
  List: list,
};

export default Diseases;
