// LOGIN---------
const userlog = "Fero";
const passlog = "1234";

function checklogin(url){
    // let pesan = "wowkowko";
    let username,password;
    username = document.getElementById("username").value;
    password = document.getElementById("pass").value;
    if((userlog == username) && (passlog == password)){
        alert("login berhasil");
        alert("proses cek login : "+ username + " - " + password);
        window.location = url;
    }else{
        alert("Login gagal!!");
        clear();
    }

    if(username == userlog){
        alert("username berhasil!!");
    }else{
        alert("username salah!!");
        username = document.getElementById("username").value= "";
    }

    if(password == passlog){
        alert("password berhasil!!");
    }else{
        alert("Passward salah!!");
        password = document.getElementById("pass").value= "";
    }
 }

function clear(){
    username = document.getElementById("username").value= "";
    password = document.getElementById("pass").value= "";
}

                // --------SiGNUP--------

document.getElementById("kmenu").onkeyup = function(){
    let txtnama = document.getElementById("kmenu").value;
    let txtnama2 = txtnama.toLowerCase();
    document.getElementById("kmenu").value = txtnama2;
};
document.getElementById('tpt').onkeyup = function (){
    let txtnama = document.getElementById('tpt').value;
    let txtnama2 = txtnama.toUpperCase();
    document.getElementById('tpt').value = txtnama2;
}

document.getElementById("global1").onload = function(){
    let today = new Date();
    let dd = String(today.getDate());
    let yy = today.getFullYear();
    let tgl;

    today = dd + yy;
    tgl = document.getElementById('kode').value = "INV" + today + "001";
    pembayaran();
};
document.getElementById("hilang").onclick = function(){
    document.getElementById("tampil").style = "display:none;";
}
document.getElementById("masuk").onclick = function(){
    document.getElementById("tampil").style = "display:inline;";
    
    let menu = document.getElementById('kmenu').value;
        if(menu == "" || menu == null){
            document.getElementById("x1").style = "display:inline;";
        }else{
            document.getElementById('data1').innerHTML = menu;
        }

    let tempat = document.getElementById('tpt').value;
    let tanggal = document.getElementById('dat').value;

        if(tempat == "" || tempat == null || tanggal == "" || tanggal == null){
            document.getElementById("x2").style = "display:inline;";
        }else{
            document.getElementById("x2").style = "display:none;";
            document.getElementById('data2').innerHTML = tempat+","+tanggal;
        }
    

    combobox();
    
    let jb = document.getElementById('jb').value;

    let pembayaran = "";
        if(document.getElementById("Paypal").checked == true){
            pembayaran = "Paypal"}
        if(document.getElementById("VISA").checked == true){
            pembayaran = "VISA"}
        if(pembayaran == ""){
            alert("wajib dipilih")
        }
    let harga = document.getElementById('harga').value;
    
    total(jb,harga); 
            
    document.getElementById('data1').innerHTML = menu;
    document.getElementById('data2').innerHTML = tempat+","+tanggal;
    document.getElementById('data4').innerHTML = jb
    document.getElementById('data7').innerHTML = pembayaran;
    document.getElementById("harga").value = harga
}

function combobox(){
    let jenis = document.getElementById('form1').jm.value;
        if(jenis ==  "Europe"){
            document.getElementById('data3').innerHTML="Europe";
        }
        if(jenis == "Asia"){
            document.getElementById('data3').innerHTML="Asia";
        }
        else if(jenis == "Amerika"){
            document.getElementById('data3').innerHTML="Amerika";
        }
        else if(jenis == "Australia"){
            document.getElementById('data3').innerHTML="Australia";
        }
}

function total(jb,harga){ 
    let diskon;  
    if(jb > 10){
        diskon = document.getElementById('data5').innerHTML = "2%";
    }else {
        diskon = document.getElementById('data5').innerHTML = "0%";
    } 
    if(diskon == "2%"){
        let first = (jb*harga)*2/100;
        let sc = (jb*harga)-first;
        document.getElementById('data6').innerHTML = sc;
    }
    else{
        first = (jb*harga);
        document.getElementById('data6').innerHTML = first;
    }
}

function pembayaran(){
    let carabayar = ["Paypal","VISA"];
    let jenis = "";
    for (let i = 0; i <carabayar.length; i++){
        jenis += '<input class="form-check-input" type="radio" name="flexRadioDefault" id="'+carabayar[i]+'" value="'+carabayar[i]+'" checked> <label class="form-check-label" for="flexRadioDefault2">'+carabayar[i]+'</label> <br>'
    }
        document.getElementById('jenisbayar').innerHTML = jenis;
}