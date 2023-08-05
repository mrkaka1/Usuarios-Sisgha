const info = document.querySelector('.ifor');
const infor = document.querySelector('.infor');

const disp = document.querySelector('.disp');
const dispo = document.querySelector('.dispo');
const box = document.querySelector('.bx');

const btensi = document.querySelector('.btensi');
const ensino = document.querySelector('.ensino');

const li = document.querySelector('.bx1');
const svgbx = document.querySelector('.svgbx1');

function ativaInfo() {
   infor.classList.add('ativo');
   box.classList.remove('ativou');
   ensino.classList.remove('ativa');
   dispo.classList.remove('ativou');
   //css
   // info.classList.add('ativado');
   // disp.classList.remove('ativado');
   // btensi.classList.remove('ativado');

}
function ativaDispo() {
   infor.classList.remove('ativo');
   ensino.classList.remove('ativa');
   box.classList.add('ativou');
   dispo.classList.add('ativou')
   //css
   // disp.classList.add('ativado');
   // info.classList.remove('ativado');
   // btensi.classList.remove('ativado');
}
function ativaEnsi() {
   infor.classList.remove('ativo');
   box.classList.remove('ativou');
   dispo.classList.remove('ativou');
   ensino.classList.add('ativa');
}



disp.addEventListener('click', ativaDispo);
ativaDispo();

btensi.addEventListener('click', ativaEnsi);
ativaEnsi();

info.addEventListener('click', ativaInfo);
ativaInfo();

function ativaBx() {
   svgbx.classList.toggle('atv');
}
li.addEventListener('click', ativaBx)
ativaBx();