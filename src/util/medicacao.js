import * as yup from 'yup';

export default [
  {
    name: 'Dados Pessoal 1',
    components: [
      {
        name: 'Input',
        key: 'name',
        title: 'Nome',
        placeholder: 'Nome como no documento',
        validator: yup.string().required(),
      },
      {
        name: 'Input',
        key: 'last_name',
        title: 'Sobrenome',
        placeholder: 'Sobrenome como no documento',
        validator: yup.string().required(),
      },
      {
        name: 'Input',
        key: 'email',
        title: 'E-mail',
        placeholder: 'exemplo@email.com',
      },
      {
        name: 'InputMask',
        key: 'phone1',
        title: 'Telefone',
        placeholder: '(00) 0000-0000',
        mask: '([00]) [00000]-[0000]',
        type: 'numeric',
      },
      {
        name: 'InputMask',
        key: 'phone2',
        title: 'Celular',
        placeholder: '(00) 0000-0000',
        mask: '([00]) [00000]-[0000]',
        type: 'numeric',
      },
      {
        name: 'InputMask',
        key: 'birth_date',
        title: 'Data de Nascimento',
        placeholder: '00/00/0000',
        mask: '[00]/[00]/[0000]',
        type: 'numeric',
      },
    ],
  },
  {
    name: 'Dados Pessoal 2',
    components: [
      {
        name: 'Picker',
        key: 'civil_state',
        title: 'Estado Civil',
        options: ['Solteiro(a)', 'Casado(a)', 'Viuva(o)'],
      },
      {
        name: 'Radio',
        key: 'genre',
        title: 'Genero',
        opt1: 'Masculino',
        opt2: 'Feminino',
      },
      {
        name: 'InputMask',
        key: 'hight',
        title: 'Altura',
        placeholder: '0.00',
        mask: '[0].[00]',
        type: 'numeric',
      },
      {
        name: 'InputMask',
        key: 'weight',
        title: 'Peso',
        placeholder: '00.0',
        mask: '[00].[0]',
        type: 'numeric',
      },
      {
        name: 'Picker',
        key: 'professional_situation',
        title: 'Situação',
        options: [
          'Aposentado',
          'Pensionista',
          'Em plena atividade profissional',
          'Funcionario publico',
        ],
      },
      {
        name: 'Input',
        key: 'public_agency',
        title: 'Angência publica',
        placeholder: 'FUB',
        conditional: 'Funcionario publico',
        dependency: 'professional_situation',
        validator: yup.string().required(),
      },
    ],
  },
  {
    name: 'Endereço',
    components: [
      {
        name: 'Input',
        key: 'city',
        title: 'Cidade',
        placeholder: 'São Jose dos Campos',
      },
      {
        name: 'Input',
        key: 'uf',
        title: 'Estado',
        placeholder: 'São Paulo',
      },
      {
        name: 'Input',
        key: 'neighborhood',
        title: 'Bairro',
        placeholder: 'São João',
      },
      {
        name: 'Input',
        key: 'address_number',
        title: 'Numero',
        type: 'numeric',
        placeholder: '000',
      },
      {
        name: 'InputMask',
        key: 'cep',
        title: 'CEP',
        placeholder: '00000-000',
        mask: '[00000]-[000]',
        type: 'numeric',
      },
    ],
  },
  {
    name: 'Documentos',
    components: [
      {
        name: 'InputMask',
        key: 'cpf',
        title: 'CPF',
        mask: '[000].[000].[000]-[00]',
        type: 'numeric',
        placeholder: '000.000.000-00',
      },
      {
        name: 'InputMask',
        key: 'rg',
        title: 'RG',
        mask: '[0000]-[000]',
        type: 'numeric',
        placeholder: '0000-000',
      },
      {
        name: 'Image',
        key: 'doc',
        title: 'Imagem do documento (CNH ou RG)',
        crop: true,
      },
      {
        name: 'Image',
        key: 'face',
        title: 'Uma foto do seu rosto',
        crop: false,
      },
    ],
  },
  {
    name: 'Opções de Pagamento',
    components: [
      {
        name: 'Picker',
        key: 'payment_method',
        title: 'Opções de Pagamento',
        options: [
          'cartão de credito',
          'debito em conta corrente',
          'boleto bancario',
          'desconto em folha de pagamento',
        ],
      },
      {
        name: 'Input',
        key: 'bank_name',
        title: 'Banco',
        placeholder: 'Caixa Economica',
        conditional: 'debito em conta corrente',
        dependency: 'option_payment',
      },
      {
        name: 'Input',
        key: 'bank_agency',
        title: 'Agência',
        type: 'numeric',
        placeholder: '0000000',
        conditional: 'debito em conta corrente',
        dependency: 'option_payment',
      },
      {
        name: 'Input',
        key: 'bank_account_number',
        title: 'Conta',
        type: 'numeric',
        placeholder: '0000000',
        conditional: 'debito em conta corrente',
        dependency: 'option_payment',
      },
      {
        name: 'InputMask',
        key: 'payment_day',
        title: 'Melhor dia para pagar',
        mask: '[00]',
        type: 'numeric',
        placeholder: '00',
      },
    ],
  },
];

export const validationSchema = {
  name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required().email(),
  phone1: yup.string().required().min(10), // number?
  phone2: yup.string().min(10), // number?
  birth_date: yup.string().required(), // date?
  civil_state: yup.string().required(),
  genre: yup.string().required(),
  hight: yup.string().required().min(3), // number?,
  weight: yup.string().required().min(3), // number?,
  professional_situation: yup.string().required(),
  public_agency: yup.string(),
  city: yup.string().required(),
  uf: yup.string().required(),
  neighborhood: yup.string().required(),
  address_number: yup.number().required(),
  cep: yup.string().required().min(8), // number?
  cpf: yup.string().required().min(11),
  rg: yup.string().required().min(5),
  option_payment: yup.string().required(),
  bank_name: yup.string().required(),
  bank_agency: yup.number().required(),
  bank_account_number: yup.number().required(),
};
/*
pessoal
  nome
  sobrenome
  email
  tel1
  tel2
  birthday
pessoal2
  Estado civil
  sexo
  altura
  peso
  Situação
endereço
  cidade
  estado
  bairro
  numero
  cep
documentos
  cpf
  rg
  foto rg
forma de pagamento
  opçoes
    cartão de credito
    debito em conta corrente
    boleto bancario
    desconto em folha de pagamento
  banco
  agc
  conta
baixar contrato
  link pra baixar/enviarporemai

->surge a necessidade de deixar no ar pra fazer os outros passos
  pagina de foto do usuario
  pagina de foto do usuario com contrato



*/
