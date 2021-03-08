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
        $('#adobe-sign-code').text(code);
        $('#adobe-sign-ap').text(ap);
    });
});
