import React, { useCallback } from 'react';
import { Container, Logo, Card } from '../../components';
import { useCommons } from '../../hooks';
import { Imgs } from '../../assets';

import { Scroll } from './styles';

const ProductList = [
  {
    texto: 'PagueAki',
    descricao: 'Descrição que será fornecida pelos guys que tão pagando',
    color: '#77A93A',
    logo: Imgs.LOGO_BRANCA,
    infos: [
      [
        'Você sabia que existem duas formas de fazer o pagamento de suas contas com seu cartão de crédito?\n\n 1) Por meio do próprio banco emissor do cartão;\n 2) Pela utilização de aplicativos através de carteiras digitais, comumento chamadas de "fintechs".',
        'Em ambos os casos observamos a impossibilidade de se pagar qualquer tipo de boleto. Sempre haverá uma ou outra restrição, seja ela causada pela falta de comunicação de sistemas entre fiduciários ou pela exclusão de serviços e insuficiência de credenciamento/facilitação entre aplicativos e programas de credores.',
        'No final, significa que muitas faturas ficarão de fora do seu cartão de crédito pois não poderão ser pagas. Na maioria das vezes, um cartão de crédito somente autoriza que você pegue dinheiro emprestado de seu banco para fazer, tão somente, suas compras utilizando-o como ferramenta de escambo.',
        'O PagueAki é um sistema de comunicação PÓS que viabiliza o pagamento de qualquer conta através do seu cartão de crédito! Trata-se de um recurso que permite - naquelas horas de aperto – a utilização de seu cartão para a quitação de uma conta atrasada (água, luz, telefone, etc) ou até mesmo outras conveniências, como o colégio dos seus filhos ou a prestação do financiamento que vai vencer, por exemplo. E tudo isso de forma parcelada! ',
      ],
      [
        'O PagueAki é uma empresa distribuidora de maquinas PÓS (ponto de venda ou ponto de serviço, do inglês: Point of Sale ou Point of Service). Atua como facilitador para cotização de contas. Pretendendo explorar segmentos diferenciados, possibilita serviços de pagamentos através do cartão de crédito.',
        'As máquinas de POS possibilitam pagamentos de contas margeadas pelo limite disponibilizado no próprio cartão. Pode-se pagar qualquer tipo de boleto desde que se tenha um código de barras: água, luz, telefone, condomínio, escola, impostos e até mesmo outros cartões de crédito, entre outras utilidades.',
        'É possível realizar quantas operações de pagamento que se fizerem necessárias, tudo dependerá do limite do seu cartão de crédito. ',
        'Faça aqui seu cadastro para a aquisição de sua “maquininha de POS”! Agende uma visita e venha conhecer o sistema que vai acabar com a inadimplência e te ajudar a honrar com seus compromissos de uma forma que cabe no seu bolso. Entraremos em contato em até 24 horas.',
      ],
    ],
    value: 'PAGUEAKI',
  },
  {
    texto: 'Medicação',
    descricao: 'Descrição que será fornecida pelos guys que tão pagando',
    color: '#CD9400',
    logo: Imgs.LOGO_MEDICACAO,
    infos: [
      [
        'A regulamentação de preços dos medicamentos no Brasil é feita pelo CMED (Câmara de Regulação do Mercado de Medicamentos) por um comitê executivo e pela Anvisa (Agência Nacional de Vigilância Sanitária). Através de comparativos e análises mercadológicas, define-se qual o preço ideal de um medicamento.',
        'O CMED estrutura-se por quatro ministérios: Casa Civil, Saúde, Fazenda e Justiça. Abaixo desta instituição, encontramos um comitê executivo formado por secretários de pastas destes ministérios e conclui-se com a Secretaria Executiva, exercida pela Anvisa.',
        'Cabe a Anvisa – além da regulamentação - disponibilizar materiais, equipamentos e  técnicos. Esse conjunto de quesitos formatam análises, quando a pauta encontra-se  dentro da regra, é tomada a decisão de primeira instância. Quando não, submete-se o laudo ao comitê executivo. ',
      ],
      [
        'Os critérios utilizados para definir o preço do medicamento são as “CATEGORIAS”. Existem seis categorias classificatórias, cada uma possui metodologia específica para deliberação de  qual deve ser  o custo máximo de cada medicamento.',
        'Além desses critérios, no Brasil aplicam-se outros fatores: imposto estadual, imposto federal, margens, contigências, dentre outros. Sem contar que, depois que o medicamento entra no mercado, ele ainda vai sofrer uma atualização anual em função de índices inflacionários.',
        'Resumidamente, quem paga a conta é o consumidor final o qual, definitivamente precisa da medicação.',
      ],
      [
        'Drogaria Colorado, empresa fundada em 1999. São 12(doze) lojas distribuídas por Brasília, buscando sempre a excelência no atendimento ao cliente. ',
        'Temos por missão Cuidar de perto da saúde e bem-estar das pessoas. É esse o conceito da rede de drogarias Colorado. A gente se preocupa e cuida para que nossos clientes tenham mais facilidade para continuar seu tratamento médico.',
        'Associe-se ao nosso clube e adquira o direito de comprar seus medicamentos pelo preço de distribuição, os descontos vão te surpreender. Por uma mensalidade de R$ 40,00 (quarenta reais) economize na compra de fármacos e derivados de uma forma nunca vista antes, principalmente você que faz uso contínuo de remédios controlados cuja classificação está de fora do Programa Farmácia Popular. ',
      ],
      [
        'E tem muito mais: acrescendo R$ 38,00 (trinta e oito reais) mensais ao seu plano farmácia, você passa a fazer parte da RHEDEClub de Benefícios, obtendo o direito de descontos de até 80% (oitenta por cento) em consulta e exames em nossa rede credenciada por todo o DF.',
        'Associando a RHEDEClub - por esse valor - além de poder usufruir de outros serviços que realmente fazem a diferença, você também adquire um Plano Familiar de Assistência funeral (titular, cônjuge e filhos) bem como, em caso de alguma emergência médica, a disponibilidade de até                         R$ 12.000,00 (doze mil reais)/ano de reembolso com gastos de internação hospitalar. Preencha também o formulário abaixo e visite nosso site https://rhedeclub.com.br/ .',
        'Faça aqui seu cadastro. Entraremos em contato em até 24 horas.',
      ],
    ],
    value: 'MEDICACAO',
  },
  {
    texto: 'Caminhão',
    descricao: 'Descrição que será fornecida pelos guys que tão pagando',
    color: '#5B5B5B',
    infos: [
      [
        'A Casa do caralho é uma empresa distribuidora de maquinas POS (ponto de venda ou ponto de serviço, do inglês: Point of Sale ou Point of Service). Atua como facilitador para cotização de contas. Pretendendo explorar segmentos diferenciados, possibilita serviços de pagamentos através do cartão de crédito.',
        'As máquinas de POS possibilitam pagamentos de contas margeadas pelo limite disponibilizado no próprio cartão. Pode-se pagar qualquer tipo de boleto desde que se tenha um código de barras: água, luz, telefone, condomínio, escola, impostos e até mesmo outros cartões de crédito, entre outras utilidades.',
        'É possível realizar quantas operações de pagamento que se fizerem necessárias, tudo dependerá do limite do seu cartão de crédito. ',
        'Faça aqui seu cadastro para a aquisição de sua “maquininha de POS”. Entraremos em contato em até 24 horas.',
      ],
      ['Texto 5', 'Texto 6', 'Texto 7', 'Texto 8'],
    ],
    value: 'CAMINHAO',
  },
  {
    texto: 'Dota',
    descricao: 'Descrição que será fornecida pelos guys que tão pagando',
    color: '#77A93A',
    infos: [
      [
        'A Casa do caralho é uma empresa distribuidora de maquinas POS (ponto de venda ou ponto de serviço, do inglês: Point of Sale ou Point of Service). Atua como facilitador para cotização de contas. Pretendendo explorar segmentos diferenciados, possibilita serviços de pagamentos através do cartão de crédito.',
        'As máquinas de POS possibilitam pagamentos de contas margeadas pelo limite disponibilizado no próprio cartão. Pode-se pagar qualquer tipo de boleto desde que se tenha um código de barras: água, luz, telefone, condomínio, escola, impostos e até mesmo outros cartões de crédito, entre outras utilidades.',
        'É possível realizar quantas operações de pagamento que se fizerem necessárias, tudo dependerá do limite do seu cartão de crédito. ',
        'Faça aqui seu cadastro para a aquisição de sua “maquininha de POS”. Entraremos em contato em até 24 horas.',
      ],
      ['Texto 5', 'Texto 6', 'Texto 7', 'Texto 8'],
    ],
    value: 'MEDICACAO',
  },
];

export default function Home() {
  const { navigation } = useCommons();
  const handleProduct = useCallback(
    (product) => navigation.navigate('Product', { product }),
    [navigation]
  );

  return (
    <Container>
      <Logo />
      <Scroll>
        {ProductList.map((data) => (
          <Card
            big
            source={Imgs.LOGO_BRANCA}
            titleText={data.texto}
            descriptionText={data.descricao}
            handleOnPress={() => handleProduct(data)}
            cardColor={data.color}
          />
        ))}
      </Scroll>
    </Container>
  );
}
