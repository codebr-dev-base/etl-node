// layoutOriginaisAcordoCredor.js

// Layout da entidade "Originais Acordo Credor"
module.exports = {
    tip_reg: { inicio: 1, tamanho: 1 },
    cod_siste: { inicio: 2, tamanho: 2 },
    dat_movto: { inicio: 4, tamanho: 8 },
    tip_inter: { inicio: 12, tamanho: 1 },
    des_id: { inicio: 13, tamanho: 8 },
    cod_credor: { inicio: 21, tamanho: 8 },
    des_regis: { inicio: 29, tamanho: 30 },
    cod_produt: { inicio: 59, tamanho: 8 },
    des_contr: { inicio: 67, tamanho: 30 },
    dat_venci: { inicio: 97, tamanho: 8 }, // Nova coluna dat_venci
    id_prest: { inicio: 105, tamanho: 30 } // Nova coluna id_prest
  };
  