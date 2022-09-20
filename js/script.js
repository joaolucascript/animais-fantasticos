import TabNav from './modules/tabNav.js';
import ScrollSuave from './modules/scroll-suave.js';
import animacaoScroll from './modules/animacaoScroll.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import menuMobile from './modules/menu-mobile.js';
import funcionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

animacaoScroll();
tooltip();
initDropdownMenu();
menuMobile();
funcionamento();
initFetchAnimais();
initFetchBitcoin();
