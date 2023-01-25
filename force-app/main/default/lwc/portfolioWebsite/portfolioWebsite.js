import { LightningElement } from 'lwc';

export default class PortfolioWebsite extends LightningElement {
    handleClick(event) {
        let targetId = event.target.dataset.targetId;
        let target = this.template.querySelector(`[data-id="${targetId}"]`);
        target.scrollIntoView();
      }

    sectionSelected(event) {
        const targetId = event.detail;

        console.log('targetId :: ' + targetId);
        
        let target = this.template.querySelector(`[data-id="${targetId}"]`);
        target.scrollIntoView();
    }
}