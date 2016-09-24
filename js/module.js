var web = angular.module("module", ["ngRoute","angular.filter","angularUtils.directives.dirPagination","toaster", "ngAnimate"]);
// angular.injector(module, ["angularUtils.directives.dirPagination"]);
 web.config(function($routeProvider, $locationProvider){
 $routeProvider
     .when("/", {

         templateUrl : "carts.html",
         controller : "controller"

  })

     .when("/addcart/:id", {

         templateUrl : "addcart.html",
         controller : "cartcontroller"

     })

     .when("/usercart", {

         templateUrl : "user.html",
         controller : "usercontroller"

     })

     .when("/totalcart", {

         templateUrl : "totalcart.html",
         controller : "totalcartcontroller"

     })

     .otherwise({

         redirectTo : "/"

     });

     //$locationProvider.html5Mode(true);
 });

web.service('usercart', function(){

// var selectcart=[];
// this.selectedcart= function(cart){
//     selectcart.push(cart);
// };
// this.cartitem = function(){
//     return selectcart;
// };

    return {
        totalCart : [],
        addCart: function(id){

            for (var x=0; x < this.totalCart.length; x++){
                if(id == this.totalCart[x]){

                    return ;
                }


            }

            this.totalCart[x]=id;
            //console.log("vvv",x);
        },
        getData: function(){
            return [
                {"id":1, "image":"images/1.jpg", "title":"Bike", "location" : "Karachi", "Price": 59, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":2, "image":"images/2.jpg", "title":"Bike", "location" : "Islamabad", "Price": 58, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":3, "image":"images/3.png", "title":"Book", "location" : "Quetta", "Price": 57, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":4, "image":"images/4.jpg", "title":"Book", "location" : "Lahore", "Price": 51, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":5, "image":"images/2.jpg", "title":"Laptop", "location" : "Karachi", "Price": 52, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":6, "image":"images/1.jpg", "title":"Laptop", "location" : "Rawalpindi", "Price": 53, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":7, "image":"images/3.png", "title":"Watch", "location" : "Dadu", "Price": 54, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":8, "image":"images/4.jpg", "title":"Watch", "location" : "Larkana", "Price": 23, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":9, "image":"images/1.jpg", "title":"Split", "location" : "Malir", "Price": 533, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":10, "image":"images/2.jpg", "title":"Car", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":11, "image":"images/4.jpg", "title":"Car", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":12, "image":"images/3.png", "title":"Book", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":13, "image":"images/1.jpg", "title":"Bike", "location" : "Peshawar", "Price": 59, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":14, "image":"images/2.jpg", "title":"Bike", "location" : "Gulshan", "Price": 58, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":15, "image":"images/3.png", "title":"Book", "location" : "Defence", "Price": 57, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":16, "image":"images/4.jpg", "title":"Book", "location" : "Nazimabad", "Price": 51, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":17, "image":"images/2.jpg", "title":"Laptop", "location" : "Balochistan", "Price": 52, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":18, "image":"images/1.jpg", "title":"Global Light", "location" : "India", "Price": 53, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":19,"image":"images/3.png", "title":"Bear", "location" : "India", "Price": 54, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":20, "image":"images/4.jpg", "title":"Glasses", "location" : "Srilanka", "Price": 23, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":21, "image":"images/1.jpg", "title":"Windows", "location" : "Srilanka", "Price": 533, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":22, "image":"images/2.jpg", "title":"Pots", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":23, "image":"images/4.jpg", "title":"Handfree", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":24, "image":"images/3.png", "title":"Mobile", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},


                {"id":25, "image":"images/1.jpg", "title":"Bike", "location" : "Karachi", "Price": 59, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":26, "image":"images/2.jpg", "title":"Bike", "location" : "Islamabad", "Price": 58, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":27, "image":"images/3.png", "title":"Book", "location" : "Quetta", "Price": 57, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":28, "image":"images/4.jpg", "title":"Book", "location" : "Lahore", "Price": 51, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":29, "image":"images/2.jpg", "title":"Laptop", "location" : "Karachi", "Price": 52, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":30,"image":"images/1.jpg", "title":"Laptop", "location" : "Rawalpindi", "Price": 53, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":31, "image":"images/3.png", "title":"Watch", "location" : "Dadu", "Price": 54, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":32, "image":"images/4.jpg", "title":"Watch", "location" : "Larkana", "Price": 23, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":33, "image":"images/1.jpg", "title":"Split", "location" : "Malir", "Price": 533, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":34, "image":"images/2.jpg", "title":"Car", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":35, "image":"images/4.jpg", "title":"Car", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":36, "image":"images/3.png", "title":"Book", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":37, "image":"images/1.jpg", "title":"Bike", "location" : "Peshawar", "Price": 59, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":38, "image":"images/2.jpg", "title":"Bike", "location" : "Gulshan", "Price": 58, "detail": " It is amazing i want to sale it very cheep rate"},

                {"id":39, "image":"images/3.png", "title":"Book", "location" : "Defence", "Price": 57, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":40, "image":"images/4.jpg", "title":"Book", "location" : "Nazimabad", "Price": 51, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":41, "image":"images/2.jpg", "title":"Laptop", "location" : "Balochistan", "Price": 52, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":42, "image":"images/1.jpg", "title":"Global Light", "location" : "India", "Price": 53, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":43, "image":"images/3.png", "title":"Bear", "location" : "India", "Price": 54, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":44, "image":"images/4.jpg", "title":"Glasses", "location" : "Srilanka", "Price": 23, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":45, "image":"images/1.jpg", "title":"Windows", "location" : "Srilanka", "Price": 533, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":46, "image":"images/2.jpg", "title":"Pots", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":47, "image":"images/4.jpg", "title":"Handfree", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"},
                {"id":48, "image":"images/3.png", "title":"Mobile", "location" : "saddar", "Price": 31, "detail": " It is amazing i want to sale it very cheep rate"}



            ];
        }


    }






});