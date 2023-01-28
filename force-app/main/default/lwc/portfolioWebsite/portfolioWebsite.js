import { LightningElement, wire } from 'lwc';
import getPortfolioSections from '@salesforce/apex/PortfolioController.getPortfolioSections';

export default class PortfolioWebsite extends LightningElement {
	sections;
	error;

	// Sections
	about;
	experience;
    project;
	contact;

	@wire(getPortfolioSections)
	wiredSections({ error, data }) {
		if (data) {
			this.error = undefined;

			for (let i = 0; i < data.length; i++) {
				switch (data[i].Name) {
					case 'About Me':
						this.about = data[i];
						break;
					case 'Experience':
						this.experience = data[i];
						break;
					case 'Contact':
						this.contact = data[i];
						break;
					default:
					// code block
				}
			}
		} else if (error) {
            this.error = 'Unknown error';
            if (Array.isArray(error.body)) {
                this.error = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                this.error = error.body.message;
            }

            console.log("ERROR :: " + this.error);
			this.sections = undefined;
		}
	}

	handleClick(event) {
		let targetId = event.target.dataset.targetId;
		let target = this.template.querySelector(`[data-id="${targetId}"]`);
		target.scrollIntoView({behavior: "smooth"})
	}

	sectionSelected(event) {
		const targetId = event.detail;

		let target = this.template.querySelector(`[data-id="${targetId}"]`);
		target.scrollIntoView({behavior: "smooth"})
	}
}
