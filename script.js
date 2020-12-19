const themes = {
	dark: {
		'--color-bg': '#F7E7EF',
		'--color-brand': '#FFF',
		'--color-header': '#92084C',
		'--color-main': '#5B0932',
		'--color-nav': '#B81365',
		'--color-nav-item': '#E2A0C1',
		'--color-nav-item-hover': '#FFF'
	},
	light: {
		'--color-bg': '#B81365',
		'--color-brand': '#B81365',
		'--color-header': '#F4E6ED',
		'--color-main': '#F2F2F2',
		'--color-nav': '#FFF',
		'--color-nav-item': '#D471A3',
		'--color-nav-item-hover': '#B81365'
	}
};
let currentTheme = 'dark';

function toggleTheme(e) 
{
	console.log(e);
	if (e) 
	{
		e.currentTarget.classList.toggle('filled');
	}
	currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
	const currentStyles = themes[currentTheme];
	const style = document.body.style;

	for (var key in currentStyles) {
		style.setProperty(key, currentStyles[key]);
	}
}

document.getElementById('toggler').addEventListener('click', toggleTheme);

console.log('git automated deploy private :/');