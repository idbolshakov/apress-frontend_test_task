
'use strict';

(function () {
    const URL_UPLOAD = 'https://echo.htmlacademy.ru';

    window.upload = function (data, onSuccess, onError) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function () {
        onSuccess(xhr.response);
        });

        xhr.addEventListener('error', function () {
        onError();
        });

        xhr.addEventListener('timeout', function () {
        onError();
        });

        xhr.timeout = 10000;

        xhr.open('POST', URL_UPLOAD);
        xhr.send(data);
    };
})();