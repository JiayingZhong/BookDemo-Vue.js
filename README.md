# Spring Boot + Vue + ElementUI
---

## 1. Cross-domain problem 
On back end side: 
Define a configuration class --> implement WebMvcConfigurer --> override the addCorsMappings method

## 2. Axios 
use `vue add axios` to install 
Error: 'options' is defined but never used no-unused-vars
Solution: 
```
// eslint-disable-next-line no-unused-vars,no-undef
axios.get('http://localhost:8181/book/findAll').then(function (resp){
    console.log(resp);
});
```
## 3. install plugins 
1. install `vue-cli-plugin-element` in `vue ui` page
2. use `npm install element-ui` to import dependency

---
### Version
SpringBoot 2.3.2
Vue-cli 3.0