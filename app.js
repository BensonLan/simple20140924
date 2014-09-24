/**
 * Created by YINGCHIEH on 9/5/2014.
 */


var appConstractor =function()
{
    var app= angular.module('appModule',['appFactoryModule','grandsys.directive']);
    app.controller('appController',function($scope,appFactoryService)
    {
        var employeeClass = function (name, organization) {
            this.name = name;
            this.org = organization;
        }

        //假設: 公司全部的員工 如下
        var benson = new employeeClass('Benson', 'rd1');
        var cindy = new employeeClass('Cindy', 'rd3');
        var pei = new employeeClass('Pei', 'rd1');
        var san = new employeeClass('San', 'CIS');
        var amber = new employeeClass('Amber', '客服部');
        $scope.testParent="Parent";
        $scope.employees = [
            benson,
            cindy,
            pei,
            san,
            amber
        ];



    })

}();

