import * as $ from 'jquery';

const IScroll = require('fullpage.js/vendors/scrolloverflow.js');
const FullPageJS = require('fullpage.js/dist/fullpage.extensions.min');

new FullPageJS('#fullpage', {
	//options here
	autoScrolling: true,
	scrollHorizontally: true,
	scrollOverflow: true,
	navigation: true,
	anchors: ['home', 'about', 'schedule', 'registration', 'organizers', 'contactus'],
	menu: '#navigation-items-container',
	responsiveWidth: '768',
	onLeave: function (origin: any, destination: any, direction: string) {
		const navigation = $.default('#nvigation');
		if (direction == 'up') {
			navigation.animate({
				top: '0'
			}, 'fast')
		} else if (direction == 'down') {
			navigation.animate({
				top: '-56px'
			}, 'fast', function () {
				if (!$.default('#navigation-item-container').is(':hidden')) {
					$.default('#mobile-responsive-btn').click()
				}
			})

		}
	},
	afterResponsive: function (isResponsive: boolean) {

		if (isResponsive) {
			$.default('#contact-us, #contact-us .fp-tableCell').css('height', 'auto')
			$.default('#scheduleStn, #scheduleStn .fp-tableCell').css('height', 'unset')
		}
	}
});

require('./smoke');

const mobile_responsive_nav_show_btn: any = $.default("#mobile-responsive-btn");

const mobileResponsiveNavShowBtnClickAction = () => {
	const nav_dropdown_container = $.default('#navigation-item-container');
	nav_dropdown_container.slideToggle(300, () => {
		if (nav_dropdown_container.is(':hidden')) {
			mobile_responsive_nav_show_btn[0].lastElementChild.textContent = 'menu'
		} else {
			mobile_responsive_nav_show_btn[0].lastElementChild.textContent = 'close'
		}
	})
};
mobile_responsive_nav_show_btn.click((e: any) => {
	mobileResponsiveNavShowBtnClickAction()
});

$.default('#navigation-items-container .nav-item button').click(e => {
	if (mobile_responsive_nav_show_btn[0].lastElementChild.textContent == 'close') {
		mobileResponsiveNavShowBtnClickAction()
	}
});

$.default('#fullpage').click(e => {
	if (mobile_responsive_nav_show_btn[0].lastElementChild.textContent == 'close') {
		mobileResponsiveNavShowBtnClickAction()
	}
});