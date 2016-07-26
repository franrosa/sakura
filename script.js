document.addEventListener("DOMContentLoaded", function() {
	/* Collection Demo */
	var allGroups = document.querySelectorAll('#collection-demo .button-group');
	var collectionDemoContainer = document.querySelector('#collection-demo .card-collection');
	[].forEach.call(allGroups,function(j){
		var defaultSelectedValue = j.children[0];
		var classToAdd = 'card-collection--';
		classToAdd += defaultSelectedValue.textContent || defaultSelectedValue.innerText;
		collectionDemoContainer.classList.add(classToAdd);
		defaultSelectedValue.classList.add('selected');
	});
	var collectionDemoContainerClasses = collectionDemoContainer.classList;
	var classesDisplay = document.querySelector('#collection-demo pre');
	classesDisplay.innerHTML = '<span>All classes used:</span> ';
	[].forEach.call(collectionDemoContainerClasses,function(v){
		classesDisplay.innerHTML += v;
		classesDisplay.innerHTML += ' ';
	});
	var collectionDemoButtons = document.querySelectorAll('#collection-demo button');
	[].forEach.call(collectionDemoButtons,function(e){
		e.addEventListener('click', function(ee){
			ee.preventDefault();
			var buttonsOfGroup = e.parentElement.children;
			[].forEach.call(buttonsOfGroup,function(z){
				z.classList.remove('selected');
				var classToRemove = 'card-collection--';
				classToRemove += z.textContent || z.innerText;
				collectionDemoContainer.classList.remove(classToRemove);
			});
			var classToAdd = 'card-collection--';
			classToAdd += e.textContent || e.innerText;
			collectionDemoContainer.classList.add(classToAdd);
			e.classList.add('selected');
			var collectionDemoContainerClasses = collectionDemoContainer.classList;
			var classesDisplay = document.querySelector('#collection-demo pre');
			classesDisplay.innerHTML = '<span>All classes used:</span> ';
			[].forEach.call(collectionDemoContainerClasses,function(v){
				classesDisplay.innerHTML += v;
				classesDisplay.innerHTML += ' ';
			});
		});
	});
/* Width Demo */
	var inputMinWidth, inputMaxWidth, growableButton, shrinkableButton, finalMinWidth, finalWidth, finalMaxWidth, labelMinWidth, labelMaxWidth;
	inputMinWidth = document.querySelector('#minsizeinput');
	inputMinWidth.addEventListener('input', function(){
		refreshValues();
	});
	inputMaxWidth = document.querySelector('#maxsizeinput');
	inputMaxWidth.addEventListener('input', function(){
		refreshValues();
	});
	finalMinWidth = document.querySelector('#finalminwidth');
	finalWidth = document.querySelector('#finalwidth');
	finalMaxWidth = document.querySelector('#finalmaxwidth');
	labelMinWidth = document.querySelector('.labelminwidth');
	labelMaxWidth = document.querySelector('.labelmaxwidth');
	function refreshValues() {
		if(growableButton.classList.contains('selected')){
			if(shrinkableButton.classList.contains('selected')){
				labelMinWidth.classList.remove('disabled');
				labelMaxWidth.classList.remove('disabled');
				finalMinWidth.innerHTML = inputMinWidth.value + 'px';
				finalMaxWidth.innerHTML = inputMaxWidth.value + 'px';
				finalWidth.innerHTML = parseInt(inputMinWidth.value) + parseInt((parseInt(inputMaxWidth.value) - parseInt(inputMinWidth.value)) / 2);
				finalWidth.innerHTML += 'px';
			} else {
				labelMinWidth.classList.add('disabled');
				labelMaxWidth.classList.remove('disabled');
				finalMinWidth.innerHTML = '';
				finalMaxWidth.innerHTML = inputMaxWidth.value + 'px';
				finalWidth.innerHTML = inputMinWidth.value + 'px';
			}
		} else {
			if(shrinkableButton.classList.contains('selected')){
				labelMinWidth.classList.remove('disabled');
				labelMaxWidth.classList.add('disabled');
				finalMinWidth.innerHTML = inputMinWidth.value + 'px';
				finalMaxWidth.innerHTML = '';
				finalWidth.innerHTML = inputMaxWidth.value + 'px';
			} else {
				labelMinWidth.classList.add('disabled');
				labelMaxWidth.classList.add('disabled');
				finalMinWidth.innerHTML = '';
				finalMaxWidth.innerHTML = '';
				finalWidth.innerHTML = inputMinWidth.value + 'px';
			}
		}
	}
	var widthDemoButtons = document.querySelectorAll('#width-demo button');
	[].forEach.call(widthDemoButtons,function(e){
		var buttonText = e.textContent || e.innerText;
		if(buttonText == 'growable'){
			growableButton = e;
		} else if(buttonText == 'shrinkable'){
			shrinkableButton = e;
		}
		e.addEventListener('click', function(ee){
			ee.preventDefault();
			e.classList.toggle('selected');
			refreshValues();
		});
	});
	refreshValues();
});