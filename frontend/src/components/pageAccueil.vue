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
    <section id="sectionPublication">
      <div class="publication">
        <form>
           <input v-model="createPostTitre" name="createPost" class="createPost" placeholder="Titre de la publication" type="text">
          <input v-model="createPost" name="createPost" class="createPost" placeholder="Quoi de neuf ?" type="text">
          <input type="hidden" id="p_title" name="p_title" value="{{p_title}}">
          <input type="hidden" id="p_parent" name="p_parent" value="{{p_id}}">
          <input type="hidden" id="p_user_id" name="p_user_id" value="{{p_user_id}}">
        <div class="sendPics">
          <i class="far fa-images"></i>
        </div>
        <div class="send">
          <button @click="sendPublication" class="sendPublication">Envoyer</button>
        </div>
        </form>
      </div>
    </section>
    <section id= "allPost">
    <div class="allPublication">
      <div class="publicationPost" v-for="post in posts" :key="post.id">
        <div class="profilPublication">
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
          <p>{{ post.p_text }}</p>
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
      <div class="publicationPost">
        <h1>Publication2</h1> 
      </div>
      <div class="publicationPost">
        <h1>Publication2</h1> 
      </div>
    </div>
    <div class="userView">
      <h1>Utilisateurs connectés</h1>
    <div class="user">
        <div class="myFriend">
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
    </div>
    </section>
    <footer>
    </footer>
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "pageAccueil",
  data() {
    return {
      posts: [],
      createPost: "",
      createPostTitre:"",
    };
  },
    created() {
    this.getPost();
  },
  methods: {
    // Create New product
    async getPost() {
      try {
        const response = await axios.get("http://localhost:3000/post");
        this.posts = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async sendPublication() {
      try {
        await axios.post("http://localhost:3000/post", {
          p_text: this.createPost,
          p_titre: this.createPostTitre,
        });
        this.createPost = "";
        this.createPostTitre = "";
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
body{
    margin : 0px;
    padding: 0px;
    margin: 0px;
    background-color: #EFEEEE;
}
a{ 
text-decoration: none; }
.navBar{
    display: flex;
    width: 100%;
    background-color: white;
    box-shadow: 1px 11px 16px -5px rgba(0,0,0,0.39);
    margin: 0;

}
/*logo*/
.socialTitle{
    margin-left: 10px;
    margin-right: 15%;
}
h1{
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

.publication{
    width: 70%;
    padding: 10px;
    background-color: white;
    margin: 50px auto;
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
#allPost{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.allPublication{
    min-height: 300px;
    width: 663px;
    margin-left: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

.myFriend{
    width: 80%;
    margin:2% auto;
    min-height: 180px;
    padding-top: 50px;
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
.userView{
    width: 50%;
}
</style>