jQuery.fn.extend
({
	innoRadio : function() 
	{
		return this.each(function() {
			var html = '';

			var textPattern = $(this).data('text');
			var valuePattern = $(this).data('value');
			if (textPattern === undefined)
				textPattern = 'text';
			if (valuePattern === undefined)
				valuePattern = 'value';

			var name = $(this).data('name');
			var src = $(this).data('src');
			var checkedValue = $(this).data('checked-value');
			for (var n = 0; n < src.length; n++) {
				var checked = '';
				if (checkedValue == src[n][valuePattern])
					checked = ' checked';

				html += '<label><input type="radio" name="' + name + '" class="icheck" data-radio="iradio_square-grey"' + checked + ' value="' + src[n][valuePattern] + '" />' + src[n][textPattern] + '</label>';
//				html += '<label class="mt-radio mt-radio-outline">' + src[n].text + '<input type="radio" value="' + src[n].value + '" name="' + name + '" ' + checked + ' /><span></span></label>';
			}
			this.outerHTML = html;
			
        	$('input[type=radio].icheck').iCheck({
    			radioClass: 'iradio_square-grey',
        	});
		});
	},

	innoCheckbox : function() 
	{
		return this.each(function() {
			var html = '';

			var textPattern = $(this).data('text');
			var valuePattern = $(this).data('value');
			if (textPattern === undefined)
				textPattern = 'text';
			if (valuePattern === undefined)
				valuePattern = 'value';

			var name = $(this).data('name');
			var src = $(this).data('src');
			var checkedValue = $(this).data('checked-value');
			
			for (var n = 0; n < src.length; n++) {
				var checked = '';
				if (checkedValue == src[n][valuePattern])
					checked = ' checked';

				html += '<label><input type="checkbox" name="' + name + '" class="icheck" data-radio="icheckbox_square-grey"' + checked + ' value="' + src[n][valuePattern] + '" />' + src[n][textPattern] + '</label>';
			}
			this.outerHTML = html;
			
        	$('input[type=checkbox].icheck').iCheck({
    			checkboxClass: 'icheckbox_square-grey',
        	});
		});
	},

	innoSelect : function() 
	{
		return this.each(function() {
			$(this).val($(this).data('value'));
		});
	}

});
