var scrollToTop = function() {
	document.getElementsByClassName('pane-chat-body')[0].scrollTop = 0;
}

var displayCheckboxes = function() {
	document.getElementsByClassName('icon-menu')[1].click();
	document.getElementsByClassName('menu-shortcut')[1].click();
}

var checkBoxes = function() {
	var list = document.getElementsByClassName('unchecked');
	var length = list.length;
	for (var i = length - 1; i >= 0; i--) {
		list[i].parentElement.click();
	}
	return length;
}

var deleteElements = function() {
	document.getElementsByClassName('icon-delete')[0].click();
	document.getElementsByClassName('btn-default')[0].click();
}

var hideSystemMessages = function() {
	var systemMessages = document.getElementsByClassName('message-system');

	while (systemMessages.length) {
		var element = systemMessages[0].parentNode;
		element.parentNode.removeChild(element);
	}
}

var loadMessages = setInterval(function() {
	scrollToTop();
	var qty = document.getElementsByClassName('message-chat').length;
	console.log(qty);
	if (qty > 2000) {
		clearInterval(loadMessages);
	}
}, 1000);
