export interface MigracaoDB {
  consultas?: Array<{ model: string; query: string }>;
}

const migracoes: Map<number, MigracaoDB> = new Map<number, MigracaoDB>();

migracoes.set(1, {
  consultas: [
    {
      model: "Dependentes",
      query: `ALTER TABLE Dependentes ADD atributo_adicionado VARCHAR(45);`,
    },
  ],
});

migracoes.set(2, {
  consultas: [
    {
      model: "Dependentes",
      query: `ALTER TABLE Dependentes ADD atributo_adicionado_2 VARCHAR(45) NOT NULL DEFAULT "";`,
    },
  ],
});

migracoes.set(3, {
  consultas: [
    {
      model: "Dependentes",
      query: `ALTER TABLE Dependentes CHANGE atributo_adicionado endereco
   VARCHAR(45);`,
    },
  ],
});

export { migracoes };
