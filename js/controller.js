web.controller("controller", function($scope, $rootScope, usercart, $location){


$scope.navigation = ['Category', 'Location :', 'Price : ', 'Search '];
$scope.submenu = ['Computer Accessories', 'Car', 'Bike', 'Laptop', 'Split', 'Book', 'Watch'];
$scope.option={selected : ""};

	$scope.carts = usercart.getData();
	$rootScope.totalCartLength = usercart.totalCart.length;

// $scope.slocation=[];


//$scope.carts=[
//{"image":"images/1.jpg", "title":"Bike", "location" : "Karachi", "Price": 59, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Bike", "location" : "Islamabad", "Price": 58, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Book", "location" : "Quetta", "Price": 57, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Book", "location" : "Lahore", "Price": 51, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Laptop", "location" : "Karachi", "Price": 52, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/1.jpg", "title":"Laptop", "location" : "Rawalpindi", "Price": 53, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Watch", "location" : "Dadu", "Price": 54, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Watch", "location" : "Larkana", "Price": 23, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/1.jpg", "title":"Split", "location" : "Malir", "Price": 533, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Car", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Car", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Book", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/1.jpg", "title":"Bike", "location" : "Peshawar", "Price": 59, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Bike", "location" : "Gulshan", "Price": 58, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Book", "location" : "Defence", "Price": 57, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Book", "location" : "Nazimabad", "Price": 51, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Laptop", "location" : "Balochistan", "Price": 52, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/1.jpg", "title":"Global Light", "location" : "India", "Price": 53, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Bear", "location" : "India", "Price": 54, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Glasses", "location" : "Srilanka", "Price": 23, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/1.jpg", "title":"Windows", "location" : "Srilanka", "Price": 533, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Pots", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Handfree", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Mobile", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
//
//
//{"image":"images/1.jpg", "title":"Bike", "location" : "Karachi", "Price": 59, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Bike", "location" : "Islamabad", "Price": 58, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Book", "location" : "Quetta", "Price": 57, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Book", "location" : "Lahore", "Price": 51, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Laptop", "location" : "Karachi", "Price": 52, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/1.jpg", "title":"Laptop", "location" : "Rawalpindi", "Price": 53, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Watch", "location" : "Dadu", "Price": 54, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Watch", "location" : "Larkana", "Price": 23, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/1.jpg", "title":"Split", "location" : "Malir", "Price": 533, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Car", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Car", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Book", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/1.jpg", "title":"Bike", "location" : "Peshawar", "Price": 59, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Bike", "location" : "Gulshan", "Price": 58, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Book", "location" : "Defence", "Price": 57, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Book", "location" : "Nazimabad", "Price": 51, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Laptop", "location" : "Balochistan", "Price": 52, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/1.jpg", "title":"Global Light", "location" : "India", "Price": 53, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Bear", "location" : "India", "Price": 54, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Glasses", "location" : "Srilanka", "Price": 23, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/1.jpg", "title":"Windows", "location" : "Srilanka", "Price": 533, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/2.jpg", "title":"Pots", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/4.jpg", "title":"Handfree", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
//{"image":"images/3.png", "title":"Mobile", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"}
//
//
//
//];

// angular.forEach($scope.carts, function(value,index){
// $scope.slocation.push(value.location);
// console.log($scope.slocation);



// });


$scope.addcart = function(cart){
// usercart.selectedcart(cart);
	$location.path("/addcart/"+cart.id);
    console.log(cart.id);

};





$scope.getcssclass=function(index){
	// console.log("Noor");
	return "list"+index;
};






$scope.insert = function(){

$scope.carts.push({"image": $scope.image, "title": $scope.option.selected, "Price": $scope.amount, "location": $scope.city, "detail": $scope.cartdetail, "phoneno": $scope.phone  });
console.log($scope.option.selected);
console.log($scope.carts);
$scope.image="";
$scope.option.selected="";
$scope.amount="";
$scope.city="";
$scope.cartdetail="";
$scope.phone="";

console.log("data successfully enter");



};







});