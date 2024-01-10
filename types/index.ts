export type MantineForm = {
  values: object;
  getInputProps: (path: string) => object;
  validateField: (path: string) => {
    hasError: boolean;
    error: string;
  };
};

export type BtsDMARDUsed = {
  key: string;
  treatment: Array<string | number>;
  start: Date;
  end: Date;
};

export type Exercise = {
  value: string;
  label: string;
  description: string;
};
