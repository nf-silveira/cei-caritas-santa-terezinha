import type { Unit } from '../types/unit'

// Unidades, endereços e telefones fictícios, usados apenas em demonstração.
export const unitsData: Unit[] = [
  {
    id: 'unidade-centro',
    name: 'Unidade Centro',
    segment: 'Berçário e Mini-Grupo I',
    ageRange: '4 meses a 2 anos',
    schedule: 'Período integral',
    address: 'Rua das Acácias, 000 — Bairro Fictício',
    phone: '(00) 0000-0000',
    highlights: ['Berçário com sala de repouso', 'Refeições preparadas na unidade', 'Pátio coberto para dias de chuva'],
  },
  {
    id: 'unidade-jardim',
    name: 'Unidade Jardim',
    segment: 'Mini-Grupo I e II',
    ageRange: '1 a 3 anos',
    schedule: 'Período integral',
    address: 'Avenida Exemplo, 000 — Bairro Demonstração',
    phone: '(00) 0000-0001',
    highlights: ['Horta pedagógica', 'Ateliê de artes', 'Sala multiuso para contação de histórias'],
  },
  {
    id: 'unidade-vila-nova',
    name: 'Unidade Vila Nova',
    segment: 'Mini-Grupo II',
    ageRange: '2 a 4 anos',
    schedule: 'Período integral',
    address: 'Travessa Ilustrativa, 000 — Vila Exemplo',
    phone: '(00) 0000-0002',
    highlights: ['Quadra recreativa', 'Brinquedoteca', 'Projeto de música e movimento'],
  },
]
