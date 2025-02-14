<!DOCTYPE html>
<html lang="en" style="background-color: rgba(0,0,0,0.0); width:100%; height: 100%;">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Growtopia Player Support</title>
        <link rel="icon" type="image/png" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/images/growtopia.ico" sizes="16x16" />
        <link rel="shortcut icon" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/images/growtopia.ico" type="image/x-icon">
        <link rel="icon" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/images/growtopia.ico" type="image/x-icon">
        <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/css/faq-main.css">
        <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/css/shop-custom.css">
        <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/css/ingame-custom.css">
        <style>
            .modal-backdrop {
                background-color: rgba(0, 0, 0, 0.1);
            }

            .modal-backdrop+div {
                overflow: auto;
            }

            .modal-body, .content {
                padding: 0;
            }

            .product-list-popup .modal-content {
                border: 6px solid #000000;
                background-color: rgba(0, 0, 0, 0.0);
                color: #FFF;
                background-image: url('https://realityps.b-cdn.net/growtopia/loginBanner.svg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }

            .btn.grow-button-guest {
                border-radius: 5px;
                border: 2px solid #cbc488 !important;
                background: #ffe600 !important;
                text-transform: none;
                color: #FFF;
                text-align: center;
                text-shadow: 1px 1px 1px #000;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                width: 100%;
                box-shadow: 1px 3px 0.1px 0px #000;
            }

            .promo-link {
                color: #00ff59;
                text-align: center;
                text-shadow: 1px 1px 1px #000;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            .promo-a {
                color: #00ff59;
            }

            a:focus, a:hover {
                color: #00ff59;
                text-decoration: underline;
            }
        </style>
    </head>
    <body style="background-color: rgba(0,0,0,0.0);">
        <button type="button" class="btn btn-primary hidden" data-toggle="modal" id="modalButton" data-target="#modalShow" data-backdrop="static" data-keyboard="false"></button>
        <div class="content">
            <section class="common-box ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="row">
                                <div class="modal fade product-list-popup" id="modalShow" tabindex="-1" role="dialog"
                                    aria-hidden="false">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <div class="content">
                                                    <section class="common-box ">
                                                        <div class="container">
                                                            <div class="section-title center-align">
                                                                <h2>Log in with your GrowID</h2>
                                                            </div>
                                                            <div class="row div-content-center">
                                                                <div class="col-md-12 col-sm-12">
                                                                    <form method="POST" action="/player/growid/login/validate" accept-charset="UTF-8" class="" role="form" required="required" autocomplete="off"><input name="_token" type="hidden" value="{{tokenPlaceholder}}">
                                                                        <div class="form-group">
                                                                            <input id="login-name" class="form-control grow-text" placeholder="Your GTPS Name" name="growId" type="text">
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <input id="password" class="form-control grow-text" placeholder="Your GTPS Password" name="password" type="password" value="">
                                                                        </div>
                                                                        <div class="form-group text-center">
                                                                            <input class="btn btn-lg btn-primary grow-button" type="submit" value="Log in" style="margin-bottom: 10px;">
                                                                            <input class="btn btn-lg btn-primary grow-button-guest" type="submit" value="Create GrowID">
                                                                        </div>
                                                                        <div class="form-group text-center promo-link">
                                                                            <a class="promo-a" href="https://discord.gg/N7Q7bJBbMb"
                                                                            target="_blank">GTPS Software by WorldPs (Join Discord)</a>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </body>
    <script src="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/vendors/jquery/jquery-2.1.4.min.js"></script>
    <script src="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/vendors/bootstrap/javascripts/bootstrap.min.js"></script>
    <script>
        let clicked = false;
        $("a").click( function() { if (clicked === false) { clicked = true; return true; } $(this).attr("onclick", "return false;"); } );
        $('document').ready(function () {
            document.onkeydown = (e) => {
                if (e.key == 123) {
                    e.preventDefault();
                }
                if (e.key == 'F12') {
                    e.preventDefault();
                }
                if (e.ctrlKey && e.shiftKey && e.key == 'I') {
                    e.preventDefault();
                }
                if (e.ctrlKey && e.key == 'I') {
                    e.preventDefault();
                }
                if (e.ctrlKey && e.shiftKey && e.key == 'C') {
                    e.preventDefault();
                }
                if (e.ctrlKey && e.shiftKey && e.key == 'J') {
                    e.preventDefault();
                }
                if (e.ctrlKey && e.key == 'U') {
                    e.preventDefault();
                }
            };
            $('#modalButton').trigger('click');
            $('.close').on('click', function () {
                window.location = "https://api.yoruakio.tech/player/"
            });
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        if (mutation.addedNodes[i].tagName == 'DIV') {
                            var thediv = mutation.addedNodes[i];
                            var sw = window.screen.width;
                            if (sw < 667) {
                                $(thediv).css({
                                    'transform': 'scale(0.75)',
                                    'transform-origin': '0 0',
                                    '-webkit-transform': 'scale(0.75)',
                                    '-webkit-transform-origin': '0 0',
                                    'overflow': 'auto'
                                });
                            }
                        }
                    }
                });
            });
            observer.observe(document.body, {attributes: false, childList: true, characterData: false});
        });
    </script>
</html>