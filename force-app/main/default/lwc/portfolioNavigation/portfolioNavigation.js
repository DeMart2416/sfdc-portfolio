import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class PortfolioNavigation extends LightningElement {
	sections = [
		{ Id: 1, Name: 'home' },
		{ Id: 2, Name: 'about' },
		{ Id: 3, Name: 'experience' },
		{ Id: 4, Name: 'education' },
		{ Id: 5, Name: 'projects' }
	];

	seanProfile = IMAGES + '/images/profile-pictures/sean.jpeg';

	handleLinkClick(event) {
		event.preventDefault();

		const navigateEvent = new CustomEvent('navigate', {
			detail: event.target.dataset.targetSection
		});

		this.dispatchEvent(navigateEvent);
	}
}
