// layoutParcelaAcordoCredor.js

// Layout da entidade "Parcela Acordo Credor"
module.exports = {
    tip_reg: { inicio: 1, tamanho: 1 },
    cod_siste: { inicio: 2, tamanho: 2 },
    dat_movto: { inicio: 4, tamanho: 8 },
    tip_inter: { inicio: 12, tamanho: 1 },
    cod_credor: { inicio: 13, tamanho: 8 },
    des_regis: { inicio: 21, tamanho: 30 },
    des_id: { inicio: 51, tamanho: 8 },
    num_prest: { inicio: 59, tamanho: 3 },
    qtd_prest: { inicio: 62, tamanho: 3 },
    dat_venci: { inicio: 65, tamanho: 8 },
    val_princ: { inicio: 73, tamanho: 18 },
    val_pago: { inicio: 91, tamanho: 18 },
    val_multa: { inicio: 109, tamanho: 18 },
    val_juros: { inicio: 127, tamanho: 18 },
    val_txadm: { inicio: 145, tamanho: 18 },
    val_repas: { inicio: 163, tamanho: 18 },
    val_recei: { inicio: 181, tamanho: 18 },
    val_desco: { inicio: 199, tamanho: 18 },
    val_despe: { inicio: 217, tamanho: 18 },
    val_txpar: { inicio: 235, tamanho: 18 },
    des_banco: { inicio: 253, tamanho: 3 },
    des_agenc: { inicio: 256, tamanho: 4 },
    des_conta: { inicio: 260, tamanho: 15 },
    des_chequ: { inicio: 275, tamanho: 10 }
  };
  