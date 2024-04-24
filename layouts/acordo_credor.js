// layoutAcordoCredor.js

// Layout da entidade "Acordo Credor"
module.exports = {
    tip_reg: { inicio: 1, tamanho: 1 },
    cod_siste: { inicio: 2, tamanho: 2 },
    dat_movto: { inicio: 4, tamanho: 8 },
    tip_inter: { inicio: 12, tamanho: 1 },
    cod_credor: { inicio: 13, tamanho: 8 },
    des_regis: { inicio: 21, tamanho: 30 },
    des_id: { inicio: 51, tamanho: 8 },
    dat_acordo: { inicio: 59, tamanho: 8 },
    dat_movim: { inicio: 67, tamanho: 8 },
    val_acordo: { inicio: 75, tamanho: 18 },
    des_msg: { inicio: 93, tamanho: 255 },
    ind_proc_manual: { inicio: 348, tamanho: 1 },
    cod_parce_asses: { inicio: 349, tamanho: 8 }
  };
  