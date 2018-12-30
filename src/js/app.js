document.addEventListener('DOMContentLoaded', function(){

	var headerHeight = document.querySelector('header').clientHeight;
	function elementInView(el){
		  var rect = el.getBoundingClientRect();

	    return (
	        rect.top >= headerHeight &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	    );
	}

	function updateSidebar(){
		var anchors = document.getElementsByClassName('subsection-anchor');
		var currentItem = '';

		for (var i=0;i<anchors.length;i++){
			if (elementInView(anchors[i])){
				currentItem = anchors[i].dataset.pt;
				break;
			}
		}

		window.history.replaceState('','','#subsection-'+currentItem);

		document.querySelectorAll('navbar .navbar-item').forEach(function(el){
			if (el.dataset.item == currentItem){
				el.classList.add('active');
				document.querySelector('navbar').scrollTop = el.parentNode.parentNode.offsetTop;
			} else {
				el.classList.remove('active');
			}
		});
	}

	if (document.location.hash.split('-')[0] == '#subsection'){
		var elm = document.getElementById(decodeURIComponent(document.location.hash.substring(1)));
		elm.parentNode.classList.add('expanded');
		setTimeout(function(){
			elm.scrollIntoView({behavior: "smooth"});
		}, 10);
	}

	document.addEventListener('scroll', updateSidebar);
})