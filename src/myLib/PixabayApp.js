class PixabayApp{
    #key;
    query=null;
    page=1;
    per_page=20;
    total_pages=null;
    lang="en";
    img_type="all";
    orientation="all";
    category=null;
    constructor(key){
        this.#key=key;
    }
    
    search(searchExp){
        //console.log(`current page=${this.getPage()}, perPage=${this.getPerPage()}`);
        this.query=`https://pixabay.com/api/?q=${searchExp}&page=${this.page}&key=${this.#key}&image_type=${this.img_type}&orientation=${this.orientation}&per_page=${this.per_page}`;
        return fetch(this.query).then(respons=>{
            //console.log(respons);
            if(!respons.ok){
                return new Error(respons.status);
            }
            return respons.json();
        })
        .then(data=>{
            //console.log(data);
            this.total_pages=Math.ceil(data.totalHits/this.per_page);
            return data;
        })
    }
//-------------------------------------seters-----------------------------------------
    setPage(newPage){
        this.page=newPage;
    }
    setPerPage(itemsOnPage){
        this.per_page=itemsOnPage;
    }
    setLanguege(newLang){
        this.lang=newLang;
    }
    setImgType(newType){
        this.img_type=newType;
    }
    setImgOrientation(newOrientation){
        this.orientation=newOrientation;
    }
//-------------------------------------geters-----------------------------------------
    getPage(){
        return this.page;
    }
    getPerPage(){
        return this.per_page;
    }
    getLanguege(){
        return this.lang;
    }
    getImgType(){
        return this.img_type;
    }
    getImgOrientation(){
        return this.orientation;
    }
    //------method--works--after--search------
    getTotalPages(){
        return this.total_pages;
    }
    //----------------------------------------
}



export default PixabayApp;