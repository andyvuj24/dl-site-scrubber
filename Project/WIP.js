// ==UserScript==
// @name         SiteScrubber - UploadShip.com
// @namespace    SiteScrubber
// @version      1.0
// @description  Scrub site of ugliness and ease the process of downloading from UploadShip.com
// @author       PrimePlaya24
// @icon         https://raw.githubusercontent.com/PrimePlaya24/dl-site-scrubber/master/icons/UploadShip.com_favicon.png
// @homepageURL  https://github.com/PrimePlaya24/dl-site-scrubber
// @supportURL   https://github.com/PrimePlaya24/dl-site-scrubber/issues
// @updateURL    https://raw.githubusercontent.com/PrimePlaya24/dl-site-scrubber/master/scripts/SiteScrubber-UploadShip.com.meta.js
// @downloadURL  https://raw.githubusercontent.com/PrimePlaya24/dl-site-scrubber/master/scripts/SiteScrubber-UploadShip.com.user.js
// @match        https://www.uploadship.com/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const site = '<main id=\"ss_root\" class=\"container\"> <script src=\"https://code.jquery.com/jquery-3.5.1.min.js\" integrity=\"sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=\" crossorigin=\"anonymous\"></script> <link href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\"> <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\" integrity=\"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\" crossorigin=\"anonymous\"></script> <style>html{background-color: #090909 !important;}body{background-color: #090909 !important; color: #dddddd !important;}h1{font-size: min(5vh, 50px) !important;}h4{font-size: min(2vh, 25px) !important; color: #787878 !important;}#header{background-color: #323232 !important; padding: 4vh 4vh 4vh 4vh !important; margin-top: 2% !important; border-radius: 5%/25% !important;}#dl_box{background-color: #232323 !important; margin-top: 25px !important; border-radius: 50px !important;}#dl_button{background: #3949ab !important; border-radius: 10px !important; padding: min(20px, 2vh) 45px !important; color: #dbe0ff !important; display: inline-block !important; font: normal bold min(4vh, 50px) \"Calibri\", sans-serif !important; text-align: center !important; margin: 40px 0 20px 0 !important;}#dl_button:hover{transition: all 0.3s ease !important; transform: scale(1.025) !important; background: #283593 !important; color: #cecece !important;}.container{border-radius: 50px !important;}table.darkTable{font-family: \"Arial Black\", Gadget, sans-serif; border: 2px solid #000000; background-color: #2D2D2D; width: 100%; height: 200px; text-align: center; border-collapse: collapse;}table.darkTable td, table.darkTable th{border: 1px solid #4A4A4A; padding: 3px 2px;}table.darkTable tbody td{font-size: min(4vh, 14px); color: #E6E6E6;}table.darkTable tr:nth-child(even){background: #565656;}#filename{font-size: min(5vh, 32px) !important; color: #d7ddff !important; background-color: #141936; border-radius: 12px; padding: 8px;}</style> <div id=\"header\" class=\"row justify-content-center\"> <h1 class=\"col-12 text-center\">SiteScrubber - Clean Page</h1> <h4>Download your file clean and safely.</h4> </div><div id=\"dl_box\" class=\"row justify-content-center\"> <div class=\"col-md-12 text-center mt-5 mb-3\"> <span class=\"display-5\" id=\"filename\">File Name Here...</span> </div><div class=\"col-8 text-center mt-3 mb-3\"> <table class=\"darkTable\"> <tbody> </tbody> </table> </div><div id=\"add_here\" class=\"col-12 text-center\"></div><div class=\"col-12 text-center mt-3\"> <button id=\"dl_button\">Continue</button> </div></div><script>$(\"#dl_button\").on(\"click\", function (){$(\"form\").submit();}); </script></main>';

    const file_info_list = {" uploaded on :": 'p', " uploaded by :": 'p', " size :":'p', " downloaded :":'p'};

    function file_info(elem, text) {
        var output = $(elem).filter(function(){ return $(this).text().toLowerCase().includes(text);});
        if (output) {
            return output.text();
        } else {
            return null;
        }
    }

    function cleaner() {
        try {
            if (grecaptcha) {
                var isCaptchaChecked = (grecaptcha && grecaptcha.getResponse().length !== 0);
            }
        } catch (err) {
        }
        $("div.cc-banner").remove();
        $("body>div").filter('[id]').remove();
        var scripts = $("script");
        for (var l = 0; l < scripts.length; l++) {
            if (!scripts[l].src.includes("google") && !scripts[l].src.includes("gstatic")) { 
                scripts[l].remove();
            }
        }
    }



    $(document).ready(function() {
        
        // variable the timer on the page uses
        //seconds = 0;
        $('body').prepend($(site))
        $('#filename').html($("small").filter(function() { return $(this).text().toLowerCase().includes(".apk"); }).text());
        for (var key in file_info_list) {
            var info = file_info(file_info_list[key], key.toLowerCase());
            if (info) {
                var markup = "<tr><td>" + info + "</td></tr>";
                $("table.darkTable tbody").append(markup);
            }
        }

        $("div#add_here").append($('form').has(".g-recaptcha"));
        $('body').children().not($("main")).remove();
        setInterval(cleaner, 500);



        /*

        setInterval(function() {
            $("body > div > iframe").parent().remove();
            $(".cc-window").remove();
        }, 500);

        // styling
        $("body").css("background-color", "#121212");
        $("html").css("background-color", "#121212");
        $("body").css("color", "white");


        $("nav").remove();
        $("style").remove();
        $("noscript").remove();

        document.querySelector("body > div.pages").remove();
        $("div.file-box").remove();
        if ($("div > a.btn-go")) {
            // $("body").prepend($("<main class=\"container text-center\"></main>").add($("div > a.btn-go").attr("onclick", "function(){};").css("font-size", "2em").css("margin-top", "25%")));
        }*/


    });
})();