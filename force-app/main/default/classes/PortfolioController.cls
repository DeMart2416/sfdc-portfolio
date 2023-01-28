public without sharing class PortfolioController {
    
	@AuraEnabled(cacheable=true)
	public static List<Portfolio_Section__c> getPortfolioSections() {
		return [SELECT Id, Name, Description__c, Navigation_Label__c FROM Portfolio_Section__c];
	}
}