document.getElementById(`myFile`).disabled = true;

document.getElementById(`submit`).addEventListener(`click`, function(){
    var imgPlace= document.getElementById(`placeholder`);
    
    if (document.getElementById(`man`).checked === true && (document.getElementById(`name`).value !== `` && document.getElementById(`name`).value !== `Name`) && (document.getElementById(`food`).value !== `` && document.getElementById(`food`).value !== `Favorite Food`)){
        document.getElementById(`myFile`).disabled = false;
        imgPlace.src = `pix/man.jpg`;
        imgPlace.alt = `Generic Man`;
        imgPlace.width = `300`;
        imgPlace.height = `300`;
        document.getElementById(`woman`).disabled = true;
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`name`).value;
        document.getElementById(`foodOut`).innerHTML = `Favorite Food: ` + document.getElementById(`food`).value;
    } 
    
    else if (document.getElementById(`woman`).checked === true && (document.getElementById(`name`).value !== `` && document.getElementById(`name`).value !== `Name`) && (document.getElementById(`food`).value !== `` && document.getElementById(`food`).value !== `Favorite Food`)){
        document.getElementById(`myFile`).disabled = false;
        imgPlace.src = `pix/woman.png`;
        imgPlace.alt = `Generic Woman`;
        document.getElementById(`man`).disabled = true;
        imgPlace.width = `300`;
        imgPlace.height = `300`;
        document.getElementById(`man`).disabled = true;
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`name`).value;
        document.getElementById(`foodOut`).innerHTML = `Favorite Food: ` + document.getElementById(`food`).value;
    }
    else if ((document.getElementById(`woman`).checked !== true && document.getElementById(`man`).checked !== true) || (document.getElementById(`name`).value === `` || document.getElementById(`name`).value === `Name`) || (document.getElementById(`food`).value === `` || document.getElementById(`food`).value === `Favorite Food`)){
        alert(`You must complete your profile before submitting!`);
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
