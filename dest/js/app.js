"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	btn.addEventListener("click", function (ev) {
		var elem = ev.currentTarget;

		elem.classList.toggle("is-active");

		if (mobileContainer.classList.contains('is-open')) {
			mobileContainer.classList.remove("is-open");
			mobileContainer.classList.add("is-animated");

			setTimeout(function () {
				mobileContainer.classList.remove("is-animated");
			}, 300);
		} else {
			mobileContainer.classList.add("is-open");
		}

		hideScrollContainer.forEach(function (val, idx) {
			val.classList.toggle("is-hideScroll");
		});
	});
};

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

	var countScroll = $(window).scrollTop(),
	    headerElement = $('.header');

	if (countScroll > 10) {
		headerElement.addClass("header--fixed");
	} else {
		headerElement.removeClass("header--fixed");
	}
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

	svg4everybody();
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

	/**
   * @description
  */
	WebFont.load({
		google: {
			families: ['Roboto:100,300,400,500,700,900']
		}
	});

	/**
   * @description
  */
	// const WebFontConfig = {
	//   custom: {
	//     families: [
	//       'Lato:n1,n3,n4,n5,n6,n7,n9'
	//     ]
	//   }
	// };
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {
	initHeaderFixed();
});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {
	initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var inputFocusAnimated = function inputFocusAnimated() {
		var inputElem = $("[input-js]");

		inputElem.on("focus", function (e) {
			var curElem = $(e.target);

			curElem.closest(".about__form-field").addClass("is-focus");
		});

		inputElem.on("blur", function (e) {
			var curElem = $(e.target),
			    curElemVal = curElem.val().trim();

			if (curElemVal === "") {
				curElem.closest(".about__form-field").removeClass("is-focus");
			}
		});
	};

	var headerFixedReverse = function headerFixedReverse() {
		var elSelector = 'header',
		    $element = $(elSelector);

		if (!$element.length) return true;

		var elHeight = 0,
		    elTop = 0,
		    $document = $(document),
		    dHeight = 0,
		    $window = $(window),
		    wHeight = 0,
		    wScrollCurrent = 0,
		    wScrollBefore = 0,
		    wScrollDiff = 0;

		$window.on('scroll', function () {

			elHeight = $element.outerHeight();
			dHeight = $document.height();
			wHeight = $window.height();
			wScrollCurrent = $window.scrollTop();
			wScrollDiff = wScrollBefore - wScrollCurrent;
			elTop = parseInt($element.css('top')) + wScrollDiff;

			if (wScrollCurrent <= 0) $element.css('top', 0);else if (wScrollDiff > 0) $element.css('top', elTop > 0 ? 0 : elTop);else if (wScrollDiff < 0) {
				if (wScrollCurrent + wHeight >= dHeight - elHeight) $element.css('top', (elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0);else $element.css('top', Math.abs(elTop) > elHeight ? -elHeight : elTop);
			}

			wScrollBefore = wScrollCurrent;
		});
	};

	var lessDesc = function lessDesc() {
		var nWords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
		var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '[less-js]';


		$(className).each(function (ind, val) {
			var lessText = $(this).text().substring(0, nWords).trim();

			$(this).html(lessText + "...");
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initHamburger();
		// ==========================================

		// callback
		inputFocusAnimated();
		headerFixedReverse();
		lessDesc();
		// ==========================================
	};
	initNative();
})();