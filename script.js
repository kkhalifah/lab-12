
var app= angular.module("ourModule", []);

app.controller("ourController", function($scope){

    $scope.toDoList=['Laundry', 'Dishes', 'Compost', 'Pull Weeds', 'Plant Flowers'];
    $scope.addToDo = function(newToDo){
      //  console.log(newToDo);
        $scope.toDoList.push(newToDo)
    //    console.log($scope.toDoList);

      }
      $scope.removeItem = function (toDo) {
        var index = $scope.toDoList.indexOf(toDo);
        $scope.toDoList.splice(index, 1);
    }
    });
    // $scope.products = ["Milk", "Bread", "Cheese", "Beer"];
    //     $scope.addItem = function () {
    //         $scope.products.push($scope.addMe);
    //     }
    //     $scope.removeItem = function (x) {
    //         $scope.products.splice(x, 1);
    //     }
    // });
