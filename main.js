var images = ["https://th.bing.com/th/id/R.9a5d14bb89c8a75b3cd5e7af9cd27d6f?rik=OfBQoQCj4fTm5w&riu=http%3a%2f%2fmedia.hdp.hbgusa.com%2fcoverimages%2f9780316070409%2f&ehk=FJoWZXnvlx6sOr285ytCeUQTxjJ7todg%2b9g%2fPJOp3os%3d&risl=&pid=ImgRaw&r=0",
"https://cdn4.vectorstock.com/i/1000x1000/46/23/cute-grandfather-cartoon-vector-17814623.jpg",
 "https://th.bing.com/th/id/OIP.33qMs8SSU9s5jRBebqivtAAAAA?w=178&h=349&c=7&r=0&o=5&pid=1.7" ,
  "https://th.bing.com/th/id/R.9d9bff270125a30adb3aa83543106d0b?rik=A3XwCQ9qmS8BGg&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f2068%2f3659%2ffiles%2fFatherTimeBread_FelixBust.png%3fv%3d1510449596&ehk=XoqTtCoPvxWBeNhCfAsg%2b%2bweYBCvq6UEIHKxK2H8uzk%3d&risl=&pid=ImgRaw&r=0" ,
   "https://th.bing.com/th/id/R.4f4f5dbd7085e7208b2263c0371baf74?rik=2Nr4oFwtNEyO%2fA&riu=http%3a%2f%2fclipground.com%2fimages%2fgrandmother-clipart-4.jpg&ehk=%2f%2bYsFoFfsvYEHa6Qe8XLItZ%2fWn35Z4qIk3EUk1UeN64%3d&risl=&pid=ImgRaw&r=0" ,
    "https://img.welovesolo.com/wp-content/image/01/Cartoon-kid-with-soccer-vectors-1158.jpg"];
var names = ["Family Book","Grandfather", "Mother", "Father", "Grandmother", "Dhairya"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code t store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
