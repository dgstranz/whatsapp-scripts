(function() {
	function scrollToTop() {
		document.getElementsByClassName('pane-chat-body')[0].scrollTop = 0;
	}

	function displayCheckboxes() {
		document.getElementsByClassName('icon-menu')[1].click();
		document.getElementsByClassName('menu-shortcut')[1].click();
	}

	function checkBoxes() {
		var list = document.getElementsByClassName('unchecked');
		var length = list.length;
		for (var i = length - 1; i >= 0; i--) {
			list[i].parentElement.click();
		}
		return length;
	}

	function deleteElements() {
		document.getElementsByClassName('icon-delete')[0].click();
		document.getElementsByClassName('btn-default')[0].click();
	}

	function hideSystemMessages() {
		var systemMessages = document.getElementsByClassName('message-system');
		var length = systemMessages.length;
		while (length) {
			var element = systemMessages[0].parentNode;
			element.parentNode.removeChild(element);
		}
		return length;
	}

	scrollToTop();
	displayCheckboxes();
	length = checkBoxes();
	deleteElements();
	console.log(length + ' elementos eliminados.');
})();
