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
				top: '0',
			}, 'fast')

		} else if (direction == 'down') {
			navigation.animate({
				top: '-56px'
			}, 'fast', function () {
				if ($.default(origin.item).hasClass('respinsive_section')) {
					if (!$.default('#navigation-item-container').is(':hidden')) {

						$.default('#mobile-responsive-btn').click()

					}
				}


			})

		}
	},
	afterResponsive: function (isResponsive: boolean) {

		if (isResponsive) {
			$.default('#contact-us, #contact-us .fp-tableCell').css('height', 'auto')
			$.default('#scheduleStn, #scheduleStn .fp-tableCell').css('height', 'unset')

			$.default('.section').addClass('respinsive_section')


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

//emailjs scripts
const EmailJS = require('emailjs-com');

EmailJS.init("user_5AY8slzcveJjmILxmVqZe");

$.default('#submitBtn').click(function(e) {
	e.preventDefault();
	console.log("entered");
	// var name    = document.getElementById('inputName');
	var name=$.default("#contact-name").val();
	// var email   = document.getElementById('inputEmail');
	var email=$.default("#contact-email").val();
	// var message = document.getElementById('inputMessage');
	var message=$.default("#contact-message").val();

	var content={"message":message,"name":name,"email":email};
	console.log(content);
	EmailJS.send("gmail", "template_V9Ko7dFs", content, "user_5AY8slzcveJjmILxmVqZe").then(function(response:any) {
		console.log('SUCCESS!', response.status, response.text);
	}, function(error:any) {
		console.log('FAILED...', error);
	});
});





