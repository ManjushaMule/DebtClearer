'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('DebtClearer', ['ngRoute', 'ui.router'])
  .config(function ($stateProvider,$urlRouterProvider,$routeProvider) {
   $urlRouterProvider.when("", "/login");
    $urlRouterProvider.when("/", "/login");
    $urlRouterProvider.otherwise("/login");
    $stateProvider
      .state('login', {
            url: '/login',
            views: {

          "MainView" : { templateUrl: 'views/login.html'
                            //controller: 'showBalanceCtrl'
                          }//, 
           
           }
            
        })

        

        .state('dashboard', {
            url: '/dashboard/Trips',
            views: {

              "header" : { templateUrl: 'views/header.html'
                            //controller: 'showBalanceCtrl'
                          }, 
             "MainView" : { templateUrl: 'views/trip_list.html',
                            controller: 'TripListCreationCtrl'
                          }//, 
           
           }
            
        })
        .state('All-Debts', {
            url: '/dashboard/All-Debts',
            views: {

              "header" : { templateUrl: 'views/header.html'
                            //controller: 'showBalanceCtrl'
                          }, 
             "MainView" : { templateUrl: 'views/all-debts.html'
                            //controller: 'showBalanceCtrl'
                          }//, 
           
           }
            
        });
      $urlRouterProvider.otherwise('/login');

      /*
        .state('income', {
            url: '/income',
            views: {

          "balanceView" : { templateUrl: 'views/balance.html',
                            controller: 'showBalanceCtrl'
                          }, 
           "formView": {templateUrl: 'views/incomeForm.html',
                        controller: 'IncomeCtrl'
                        },
            "displayView": { templateUrl: 'views/income.html',
                              controller: 'showIncomeCtrl'
                           }
           }
            
        })
         
        .state('expense', {
            url: '/expense',
             views: {

              "balanceView" : { templateUrl: 'views/balance.html',
                                controller: 'showBalanceCtrl'
                              }, 
              "formView": { templateUrl: 'views/expenseForm.html',
                           controller: 'ExpenseCtrl'
                          },
            "displayView": { templateUrl: 'views/expense.html',
                              controller: 'showExpenseCtrl'
                           }
           }
        });



    $urlRouterProvider.otherwise('/login');
*/
})

/*
.config(function ($provide) {
  $provide.provider("Balance", function () {
    return {
      $get: function () {
        return {
          total: {
                  income : 0,
                  expense : 0,
                  balance : 0 
                 }
        };
      }
    };
  });
})*/