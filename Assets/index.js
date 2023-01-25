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

document.getElementById("kmenu").onkeydown= function(){
    let txtnama = document.getElementById("kmenu").value;
    let txtnama2 = txtnama.toLowerCase();
    document.getElementById("kmenu").value = txtnama2;
}

document.getElementById('tpt').onkeyup = function (){
    let txtnama = document.getElementById('tpt').value;
    let txtnama2 = txtnama.toUpperCase();
    document.getElementById('tpt').value = txtnama2;
}

document.getElementById("global1").onload = function(){
    let today = new Date();
    let yy = today.getFullYear();
    document.getElementById('kode').value = "MB" + yy + "001";
    pembayaran();
}

document.getElementById("hilang").onclick = function(){
    document.getElementById("tampil").style = "display:none;";
    document.getElementById("x1").style = "display:none;";
    document.getElementById("x2").style = "display:none;";
    document.getElementById("x3").style = "display:none;";
    document.getElementById("x4").style = "display:none;";
    document.getElementById("x5").style = "display:none;"

    // document.getElementById('data1').innerHTML = "";
    // document.getElementById('data2').innerHTML = "";
    // document.getElementById('data3').innerHTML = "";
    // document.getElementById('data4').innerHTML = "";
    // document.getElementById('data5').innerHTML = "";
    // document.getElementById('data7').innerHTML = "";
}

document.getElementById("masuk").onclick = function(){
    
    let menu = document.getElementById('kmenu').value;
        if(menu == "" || menu == null){
            document.getElementById("x1").style = "display:inline; background-color: red; color: aliceblue;";
            document.getElementById("tampil").style = "display:none";
        }else{
            document.getElementById("x1").style = "display:none;";
            document.getElementById('data1').innerHTML = menu;
            document.getElementById("tampil").style = "display:inline;";
        }

    let tempat = document.getElementById('tpt').value;
    let tanggal = document.getElementById('dat').value;

        if(tempat == "" || tempat == null || tanggal == "" || tanggal == null){
            document.getElementById("x2").style = "display:inline; background-color: red; color: aliceblue;";
            document.getElementById("tampil").style = "display:none";
        }else{
            document.getElementById("x2").style = "display:none;";
            document.getElementById('data2').innerHTML = tempat+","+tanggal;
            document.getElementById("tampil").style = "display:inline;";
        }
    combobox();
    pilihan();
    let pembayaran = "";
        if(document.getElementById("Paypal").checked == true){
            pembayaran = "Paypal"
            document.getElementById("tampil").style = "display:inline;";
        }
        if(document.getElementById("VISA").checked == true){
            pembayaran = "VISA"
            document.getElementById("tampil").style = "display:inline;";
        }
        if(pembayaran == "" || pembayaran == null){
            document.getElementById("tampil").style = "display:none";
        }
    keterangan();
    // let ket = document.getElementById('ket').value;
    // document.getElementById('data5').innerHTML = ket;
    document.getElementById('data7').innerHTML = pembayaran;
}
function keterangan(){
    let kalimat = document.getElementById('ket').value;
    panjang = kalimat.length;
    if(panjang <= 30){
        document.getElementById("x5").style = "display:inline; background-color: red; color: aliceblue;";
        document.getElementById("tampil").style = "display:none";
    }else{
        document.getElementById("x5").style = "display:none;";
        document.getElementById('data5').innerHTML = kalimat;
        document.getElementById("tampil").style = "display:inline;";
    }
}
function pilihan(){
    let hobby1 ="", hobby2 = "", hobby3 = "", hobby4 = "", hobby5 = "", hobby6 = "";
        if(document.getElementById("1a").checked == true)
            hobby1 = "Game";
        if(document.getElementById("2a").checked == true)
            hobby2 = ", Tiduran";
        if(document.getElementById("3a").checked == true)
            hobby3 = ", Coding";
        if(document.getElementById("4a").checked == true)
            hobby4 = ", Gambar";
        if(document.getElementById("5a").checked == true)
            hobby5 = ", Olahraga";
        if(document.getElementById("6a").checked == true)
            hobby6 = ", Lainnya";
        
        let hobi = hobby1 + hobby2 + hobby3 + hobby4 + hobby5 + hobby6;       
    if(hobi == "" || hobi == null){
        document.getElementById("x4").style = "display:inline; background-color: red; color: aliceblue;";
        document.getElementById("tampil").style = "display:none";
    }else{
        document.getElementById("x4").style = "display:none;";
        document.getElementById('data4').innerHTML = hobi;
        document.getElementById("tampil").style = "display:inline;";
    }
}
document.getElementById('jm').onchange = function(){
    let jenis = document.getElementById('form1').jm.value;
        if(jenis ==  "Europe"){
            alert("High Ping");
        }
        if(jenis == "Asia"){
            alert("Medium Ping");
        }
        else if(jenis == "Amerika"){
            alert("Low Ping");
        }
        else if(jenis == "Australia"){
            alert("No Conection")
        }
}


function combobox(){
    let jenis = document.getElementById('form1').jm.value;
        if(jenis ==  "Europe"){
            document.getElementById('data3').innerHTML="Europe";
            document.getElementById("x3").style = "display:none;";
        }
        if(jenis == "Asia"){
            document.getElementById('data3').innerHTML="Asia";
            document.getElementById("x3").style = "display:none;";
        }
        else if(jenis == "Amerika"){
            document.getElementById('data3').innerHTML="Amerika";
            document.getElementById("x3").style = "display:none;";
        }
        else if(jenis == "Australia"){
            document.getElementById('data3').innerHTML="Australia";
            document.getElementById("x3").style = "display:none;";
        }
    if(jenis == "" || jenis == null){
        document.getElementById("tampil").style = "display:none";
        document.getElementById("x3").style = "display:inline; background-color: red; color: aliceblue;";
    }
}

function pembayaran(){
    let carabayar = ["Paypal","VISA"];
    let jenis = "";
    for (let i = 0; i <carabayar.length; i++){
        jenis += '<input class="form-check-input" type="radio" name="flexRadioDefault" id="'+carabayar[i]+'" value="'+carabayar[i]+'"> <label class="form-check-label" for="flexRadioDefault2">'+carabayar[i]+'</label> <br>'
    }
        document.getElementById('jenisbayar').innerHTML = jenis;
}