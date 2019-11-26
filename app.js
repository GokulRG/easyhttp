//Invoking
const http = new easyHTTP();

//GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (posts, error) { 
    if (error) {
        console.log(error);
    } else {
        console.log(posts);
    }
});

//You'd think this would work.. but no. This is an async request. So we can either use async/await or use promises or use callback functions
//console.log(posts);

//See above for callback implementation. You pass a callback function as an argument, which will be called upon successful retrieval of the result inside easyhttp.

//GET SINGLE POST
http.get('https://jsonplaceholder.typicode.com/posts/1', function (post, error) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

const data = {
    title: 'Gokul Post Updated',
    body: 'This is an updated custom post'
};

//POST Posts --> This obeys the signature in easyhttp.js. So first is url, second is data and third is callback fn.
http.post('https://jsonplaceholder.typicode.com/posts', data, function (post, error) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

//PUT Request to update the same post
http.put('https://jsonplaceholder.typicode.com/posts/100', data, function(post, error) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

//DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (response, error) { 
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});

