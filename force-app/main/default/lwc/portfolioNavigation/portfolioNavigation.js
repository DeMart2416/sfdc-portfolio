import { LightningElement, track } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';
import HAM_MENU from '@salesforce/resourceUrl/hamMenu';
import HAM_MENU_CLOSE from '@salesforce/resourceUrl/hamMenuClose';
export default class PortfolioNavigation extends LightningElement {
	// Declare Static Resources
	seanProfile = IMAGES + '/images/profile-pictures/sean.jpeg';
	hamMenuURL = `${HAM_MENU}#hamMenu`;
	hamMenuCloseURL = `${HAM_MENU_CLOSE}#hamMenuClose`;

	@track menuOpen = false;
	imgSrc = this.hamMenuURL;
	imgAlt = 'hamburger menu';

	sections = [
		{ Id: 1, Name: 'home' },
		{ Id: 2, Name: 'about' },
		{ Id: 3, Name: 'experience' },
		//{ Id: 4, Name: 'education' },
		{ Id: 5, Name: 'contact' }
	];

	get displayDropDownMenu() {
		console.log("TESTINg");
		return !this.menuOpen ? 'header__sm-menu' : 'header__sm-menu header__sm-menu--active';
	}
	
	handleMenuOpen() {
		this.menuOpen = this.menuOpen ? false : true;

		if (this.menuOpen) {
			this.imgSrc = this.hamMenuCloseURL;
			this.imgAlt = 'hamburger menu close';
		} else {
			this.imgSrc = this.hamMenuURL;
			this.imgAlt = 'hamburger menu';
		}
	}

	handleLinkClick(event) {
		event.preventDefault();

		const navigateEvent = new CustomEvent('navigate', {
			detail: event.target.dataset.targetSection
		});

		this.dispatchEvent(navigateEvent);
	}
}
