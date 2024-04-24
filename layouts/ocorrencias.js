// layoutOcorrencias.js

// Layout da entidade "ocorrências"
module.exports = {
  tip_reg: { inicio: 1, tamanho: 1 },
  cod_siste: { inicio: 2, tamanho: 2 },
  dat_movto: { inicio: 4, tamanho: 8 },
  tip_inter: { inicio: 12, tamanho: 1 },
  cod_credor: { inicio: 13, tamanho: 8 },
  des_regis: { inicio: 21, tamanho: 30 },
  dat_histo: { inicio: 51, tamanho: 8 },
  hor_histo: { inicio: 59, tamanho: 6 },
  cod_histo: { inicio: 65, tamanho: 8 },
  des_compl_histo: { inicio: 73, tamanho: 255 },
};
