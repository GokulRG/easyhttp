const http = new EasyHTTP();

//Get Users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

//User data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@doemail.com'
};

//Create Post
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//Update Post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//Delete Post
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(() => console.log('Resource Deleted...'))
    .catch(err => console.log(err));