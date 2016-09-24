web.controller('cartcontroller', function($scope, $rootScope,  $location, $routeParams, usercart, toaster){
    var data= usercart.getData();
    var item = $routeParams.id;
    console.log(item);
    //console.log(data);

    //$scope.filterData = usercart.getData().find(function(obj){
    //   return obj.id = $routeParams.id;
    //});

    //console.log(" $scope.filterData",  $scope.filterData);
    $scope.increment="images/plus.png";
    $scope.decrement="images/minus.png";

    $scope.cartCount = 1;
    for (var i=0; i < data.length; i++){

        if (data[i].id == item){

            $scope.selecteditem = data[i];
            console.log($scope.selecteditem);

        }


    }
    $scope.cartdec = function(){
        console.log("noor");
        if($scope.cartCount > 1){
            $scope.cartCount=$scope.cartCount-1;
        }
    };


    $scope.addToCart = function(id){
        usercart.addCart(id);
        console.log('cart',$scope.item);
        $rootScope.totalCartLength = usercart.totalCart.length;
    };

    $scope.pop = function(){
        toaster.success("Cart", "Your Cart has been inserted ", "text");
    };

});