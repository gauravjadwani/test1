
const axios = require('axios');

axios.get('https://reactjs.org/docs/hooks-rules.html').then(function(da){
    console.log('da',da)
}).catch(function(){
    console.log('fe')
})