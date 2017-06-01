'use strict';

app.factory('getBookFactory', ($q, $http) => {

    let getBooks = () => {

        return $q ((resolve, reject) => {
            $http.get('../data/books.json')

            .then((data) => {
                console.log('the dats', data);
                resolve(data);
            })

            .catch((error) => {
                reject(error);
            });
        });
    };
    return {getBooks};
});