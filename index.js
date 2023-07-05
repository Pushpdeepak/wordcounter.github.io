let x=document.getElementById("text_box");
    x.addEventListener("input",function(){
        let text=this.value;
        let char=text.length;
        document.getElementById("char").innerHTML=char;

        let word=text.split(" ");
        let clean_list=word.filter(function(ele){
            return ele!="";
        });
        let count_word=clean_list.length;
        document.getElementById("word").innerHTML=count_word;

    }); 