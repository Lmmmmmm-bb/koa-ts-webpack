'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
  HttpStatus[(HttpStatus['OK'] = 200)] = 'OK';
  HttpStatus[(HttpStatus['Bad Request'] = 400)] = 'Bad Request';
  HttpStatus[(HttpStatus['Unauthorized'] = 401)] = 'Unauthorized';
  HttpStatus[(HttpStatus['Not Found'] = 404)] = 'Not Found';
  HttpStatus[(HttpStatus['Internal Server Error'] = 500)] =
    'Internal Server Error';
  HttpStatus[(HttpStatus['Not Implemented'] = 501)] = 'Not Implemented';
})((HttpStatus = exports.HttpStatus || (exports.HttpStatus = {})));
