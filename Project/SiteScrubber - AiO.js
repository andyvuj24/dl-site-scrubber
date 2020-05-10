// ==UserScript==
// @name         SiteScrubber - All-in-One
// @namespace    SiteScrubber
// @version      1.0
// @description  Scrub site of ugliness and ease the process of downloading from multiple sites!
// @author       PrimePlaya24
// @icon         https://raw.githubusercontent.com/PrimePlaya24/dl-site-scrubber/master/icons/SiteScrubber-aio_icon.png
// @homepageURL  https://github.com/PrimePlaya24/dl-site-scrubber
// @supportURL   https://github.com/PrimePlaya24/dl-site-scrubber/issues
// @updateURL    https://raw.githubusercontent.com/PrimePlaya24/dl-site-scrubber/master/scripts/SiteScrubber-AIO.meta.js
// @downloadURL  https://raw.githubusercontent.com/PrimePlaya24/dl-site-scrubber/master/scripts/SiteScrubber-AIO.user.js
// @match        https://dropapk.to/*
// @match        https://dropgalaxy.com/*
// @match        https://www.file-up.org/*
// @match        https://mixloads.com/*
// @match        https://up-load.io/download*
// @match        https://upload.ac/*
// @match        https://uploadrar.com/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.href.includes("https://dropapk.to/")) {
        (function() {
            'use strict';


            // styling
            $(document).ready(function() {
                $("div.download_box").css("background-color", "#323232");
                $("body > #container").css("background-color", "#121212");
                $("body").css("background-color", "#121212");
                $("html").css("background-color", "#121212");
                $("body").css("color", "white");
            });

            $(document).ready(function() {
                if ($("#method_free")[0]) {
                    $("#method_free")[0].click();
                }
                // Remove crap
                $(".adsbox").remove();
                $("script").remove();
                $("#content").remove();
                $(".col-md-8").remove();
                $(".col-md-4").addClass("col-md-12");
                $(".col-md-4").removeClass("col-md-4");
                $(".features__section").remove();
                $("nav").remove();
                $("footer").remove();
                $(".payment_methods").remove();
                $("p.mb-5").removeClass("mb-5");

                // Make the remaining elements neat
                $(".download_box").addClass("container");
                $(".download_box > img").css("width", "auto");
                $(".download_box > img").css("height", "40%");

                if ($("img")[0]) {
                    var clean_input = $("<div class=\"input-group mb-3\"></div").add($("<div class=\"input-group-prepend text-center\"></div>").add(($("<span class=\"input-group-text font-weight-bold\">Captcha Code </span>")).append($("input.captcha_code").addClass("form-control"))));


                    $("div.download_box").prepend($(clean_input));
                    $("div.download_box").prepend($("img").css("height", "8em"));

                    $("#downloadbtn").mouseenter(function () {
                        $(this).data('timeout', setTimeout(function () {
                            $("#downloadbtn")[0].click();
                        }, 2000));
                    }).mouseleave(function () {
                        clearTimeout($(this).data('timeout'));
                    });
                }

                $("table").remove();

                $("a.btn-block").mouseenter(function () {
                    $(this).data('timeout', setTimeout(function () {
                        $("a.btn-block")[0].click();
                    }, 2000));
                }).mouseleave(function () {
                    clearTimeout($(this).data('timeout'));
                });

                setTimeout(function() {
                    $("div.download_box").append($("<div class=\"alert alert-warning mt-5 text-center\">TO PREVENT MALICIOUS REDIRECT, <b>HOVER</b> OVER THE BUTTON FOR 2 SECONDS TO SUBMIT CLEANLY</div>"));
                }, 8000);
            });


        })();
    }
    if (window.location.href.includes("https://dropgalaxy.com/")) {
        (function() {
            'use strict';

            // styling
            $(document).ready(function() {
                $("div.fileInfo").css("background-color", "#323232");
                $("body > #container").css("background-color", "#212121");
                $("body").css("background-color", "#121212");
                $("html").css("background-color", "#121212");
                $("body").css("color", "white");
            });

            function clean_scripts() {
                var scripts = $("script");
                for (var l = 0; l < scripts.length; l++) {
                    if (!scripts[l].src.includes("google") && !scripts[l].src.includes("gstatic")) { // && scripts[l].src != "") {
                        scripts[l].remove();
                    }
                }
            }


            // Modified script to immediately show the download button
            // Original: https://dropgalaxy.com/js/countdown.js


            $(document).ready(function() {
                $('#countdown').each(function(i, e) {
                    var downloadbtn = $(e).parent().find('.downloadbtn');
                    $(downloadbtn).attr('disabled', false);
                    // $(e).fadeOut();
                    $('.downloadbtn').attr('disabled', false);
                });
            });

            // End of modified script

            $(document).ready(function() {
                // Clean up
                clean_scripts();

                $("nav").remove();
                $("#gdpr-cookie-notice").remove();
                $("#warning").remove();
                $(".downloadPage > .col-md-12").remove();
                $(".row > .col-md-8").remove();
                $(".adsbygoogle").remove();
                $(".adsbox").remove();
                $("form > div.mt-5.text-center").remove()
                $("body > div > div.row").addClass("justify-content-center");
                $("body > div > div.row > div.col-md-4.mt-5").removeClass("col-md-4").addClass("col-md-8");
                $("#adblock_check").remove();
                $("#adblock_detected").remove();
                $("footer").remove();
                $("body > div.container.pt-5.page.downloadPage > div > div.col-md-12.py-3").remove();
                $("div.mt-5").removeClass("mt-5");


                // If on the final download page, automatically click the download button for you.
                if ($("h1.text-primary")[0]) {
                    $("a.btn-block")[0].click();
                    $("a.btn-block").mouseenter(function () {
                        $(this).data('timeout', setTimeout(function () {
                            $("a.btn-block")[0].click();
                        }, 2000));
                    }).mouseleave(function () {
                        clearTimeout($(this).data('timeout'));
                    });
                    setTimeout(function() {
                        $("div.container").append($("<div class=\"alert alert-warning mt-5 text-center\">TO PREVENT MALICIOUS REDIRECT, <b>HOVER</b> OVER THE BUTTON FOR 2 SECONDS TO SUBMIT CLEANLY</div>"));
                    }, 5000);
                }

            });
        })();
    }
    if (window.location.href.includes("https://www.file-up.org/")) {
        (function() {
            'use strict';

            window.tick = 4;
            window.submit_form = function submit_form() {
                // clearTimeout(timeout);
                // var remaining = 3;
                var timeout = setTimeout(ticky, 1000);
                function ticky() {
                    var remaining = window.tick - 1;
                    window.tick = remaining;
                    if(remaining <= 0)
                    {
                        $("form[name='F1']")[0].submit();
                    }
                    else
                    {
                        $("#downloadbtn").text("Submitting in: " + remaining.toString());
                        setTimeout(ticky, 1000);
                    }
                }
            }

            // styling
            $(document).ready(function() {
                $("body > section > div > div").css("background-color", "#323232");
                $("body > section").css("background-color", "#212121");
                $("body").css("background-color", "#121212");
                $("html").css("background-color", "#121212");
                $("body").css("color", "white");
            });

            $(document).ready(function() {
                // Clicks the "FREE" method instantly
                if ($("input[name='method_free']")[0]) {
                    $("input[name='method_free']")[0].click();
                }
            });


            $(document).ready(function() {
                if ($("#downloadbtn")[0]) {

                    for (var i = 0; i < $("div").length; i++) {
                        if ($("div")[i].style.cssText == "margin: 10px 0px;") {
                            $($("div")[i]).text("You have to wait for the timer to complete otherwise the server will reject your early request, sadly.")
                            $($("div")[i]).addClass("alert alert-warning");
                        }
                    }

                    $("#downloadbtn").css("font-size", "35px");

                    // $("div.alert.alert-danger").remove(); // Need to show what the user did wrong (i.e. Skipped countdown)
                    $("body > section > div > div.page-wrap > div.text-center").remove();
                    $("body > section > div > div.page-wrap > div.row").remove();
                    $("body > section > div > div.page-wrap > div.leftcol").remove();
                    $("body > section > div > div.page-wrap > form > div:nth-child(8)").remove();
                    $("body > section > div > div.row").remove();
                    $("body > section > div > h1").remove();

                    $("body > section > div > div > form > div > div > div.captcha-wrap").append($("<div class=\"alert alert-warning\">TO PREVENT MALICIOUS REDIRECT, <b>HOVER</b> OVER THE BUTTON FOR 2 SECONDS TO SUBMIT CLEANLY</div>"));

                    $("#downloadbtn").text("HOVER to SUBMIT Safely");

                    $("#downloadbtn").mouseenter(function () {
                        $(this).data('timeout', setTimeout(function () {
                            submit_form();
                        }, 2000));
                    }).mouseleave(function () {
                        clearTimeout($(this).data('timeout'));
                    });
                } else {
                    $("#download-btn").css("font-size", "35px").text("HOVER (2 secs) to DOWNLOAD");
                    $("#download-btn")[0].click();
                    $("#download-btn").mouseenter(function () {
                        $(this).data('timeout', setTimeout(function () {
                            $("#download-btn")[0].click();;
                        }, 2000));
                    }).mouseleave(function () {
                        clearTimeout($(this).data('timeout'));
                    });
                    $("div.blocktxt").remove();
                    $("center").remove();
                    $("body > section > div > div > div:nth-child(5)").remove();
                    // $("div.page-wrap > div.text-center").remove();
                    $("body > section > div > div > div:nth-child(4)").remove();
                }

            });

            setInterval(clean, 250);
            function clean() {
                /*

		Clean function that can be used on any part of the download process

		*/

                // Remove crap not needed
                $("header").remove();
                $(".breaking-news").remove();
                $("footer").remove();
                $("#fb-root").remove();
                $(".page-buffer").remove();
                $("noscript").remove();
                $(".abtlikebox").remove();
                $("ins").remove();
                $(".scrollToTop").remove();
                $("style").remove();
                $("#adblockinfo").remove();
                $("#google_esf").remove();
                $("#bannerad").remove();
                $(".adsbox").remove();
                $("div.blocktxt").remove();


                $('#countdown').each(function(i, e){
                    var downloadbtn = $(e).parent().find('.downloadbtn');
                    $(downloadbtn).attr('disabled', false);
                    $(e).css('visibility', 'visible');
                    $('.downloadbtn').attr('disabled', false);
                    //$(e).find(".seconds").text("0");
                });

                var iframes = $("iframe");
                for (var k = 0; k < iframes.length; k++) {
                    if (!iframes[k].src.includes("google")) {
                        iframes[k].remove();
                    }
                }

                // Remove all scripts that are not from google
                var scripts = $("script");
                for (var s = 0; s < scripts.length; s++) {
                    if (!scripts[s].src.includes("google")) {
                        scripts[s].remove();
                    }
                }

                // Set functions to "undefined" so that they cannot run and cause ads and crap
                window.WOW = undefined
                window.eve = undefined
                window.mina = undefined
                window.Snap = undefined
                window.google_js_reporting_queue = undefined
                window.google_srt = undefined
                window.google_ad_modifications = undefined
                window.google_logging_queue = undefined
                window.ggeac = undefined
                window.google_measure_js_timing = undefined
                window.googleToken = undefined
                window.googleIMState = undefined
                window.processGoogleToken = undefined
                window.google_reactive_ads_global_state = undefined
                window.adsbygoogle = undefined
                window._gfp_a_ = undefined
                window.google_sa_queue = undefined
                window.google_sl_win = undefined
                window.google_process_slots = undefined
                window.google_spfd = undefined
                window.google_sv_map = undefined
                window.google_t12n_vars = undefined
                window._0xbc13 = undefined
                window.zfgformats = undefined
                window.setImmediate = undefined
                window.clearImmediate = undefined
                window._snxze = undefined
                window._gwqjpy = undefined
                window._atrk_opts = undefined
                window._gaq = undefined
                window.zfgproxyhttp = undefined
                window.FB = undefined
                window.Goog_AdSense_getAdAdapterInstance = undefined
                window.Goog_AdSense_OsdAdapter = undefined
                window.google_sa_impl = undefined
                window.google_jobrunner = undefined
                window.google_persistent_state_async = undefined
                window.__google_ad_urls = undefined
                window.google_global_correlator = undefined
                window.__google_ad_urls_id = undefined
                window.google_prev_clients = undefined
                window.gaGlobal = undefined
                window.ampInaboxIframes = undefined
                window.ampInaboxPendingMessages = undefined
                window.google_iframe_oncopy = undefined
                window.google_osd_loaded = undefined
                window.google_onload_fired = undefined
                window._gat = undefined
                window.atrk = undefined
                window._atrk_fired = undefined
                window.Goog_Osd_UnloadAdBlock = undefined
                window.Goog_Osd_UpdateElementToMeasure = undefined
                window.google_osd_amcb = undefined
                window._jged2npg2ir = undefined
                window._n0iqoa4himl = undefined
                window.onClickTrigger = undefined
                window.zfgloadedpopup = undefined
                window.GoogleGcLKhOms = undefined
                window.google_image_requests = undefined
                window.ppuWasShownFor2572202 = undefined
            }


        })();
    }
    if (window.location.href.includes("https://mixloads.com/")) {
        (function() {
            'use strict';

            // styling
            $(document).ready(function() {
                $("div.download_box").css("background-color", "#323232");
                $("body > #container").css("background-color", "#121212");
                $("body").css("background-color", "#121212");
                $("html").css("background-color", "#121212");
                $("body").css("color", "white");
            });

            $(document).ready(function() {
                if ($("#method_free")[0]) {
                    $("#method_free")[0].click();
                }
                // Remove crap
                $(".adsbox").remove();
                $("script").remove();
                $("#content").remove();
                $(".col-md-8").remove();
                $(".col-md-4").addClass("col-md-12");
                $(".col-md-4").removeClass("col-md-4");
                $(".features__section").remove();
                $("nav").remove();
                $("footer").remove();
                $(".payment_methods").remove();
                $("p.mb-5").removeClass("mb-5");

                // Make the remaining elements neat
                $(".download_box").addClass("container");
                $(".download_box > img").css("width", "auto");
                $(".download_box > img").css("height", "40%");

                if ($("img")[0]) {
                    var clean_input = $("<div class=\"input-group mb-3\"></div").add($("<div class=\"input-group-prepend text-center\"></div>").add(($("<span class=\"input-group-text font-weight-bold\">Captcha Code </span>")).append($("input.captcha_code").addClass("form-control"))));


                    $("div.download_box").prepend($(clean_input));
                    $("div.download_box").prepend($("img").css("height", "8em"));

                    $("#downloadbtn").mouseenter(function () {
                        $(this).data('timeout', setTimeout(function () {
                            $("#downloadbtn")[0].click();
                        }, 2000));
                    }).mouseleave(function () {
                        clearTimeout($(this).data('timeout'));
                    });
                }

                $("table").remove();

                $("a.btn-block").mouseenter(function () {
                    $(this).data('timeout', setTimeout(function () {
                        $("a.btn-block")[0].click();
                    }, 2000));
                }).mouseleave(function () {
                    clearTimeout($(this).data('timeout'));
                });

                setTimeout(function() {
                    $("div.download_box").append($("<div class=\"alert alert-warning mt-5 text-center\">TO PREVENT MALICIOUS REDIRECT, <b>HOVER</b> OVER THE BUTTON FOR 2 SECONDS TO SUBMIT CLEANLY</div>"));
                }, 8000);
            });
        })();
    }
    if (window.location.href.includes("https://up-load.io/download")) {
        (function() {
            'use strict';

            // styling
            $(document).ready(function() {
                $("div.info").css("background-color", "#323232");
                $("body > #container").css("background-color", "#212121");
                $("body").css("background-color", "#121212");
                $("html").css("background-color", "#121212");
                $("body").css("color", "white");
                $("span.dfilename").css("color", "#999999");
            });


            // window.onbeforescriptexecute = (e) => {
            // FIREFOX only sadly!
            window.addEventListener('beforescriptexecute', function(e) {
                if (!e.target.textContent) {
                    return;
                }

                // Prevent execution of a script
                if (e.target.textContent.includes("nt.js")) {
                    console.dir(e);
                    e.preventDefault();
                    e.stopPropagation();
                    $(e.target).remove();
                }
            });

            function clean_scripts() {
                var scripts = $("script");
                for (var l = 0; l < scripts.length; l++) {
                    if (!scripts[l].src.includes("google") && !scripts[l].src.includes("gstatic")) { // && scripts[l].src != "") {
                        scripts[l].remove();
                    }
                }
            }


            var clicked = false;
            function first_page() {
                if ($("#method_free")[0]) {
                    $("#method_free").click();
                    clicked = true;
                } else {

                    $('.downloadbtn').attr('disabled', false);
                    $("#downloadbtn").css("visibility", "visible");

                    $("#downloadbtn").css("font-size", "35px").text("HOVER (2 secs) to DOWNLOAD");

                    $("#downloadbtn").mouseenter(function () {
                        $(this).data('timeout', setTimeout(function () {
                            $("#downloadbtn")[0].click();;
                        }, 2000));
                    }).mouseleave(function () {
                        clearTimeout($(this).data('timeout'));
                    });



                    $("#container > div > div.col-md-8.text-center").remove();
                    $("#container > div > div.col-md-4.text-center").remove();
                    $("#container > div > div.clearfix").remove();
                    $("#container > div > div.col-md-12.pt20 > div").remove();
                    $("#container > div > div.col-md-12.pt20 > center > li > ol").remove();
                    $("meta").remove();
                    $("ins").remove();
                    $("#gdpr-cookie-notice").remove();
                    $("body > div.footer-sub").remove();
                    $("nav").remove();
                    $("footer").remove();
                    $("#container > div > div.col-md-12.pt20 > center > li > ol").remove();
                    $("#commonId > a").remove();
                    $("#container > div.container.download_page.pt30 > div > div.col-md-8").remove();
                    $("#container > div.footer-sub").remove();
                    $("body > span").remove();
                    $("#container > div style").remove();
                    $("body").css("padding", "0 0 0 0");
                    $("#container").css("padding", "0 0 0 0");
                    $("#container > div > div > div:nth-child(7) > div:nth-child(1) > form > div.rightcol").css("margin", "0 0 0 0");
                    // $("body > div:nth-child(2)").remove();

                    $("body > div:nth-child(3)").remove();
                    $("body > span").remove();
                    $("div.share").remove();
                    $("span.report").remove();
                    $("div.ads").remove();
                    $("div.adsbox").remove();
                    $("#container > div > div > div:nth-child(4)").remove();
                    $("#container").append(container);

                    window.s65c = undefined;
                    window.ClipboardJS = undefined;
                }
            }


            setInterval(function() {
                first_page();
                clean_scripts();
            }, 550);


        })();

    }
    if (window.location.href.includes("https://upload.ac/")) {
        (function() {
            'use strict';
            // styling
            $(document).ready(function() {
                $("div.fileInfo").css("background-color", "#323232");
                $($("div.row")[1]).css("background-color", "#212121");
                $("body").css("background-color", "#121212");
                $("html").css("background-color", "#121212");
                $("body").css("color", "white");
                if ($("a.btn-download")[0]) {
                    setTimeout(function() {$("a.btn-download")[0].click();}, 1250);
                }
            });


            function clean() {
                var t = $("iframe")
                for (var l = 0; l < t.length; l++) {
                    if (!t[l].src.includes("google") && !t[l].src.includes("gstatic")) {
                        t[l].remove();
                    }
                }

                var y = $("script");
                for (var k = 0; k < y.length; k++) {
                    if (!y[k].src.includes("google")) {
                        y[k].remove();
                    }
                }

                $("nav").remove();
                window.J2CC = undefined;
                window.r800 = undefined;
                window.N3rr = undefined;
                window.f4DD = undefined;
                window.r8OO = undefined;
                // window.w8OO = undefined;
                // window.d7CC = undefined;
                // window.D7CC = undefined;
                // window.r7CC = undefined;
                // window.absda = undefined;
                /*
        window.aawChunk = undefined;
        window.firstAggOmg = undefined;
        window.docReady = undefined;
        // window.closure_memoize_cache_ = undefined;
        window.delComment = undefined;
        // window.canRunAds = false;
        // window.canShowAds = false;
        // window.isAdBlockActive = false;
        // window.adsbygoogle = undefined;*/
                // window.IntOnLoad = undefined;
                $("#adblockinfo").remove();
                $("#ak7ybt7800qgtb3fudk8k").remove();
                $("#userdata_el").remove();
                $(".adsBox").remove();
                $("#IL_INSEARCH").remove();
                $("#IL_IF_LEFT").remove();
                $("#IL_IF_RIGHT").remove();
                $(".IL_BASE").remove();
                $("img").remove();
                $("center").remove();
                $("nav").remove();
                $("style").remove();
                $("h3").remove();
                $("ins").remove();
                $("footer").remove();
                // $("body").children("div:first").remove();
                $("#addLinkBtn").remove();
                $("#myDownloadForm > div.container.download.pt50.pb50 > div > div > div > div:nth-child(2)").remove();
                $("div.fmore").remove();
                $("div.checkbox-info").remove();
                $("div.clearfix").remove();
                $("div.dl").removeClass("dl");
                $("div.dl-plus").remove();
                $("div.boxa").remove();
                $("p.finame").remove();
                for (var i = 0; i < $("div").length; i++) {
                    if ($("div")[i].innerText.includes("ADBLOCK DETECTED")) {
                        $($("div")[i]).remove();
                    }
                }
                $($("body > div > a").parent()[0]).remove();
                $("body > div:empty").remove();
                $("#downloadBtnClick").remove();
                document.querySelector("#downloadbtn").style.display = "";


            }
            setInterval(clean, 250);
        })();
    }
    if (window.location.href.includes("https://uploadrar.com/")) {
        // Modified script from uploadrar.com that runs the countdown timer
        // changed to immediately finish and activate the download button.

        var timeout; // jQ mobile kludge to prevent double-calling
        $(document).ready(function() {
            $("div.download2page").css("background-color", "#323232");
            // $("header").remove();
            $("footer").remove();
            $("#lastnews").remove();
            $('#countdown').each(function(i, e) {
                if(timeout) return;
                var downloadbtn = $(e).parent().find('.downloadbtn');
                $(downloadbtn).attr('disabled', false);
                $(e).css('display', 'none');
                $('.downloadbtn').attr('disabled', false);
            });
            // Clicks the download button to continue to the next page
            $("#downloadbtn").click()

            // Clicks the direct link button if it is present on the page
            if ($("#direct_link")) {
                setTimeout(function(){}, 3000);
                document.getElementById("direct_link").children[0].click();
            }
        });
    }
})();