var app = angular.module("app", []);

app.controller("MyController", function ($scope,$timeout) {
 	
 	$scope.todos = [];
 
 	//  variable for editTodo method
 	$scope.editIndex = "";

 	//=============== todo  methods ===========================
 	$scope.addTodo = function (text) {
 		

 		if (event.keyCode === 13) {

 			if (!text) {
 				return ;
 			}   else if ($scope.editIndex) {
 			  		$scope.todos.splice($scope.editIndex, 1, {text: text, done: false, edit : false});
 			  		$scope.text = null;
 			  		$scope.editIndex = "";
 			  		$scope.editText = "";
 			  		
 			  	} else { 
				$scope.todos.push({text: text, done: false, edit : false});
 				$scope.text = null;
 				  }
 		}	
 	};

 	$scope.editTodo = function (text) {
 		
 		if ($scope.editIndex) {
 			todo.edit = false;
 			$scope.editIndex = "";
 			$scope.editText = "";
 		}

 		$scope.editText = text;
 		this.todo.edit = typeof this.$index.toString();
 		$scope.editIndex =this.$index.toString();
 	};

 	$scope.deleteTodo = function () {
 	    $scope.todos.splice(this.$index,1);
 	};

 	$scope.doneTodo = function () {
    	if (this.$parent.todo.done === false) {
    		this.$parent.todo.done = true;
    		this.__proto__.doneText= "line-through";
    	} else {
			this.$parent.todo.done = false;
			this.__proto__.doneText= "";
    	}
 	};

 	$scope.escapeTodo = function (text) {
		if (!text) {
			this.todo.edit = false;
 			$scope.editIndex = "";
 			$scope.editText = "";
			return;
 			} else if ($scope.editIndex) {
 			  		$scope.todos.splice($scope.editIndex, 1, {text: text, done: false, edit : false});
 			  		$scope.editIndex = "";
 			  		$scope.editText = "";

			}
 	};

 	//================Show / hide buttons methods ============
 	// variable for show/hide methods
 	$scope.showButton = false;

 	$scope.hideButtons = function () {
 			this.showButton = false;
 	};

 	$scope.showButtons = function () {
 			this.showButton = true;
 	};

    //================ add/remove class of buttons methods ==============
 	$scope.addDeleteButtonClass = function () {
 			this.deleteButtonClass= "more-red";
 	};
   
	$scope.removeDeleteButtonClass = function () {
 			this.deleteButtonClass = "";
 	};   

 	$scope.addDoneButtonClass = function () {
 			this.doneButtonClass= "more-green";
 	};
   
	$scope.removeDoneButtonClass = function () {
 			this.doneButtonClass = "";
 	};   

 	//========================================================
});



