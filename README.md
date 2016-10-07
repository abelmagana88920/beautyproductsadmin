# `cdi-angular-spa`

## Introduction

> Single page application boilerplate using angularjs and bootstrap css.

> git clone https://github.com/jettcalleja/cdi-angular-spa.git

## Code Samples

### Change css class
1. To add or change background-color use color name as class.
2. Add or change text-color use text- plus color name. 


```html
<div class="blue">
	<p class="text-white">Hello World!</p>
</div>
```

### Sample controller
sample-ctrl.js
```sh
;(function (){
    'use strict';

    angular
        .module('app') 
        .controller('SampleCtrl', SampleCtrl);

    SampleCtrl.$inject = ['SampleService'];

    function SampleCtrl (SampleService) {
        var vm = this;
        //insert controller contents here
        vm.greetings = "Hello World!";
       }
})();
```


## Installation

> 1. Clone or download this repository. 
2. Navigate to the repository's assets folder and run bower install.
# beautyproductsadmin
