export default function fetchBitcoin(url, target) {
  fetch(url).then((response) => {
    response
      .json()
      .then((json) => {
        const btcPreco = document.querySelector(target);
        btcPreco.innerText = (10 / json.BRL.sell).toFixed(6);
      })
      .catch((erro) => {
        console.log(Error(erro));
      });
  });
}
