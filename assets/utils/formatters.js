export const formatarEscolaridade = (escolaridade) => {
  const escolaridades = {
    fundamental: 'Ensino Fundamental',
    medio: 'Ensino Médio',
    superior: 'Ensino Superior',
    pos: 'Pós-graduação',
  };
  
  return escolaridades[escolaridade] || escolaridade;
};

export const formatarSexo = (sexo) => {
  const sexos = {
    masculino: 'Masculino',
    feminino: 'Feminino',
    outro: 'Outro',
  };
  
  return sexos[sexo] || sexo;
};

export const formatarMoeda = (valor) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
};