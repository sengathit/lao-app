<!-- MAIN (Center website) -->
<div class="main">
<h2>PORTFOLIO</h2>
<div id="myBtnContainer">
    <button class="btn active">All</button>
    <button class="btn">Digital Marketing</button>
    <button class="btn">Plumbing</button>
    <button class="btn">Electrical</button>
    <button class="btn">HVAC</button>
</div>

<!-- Portfolio Gallery Grid -->
<div class="row">
    <div class="column nature">
        <div class="content">
            <a href="http://vitalstorm.com/google-local-services-ads-2018/">
                <a href="http://estevaowriting.com/portfolio/lights/" rel="attachment wp-att-236"><img src="http://estevaowriting.com/wp-content/uploads/2016/02/lights.jpg" alt="lights" width="600" height="400" class="alignnone size-full wp-image-236" />
                </a>
                <!-- img style="width: 100%;" src="/w3images/mountains.jpg" / -->
            </a>
            <h4>Google Local Services Ads Roll Out to 30 Major Cities By 2018</h4>
            Google Local Services, formerly Google Home Services, is a new lead generation platform running in 17 major cities and will be available in 13 more by 2018.
        </div>
    </div>
    <div class="column nature">
        <div class="content">
            <a href="http://vitalstorm.com/get-business-found-location-extensions/">
                <img style="width: 100%;" src="/w3images/lights.jpg" />
            </a>
            <h4>Get Your Business Found with Location Extensions</h4>
            Boost your AdWords performance with location extensions! Learn how to use location extensions to increase conversions, calls, map searches and store visits.
        </div>
    </div>
    <div class="column nature">
        <div class="content">
            <a href="http://vitalstorm.com/10-ways-make-adwords-remarketing-success/">
                <img style="width: 100%;" src="/w3images/nature.jpg" />
            </a>
            <h4>10 Ways to Make Your AdWords Remarketing a Success</h4>
            To make your AdWords remarketing campaigns a success, use these tips and suggestions to align with your business goals.
        </div>
    </div>
    <div class="column cars">
        <div class="content">
            <img style="width: 100%;" src="/w3images/cars1.jpg" alt="Car" />
            <h4>Retro</h4>
            Lorem ipsum dolor..
        </div>
    </div>
    <div class="column cars">
        <div class="content">
            <img style="width: 100%;" src="/w3images/cars2.jpg" alt="Car" />
            <h4>Fast</h4>
            Lorem ipsum dolor..
        </div>
    </div>
    <div class="column cars">
        <div class="content">
            <img style="width: 100%;" src="/w3images/cars3.jpg" alt="Car" />
            <h4>Classic</h4>
            Lorem ipsum dolor..
        </div>
    </div>
    <div class="column people">
        <div class="content">
            <img style="width: 100%;" src="/w3images/people1.jpg" alt="Car" />
            <h4>Girl</h4>
            Lorem ipsum dolor..
        </div>
    </div>
    <div class="column people">
        <div class="content">
            <img style="width: 100%;" src="/w3images/people2.jpg" alt="Car" />
            <h4>Man</h4>
            Lorem ipsum dolor..
        </div>
    </div>
    <div class="column people">
        <div class="content">
            <img style="width: 100%;" src="/w3images/people3.jpg" alt="Car" />
            <h4>Woman</h4>
            Lorem ipsum dolor..
        </div>
    </div>
    <!-- END GRID -->

    </div>
    <!-- END MAIN -->
</div>
<script>
    filterSelection("all")
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("column");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) { w3RemoveClass(x[i], "show"); if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    }

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) { while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>
