$(document).ready(function(){
    $.getJSON('/api/buckets')
    .then(addBuckets)
    
    $('#Input').keypress(function(e){
        if(e.which == 13){
            createBucket();
        }
    });
    
    $('.list').on('click', 'li', function(){
        updateBucket($(this))
    });

    $('.list').on('click', 'span', function(e){
        e.stopPropagation();
        removeBucket($(this).parent());
    })
});

function addBuckets(buckets){
    buckets.forEach(function(bucket){
        addBucket(bucket);
    });
}

function addBucket(bucket){
    var newBucket = $('<li class="task">' + bucket.name + ' <span>X</span></li>');
    newBucket.data('id', bucket._id);
    newBucket.data('comopleted', bucket.completed);
    if(bucket.completed){
        newBucket.addClass("done");
    }
    $('.list').append(newBucket);
}

function createBucket(){
    var userInput = $('#bucketInput').val();
    $.post('/api/buckets',{name: userInput})
    .then(function(newBucket){
        $('#bucketInput').val('');
        addBucket(newBucket);
    })
    .catch(function(err){
        console.log(err);
    })
}

function removeBucket(bucket){
    var clickedId = bucket.data('id');
    var deleteUrl = '/api/buckets/' + clickedId;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(function(data){
        bucket.remove();
    })
    .catch(function(err){
        console.log(err);
    })
}

function updateBucket(bucket){
    var updateUrl = '/api/buckets/' + bucket.data('id');
    var isDone = !bucket.data('conpleted');
    var updateData = {completed: isDone}
    $.ajax({
        method: "PUT",
        url: updateUrl,
        data: updateData
    })
    .then(function(updatedBucket){
        bucket.toggleClass("done")
        bucket.data('completed', isDone);
    })
}