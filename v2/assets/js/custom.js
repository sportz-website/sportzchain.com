//wow js
        var wow = new WOW({
            animateClass: 'animated',
            offset: 100,
            mobile: false,
            duration: 1000,
        });
        wow.init();


        var b = document.getElementsByTagName("BODY")[0];  

        b.addEventListener("mousemove", function(event) {
          parallaxed(event);

        });

        function parallaxed(e) {
              var amountMovedX = (e.clientX * -0.3 / 8);
              var amountMovedY = (e.clientY * -0.3 / 8);
              var x = document.getElementsByClassName("parallaxed");
              var i;
              for (i = 0; i < x.length; i++) {
                x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
              }
        }



        var image = document.getElementsByClassName('thumbnail');
        new simpleParallax(image, {
            delay: .6,
            transition: 'cubic-bezier(0,0,0,1)'
        });
       document.addEventListener("mousemove", parallax);
        function parallax(e){
            this.querySelectorAll('.layer').forEach(layer => {
                const speed = layer.getAttribute('data-speed')

                const x = (window.innerWidth - e.pageX*speed)/100
                const y = (window.innerHeight - e.pageY*speed)/100

                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }

        var image = document.getElementsByClassName('thumbnail1');
          new simpleParallax(image, {
            orientation: 'right'
        });

        var image = document.getElementsByClassName('thumbnail2');
          new simpleParallax(image, {
            orientation: 'left'
        });
                  

        // var image = document.getElementsByClassName('thumbnail');
        //     new simpleParallax(image, {
        //         delay: .6,
        //         transition: 'cubic-bezier(0,0,0,1)'
        // });

        (function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

        // counter
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "04/21/",
            birthday = dayMonth + yyyy;
        
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
        //end
        
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    

              const now = new Date().getTime(),
                    distance = countDown - now;

              document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

              //do something later when date is reached
              if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());

        

        $('.txt_slider').slick({
          arrows:false,
          dots:false,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          speed: 500,
          fade: true, 
          cssEase: 'linear',
          slidesToShow: 1
        });


        // 
        $('.sec6_slider').slick({
          centerMode: true,
          arrows:true,
          dots:false,
          autoplay: true,
          autoplaySpeed: 2000,
          centerPadding: '80px',
          slidesToShow: 4,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 767,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            }
            ,
            {
              breakpoint: 640,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
              }
            }
          ]
        });

        // logo slider
        $('.logo_slider').slick({
            dots: false,
            arrows:false,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
            ]
          });


        // team js 
         $('.team_boxs').slick({
            dots: false,
            arrows:true,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 1000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });

         $('.team_boxs_').slick({
            dots: false,
            arrows:true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });

         $('.our_partners_slider').slick({
            dots: false,
            arrows:false,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 700,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });



(function() {
  $(function() {
    var toggle;
    return toggle = new Toggle('.toggle');
  });

  this.Toggle = (function() {
    Toggle.prototype.el = null;

    Toggle.prototype.tabs = null;

    Toggle.prototype.panels = null;

    function Toggle(toggleClass) {
      this.el = $(toggleClass);
      this.tabs = this.el.find(".tab");
      this.panels = this.el.find(".panel");
      this.bind();
    }

    Toggle.prototype.show = function(index) {
      var activePanel, activeTab;
      this.tabs.removeClass('active');
      activeTab = this.tabs.get(index);
      $(activeTab).addClass('active');
      this.panels.hide();
      activePanel = this.panels.get(index);
      return $(activePanel).show();
    };

    Toggle.prototype.bind = function() {
      var _this = this;
      return this.tabs.unbind('click').bind('click', function(e) {
        return _this.show($(e.currentTarget).index());
      });
    };

    return Toggle;

  })();

}).call(this);
