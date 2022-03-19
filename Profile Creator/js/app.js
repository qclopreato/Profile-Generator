document.getElementById(`submit`).addEventListener(`click`, function(){
    //var img = new Image();
    //img.src = `pix/man.jpg`;
    //var img2 = new Image();
    //img2.src = `pix/woman.png`;
    var imgPlace= document.getElementById(`placeholder`);

    if (document.getElementById(`man`).checked === true && (document.getElementById(`name`).value !== `` && document.getElementById(`name`).value !== `Name`) && (document.getElementById(`food`).value !== `` && document.getElementById(`food`).value !== `Favorite Food`)){
        //imgPlace.parentNode.removeChild(imgPlace);
        imgPlace.src = `pix/man.jpg`;
        //document.getElementById(`picOut`).appendChild(img);
        imgPlace.alt = `Generic Man`;
        imgPlace.width = `300`;
        imgPlace.height = `300`;
        document.getElementById(`woman`).disabled = true;
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`name`).value;
        document.getElementById(`foodOut`).innerHTML = `Favorite Food: ` + document.getElementById(`food`).value;
    } 
    
    else if (document.getElementById(`woman`).checked === true && (document.getElementById(`name`).value !== `` && document.getElementById(`name`).value !== `Name`) && (document.getElementById(`food`).value !== `` && document.getElementById(`food`).value !== `Favorite Food`)){
        //imgPlace.parentNode.removeChild(imgPlace);
        imgPlace.src = `pix/woman.png`;
        //document.getElementById(`placeholder`).appendChild(img2);
        imgPlace.alt = `Generic Woman`;
        document.getElementById(`man`).disabled = true;
        imgPlace.width = `300`;
        imgPlace.height = `300`;
        document.getElementById(`man`).disabled = true;
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`name`).value;
        document.getElementById(`foodOut`).innerHTML = `Favorite Food: ` + document.getElementById(`food`).value;
    }
});

document.getElementById(`myFile`).addEventListener(`change`, function(){
    if(this.files && this.files[0]){
        var img3 = document.getElementById(`placeholder`);
        img3.onload = () => {
            URL.revokeObjectURL(img3.src);
        }
        img3.src = URL.createObjectURL(this.files[0]);
        img3.width = `300`;
        img3.height = `300`;
    }
});