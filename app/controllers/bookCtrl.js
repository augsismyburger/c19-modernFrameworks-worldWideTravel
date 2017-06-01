'use strict';

app.controller('bookCtrl', function($scope, getBookFactory) {
    getBookFactory.getBooks()
    .then((data) => {
        console.log('in the dats', data.data.guides);
        $scope.books = data.data.guides;
    });
});