/**
 * Created by YINGCHIEH on 9/5/2014.
 */
var appFactoryConstractor =function()
{
    var app= angular.module('appFactoryModule',[])
    .factory('appFactoryService',function($q)
    {
            return {
                getBensonResult:function(age)
                {
                    var deferred = $q.defer();
                    if(age===29)
                    {
                        deferred.resolve("OK")
                    }
                    else
                    {
                        deferred.reject("NO")
                    }
                    return deferred.promise;
                }
            }
    })

}();

