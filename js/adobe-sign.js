jQuery(function() {

    function getURLParameter(sParam){
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) 
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) 
            {
                return sParameterName[1];
            }
        }
    }

    $(document).ready(function() {
        let code = getURLParameter('code');
        let ap = getURLParameter('api_access_point');
        let error = getURLParameter('error_description');
        console.log(error);
        if (error != "") {
            $('#adobe-sign-error').text(unescape(error));
            $('#adobe-sign-errors').show();
        } else {
            $('#adobe-sign-code').text(code);
            $('#adobe-sign-ap').text(unescape(ap));
            $('#adobe-sign-details').show();
        }
    });
});
