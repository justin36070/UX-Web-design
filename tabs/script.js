/*
 * create a nodelist of the tabs
 *
 * each tab should be able to be clicked
 * 	when clicked each data tab target should be 
 * 		added to the active class
 */		

const tabs = document.querySelectorAll('[data-tab-target]')

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget)
		target.classList.add('active')
		})
	})

