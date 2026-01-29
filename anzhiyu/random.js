var posts=["2026/01/01/DC1/","2022/09/23/小满/","2025/09/28/江城子，月见路遥/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };