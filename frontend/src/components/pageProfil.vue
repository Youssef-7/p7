<template>
    <header>
      <nav>
        <div class="navBar">
            <div class="socialTitle">
              <h1>Groupomania</h1>
            </div>
            <div class="searchBar">
              <div class="search">
                <button type="submit" class="searchButton">
                 <i class="fa fa-search"></i>
                </button>
                <input type="text" class="searchTerm" placeholder="Rechercher">
            </div>
            </div>
            <div class="userButton">
                <button type="submit" class="profilButton">
                <i class="fas fa-user"></i>
                <i class="fas fa-chevron-down"></i>
                </button>
            </div>   
        </div>
      </nav>
    </header>
    <section id="profilTop">
    <section id="fondProfil">
      <div class="fondProfil">
        <img src="https://ih1.redbubble.net/image.692961833.0267/fposter,small,wall_texture,product,750x1000.jpg">
      </div>
      <div class="fotoProfil">
        <img src="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F12.2F07.2F4cff230b-512f-4b1d-abbb-90bf253fa9f2.2Ejpeg/345x258/quality/80/crop-from/center/chuck-norris.jpeg">
      </div>
    </section>
    <div class="name">
      <h1>Chuck Norris</h1>
    </div>
    </section>
    <section id="buttonModif">
      <div>
      <i class="far fa-edit"></i>
      <span>Modifier le profil</span>
      </div>
    </section>
    <section id="toolBar">
      <div class="BarPublications"><span>Publiations</span></div>
      <div ><span>A propos</span></div>
      <div><span>Amis</span></div>
      <div class="Photos"><span>Photos</span></div> 
    </section>
    <section id="statut">
          <div class="publication">
        <form>
          <input name="createPost" class="createPost" placeholder="Quoi de neuf ?" type="text">
        </form>
        <div class="sendPics">
          <i class="far fa-images"></i>
        </div>
        <div class="send">
          <button class="sendPublication">Envoyer</button>
        </div>
      </div>
    </section>
    <section id= monProfil>
      <div id="userInformation">
        <div class="myPicture">
          <div><h1>Photos</h1></div>
          <div class="pictureList">
            <div class="pictureShow"><img src="http://www.imcdb.org/i427377.jpg"></div>
            <div class="pictureShow"><img src="https://media.gettyimages.com/photos/walker-texas-ranger-a-cbs-television-western-chuck-norris-january-1-picture-id1176207312"></div>
            <div class="pictureShow"><img src="https://i.pinimg.com/originals/6a/eb/1b/6aeb1b391de374c13acaffc160ce5bb8.jpg"></div>
          </div>
        </div>
        <div class="myFriend">
          <div><h1>Mes amis</h1></div>
          <div class="friendList">
            <div class="friendShow"><img src="https://stock.wikimini.org/w/images/4/4d/Bob_l%27%C3%A9ponge-Personnage.jpg"><span>Lorem ipsum</span></div>
            <div class="friendShow"><img src="https://static.wikia.nocookie.net/mugenpedia/images/f/f8/200px-Patrick_Star.svg.png/revision/latest?cb=20130812201248&path-prefix=fr"><span>Lorem ipsum</span></div>
            <div class="friendShow"><img src="https://static.wikia.nocookie.net/bob-leponge/images/0/05/Squidward_stock_art.png/revision/latest/top-crop/width/360/height/450?cb=20190801142211&path-prefix=fr"><span>Lorem ipsum</span></div>
            <div class="friendShow"><img src="https://static.wikia.nocookie.net/bob-leponge/images/4/49/Bob_l%27%C3%A9ponge_Sandy.png/revision/latest/top-crop/width/360/height/450?cb=20170310013502&path-prefix=fr"><span>Lorem ipsum</span></div>
            <div class="friendShow"><img src="https://static.wikia.nocookie.net/bob-leponge/images/7/7b/Krabs_artwork.png/revision/latest?cb=20190725100918&path-prefix=fr"><span>Lorem ipsum</span></div>
            <div class="friendShow"><img src="https://ih1.redbubble.net/image.451320542.1814/raf,750x1000,075,t,FFFFFF:97ab1c12de.u3.jpg"><span>Lorem ipsum</span></div>
            <div class="friendShow"><img src="https://static.wikia.nocookie.net/bob-leponge/images/f/f7/Bob_l%27%C3%A9ponge_Gary.png/revision/latest?cb=20170310013647&path-prefix=fr"><span>Lorem ipsum</span></div>
            <div class="friendShow"><img src="https://static.wikia.nocookie.net/spongebob/images/0/05/Larry_the_Lobster_stock_image_standing.png/revision/latest?cb=20191104014514"><span>Lorem ipsum</span></div>
          </div>
        </div>
      </div>
      <div id="userPublication1">
        <div class="profilPublication">
        <div class ="titrePublications">
          <h1>Mes publications</h1>
        </div>
        <div class="flexPart2">
        <div class="flexPart1">
            <div class="imgProfilPublicationPart1">
              <img src="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F12.2F07.2F4cff230b-512f-4b1d-abbb-90bf253fa9f2.2Ejpeg/345x258/quality/80/crop-from/center/chuck-norris.jpeg">
            </div>
          <div class="profilPublicationPart1">
            <h1>Chuck Norris</h1>
            <p>07/11/2021</p>
          </div>
        </div>
          <div class="profilPublicationPart2">
            <div><i class="fas fa-bars"></i></div>
          </div>
        </div>
        <div class="profilPublicationPost">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit, lorem at scelerisque aliquam, eros mauris suscipit ante, vitae auctor lorem justo pulvinar nunc. Vestibulum tristique ex sem, id rhoncus quam tristique vitae. Pellentesque felis ipsum, varius vitae lorem eu, pharetra mollis sapien. Nam lobortis, sapien in pretium efficitur, lectus eros porta tortor, quis egestas enim lectus a erat. Maecenas ac rutrum nulla. Nunc finibus nisl vel nunc consectetur fermentum. Curabitur pellentesque tristique neque quis laoreet. Fusce consequat leo eu ligula hendrerit placerat. Sed a imperdiet enim, nec venenatis ex. </p>
          <div class="profilPublicationPostImg">
            <img src="http://www.imcdb.org/i427377.jpg">
          </div>
          <div class="profilPublicationPostInter">
            <div class="profilPublicationPostInterDivLike">
              <div><i class="far fa-thumbs-up"></i></div>
              <p>J'aime</p>
            </div>
            <div class="profilPublicationPostInterDivCom">
              <div><i class="far fa-comment-dots"></i></div>
              <p>Commenter</p>
            </div>
          </div>
          <div class="commentZone">
            <div class="imgProfilPublicationPart1">
              <img src="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F12.2F07.2F4cff230b-512f-4b1d-abbb-90bf253fa9f2.2Ejpeg/345x258/quality/80/crop-from/center/chuck-norris.jpeg">
            </div>
            <form>
              <input name="createPost" class="createPost" placeholder="Ecrivez un commentaire..." type="text">
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
    <footer>
    </footer>
</template>
<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
body{
    margin : 0px;
    padding: 0px;
    margin: 0px;
    background-color: #EBEFF0;
}
a{ 
text-decoration: none; }
.navBar{
    display: flex;
    width: 100%;
    background-color: white;
    box-shadow: 1px 11px 16px -5px rgba(0,0,0,0.39);
    margin: 0;
    position: fixed;

}
/*logo*/
.socialTitle{
    margin-left: 10px;
    margin-right: 15%;
}
.socialTitle h1{
    font-family: "Dancing Script" ;
    margin-left: 30px;
    color: #7FB49F;
    letter-spacing: .15em;
    text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC;
}
/***barre de recherche***/
/*bloc*/
.searchBar{
    width: 40%;
    padding-top: 20px;
    padding-right: 15px;
/*barre de recherche*/
}
.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #EFEEEE;
  border-left: none;
  padding: 5px;
  height: 20px;
  border-radius: 0px 5px 5px 0px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #A9A9A9;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 3px solid #EFEEEE;
  border-right: none;
  background: #DFDFDF;
  color: #fff;
  border-radius: 5px 0px 0px 5px;
  cursor: pointer;
  font-size: 20px;
}
.userButton{
  width: 30%;
  padding-top: 18px;
 padding-right: 30px;
}
.profilButton{
    float: right;
    padding: 10px;
    border: none;
    background-color: white;
}
.profilButton:hover{
    border: 3px solid #A9A9A9 ;
    border-radius: 10px;
}
#profilTop{
    position: relative;
    height: 430px;
    z-index: -2;
    background: rgb(194,190,190);
    background: linear-gradient(176deg, rgba(194,190,190,1) 9%, rgba(221,221,221,0.896796218487395) 36%, rgba(255,255,255,1) 94%);
}
#fondProfil{
    margin: 0px auto;
    width: 80%;
    max-width: 1070px;
    height: 300px;
    background-color: grey;
    display: flex;
    border-radius: 10px;
}
.fondProfil{
    width: 100%;
    height: 100%;
}
.fondProfil img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
}
.fotoProfil{
    position: absolute;
    width: 180px;
    height: 180px;
    background-color: black;
    margin-top: 150px;
    margin-left: 437px;
    border-radius: 50%;
}
.fotoProfil img{
   width: 100%;
   height: 100%;
   border-radius: 50%;
}
#buttonModif{
    background-color: white;
    display: flex;
    justify-content: center;
}
#buttonModif div{
    background-color: red;
    padding: 10px;
    border-radius: 8px;
    background-color:#A2D6A8;
    box-shadow: 0px 0px 8px -2px #B4B4B4;
}
#buttonModif div:hover{
    background-color: #90E795;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}
#buttonModif span{
    font-size: 20px;
    color: white;
    font-family: "calibri";
}
#buttonModif i{
    color: white;
    margin-right: 5px;
}
.name{
    margin-top: 60px;
    display: flex;
    justify-content: center;
}
.name h1{
    font-family: "calibri";
    font-weight: bold;
    color: black;
    font-size: 35px;
}

#toolBar{
    height: 80px;
    display: flex;
    margin:0 ;
    width: 100%;
    padding-top: 20px;
    background-color: white;
    box-shadow: 0px 3px 6px 0px rgba(180,180,180,0.56);
}
#toolBar div{
    width: 16.75%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #D3D0D0 ;
}
.BarPublications{
    margin-left: 26%;
}
.Photos{
    margin-right: 20%;
}
#toolBar span{
    font-size: 20px;
    color: #92CA91;
    font-family: "calibri";
    font-weight: bold;

}
#toolBar div:hover{
    background-color: #E9ECE9;
    transition: 0.5s ease-in-out;
    cursor: pointer;
}
#toolBar div:active{
    color: #7FB49F;
    border-bottom: 10px solid #7FB49F;
    cursor: pointer;
}
#toolBar span:active{
    color: #7FB49F ;

}
#statut{
    max-width: 100%;
    max-width: 1230px;
    background-color: white;
    height: 130px;
    margin: 50px auto;
    border: solid 2px #CACACA;
    border-radius: 20px;
    display: flex;
    box-shadow: 0px 0px 8px -2px #B4B4B4;
}
.publication{
    width: 70%;
    height: 50px;
    padding: 10px;
    background-color: white;
    margin: 30px auto;
    border: 1px solid #E3E3E3;
    border-radius: 9px;
    display: flex;  
}
form {
    width: 50%;
    margin-right: 30px;
}
.createPost{
    width: 100%;
    height: 50px;
    
}
.publication input{
    font-size: 14px;
    background-color: #F7F3F3;
    border:1px solid #F3F2F2;
    border-radius: 10px;
}
.sendPics{
    width: 5%;
    padding-top: 15px;
    margin-right: 0px;
    text-align: center;
}
.sendPics i {
    font-size: 20px;
    color: #C3DBE1;
}

.send{
    width: 30%;
    padding-top: 10px;
    padding-left: 90px;
    margin-left: 100px;
}
.send button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 15px;
    background-color: #FBEAA2;
    font-weight: bold;
    cursor: pointer;
}

#monProfil{
    max-width: 1230px;
    margin: auto;
    min-height: 400px;
    display: flex;
    justify-content: space-between;
    width: 100%;
}
#userInformation{
    width: 50%;

}
.myPicture{
    width: 80%;
    margin:2% auto;
    min-height: 180px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 0px 8px -2px #B4B4B4;
}
.myPicture h1{
    padding-top: 30px;
    padding-left: 30px;
    font-family: 'calibri';
}
.pictureList{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.pictureShow{
    width: 60%;
    height: 150px;
    margin-right:10px;
    margin-left: 10px;
    margin-bottom: 30px;
    border-radius: 10px;   

}
.pictureShow img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;   

}
.myFriend{
    width: 80%;
    margin:2% auto;
    min-height: 180px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 0px 8px -2px #B4B4B4;
}
.myFriend h1{
    padding-top: 30px;
    padding-left: 30px;
    font-family: 'calibri';
}
.friendList{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.friendShow{
    width: 20%;
    height: 90px;
    margin-left: 10px;
    margin-bottom: 30px;
    border-radius: 10px;   

}
.friendShow img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    border: 0.2px #D3D0D0 solid;
}
.friendShow h3{
    text-align: center;
}
#userPublication1{
    width: 50%;
}
.titrePublications{
    margin-top: 20px;
    width: 100%;
    height: 20%;
    font-family: 'calibri';
    border-radius: 10px;
    background-color: white;
    border-bottom: 1px solid #D3D0D0;
}
.titrePublications h1{
    padding-top: 20px;
    padding-left: 20px;
}
.profilPublication{
    width: 100%;
    background-color: white;
    margin-top: 0;
    box-shadow: 0px 0px 8px -2px #B4B4B4;
    border-radius: 10px;
    margin-bottom: 50px;
}
.flexPart1{
    display: flex;
}
.imgProfilPublicationPart1{
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 8px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
}
.imgProfilPublicationPart1 img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.profilPublicationPart1{
    padding-top: 10px;
    min-width: 10%;
}
.profilPublicationPart1 h1,p{
    margin-top: 0;
    margin-bottom: 0;
    font-family: "calibri";
}
.flexPart2{
    display: flex;
    justify-content: space-between;
}
.profilPublicationPart2{
    padding-top: 10px;
    width: 50px;
    height: 50px;
}
.profilPublicationPost p{
    margin: 5px 10px;
    font-family: "calibri";
}
.profilPublicationPostImg{
    margin-top: 20px;
    width: 100%;
    height: 200px;
}
.profilPublicationPostImg img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.profilPublicationPostInter{
    display: flex;
    margin: 20px 40px;
    border-top: 1px solid #D3D0D0;
    padding-top: 10px;
}

.profilPublicationPostInterDivCom{
    display: flex;
    margin-left: 40%;
}
.profilPublicationPostInterDivLike{
    display: flex;
    font-family: "calibri";
}
.commentZone{
    display: flex;
    justify-content: center;
    border-top: 1px solid #D3D0D0;
    padding-top: 10px;
}
.commentZone input{
    border-radius: 20px;
    border: solid 2px #D3D0D0;
}
.imgProfilPublicationPart1 img{
    border-radius: 50%;
    object-fit: cover;
}
</style>
