import React from 'react';

const info = {
  products: [
    {
      name: 'COMBO - 2 Camisetas Weekomp',
      price: 50,
      description: 'Camisetas da Weekomp.',
      imgSrc: 'https://weekomp-images.s3.us-east-2.amazonaws.com/products/shirts/combo.png',
      hasSize: true,
    },
    {
      name: 'COMBO - 2 Cadernos Weekomp',
      price: 18,
      description: 'Cadernos da Weekomp.',
      imgSrc: 'https://weekomp-images.s3.us-east-2.amazonaws.com/products/notebooks/combo.png',
    },
    {
      name: 'COMBO - 3 Bottons Weekomp',
      price: 7.5,
      description: 'Bottons da Weekomp.',
      imgSrc:
        'https://weekomp-images.s3.us-east-2.amazonaws.com/products/bottons/combo-3-models.png',
    },
    {
      name: 'COMBO - 2 Bottons Weekomp',
      price: 5,
      description: 'Bottons da Weekomp.',
      imgSrc:
        'https://weekomp-images.s3.us-east-2.amazonaws.com/products/bottons/combo-2-models.png',
    },
    {
      id: 13,
      name: 'Caderno Weekomp - Preto',
      price: 10,
      description: 'Caderno da Weekomp.',
      imgSrc: 'https://weekomp-images.s3.us-east-2.amazonaws.com/products/notebooks/black.png',
    },
    {
      id: 12,
      name: 'Caderno Weekomp - Verde',
      price: 10,
      description: 'Caderno da Weekomp.',
      imgSrc: 'https://weekomp-images.s3.us-east-2.amazonaws.com/products/notebooks/emerald.png',
    },
    {
      id: 10,
      name: 'Caderno Weekomp - Roxo',
      price: 10,
      description: 'Caderno da Weekomp.',
      imgSrc: 'https://weekomp-images.s3.us-east-2.amazonaws.com/products/notebooks/purple.png',
    },
    {
      id: 11,
      name: 'Caderno Weekomp - Azul',
      price: 10,
      description: 'Caderno da Weekomp.',
      imgSrc: 'https://weekomp-images.s3.us-east-2.amazonaws.com/products/notebooks/sapphire.png',
    },
    {
      id: 9,
      name: 'Caderno Weekomp - Vermelho',
      price: 10,
      description: 'Caderno da Weekomp.',
      imgSrc: 'https://weekomp-images.s3.us-east-2.amazonaws.com/products/notebooks/wine.png',
    },
    {
      name: 'Camiseta Weekomp',
      price: 30,
      description: 'Camiseta da Weekomp.',
      imgSrc: 'https://weekomp-images.s3.us-east-2.amazonaws.com/products/shirts/shirt.png',
      hasSize: true,
    },
    {
      id: 7,
      name: 'Botton Weekomp - Modelo 01',
      price: 3,
      description: 'Botton da Weekomp.',
      imgSrc:
        'https://weekomp-images.s3.us-east-2.amazonaws.com/products/bottons/botton-model-01.png',
    },
    {
      id: 6,
      name: 'Botton Weekomp - Modelo 02',
      price: 3,
      description: 'Botton da Weekomp.',
      imgSrc:
        'https://weekomp-images.s3.us-east-2.amazonaws.com/products/bottons/botton-model-02.png',
    },
    {
      id: 8,
      name: 'Botton Weekomp - Modelo 03',
      price: 3,
      description: 'Botton da Weekomp.',
      imgSrc:
        'https://weekomp-images.s3.us-east-2.amazonaws.com/products/bottons/botton-model-03.png',
    },
  ],

  informative: [
    {
      title: 'Entrega',
      description: 'As entregas dos itens comprados ocorrerão durante a Weekomp.',
    },
    {
      title: 'Pagamento',
      description: [
        <div>
          <p>
            Os pagamentos deverão ser feitos: em Espécie, pelo Pic-Pay ou por Transferência
            Bancária.
          </p>
          &emsp;
          <p>
            -> Pagamento em Espécie: Confira horários de atendimento do CAECOMP no Rodapé do Site.
          </p>
          &emsp;
          <p>-> PicPay: @jardelalves_bf</p>
          &emsp;
          <p>-> Nuconta:</p>
          <p>&emsp;&emsp;&emsp;&emsp;Nome: Italo Bruno Cunha da Silva;</p>
          <p>&emsp;&emsp;&emsp;&emsp;CPF: 054.888.993-75;</p>
          <p>&emsp;&emsp;&emsp;&emsp;Banco: 260 - Nu Pagamentos S.A.;</p>
          <p>&emsp;&emsp;&emsp;&emsp;Agência: 0001;</p>
          <p>&emsp;&emsp;&emsp;&emsp;Conta: 8270524-0.</p>
          &emsp;
          <p>OBS.: </p> 
          <p>ENVIAR COMPROVANTE DE PAGAMENTO OU TRANSFERÊNCIA PARA O EMAIL: <span style={{color: 'green'}}> caecomp.ifce@gmail.com </span> </p>
        </div>,
      ],
    },
  ],
};

export default info;
