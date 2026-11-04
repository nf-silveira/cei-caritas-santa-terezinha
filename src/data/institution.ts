import type { Institution } from '../types/institution'

// Dados demonstrativos. Endereço, telefone, e-mail e indicadores são fictícios.
export const institutionData: Institution = {
  name: 'CEI Cáritas Santa Terezinha',
  tagline: 'Educação, cuidado e desenvolvimento na primeira infância.',
  address: 'Rua das Acácias, 000 — Bairro Fictício, São Paulo/SP',
  phone: '(00) 0000-0000',
  email: 'contato@exemplo.invalid',
  hours: 'Segunda a sexta, das 7h às 17h',
  summary:
    'Centro de Educação Infantil que atende bebês e crianças em período integral, com um ambiente acolhedor, seguro e estimulante.',
  mission:
    'Alcançar a excelência na educação infantil com um ensino baseado no amor pela infância, em um ambiente acolhedor que favoreça o desenvolvimento integral, a autonomia e a construção de valores éticos.',
  vision:
    'Ser referência em educação humanizada e atendimento de qualidade, valorizando o trabalho em equipe e a parceria com as famílias.',
  values: [
    'Respeito à criança e ao tempo da infância',
    'Profissionalismo e formação continuada',
    'Humanização no cuidado e na educação',
    'Transparência e integridade',
    'Solidariedade e trabalho em equipe',
    'Inovação com compromisso pedagógico',
  ],
}
