!function(){"use strict";angular.module("formioSalesQuoteApp",["formio","ngFormioHelper","ui.router","ngMap","bgf.paginateAnything"]).config(["FormioProvider","FormioResourceProvider","FormioAuthProvider","$stateProvider","$urlRouterProvider","AppConfig",function(o,t,r,e,i,s){o.setAppUrl(s.appUrl),o.setBaseUrl(s.apiUrl),r.setStates("auth.login","home"),r.setForceAuth(!0),r.register("login","user"),e.state("home",{url:"/?",templateUrl:"views/main.html",controller:["$scope","$rootScope",function(o,t){o.contracts=[],o.contractsUrl=t.contractForm+"/submission",o.customers=[],o.customersUrl=t.customerForm+"/submission",o.opportunities=[],o.opportunitiesUrl=t.opportunityForm+"/submission",o.quotes=[],o.quotesUrl=t.quoteForm+"/submission",o.agents=[],o.agentsUrl=t.agentForm+"/submission",o.unitareas=[],o.unitareasUrl=t.unitareaForm+"/submission"}]}),t.register("contract",s.forms.contractForm,{title:"Lease"}),t.register("customer",s.forms.customerForm,{title:"Tenant"},{templates:{view:"views/customer/view.html"},controllers:{view:["$scope",function(o){o.position={lat:0,lng:0},o.currentResource.loadSubmissionPromise.then(function(t){t.data.address&&t.data.address.geometry&&(o.position=t.data.address.geometry.location)})}]}}),t.register("opportunity",s.forms.opportunityForm,{title:"Inspection"}),t.register("agent",s.forms.agentForm,{title:"Employee"}),t.register("quote",s.forms.quoteForm,{title:"Maintenance Request"}),t.register("unitarea",s.forms.quoteForm,{title:"Area / Unit"}),i.otherwise("/")}]).run(["$rootScope","$state","Formio","FormioAlerts","AppConfig","FormioAuth",function(o,t,r,e,i,s){s.init(),o.company=i.company,angular.forEach(i.forms,function(t,r){o[r]=t})}])}();