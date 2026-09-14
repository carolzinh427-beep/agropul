export interface SpecItem {
  label: string;
  value: string;
  category?: string;
}

export interface Equipment {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  mainImage: string;
  secondaryImage: string;
  highlights: { label: string; value: string }[];
  specs: SpecItem[];
}

export const EQUIPMENTS: Equipment[] = [
  {
    id: 'cr-turbo-400',
    name: 'CR-TURBO 400',
    tagline: 'Eficiência e alto desempenho para áreas até 500 ha',
    category: 'Pulverizador Turbo Acoplado',
    description: 'Equipamento robusto projetado para pulverização de precisão com turbina de alto fluxo e reservatório resistente em polietileno. Ideal para fruticultura, cafeicultura e culturas adensadas.',
    mainImage: '/images/cr-turbo-400-side.png',
    secondaryImage: '/images/cr-turbo-400-fan.png',
    highlights: [
      { label: 'CAPACIDADE', value: '400 L' },
      { label: 'ÁREA DE ATUAÇÃO', value: 'Até 500 ha' },
      { label: 'VAZÃO MÁXIMA', value: '75 L/min' },
      { label: 'VELOCIDADE DO AR', value: '146 km/h' },
    ],
    specs: [
      { label: 'Área de atuação', value: 'Até 500 ha', category: 'Desempenho' },
      { label: 'Capacidade do tanque', value: '400 L (Polietileno)', category: 'Reservatório' },
      { label: 'Reservatório de água limpa', value: '15 L (Polietileno)', category: 'Reservatório' },
      { label: 'Agitação da calda', value: 'Hidráulico', category: 'Sistema' },
      { label: 'Filtro de sucção', value: 'FVS 100', category: 'Sistema' },
      { label: 'Capacidade da bomba', value: '100 L/min', category: 'Bomba' },
      { label: 'Vazão máxima', value: '75 L/min', category: 'Bomba' },
      { label: 'Potência consumida (bomba)', value: '4 cv', category: 'Bomba' },
      { label: 'Comando de defensivos', value: 'VAR 2 vias', category: 'Comando' },
      { label: 'Acionamento do comando', value: 'Alavanca', category: 'Comando' },
      { label: 'Pressão máxima', value: '300 PSI', category: 'Pressão' },
      { label: 'Diâmetro do ventilador', value: '725 mm', category: 'Ventilação' },
      { label: 'Velocidade do ar', value: '146 km/h (10,2 m²/s)', category: 'Ventilação' },
      { label: 'Potência do ventilador', value: '15 cv', category: 'Ventilação' },
      { label: 'Peso da máquina', value: '290 kg', category: 'Estrutura' },
      { label: 'Dimensões (C x L x A)', value: '1,75 m x 1,10 m x 1,57 m', category: 'Estrutura' },
      { label: 'Velocidade operacional', value: '2 a 6 km/h', category: 'Desempenho' },
    ],
  },
  {
    id: 'cr-ph-400',
    name: 'CR-PH 400',
    tagline: 'Versatilidade total para cereais, hortaliças e café',
    category: 'Pulverizador de Barras Hidráulicas',
    description: 'Solução versátil e altamente eficiente com barras hidráulicas de até 3,62 m, chassi reforçado e pintura epóxi de alta durabilidade. Desenvolvido para máxima precisão na aplicação.',
    mainImage: '/images/cr-ph-400-mounted.png',
    secondaryImage: '/images/cr-ph-400-rear.png',
    highlights: [
      { label: 'CAPACIDADE', value: '400 L' },
      { label: 'BARRAS', value: 'Até 3,62 m' },
      { label: 'BOMBA AG40', value: '38 L/min' },
      { label: 'CHASSI', value: 'Reforçado PO' },
    ],
    specs: [
      { label: 'Culturas atendidas', value: 'Cereais, Hortaliças, Café', category: 'Aplicação' },
      { label: 'Tamanho da área', value: 'Até 500 ha', category: 'Desempenho' },
      { label: 'Tanque principal', value: '400 L (Polietileno)', category: 'Reservatório' },
      { label: 'Tanque de água limpa', value: '15 L', category: 'Reservatório' },
      { label: 'Alcance das barras', value: '2,35 a 3,08 m / 2,90 a 3,62 m', category: 'Barras' },
      { label: 'Agitação da calda', value: 'Hidráulico', category: 'Sistema' },
      { label: 'Filtro de sucção', value: 'FVS-100', category: 'Sistema' },
      { label: 'Capacidade de filtragem', value: '100 L/min', category: 'Sistema' },
      { label: 'Modelo da bomba', value: 'AG40', category: 'Bomba' },
      { label: 'Capacidade da bomba', value: '38 L/min', category: 'Bomba' },
      { label: 'Comando de defensivos', value: 'VAR 2 vias', category: 'Comando' },
      { label: 'Acionamento do comando', value: 'Alavanca', category: 'Comando' },
      { label: 'Pressão de operação', value: '150 PSI', category: 'Pressão' },
      { label: 'Chassi', value: 'Reforçado', category: 'Estrutura' },
      { label: 'Pintura', value: 'Epóxi de alta resistência (PO)', category: 'Estrutura' },
      { label: 'Peso da máquina', value: '210 kg', category: 'Estrutura' },
      { label: 'Velocidade operacional', value: '2 a 6 km/h', category: 'Desempenho' },
      { label: 'Dimensões (C x L x A)', value: '1,50 m x 1,68 m x 1,43 m', category: 'Estrutura' },
    ],
  },
  {
    id: 'cr-turbo-2000',
    name: 'CR-TURBO 2000',
    tagline: 'Potência máxima e alta autonomia com reservatório de 2000 L',
    category: 'Pulverizador Turbo Arraste',
    description: 'O gigante da linha CR Agro. Construído com reservatório em fibra de vidro de 2000 litros, agitador mecânico e turbina de 850 mm que produz vento de até 270 km/h com faixa de aplicação de até 30 metros.',
    mainImage: '/images/cr-turbo-2000-trailed.png',
    secondaryImage: '/images/cr-turbo-2000-fan.png',
    highlights: [
      { label: 'CAPACIDADE', value: '2000 L' },
      { label: 'FAIXA DE APLICAÇÃO', value: 'Até 30 m' },
      { label: 'VELOCIDADE DO AR', value: '270 km/h' },
      { label: 'VENTILADOR', value: '850 mm (23 cv)' },
    ],
    specs: [
      { label: 'Tamanho da área', value: 'Até 500 ha', category: 'Desempenho' },
      { label: 'Capacidade do tanque', value: '2000 L (Fibra de vidro)', category: 'Reservatório' },
      { label: 'Reservatório de água limpa', value: '90 L (Fibra de vidro)', category: 'Reservatório' },
      { label: 'Agitação da calda', value: 'Mecânico', category: 'Sistema' },
      { label: 'Filtro de sucção', value: 'FVS 200', category: 'Sistema' },
      { label: 'Capacidade de filtragem', value: '200 L/min', category: 'Sistema' },
      { label: 'Modelo da bomba', value: 'AG1000 / 150 / 190', category: 'Bomba' },
      { label: 'Vazão máxima', value: '100 / 150 / 190 L/min', category: 'Bomba' },
      { label: 'Comando de defensivos', value: 'VAR 2 vias', category: 'Comando' },
      { label: 'Rotação da turbina', value: '4100 rpm', category: 'Ventilação' },
      { label: 'Diâmetro do ventilador', value: '850 mm', category: 'Ventilação' },
      { label: 'Velocidade do ar', value: '270 km/h', category: 'Ventilação' },
      { label: 'Volume do ar', value: '2,57 m³/s', category: 'Ventilação' },
      { label: 'Potência consumida', value: '23 cv', category: 'Ventilação' },
      { label: 'Peso da máquina', value: '1000 kg', category: 'Estrutura' },
      { label: 'Velocidade operacional', value: '2 a 6 km/h', category: 'Desempenho' },
      { label: 'Faixa de aplicação', value: 'Até 30 m', category: 'Aplicação' },
      { label: 'Volume de pulverização', value: '23 a 860 L/ha', category: 'Aplicação' },
      { label: 'Dimensões (C x L x A)', value: '4,45 m x 1,75 m x 1,85 m', category: 'Estrutura' },
    ],
  },
];
