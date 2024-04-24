// layoutPrestacoes.js

// Layout da entidade "prestações"
module.exports = {
    tip_reg: { inicio: 1, tamanho: 1 },
    cod_siste: { inicio: 2, tamanho: 2 },
    dat_movto: { inicio: 4, tamanho: 8 },
    tip_inter: { inicio: 12, tamanho: 1 },
    cod_credor: { inicio: 13, tamanho: 8 },
    des_regis: { inicio: 21, tamanho: 30 },
    cod_produt: { inicio: 51, tamanho: 8 },
    des_contr: { inicio: 59, tamanho: 30 },
    dat_venci: { inicio: 89, tamanho: 8 },
    num_prest: { inicio: 97, tamanho: 8 },
    dat_corre: { inicio: 105, tamanho: 8 },
    dat_pagam: { inicio: 113, tamanho: 8 },
    val_princ: { inicio: 121, tamanho: 18 },
    val_corre: { inicio: 139, tamanho: 18 },
    val_encar: { inicio: 157, tamanho: 18 },
    val_minim: { inicio: 175, tamanho: 18 },
    val_pago: { inicio: 193, tamanho: 18 },
    ind_ajuiz: { inicio: 211, tamanho: 1 },
    tip_notif: { inicio: 212, tamanho: 2 },
    qtd_prest: { inicio: 214, tamanho: 6 },
    ind_alter: { inicio: 220, tamanho: 1 },
    des_banco: { inicio: 221, tamanho: 3 },
    des_agenc: { inicio: 224, tamanho: 4 },
    des_compe: { inicio: 228, tamanho: 3 },
    des_chequ: { inicio: 231, tamanho: 6 },
    des_conta: { inicio: 237, tamanho: 10 },
    des_aline: { inicio: 247, tamanho: 2 },
    ind_baixa: { inicio: 249, tamanho: 1 },
    id_prest: { inicio: 250, tamanho: 30 }
  };
  