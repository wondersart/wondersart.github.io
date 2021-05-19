$(document).ready( () => {
    let jsonData = {
        "author":"Working Author",
        "title":"Working Title",
        "category":"Work Category",
        "description":"Office ipsum",
        "content":"Hit the ground running gage [sic] where the industry is heading and give back to the community what we’ve learned where the metal hits the meat viral engagement, nor optics I just wanted to give you a heads-up. Let's put a pin in that shotgun approach, so goalposts, out of scope you must be muted. My capacity is full do i have consent to record this meeting what are the expectations or race without a finish line, yet data-point product management breakout fastworks net net. 4-blocker both the angel on my left shoulder and the devil on my right are eager to go to the next board meeting and say we’re ditching the business model where do we stand on the latest client ask. creativity requires you to murder your children they have downloaded gmail and seems to be working for now nail it down but clear blue water and table the discussion , or work so not enough bandwidth. That's not on the roadmap drive awareness to increase engagement we need to aspirationalise our offerings performance review herding cats, for low engagement this is a no-brainer.",
        "date":"2021-May-17",
        "image":"assets/01.jpeg",
        "next":"Next Work",
        "nexturl":"gallery.html?token=2"
    };
    $.ajax({
        url:'https://api.wonders.art/v1/token/0',
        contentType: "application/json",
    }).done((rsp)=>{
        if(rsp!=null && rsp.data!=null){
            console.log("resp",rsp.data);
            jsonData = Object.assign(jsonData,rsp.data.display);
            jsonData.nexturl = window.location.href+"?token="+rsp.data.next;
        }
    })
    console.log('params',new URLSearchParams(window.location.search));
    $.get('templates/gallery.hbs',  (data) => {
        var template=Handlebars.compile(data);
        $('#wrapper').html(template(jsonData));
    }, 'html');
});