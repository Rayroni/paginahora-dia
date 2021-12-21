function carregar() {
var mdg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora =  data.getHours()
msg.innerHTML = `Ágora são ${hora} horas.`
if (hora >=0 && hora < 13) {
    // BOM DIA!
    img.src ="https://cdn.discordapp.com/attachments/914344565073412126/922852698397749328/fotomanhan.png"
    document.body.style.background = '#99acb5'
}else if (hora>= 12 && hora < 18) {
    // BOA TARDE!
    img.src ="https://cdn.discordapp.com/attachments/914344565073412126/922852698863329320/fototarde.png"
    document.body.style.background = '#9ba6b6'   
} else {
    // BOA NOITE!
    img.src = "https://cdn.discordapp.com/attachments/914344565073412126/922852698632634378/fotonoite.png"
    document.body.style.background = '#1d4d5d'
}
}
