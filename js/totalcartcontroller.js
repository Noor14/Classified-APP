web.controller('totalcartcontroller', function($scope, usercart, $rootScope, toaster){
   $scope.allItems = usercart.getData();
   $scope.selectedCart = usercart.totalCart;

    console.log("mmmf",$scope.selectedCart.length);
    $scope.UserSelectedCart=[];
    for(var x=0; x < $scope.allItems.length; x++ ){

        for(var y=0; y < $scope.selectedCart.length; y++ ){
            if($scope.allItems[x].id == $scope.selectedCart[y]){

                $scope.UserSelectedCart.push($scope.allItems[x]);
                console.log("mggg",$scope.UserSelectedCart);

            }
        }
    }

$scope.removeCart= function(index){
    usercart.totalCart.splice(index, 1);
    $scope.UserSelectedCart.splice(index, 1);
    $rootScope.totalCartLength = usercart.totalCart.length;


    };
    $scope.pop = function(){
        toaster.success("Cart", "Your Cart has been Deleted ", "text");
    };

});
