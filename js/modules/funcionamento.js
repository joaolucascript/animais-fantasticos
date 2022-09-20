export default function funcionamento() {
  const funcionamentoSemana = document.querySelector('[data-semana]');
  const diasSemana = funcionamentoSemana.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamentoSemana.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamentoSemana.classList.add('aberto');
  }
}

// Quantos dias para o Natal
// const agora = new Date();
// const futuro = new Date("Dec 24 2022 23:59");

// function msEmDias(ms) {
//   return ms / 24 / 60 / 60 / 1000;
// }

// console.log(`Faltam ${Math.floor(msEmDias(futuro - agora))} dias para o Natal`);

// console.log(agora.getDate());
// console.log(futuro);
