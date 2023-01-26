import { LightningElement } from 'lwc';
import PNG from '@salesforce/resourceUrl/png';

export default class PortfolioLead extends LightningElement {
    trailhead = PNG + '/png/trailhead2-ico.png';
    linkedin = PNG + '/png/linkedin-ico.png';
    github = PNG + '/png/github-ico.png';
    twitter = PNG + '/png/twitter-ico.png';
    instagram = PNG + '/png/insta-ico.png';

    socials = [
		{ Id: 1, Name: 'Trailhead', src: this.trailhead, url: 'https://trailblazer.me/id/sdesmarteau'},
		{ Id: 2, Name: 'LinkedIn', src: this.linkedin, url: 'https://www.linkedin.com/in/seandesmarteau'},
		{ Id: 3, Name: 'Github', src: this.github, url: 'https://github.com/DeMart2416'},
		{ Id: 4, Name: 'Twitter', src: this.twitter, url: 'https://twitter.com/DeMart2416'},
		{ Id: 5, Name: 'Instagram', src: this.instagram, url: 'https://www.instagram.com/demart2416'}
	];
}