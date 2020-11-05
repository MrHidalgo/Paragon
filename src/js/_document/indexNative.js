/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const inputFocusAnimated = () => {
		const inputElem = $("[input-js]");

		inputElem.on("focus", (e) => {
			let curElem = $(e.target);

			curElem.closest(".about__form-field").addClass("is-focus");
		});

		inputElem.on("blur", (e) => {
			let curElem = $(e.target),
				curElemVal = curElem.val().trim();

			if(curElemVal === "") {
				curElem.closest(".about__form-field").removeClass("is-focus");
			}
		});
	};

	const headerFixedReverse = () => {
		let elSelector = 'header',
			$element = $(elSelector);

		if (!$element.length) return true;

		let elHeight = 0,
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

			if (wScrollCurrent <= 0)
				$element.css('top', 0);
			else if (wScrollDiff > 0)
				$element.css('top', elTop > 0 ? 0 : elTop);
			else if (wScrollDiff < 0) {
				if (wScrollCurrent + wHeight >= dHeight - elHeight)
					$element.css('top', (elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0);
				else
					$element.css('top', Math.abs(elTop) > elHeight ? -elHeight : elTop);
			}

			wScrollBefore = wScrollCurrent;
		});
	};


	const lessDesc = (nWords = 100, className = '[less-js]') => {

		$(className).each(function(ind, val) {
			const lessText = $(this).text().substring(0, nWords).trim();

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
	const initNative = () => {
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
