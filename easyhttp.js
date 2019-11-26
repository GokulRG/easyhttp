function easyHTTP() {
    //This is actually the xhr object, so remember the past (xhr.open, onload, onerror, send etc)
    this.http = new XMLHttpRequest();
}

//GET Request
easyHTTP.prototype.get = function (url, callback) {
    //open
    this.http.open('GET', url, true);

    //Avoiding problem with this
    let self = this;
    //onload
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(self.http.responseText, null);
        } else {
            callback(null, 'Error : ' + self.http.status);
        }
    };

    this.http.send();
};

//POST Request
easyHTTP.prototype.post = function (url, data, callback) {
    //open
    this.http.open('POST', url, true);

    //Setting Request header -- For post (since we're sending json)
    this.http.setRequestHeader('Content-Type', 'application/json');

    //Avoiding problem with this
    let self = this;

    //onload
    this.http.onload = function () {
        callback(self.http.responseText, null);
    };

    //Send
    this.http.send(JSON.stringify(data));
};

//PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
    //open
    this.http.open('PUT', url, true);

    //Setting Request header
    this.http.setRequestHeader('Content-Type', 'application/json');

    //Avoiding problem with this
    let self = this;

    //onload
    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(self.http.responseText, null);
        } else {
            callback(null, 'Could not PUT data, Error occurred with Status : ' + self.http.status);
        }     
    };

    //Send
    this.http.send(JSON.stringify(data));
};

//DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
    //open
    this.http.open('DELETE', url, true);

    //Avoiding problem with this
    let self = this;
    //onload
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback('Post Deleted', null);
        } else {
            callback(null, 'Error : ' + self.http.status);
        }
    };

    this.http.send();
};