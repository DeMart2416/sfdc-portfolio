import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class PortfolioNavigation extends LightningElement {
	seanProfile = IMAGES + '/images/profile-pictures/sean.jpeg';

	handleLinkClick(event) {
        event.preventDefault();

        const navigateEvent = new CustomEvent('navigate', {
			detail: event.target.dataset.targetSection
		});
        
		this.dispatchEvent(navigateEvent);
	}
}
