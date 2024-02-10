$(document).ready(function() {
    let random_place;
    generateRandomPlace();

    const canvas = $('#abacus_canvas');
    canvas.css({'width': canvas.prop('width') + 'px'});

    const rail = $('#abacus_rails');
    rail.on('change', function() {
        canvas.css({'width': canvas.prop('width') + 'px'});
    });

    const random_input = $('#random_input');
    random_input.on('change', generateRandomPlace);

    function generateRandomPlace() {
        let value = $('#random_input').val();
        random_place = 1;
        for(let i = 0; i < value; i++) {
            random_place += '0';
        }
        random_place = parseInt(random_place);
        return random_place;
    }
    
    const random = $('#random');
    const random_number = $('#random_number');
    random.on('click', function() {
        random_place = random_place ? random_place : 10;
        let number = '';
        number += Math.floor(Math.random() * random_place);
        random_number.text(number);
    });

    const output = $('#abacus_p');
    output.on('DOMSubtreeModified', function(){
        if(random_number.text() == output.text()){
            random_number.addClass('correct')
        } else {
            random_number.removeClass('correct')
        }
    })
      
});