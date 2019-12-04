/**
 * EasyHTTP Library
 * Library for Making HTTP Requests
 * 
 * @version 2.0.0
 * @author Gokul Kramnik
 * @license MIT
 */

class EasyHTTP {

    //Make an HTTP GET Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    //Make an HTTP POST Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            //Need to pass in the Request Headers
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    //Make an HTTP PUT Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            //Need to pass in the Request Headers
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    //Make an HTTP DELETE Request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => response.json())
                .then(() => resolve('Resource Deleted'))
                .catch(error => reject(error));
        });
    }

}