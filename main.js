$(function () {
            chuva();

            function chuva() {
                let rand = Math.floor(Math.random() * $(window).width());
                let randT = Math.floor(Math.random() * 150);

                console.log(rand + ' - ' + randT);
                $('body').append('<div class="gota" style="margin-left:' + rand + 'px;"></div>');

                setTimeout(() => {
                    chuva();
                }, 2000);
            }
        });