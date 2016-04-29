
var table_body;
function lastByte(ip) {

/*    var lastFour;
    $.getJSON("http://ip-api.com/json/"+ip+"?callback=?", function(data) {
        lastFour = data.as;
    });
    */
    var asn = "http://ip-api.com/json/" + ip + "?callback=?";
    var ipas = "http://ip-api.com/json/" + ip + "";

    var x;
 /*   var xy = $.getJSON(asn, function (data) {
       table_body = data.as;
       $("#GeoResults").html(table_body);
       //$("#node").html(table_body);
       //console.log("asn=", table_body);
        x= data;
        //return table_body;
    });

    var ipas = "http://ip-api.com/json/" + ip + "";

    
        JQuery.getJSON(ipas, function (data) {
            table_body = data.as;
            $("#GeoResults").html(table_body);
            $("#node").html(table_body);
            console.log("asn=", table_body);
            x = data.as;
            return table_body;
        });
    

    $.when(test()).then(function (data) {
        console.log("SEE",data.as);
    });

    */
    function getJson(url) {
        return JSON.parse($.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            global: false,
            async: false,
        success: function (data) {
                
                console.log("data=====", data);
                return data;

            }
        }).responseText);
    }

    var myJsonObj = getJson(ipas);
    var res = myJsonObj.as;
    var s = res.split(" ");
    console.log("myJsonObj", res);
    console.log("myJsonObj", s[0]);
    //console.log("myJsonObj", myJsonObj.as);


    //var globalJsonVar;
    //$.getJSON(asn,callbackFuncWithData);
    //function callbackFuncWithData(data) {
    //    globalJsonVar = data;
    //}
 /*  $.getJSON("http://ip-api.com/json/213.171.160.1?callback=?", function (data) {
       table_body = data.as.slice(2, 6);
       $("#GeoResults1").html(table_body);
   });
   $.getJSON("http://ip-api.com/json/151.6.57.193?callback=?", function (data) {
       table_body = data.as.slice(2, 6);
       $("#GeoResults2").html(table_body);
   });
   $.getJSON("http://ip-api.com/json/151.5.170.57?callback=?", function (data) {
       table_body = data.as.slice(2, 6);
       $("#GeoResults3").html(table_body);
   });
   $.getJSON("http://ip-api.com/json/151.6.0.166?callback=?", function (data) {
       table_body = data.as.slice(2, 6);
       $("#GeoResults4").html(table_body);
   });
   $.getJSON("http://ip-api.com/json/89.149.180.30?callback=?", function (data) {
       table_body = data.as.slice(2, 6);
       $("#GeoResults5").html(table_body);
   });*/
/*    var lastFour = ip.slice(-4);
    if (lastFour.indexOf(".") == 0) { return lastFour}
    if (lastFour.indexOf(".") == 1) { return lastFour.slice(-3) }
    if (lastFour.indexOf(".") == 2) { return lastFour.slice(-2)}*/
    //var res = table_body.split(" ");
    var ree = 0
    console.log("THIS=",ree);
   //return res[0];
    return s[0]+" "+s[1]+" "+s[2];
}

function removeTrailingSlash(url) {
    return url.replace(/\/$/, '');
}