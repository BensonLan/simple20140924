var grandsysConstractor = function () {
    var app = angular.module('grandsys.directive', ['appFactoryModule']);


    app.directive("itemselector", function ($compile) {
        return {
            restrict: "E",
            transclude: true,
            scope: {datasource: '='},
            template:
                '<ul>' +
                    '<li ng-repeat="dataItem in datasource">' +
                        '<div ng-transclude></div>' +
                    '</li>' +
                '</ul>',
            compile: function (tElement, tAttr, transclude) {
                //將原本itemselector的template  dom結構清空
                //tElement.contents() 表示子元素內容
                //tElement.contents().remove() 把子元素從 父類移除 並返回移除元素
                var contents = tElement.contents().remove();
                var compiledContents;

                return function (scope, iElement, iAttr) {
                    if (!compiledContents) {
                        //重新建立 dom結構，傳入contents(原本的子元素)與transclude元素， 返回 transcludeFn
                        compiledContents = $compile(contents, transclude);
                    }
                    //定義transclude 與dirctive 為同一個scope，並將 transclude html code的子元素建立於父類dom內
                    compiledContents(scope, function (clonedom, scope) {
                        iElement.append(clonedom);
                        console.log('itemselector');
                        console.log(iElement[0].outerHTML);
                    });
                };
            }
        };
    });


    app.directive("itemtemplate", function ($compile) {
        return {
            restrict: "E",
            transclude: true,
            template: '<div ng-transclude></div>',
            compile: function (tElement, tAttr, transclude) {
                var contents = tElement.contents().remove();
                var compiledContents;
                return function (scope, iElement, iAttr) {
                    if (!compiledContents) {
                        compiledContents = $compile(contents, transclude);
                    }
                    compiledContents(scope, function (clone, scope) {
                        iElement.append(clone);

                    });
                };
            }
        };
    });



}();

