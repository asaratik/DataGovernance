  jQuery(window).on('scroll', function($){
    "use strict";

    /*------------- Scroll to Top -----------------*/
      // Scroll to top
      if (jQuery(this).scrollTop() > 100) {
        jQuery('#scroll-to-top').fadeIn('slow');
      } else {
        jQuery('#scroll-to-top').fadeOut('slow');
      }
    });


  $('#scroll-to-top').click(function(){
    $("html,body").animate({ scrollTop: 0 }, 1500);
    return false;
  });


  $(function() {

  // All elements
  $('body').fontFlex(14, 16, 70);

  
});


  jQuery(document).ready(function() {

    "use strict";

    // Fixed menu
    if( $('body').hasClass('header-fixed-top') ){
      $(window).scroll(function(){
        if( $(window).scrollTop()>200 ){
          $('header').addClass('sticky animated fadeInDown');
        }
        else{
          $('header').removeClass('sticky animated fadeInDown');
        }
      });
    }

    /*---------------------------------NiceScroll-----------------------------*/
    //Check IE11
    function IEVersion() {
      if (!!navigator.userAgent.match(/Trident\/7\./)) {
        return 11;
      }
    }

    if (IEVersion() != 11) 
    {
      $('html').niceScroll({
        cursorcolor: "#3498db",
        zindex: '99999',
        cursorminheight: 60,
        scrollspeed: 80,
        cursorwidth: 7,
        autohidemode: true,
        background: "#aaa",
        cursorborder: 'none',
        cursoropacitymax: .7,
        cursorborderradius: 0,
        horizrailenabled: false
      });
    }

    /*------------------------- Portfolio Slider ----------------------------*/

    var itemSlider = $("#portfolio-slider");

    itemSlider.owlCarousel({
      autoPlay : 3000,
      stopOnHover : true,
      pagination : false,
      paginationNumbers: false,

      itemsCustom : [
      [0, 1],
      [450, 2],
      [600, 2],
      [700, 2],
      [1000, 3],
      [1200, 4],
      ],
        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window
      });


 // Custom Navigation 
 $(".post-next").click(function(){
  itemSlider.trigger('owl.next');
});
 $(".post-prev").click(function(){
  itemSlider.trigger('owl.prev');
});


});

  /*------------------------------ SmoothScroll (for Mouse Wheel) v1.2.1 ----------------------*/
  (function ($) {
    var defaultOptions = {
      frameRate: 150,
      animationTime: 1200,
      stepSize: 120,
      pulseAlgorithm: !0,
      pulseScale: 8,
      pulseNormalize: 1,
      accelerationDelta: 20,
      accelerationMax: 1
    }, options = defaultOptions,
    direction = {
      x: 0,
      y: 0
    }, root = 0 <= document.compatMode.indexOf("CSS") || !document.body ? document.documentElement : document.body,
    que = [],
    pending = !1,
    lastScroll = +new Date;

    function scrollArray(a, b, c, d) {
      d || (d = 1E3);
      directionCheck(b, c);
      if (1 != options.accelerationMax) {
        var e = +new Date - lastScroll;
        e < options.accelerationDelta && (e = (1 + 30 / e) / 2, 1 < e && (e = Math.min(e, options.accelerationMax), b *= e, c *= e));
        lastScroll = +new Date
      }
      que.push({
        x: b,
        y: c,
        lastX: 0 > b ? 0.99 : -0.99,
        lastY: 0 > c ? 0.99 : -0.99,
        start: +new Date
      });
      if (!pending) {
        var q = a === document.body,
        p = function (e) {
          e = +new Date;
          for (var h = 0, k = 0, l = 0; l < que.length; l++) {
            var f = que[l],
            m = e - f.start,
            n = m >= options.animationTime,
            g = n ? 1 : m / options.animationTime;
            options.pulseAlgorithm && (g = pulse(g));
            m = f.x * g - f.lastX >> 0;
            g = f.y * g - f.lastY >> 0;
            h += m;
            k += g;
            f.lastX += m;
            f.lastY += g;
            n && (que.splice(l, 1), l--)
          }
          q ? window.scrollBy(h, k) : (h && (a.scrollLeft += h), k && (a.scrollTop += k));
          b || c || (que = []);
          que.length ? requestFrame(p, a, d / options.frameRate + 1) : pending = !1
        };
        requestFrame(p, a, 0);
        pending = !0
      }
    }

    function wheel(a) {
      var b = overflowingAncestor(a.target);
      if (!b || a.defaultPrevented) return !0;
      var c = a.wheelDeltaX || 0,
      d = a.wheelDeltaY || 0;
      c || d || (d = a.wheelDelta || 0);
      1.2 < Math.abs(c) && (c *= options.stepSize / 120);
      1.2 < Math.abs(d) && (d *= options.stepSize / 120);
      scrollArray(b, -c, -d);
      a.preventDefault()
    }
    var cache = {};
    setInterval(function () {
      cache = {}
    }, 1E4);
    var uniqueID = function () {
      var a = 0;
      return function (b) {
        return b.uniqueID || (b.uniqueID = a++)
      }
    }();

    function setCache(a, b) {
      for (var c = a.length; c--;) cache[uniqueID(a[c])] = b;
        return b
    }

    function overflowingAncestor(a) {
      var b = [],
      c = root.scrollHeight;
      do {
        var d = cache[uniqueID(a)];
        if (d) return setCache(b, d);
        b.push(a);
        if (c === a.scrollHeight) {
          if (root.clientHeight + 10 < c) return setCache(b, document.body)
        } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return setCache(b, a)
    } while (a = a.parentNode)
  }

  function directionCheck(a, b) {
    a = 0 < a ? 1 : -1;
    b = 0 < b ? 1 : -1;
    if (direction.x !== a || direction.y !== b) direction.x = a, direction.y = b, que = [], lastScroll = 0
  }
var requestFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (a, b, c) {
    window.setTimeout(a, c || 1E3 / 60)
  }
}();

function pulse_(a) {
  var b;
  a *= options.pulseScale;
  1 > a ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1), a = 1 - Math.exp(-(a - 1)), b += a * (1 - b));
  return b * options.pulseNormalize
}

function pulse(a) {
  if (1 <= a) return 1;
  if (0 >= a) return 0;
  1 == options.pulseNormalize && (options.pulseNormalize /= pulse_(1));
  return pulse_(a)
}
window.addEventListener("mousewheel", wheel, !1);


})(jQuery);
function populateTable(){
var response;
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     response = this.responseText;
   
var roles=JSON.parse(response);

//roles[0]="Application Developer";
//roles[1]="Data Scientist";
//roles[2]="Analyst";
var table=document.getElementById("rolestable");
//table.width="100%";
var tableBody = document.createElement('TBODY');
tableBody.id="RolesTableBody"
for( i=0;i<roles.length;i++){
var tr = document.createElement('TR');
            
		var td = document.createElement('TD')
    trId=roles[i].roleName;
                    td.appendChild(document.createTextNode(trId));
                    tr.id=trId;

					 tr.appendChild(td);
					 
					 var checkbox = document.createElement('input');
					checkbox.type = "checkbox";
          checkbox.checked=roles[i].readAccess;
					 td = document.createElement('TD')
					td.appendChild(checkbox);
                    tr.appendChild(td);
					  var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.checked=roles[i].partialReadAccess;
           td = document.createElement('TD')
          td.appendChild(checkbox);
                    tr.appendChild(td);
                       var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.checked=roles[i].noReadAccess;
           td = document.createElement('TD')
          td.appendChild(checkbox);
                    tr.appendChild(td);
                       var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.checked=roles[i].writeAccess;
           td = document.createElement('TD')
          td.appendChild(checkbox);
                    tr.appendChild(td);
                       var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.checked=roles[i].partialWriteAccess;
           td = document.createElement('TD')
          td.appendChild(checkbox);
                    tr.appendChild(td);
                       var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.checked=roles[i].noWriteAccess;
           td = document.createElement('TD')
          td.appendChild(checkbox);
                    tr.appendChild(td);
                       var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.checked=roles[i].deleteAccess;
           td = document.createElement('TD')
          td.appendChild(checkbox);
                    tr.appendChild(td);
                       var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.checked=roles[i].partialDeleteAccess;
           td = document.createElement('TD')
          td.appendChild(checkbox);
                    tr.appendChild(td);
                       var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.checked=roles[i].noDeleteAccess;
           td = document.createElement('TD')
          td.appendChild(checkbox);
                    tr.appendChild(td);
                       var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.checked=roles[i].updateAccess;
           td = document.createElement('TD')
          td.appendChild(checkbox);
                    tr.appendChild(td);
                       var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.checked=roles[i].partialUpdateAccess;
           td = document.createElement('TD')
          td.appendChild(checkbox);
                    tr.appendChild(td);
                       var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.checked=roles[i].noUpdateAccess;
           td = document.createElement('TD')
          td.appendChild(checkbox);
                    tr.appendChild(td);
                       
					var button=document.createElement('button');
					button.type="button";
          button.id=trId;
					button.className="btn btn-primary";
					var em=document.createElement('em');
em.className="fa fa-pencil";
          button.appendChild(em);
					button.onclick=function update(){updateRoles(this.id)};
					td = document.createElement('TD')
					
          var delbutton=document.createElement('button');
          delbutton.type="button";
          delbutton.className="btn btn-danger";
var em=document.createElement('em');
em.className="fa fa-trash";
          delbutton.appendChild(em);
           delbutton.id=trId;
          delbutton.onclick=function update(){deleteRoles(this.id)};
         td.appendChild(button);
          td.appendChild(document.createTextNode("  "))
          td.appendChild(delbutton);
					 tr.appendChild(td);
					tableBody.appendChild(tr);
								}
					table.appendChild(tableBody)
			
 }
  };
  xhttp.open("GET", "http://rbac.us-west-1.elasticbeanstalk.com:8080/roledata/getRoles", true);
  xhttp.send();
}

function updateRoles(value){

var tr=document.getElementById(value);
var response;
//response+=
if(tr.children[0].children.length!=0){
  var v=tr.children[0].children[0].value;
  tr.id=v;
  response=v;
}else{
  response=tr.children[0].innerHTML;
}
 
//response+=


for(i=1;i<tr.children.length-1;i++){

  //console.log(tr.children[i].innerHTML);
  response+= ","+tr.children[i].children[0].checked;
}
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     responsemsg = this.responseText;
     //console.log(responsemsg)
     givemessage(responsemsg);

     

}
    };
     xhttp.open("POST", "http://rbac.us-west-1.elasticbeanstalk.com:8080/roledata/newRole", true);
  //xhttp.send(JSON.stringify(user));
  xhttp.send(response);

  //console.log(response);
window.location.reload();
}


function deleteRoles(value){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     responsemsg = this.responseText;
     //console.log(responsemsg)


     deletemessage(responsemsg);

  

}
    };
     xhttp.open("DELETE", "http://rbac.us-west-1.elasticbeanstalk.com:8080/roledata/deleteRole/"+value, true);
  //xhttp.send(JSON.stringify(user));
  xhttp.send();
  window.location.reload();

}



function createRow(){


var table=document.getElementById("RolesTableBody");
var trId="newTR";
var tr = document.createElement('TR');
            tr.id=trId;
		var td = document.createElement('TD')
                    td.appendChild(document.createElement("input"));
					
					 tr.appendChild(td);
					 for(j=0;j<12;j++){
					 var checkbox = document.createElement('input');
					checkbox.type = "checkbox";
					 td = document.createElement('TD')
					td.appendChild(checkbox);
                    tr.appendChild(td);
					}
          td=document.createElement('TD');
          var button=document.createElement('button');
          button.type="button";
          button.className="btn btn-primary";
var em=document.createElement('em');
em.className="fa fa-pencil";
          button.appendChild(em);
          button.id=trId;
          button.onclick=function update(){updateRoles(this.id)};;
          var delbutton=document.createElement('button');
          delbutton.type="button";
          delbutton.className="btn btn-danger";
var em=document.createElement('em');
em.className="fa fa-trash";
          delbutton.appendChild(em);
          delbutton.onclick=deletemessage;
          td = document.createElement('TD')
          td.appendChild(button);
          td.appendChild(document.createTextNode("  "))
          td.appendChild(delbutton);
					
					 tr.appendChild(td);
					table.appendChild(tr);
				
}
function populateList(user){

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     response = this.responseText;
    // console.log(response);
     var tables=JSON.parse(response);

for(i=0;i<tables.length;i++){
var list=document.getElementById("listItem");
var div=document.createElement('div');
div.className="item col-md-12";
var a=document.createElement('a');
a.className="list-group-item list-group-item-action";
a.innerHTML=tables[i];
a.id=tables[i];
a.onclick=function callOnClick(){callData(this.id)};
div.appendChild(a);
list.appendChild(div);
}
}
    };
     xhttp.open("GET", "http://www.rbac.us-west-1.elasticbeanstalk.com:8080/user/"+user, true);
  xhttp.send();
}

function callData(value){
 localStorage.setItem("TableName",value);
window.location='/tableData';
}
function getTable(user){
  var tableData;
  var url="http://www.rbac.us-west-1.elasticbeanstalk.com:8080/user/"+user+"/tabledata/"+localStorage.getItem("TableName");
  //console.log(url)
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     response = this.responseText;
     
     var stock=JSON.parse(response);
//console.log(stock);
var contentBox=document.getElementById("contentbox");
//table.innerHTML=localStorage.getItem("TableName");

var table=document.createElement("TABLE");
table.className="table"
table.setAttribute("data-pagination","true");
table.setAttribute("data-page-list","[5, 10, 25, 50, 100, ALL]");
table.setAttribute("data-page-size","5");
table.className="table table-striped table-inverse results";
table.id="TableData"
var tableHead = document.createElement('THEAD');
var tableBody = document.createElement('TBODY');
tableBody.className="tbody";
tableBody.id="myTable"

          var deleteButtonId=stock[0][0]+"/data/";
          localStorage.setItem("columnName",stock[0][0]);
			var tr = document.createElement('TR');
      
			for(i=0;i<stock[0].length;i++){
			
			var th = document.createElement('TH');
			th.appendChild(document.createTextNode(stock[0][i]));
      th.appendChild(document.createTextNode("  "));
      var em=document.createElement('em');
      em.style="font-size:13px";
      em.id=i;
      em.onclick=function search(){ box(this.id);};
em.className="fa fa-filter";
th.appendChild(em);
			tr.appendChild(th);
			 		}
			var th = document.createElement('TH');
      th.appendChild(document.createTextNode("Action"));
      tr.appendChild(th);
			 tableHead.appendChild(tr);
			 	table.appendChild(tableHead)
for( i=2;i<stock.length;i++){
	var tr = document.createElement('TR');
  //var trId=stock[2][];
for(j=0;j<stock[i].length;j++){
var trId=stock[i][0];
tr.id="row"+trId;
//deleteButtonId=trId;
          var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(stock[i][j]));
					td.contentEditable =stock[1][j];
					tr.appendChild(td);
				}
				var button=document.createElement('button');
					button.type="button";
					button.className="btn btn-primary";
var em=document.createElement('em');
em.className="fa fa-pencil";
					button.appendChild(em);
          button.id=trId;
					button.onclick=function update(){updateTableData(this.id,user)};;
          var delbutton=document.createElement('button');
          delbutton.type="button";
          delbutton.className="btn btn-danger";
var em=document.createElement('em');
em.className="fa fa-trash";
          delbutton.appendChild(em);
          delbutton.id=trId;
          delbutton.onclick=function update(){deleteTableData(this.id,user)};
					td = document.createElement('TD')
					td.appendChild(button);
          td.appendChild(document.createTextNode("  "))
          td.appendChild(delbutton);
					 tr.appendChild(td);
					tableBody.appendChild(tr)
						}
							
					table.appendChild(tableBody)
					contentBox.appendChild(table)
 var div=document.createElement("div");
 div.className="col-md-12 text-center";
 var ul=document.createElement('ul');
 ul.className="pagination pagination-lg pager";
 ul.id="myPager";
div.appendChild(ul);
contentBox.appendChild(div);
 pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:20});

 }
    };
     xhttp.open("GET", url, true);
  xhttp.send();
}


function updateTableData(value,user){
var tr=document.getElementById(value);
var response=user+","+localStorage.getItem("TableName")+","+value;
var rows = document.getElementById("row"+value);
//response=rows[value].children[0].innerHTML;
for(i=0;i<rows.children.length-1;i++){

response+=","+rows.children[i].innerHTML;

}

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     responsemsg = this.responseText;
     //console.log(responsemsg)
     givemessage(responsemsg);
     console.log(response)
     

}
    };
    var url="http://rbac.us-west-1.elasticbeanstalk.com:8080/user/updateTableData";
     xhttp.open("POST",url , true);
  //xhttp.send(JSON.stringify(user));
  xhttp.send(response);
window.location.reload();
}

function deleteTableData(value,user){
  var response=localStorage.getItem("TableName")+","+value
   var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     responsemsg = this.responseText;
     //console.log(responsemsg)


     deletemessage(responsemsg);



}
    };
   var url="http://rbac.us-west-1.elasticbeanstalk.com:8080/user/"+user+"/table/"+localStorage.getItem("TableName")+"/column/"+localStorage.getItem("columnName")+"/data/"+value;
     console.log(url);
     xhttp.open("DELETE", url, true);
  //xhttp.send(JSON.stringify(user));
  xhttp.send();
window.location.reload();
}





function givemessage(value){
var Message=document.getElementById("Message");
Message.style.color="Red";
Message.innerHTML=value;
}
function deletemessage(){
var Message=document.getElementById("Message");
Message.style.color="Red";
Message.innerHTML="Deleted Successfully"
}

function loadUsers(user){



var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     response = this.responseText;
     
     var users=JSON.parse(response);


var table=document.getElementById("Userstable");
var tbody = document.createElement('TBODY');
var roles=users[0].allroles;
for(i=0;i<users.length;i++){
var tr = document.createElement('TR');
tr.id=users[i].empId;
var td = document.createElement('TD');
td.appendChild(document.createTextNode(users[i].empName));
tr.appendChild(td);
var td = document.createElement('TD');
var dropdown=document.createElement('div');
dropdown.className="dropdown";
var button=document.createElement('button');
button.className="btn btn-basic dropdown-toggle";
button.type="button";
//dropdown.data-toggle="dropdown";
button.setAttribute("data-toggle","dropdown");

var span=document.createElement('span');
span.class="caret";
var roleName=users[i].role;
if(roleName===null){
  roleName="No Role";
}
button.innerHTML=roleName+"<span class=caret></span>";
var buttonId;
buttonId="button"+i;
button.id=buttonId;
dropdown.appendChild(button);
var ul=document.createElement('UL');
ul.className="dropdown-menu";
for(j=0;j<roles.length;j++){
var li=document.createElement('LI');
var a=document.createElement('a');
a.appendChild(document.createTextNode(roles[j]));
a.value=roles[j];
a.href="#";
a.setAttribute("data-button",buttonId);
a.id=buttonId;
a.onclick=function update(){var buttonId=this.id;document.getElementById(buttonId).innerHTML=this.value+" <span class=caret></span>"}
li.appendChild(a);
ul.appendChild(li);
}
dropdown.appendChild(ul);
td.appendChild(dropdown);
tr.appendChild(td);

var button=document.createElement('button');
          button.type="button";
          button.id=tr.id;
          button.className="btn btn-primary";
          var em=document.createElement('em');
em.className="fa fa-pencil";
          button.appendChild(em);
          button.onclick=function update(){updateUsers(this.id);};
          td = document.createElement('TD')
          td.appendChild(button);
          tr.appendChild(td);

tbody.appendChild(tr);
}
table.appendChild(tbody)
}
    };
     xhttp.open("GET", "http://rbac.us-west-1.elasticbeanstalk.com:8080/roledata/userRole/"+user, true);
  xhttp.send();

}


 function updateUsers(value){
  var tr=document.getElementById(value)
  var role=tr.children[1].children[0].children[0].innerHTML;
  role=role.substr(0,role.indexOf("<"));
  var user=value;
  user+=","+role;
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     response = this.responseText;
     givemessage(response);
     //loadUsers();

}
    };
     xhttp.open("POST", "http://rbac.us-west-1.elasticbeanstalk.com:8080/roledata/userRole/update", true);
  //xhttp.send(JSON.stringify(user));
  xhttp.send(user);
window.location.reload();
 }







function pageMe(opts){
  //var ele=document.getElementById("myTable");
  var ele=$('.results tbody');
    var $this = ele,
        defaults = {
            perPage: 7,
            showPrevNext: false,
            hidePageNumbers: false
        },
        settings = $.extend(defaults, opts);
    
    var listElement = $this;
    var perPage = settings.perPage; 
    var children = listElement.children();
    var pager = $('.pager');
    
    if (typeof settings.childSelector!="undefined") {
        children = listElement.find(settings.childSelector);
    }
    
    if (typeof settings.pagerSelector!="undefined") {
        pager = $(settings.pagerSelector);
    }
    
    var numItems = children.size();
    var numPages = Math.ceil(numItems/perPage);

    pager.data("curr",0);
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="prev_link">«</a></li>').appendTo(pager);
    }
    
    var curr = 0;
    while(numPages > curr && (settings.hidePageNumbers==false)){
        $('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);
        curr++;
    }
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="next_link">»</a></li>').appendTo(pager);
    }
    
    pager.find('.page_link:first').addClass('active');
    pager.find('.prev_link').hide();
    if (numPages<=1) {
        pager.find('.next_link').hide();
    }
      pager.children().eq(1).addClass("active");
    
    children.hide();
    children.slice(0, perPage).show();
    
    pager.find('li .page_link').click(function(){
        var clickedPage = $(this).html().valueOf()-1;
        goTo(clickedPage,perPage);
        return false;
    });
    pager.find('li .prev_link').click(function(){
        previous();
        return false;
    });
    pager.find('li .next_link').click(function(){
        next();
        return false;
    });
    
    function previous(){
        var goToPage = parseInt(pager.data("curr")) - 1;
        goTo(goToPage);
    }
     
    function next(){
        goToPage = parseInt(pager.data("curr")) + 1;
        goTo(goToPage);
    }
    
    function goTo(page){
        var startAt = page * perPage,
            endOn = startAt + perPage;
        
        children.css('display','none').slice(startAt, endOn).show();
        
        if (page>=1) {
            pager.find('.prev_link').show();
        }
        else {
            pager.find('.prev_link').hide();
        }
        
        if (page<(numPages-1)) {
            pager.find('.next_link').show();
        }
        else {
            pager.find('.next_link').hide();
        }
        
        pager.data("curr",page);
        pager.children().removeClass("active");
        pager.children().eq(page+1).addClass("active");
    
    }
};
function box(value){
var input= document.getElementById('myInput')
input.style.visibility="visible";
input.class=value;

}
function searching(value) {

  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("TableData");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[value];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


function loadFunction(value,user) {
      if (value === 'roles') {
          populateTable();
      }
      if (value === 'data') {

          populateList(user);
      }
      if (value === 'user') {
          loadUsers(user);
      }
      if (value === 'tableData') {
          getTable(user);
      }
  }