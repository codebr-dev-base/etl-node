// layoutBaixaBoleto.js

// Layout da entidade "Baixa de Boleto"
module.exports = {
    tip_reg: { inicio: 1, tamanho: 1 },
    cod_siste: { inicio: 2, tamanho: 2 },
    dat_movto: { inicio: 4, tamanho: 8 },
    tip_inter: { inicio: 12, tamanho: 1 },
    des_nosso_numer: { inicio: 13, tamanho: 12 },
    dat_pagto: { inicio: 25, tamanho: 8 },
    val_pago: { inicio: 33, tamanho: 18 }
  };
  