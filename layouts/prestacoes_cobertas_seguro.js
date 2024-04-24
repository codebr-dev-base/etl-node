// layoutPrestacoesCobertasSeguro.js

// Layout da entidade "Prestações Cobertas pelo Seguro"
module.exports = {
    tip_reg: { inicio: 1, tamanho: 1 },
    cod_siste: { inicio: 2, tamanho: 2 },
    dat_movto: { inicio: 4, tamanho: 8 },
    tip_inter: { inicio: 12, tamanho: 1 },
    cod_credor: { inicio: 13, tamanho: 8 },
    des_regis: { inicio: 21, tamanho: 30 },
    cod_produt: { inicio: 51, tamanho: 8 },
    des_contr: { inicio: 59, tamanho: 30 },
    id_seguro: { inicio: 89, tamanho: 30 },
    id_prest: { inicio: 119, tamanho: 30 },
    dat_venci: { inicio: 149, tamanho: 8 },
    num_prest: { inicio: 157, tamanho: 3 },
    val_princ: { inicio: 160, tamanho: 18 },
    dat_baixa: { inicio: 178, tamanho: 8 },
    val_baixa: { inicio: 186, tamanho: 18 },
    ind_alter: { inicio: 204, tamanho: 1 }
  };
  