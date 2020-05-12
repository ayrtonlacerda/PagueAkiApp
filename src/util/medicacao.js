export default [
  {
    name: 'Dados Pessoal 1',
    components: [
      {
        name: 'Input',
        key: 'name',
        title: 'Nome',
        placeholder: 'nome que estar no seu documento',
      },
      {
        name: 'Input',
        key: 'last_name',
        title: 'Sobrenome',
        placeholder: 'sobrenome que estar no seu documento',
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
        key: 'birthday',
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
        key: 'sexo',
        title: 'Sexo',
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
        key: 'situation',
        title: 'Situação',
        options: [
          'Aposentado',
          'Pensionista',
          'Em plena atividade profissional',
          'Funcionario publico',
        ],
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
        placeholder: 'São jose dos campos',
      },
      {
        name: 'Input',
        key: 'state',
        title: 'Estado',
        placeholder: 'São Paulo',
      },
      {
        name: 'Input',
        key: 'street',
        title: 'bairro',
        placeholder: 'São joão',
      },
      {
        name: 'Input',
        key: 'number',
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
      },
      {
        name: 'Image',
        key: 'face',
        title: 'Uma foto do seu rosto',
      },
    ],
  },
  {
    name: 'Opções de Pagamento',
    components: [
      {
        name: 'Picker',
        key: 'option_payment',
        title: 'Opções de Pagamento',
        options: [
          'cartão de credito',
          'debito em conta corrente',
          ' boleto bancario',
          'desconto em folha de pagamento',
        ],
      },
      {
        name: 'Input',
        key: 'bank',
        title: 'Banco',
        placeholder: 'Caixa Economica',
      },
      {
        name: 'Input',
        key: 'agc',
        title: 'Agência',
        type: 'numeric',
        placeholder: '0000000',
      },
      {
        name: 'InputMask',
        key: 'account',
        title: 'Conta',
        type: 'numeric',
        placeholder: '0000000',
      },
    ],
  },
];
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
