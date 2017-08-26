import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import index from '../pages/nav/index.vue';

import food from '../pages/nav/food/food';
import detail from '../pages/nav/food/detail';
import shoppingCar from '../pages/nav/food/shoppingCar'
import close from '../pages/nav/food/close';
import address from '../pages/nav/food/address';
import newAddress from '../pages/nav/food/newAddress';
import item from '../pages/nav/food/item';


import privates from '../pages/nav/privates.vue';


import my from '../pages/nav/my.vue';

import health from '../pages/nav/my/health/health.vue';

import information from '../pages/nav/my/health/information.vue';

import examination from '../pages/nav/my/health/examination.vue';

import noTests from '../pages/nav/my/health/noTests.vue';

import btnEasy from '../pages/nav/my/health/noTests/btnEasy.vue';

import btnSpecialty from '../pages/nav/my/health/noTests/btnSpecialty.vue';

import family from '../pages/nav/my/family/family.vue';

import people from '../pages/nav/my/family/people.vue';

import father from '../pages/nav/my/family/father.vue';

import mother from '../pages/nav/my/family/mother.vue';

import disease from '../pages/nav/my/family/disease.vue';

import login from '../pages/nav/my/account/login'
import regist from '../pages/nav/my/account/regist'
import forget from '../pages/nav/my/account/forget'
import reset from '../pages/nav/my/account/reset'
import bill from '../pages/nav/my/bill/bill'



//首页

import Test from '../pages/nav/home/test.vue';
import Recipe from '../pages/nav/home/recipe.vue';
import Case from '../pages/nav/home/case.vue';
import testNext from '../pages/nav/home/testNext.vue';
import result from '../pages/nav/home/result.vue';
import before from '../pages/nav/home/before.vue';

//私人定制
import privatesss from '../pages/nav/privates.vue';



import symptom from '../pages/nav/symptom.vue';

import data from '../pages/nav/data.vue';


export default new Router({
  routes: [
  
  	{
  		path:'/',
  		name:'before',
  		component:before
  	},
    {
      path: '/index',
      name: 'index',
//	    redirect: '/index',
      component: index
    },
    				
		    		{
			      	path:'/test',
			      	name:'test',
			      	component:Test
		      	},
	      		{
		      	path:'/test/testNext',
		      	name:'testNext',
		      	component:testNext
	      		},
	      				{
		      	path:'/test/testNext/result',
		      	name:'result',
		      	component:result
	      		},
	      		
	      	{
		      	path:'/recipe',
		      	name:'recipe',
		      	component:Recipe
	      	},
	      	{
		      	path:'/case',
		      	name:'case',
		      	component:Case
	      	},
    
    
    {
      path: '/food',
      name: 'food',
      component: food,
     },
     {
  		path:'/food/detail',
  		name:'detail',
  		component:detail
     },
    {
      path: '/privates',
      name: 'privates',
      component: privates
    },
     {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/my/health',
      name: 'health',
      component: health
    },
    {
      path: '/my/health/information',
      name: 'information',
      component: information
    },
    {
      path: '/my/health/examination',
      name: 'examination',
      component: examination,
      
    },
    {
      path: '/my/health/noTests',
      name: 'noTests',
      component: noTests
    },
    {
      path: '/my/health/noTests/btnEasy',
      name: 'btnEasy',
      component: btnEasy
    },
    {
      path: '/my/health/noTests/btnSpecialty',
      name: 'btnSpecialty',
      component: btnSpecialty
    },
     {
      path: '/my/family',
      name: 'family',
      component: family
      
    },
     { 
      path:'/my/family/people',
      name:'people',
      component:people
    },
    { 
      path:'/my/family/people/father',
      name:'father',
      component:father
    },
    { 
      path:'/my/family/people/father/disease',
      name:'disease',
      component:disease
    },
    { 
      path:'/my/family/people/mother',
      name:'mother',
      component:mother
    },
    {
      path: '/my/account/login',
      name: 'login',
      component: login
    },
       {
      path: '/my/account/regist',
      name: 'regist',
      component: regist
    },
     {
      path: '/my/account/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/my/account/reset',
      name: 'reset',
      component: reset
    },
     {
      path: '/my/bill/bill',
      name: 'bill',
      component: bill
    },
     
    {
    	path:'/shoppingCar',
    	name:'shoppingCar',
    	component:shoppingCar
    },
    {
    	path:'/shoppingCar/close',
    	name:'close',
    	component:close
    },
    {
    	path:'/close/address',
    	name:'address',
    	component:address
    },
    {
    	path:'/address/newAddress',
    	name:'newAddress',
    	component:newAddress
    },
    {
    	path:'/close/item',
    	name:'item',
    	component:item
    },
    {
      path: '/privates',
      name: 'privates',
      component: privatesss
    },
     {
      path: '/symptom',
      name: 'symptom',
      component: symptom
    },
     {
      path: '/data',
      name: 'data',
      component: data
    }
  ]
});
