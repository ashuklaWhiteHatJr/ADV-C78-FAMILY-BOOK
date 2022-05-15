var images = ["Mom.jpg", "father.jpg", "brother.jpg", "boy cartoon.jpg"];


var names = ["Anamika Laad", "Saurabh", "Ishaan", "Avi"];



var i = 0;
function Update()
{
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    i++;
    var numbers_of_family_member_in_array = 4;
    if(i >= numbers_of_family_member_in_array )
    {
        i = 0;
    }
}
