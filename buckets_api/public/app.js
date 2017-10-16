$(document).ready(function(){
    $.getJSON('/api/buckets')
    .then(addBuckets)
});

function addBuckets(buckets){
    buckets.forEach(function(bucket){
        var newBucket = $('<li class="task">' + bucket.name + '</li>');
        if(bucket.completed){
            newBucket.addClass("done");
        }
        $('.list').append(newBucket);
    });
}