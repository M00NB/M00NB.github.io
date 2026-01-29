var posts=["2025/09/28/小满/","2025/09/28/江城子，月见路遥/","2025/10/03/DC1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };