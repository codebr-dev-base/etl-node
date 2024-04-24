// layoutPagamentoParcelaAcordo.js

// Layout da entidade "Pagamento de Parcela de Acordo"
module.exports = {
    tip_reg: { inicio: 1, tamanho: 1 },
    cod_siste: { inicio: 2, tamanho: 2 },
    dat_movto: { inicio: 4, tamanho: 8 },
    tip_inter: { inicio: 12, tamanho: 1 },
    cod_credor: { inicio: 13, tamanho: 8 },
    des_regis: { inicio: 21, tamanho: 30 },
    cod_parce: { inicio: 51, tamanho: 8 },
    dat_venci: { inicio: 59, tamanho: 8 },
    val_pago: { inicio: 67, tamanho: 18 },
    dat_pagam: { inicio: 85, tamanho: 8 },
    cod_parce_asses: { inicio: 93, tamanho: 8 },
    ind_acao: { inicio: 101, tamanho: 1 }
  };
  