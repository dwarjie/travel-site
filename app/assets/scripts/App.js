import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';

// reference classes
let mobileMenu = new MobileMenu();

if (module.hot) {
	module.hot.accept();
}
