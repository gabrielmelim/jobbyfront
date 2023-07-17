export type TPostExperiencia = {
  salario: number;
  empregoAtual: boolean;
  dataContratacao: Date;
  dataDesligamento: Date;
  regimeContratacao: string;
  nomeEmpresa: string;
  idCadastro: number;
  idProfissao: number;
};

export type TPostCadastro = {
  nome: string;
  cpf: string;
  sexo: string;
  dataNascimento: string;
  telefone: number | undefined;
  email: string;
  numeroCelularProfissional: number | undefined;
  isWhatsProfissional: boolean;
  numeroCelularPessoal: number | undefined;
  isWhatsPessoal: boolean;
  pretensaoMin: number | undefined;
  pretensaoMax: number | undefined;
  habilidades: string[];
  idProfissao: number | undefined;
  endereco: {
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    idCidade: number | undefined;
  };
};

export type TPostCidade = {
  nome: string;
  estado: string;
  sigla: string;
};

export type TCidade = {
  idCidade: number;
  nome: string;
  estado: string;
  sigla: string;
};

export type TPostProfissao = {
  nome: string;
};

export type TProfissao = {
  idProfissao: number;
  nome: string;
};
