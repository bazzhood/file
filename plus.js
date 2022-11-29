  // get IDs from dynamic person_type field
			$("input[id^='wc_bookings_field_persons_']").each(function() {
  				var id = parseInt(this.id.replace("wc_bookings_field_persons_", ""), 10);
  				var qty = $("#wc_bookings_field_persons_" + id);
  				
				// target the form
				$('form.cart').on( 'click', 'button.plus, button.minus', function() {
				
				  // Get current quantity values
				  var qty = $( this ).closest( 'form.cart' ).find( "#wc_bookings_field_persons_" + id);
                   // also tried this 
                    // var qty = $( this ).closest( 'form.cart' ).find( "#wc_bookings_field_persons_" + id + ".qty");

				  var val   = parseFloat(qty.val());
				  var max = parseFloat(qty.attr( 'max' ));
				  var min = parseFloat(qty.attr( 'min' ));
				  var step = parseFloat(qty.attr( 'step' ));
	   
				  // Change the value if plus or minus
				  if ( $( this ).is( '.plus' ) ) {
					 if ( max && ( max <= val ) ) {
						qty.val( max );
					 } 
				  else {
					 qty.val( val + step );
					   }
				  } 
				  else {
					 if ( min && ( min >= val ) ) {
						qty.val( min );
					 } 
					 else if ( val > 1 ) {
						qty.val( val - step );
					 }
				  }	
			
			});

       });
