public with sharing class AccController {
    @AuraEnabled(cacheable=true)
    public static List<Account> accList(){
        return [SELECT Id,Name FROM Account WITH SECURITY_ENFORCED LIMIT 5];
    }
}