jQuery(document).ready(function() {
	Tipped.create('#footnote1', 'The Right Way', {
		target: 'term1',
		offset: { y: 1 }
	});
	Tipped.create('#footnote2', 'The most rad PHP framework', {
		target: 'term2',
		offset: { y: 1 }
	});
});
