$(document).ready( () => {
    let jsonData = {
        "author":"Working Author",
        "title":"Working Title",
        "category":"Work Category",
        "description":"Very nice!",
        "content":"Extremely, very nice",
        "date":"2021-May-17",
        "image":"http://tavonline.net/html/gorge2/dark/images/portfolio/work-1/01.jpg",
        "next":"Next Work",
        "nexturl":"gallery.html?2"
    }
    $.get('templates/gallery.hbs',  (data) => {
        var template=Handlebars.compile(data);
        $('#wrapper').html(template(jsonData));
       // $('#wrapper').html('abcd');
    }, 'html');
});