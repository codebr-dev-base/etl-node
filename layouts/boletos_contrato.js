// layoutBoletosContrato.js

// Layout da entidade "boletos_contrato"
module.exports = {
    tip_reg: { inicio: 1, tamanho: 1 },
    cod_siste: { inicio: 2, tamanho: 2 },
    dat_movto: { inicio: 4, tamanho: 8 },
    tip_inter: { inicio: 12, tamanho: 1 },
    cod_credor: { inicio: 13, tamanho: 8 },
    des_regis: { inicio: 21, tamanho: 30 },
    cod_produt: { inicio: 51, tamanho: 8 },
    des_contr: { inicio: 59, tamanho: 30 },
    des_empre: { inicio: 89, tamanho: 2 },
    des_grafi_refin: { inicio: 91, tamanho: 11 },
    des_nosso_numer: { inicio: 102, tamanho: 12 },
    des_carte_bolet: { inicio: 114, tamanho: 2 },
    des_agenc: { inicio: 116, tamanho: 4 },
    des_agenc_digit: { inicio: 120, tamanho: 1 },
    des_conta: { inicio: 121, tamanho: 7 },
    des_conta_digit: { inicio: 128, tamanho: 1 },
    des_cip: { inicio: 129, tamanho: 3 },
    des_uso_banco: { inicio: 132, tamanho: 5 },
    des_espec_doc: { inicio: 137, tamanho: 2 },
    des_cgc_ceden: { inicio: 139, tamanho: 15 },
    des_top: { inicio: 154, tamanho: 3 },
    des_banco: { inicio: 157, tamanho: 3 },
    des_cia: { inicio: 160, tamanho: 2 },
    nom_ceden: { inicio: 162, tamanho: 30 }
  };
  