const groupsEnum = {
  JakInhibitor: "JAK inhibitor",
  Pde4Inhibitor: "PDE4 Inhibitor",
  OtherTsDmard: "Other tsDMARD",
  Il23Inhibitor: "IL-23 Inhibitor",
  Il1223Inhibitor: "IL-12/23 Inhibitor",
  Il17AInhibitor: "IL-17A Inhibitor",
  Tnfi: "TNFi",
  OtherNonTnfiBDmards: "Other non-TNFi bDMARDs",
};

const treatmentsEnum = {
  Tofacitinib: "1",
  Apremilast: "2",
  Upadacitinib: "3",
  OtherTsDmard: "4",
  Risankizumab: "5",
  Ixekizumab: "6",
  Secukinumab: "7",
  Adalimumab: "8",
  AdalimumabBiosimilar: "9",
  Etanercept: "10",
  Certolizumab: "11",
  EtanerceptBiosimilars: "12",
  Golimumab: "13",
  Infliximab: "14",
  InfliximabBiosimilars: "15",
  Ustekinumab: "16",
  Guselkumab: "17",
  Abatacept: "18",
  AbataceptBiosimilars: "19",
  OtherBDmard: "20",
  OtherBDmardBiosimilar: "21",
};

const list = [
  {
    group: groupsEnum.JakInhibitor,
    items: [
      { value: treatmentsEnum.Tofacitinib, label: "Tofacitinib" },
      { value: treatmentsEnum.Upadacitinib, label: "Upadacitinib" },
    ],
  },
  {
    group: groupsEnum.Pde4Inhibitor,
    items: [{ value: treatmentsEnum.Apremilast, label: "Apremilast (Otezla)" }],
  },
  {
    group: groupsEnum.OtherTsDmard,
    items: [{ value: treatmentsEnum.OtherTsDmard, label: "Other tsDMARD" }],
  },
  {
    group: groupsEnum.Il23Inhibitor,
    items: [
      { value: treatmentsEnum.Risankizumab, label: "Risankizumab" },
      { value: treatmentsEnum.Guselkumab, label: "Guselkumab (Tremfya)" },
    ],
  },
  {
    group: groupsEnum.Il1223Inhibitor,
    items: [
      { value: treatmentsEnum.Ustekinumab, label: "Ustekinumab (Stelara)" },
    ],
  },
  {
    group: groupsEnum.Il17AInhibitor,
    items: [
      { value: treatmentsEnum.Ixekizumab, label: "Ixekizumab (Taltz)" },
      { value: treatmentsEnum.Secukinumab, label: "Secukinumab (Cosentyx)" },
    ],
  },
  {
    group: groupsEnum.Tnfi,
    items: [
      { value: treatmentsEnum.Adalimumab, label: "Adalimumab (Humira)" },
      {
        value: treatmentsEnum.AdalimumabBiosimilar,
        label: "Adalimumab biosimilar (Amjevita, Imraldi, Hyrimoz, other)",
      },
      { value: treatmentsEnum.Certolizumab, label: "Certolizumab (Cimzia)" },
      { value: treatmentsEnum.Etanercept, label: "Etanercept  (Enbrel)" },
      {
        value: treatmentsEnum.EtanerceptBiosimilars,
        label: "Etanercept biosimilars (Erelzi, Benepali, other)",
      },
      { value: treatmentsEnum.Golimumab, label: "Golimumab (Simponi)" },
      { value: treatmentsEnum.Infliximab, label: "Infliximab (Remicade)" },
      {
        value: treatmentsEnum.InfliximabBiosimilars,
        label: "Infliximab biosimilar (Inflectra, Remsima, Reflexis, other)",
      },
    ],
  },
  {
    group: groupsEnum.OtherNonTnfiBDmards,
    items: [
      { value: treatmentsEnum.Abatacept, label: "Abatacept (Orencia)" },
      {
        value: treatmentsEnum.AbataceptBiosimilars,
        label: "Abatacept biosimilar",
      },
      { value: treatmentsEnum.OtherBDmard, label: "Other bDMARD" },
      {
        value: treatmentsEnum.OtherBDmardBiosimilar,
        label: "Other bDMARD biosimilar",
      },
    ],
  },
];

const Treatments = {
  GroupsEnum: groupsEnum,
  TreatmentsEnum: treatmentsEnum,
  List: list,
};

export default Treatments;
