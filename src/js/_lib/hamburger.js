

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
	 */
	btn.addEventListener("click", (ev) => {
    const elem = ev.currentTarget;

		elem.classList.toggle("is-active");

    if(mobileContainer.classList.contains('is-open')) {
			mobileContainer.classList.remove("is-open");
			mobileContainer.classList.add("is-animated");

			setTimeout(() => {
				mobileContainer.classList.remove("is-animated");
			}, 300);
		} else {
			mobileContainer.classList.add("is-open");
		}

    hideScrollContainer.forEach((val, idx) => {
      val.classList.toggle("is-hideScroll");
    });
  });

};
