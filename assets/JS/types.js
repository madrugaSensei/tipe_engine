
var atk = [
    //normal
    [["normal"], ["nenhuma vantagem"], ["pedra", "aco"], ["fantasma"]],
    //lutador
    [["lutador"], ["normal", "pedra", "aco", "gelo", "sombrio"],
    ["voador", "venenoso", "inseto", "psiquico", "fada"], ["fantasma"]],
    //voador
    [["voador"], ["lutador", "inseto", "planta"], ["pedra", "aco", "eletrico"],
    ["nenhuma imunidade"]],
    //venenoso
    [["venenoso"], ["planta", "fada"], ["venenoso", "terrestre", "pedra", "fantasma"], ["aco"]],
    //terrestre
    [["terrestre"], ["venenoso", "pedra", "aco", "fogo", "eletrico"],
    ["inseto", "planta"], ["voador"]],
    //pedra
    [["pedra"], ["voador", "inseto", "fogo", "gelo"], ["lutador", "terrestre", "aco"],
    ["nenhuma imunidade"]],
    //inseto
    [["inseto"], ["planta", "psiquico", "sombrio"],
    ["lutador", "voador", "venenoso", "fantasma", "aco", "fogo", "fada"], ["nenhuma imunidade"]],
    //fantasma
    [["fantasma"], ["fantasma", "psiquico"], ["sombrio"], ["normal"]],
    //aço
    [["aco"], ["pedra", "gelo", "fada"], ["aco", "fogo", "agua", "eletrico"],
    ["nenhuma imunidade"]],
    //fogo
    [["fogo"], ["inseto", "aco", "planta", "gelo"], ["pedra", "fogo", "agua", "dragao"],
    ["nenhuma imunidade"]],
    //água
    [["agua"], ["terrestre", "pedra", "fogo"], ["agua", "planta", "dragao"],
    ["nenhuma imunidade"]],
    //planta
    [["planta"], ["terrestre", "pedra", "agua"],
    ["voador", "venenoso", "inseto", "aco", "fogo", "planta", "dragao"], ["nenhuma imunidade"]],
    //elétrico
    [["eletrico"], ["voador", "agua"], ["planta", "eletrico", "dragao"], ["terrestre"]],
    //psiquico
    [["psiquico"], ["lutador", "venenoso"], ["aco", "psiquico"], ["sombrio"]],
    //gelo
    [["gelo"], ["voador", "terrestre", "planta", "dragao"],
    ["aco", "fogo", "agua"], ["nenhuma imunidade"]],
    //dragão
    [["dragao"], ["dragao"], ["aco"], ["fada"]],
    //sombrio
    [["sombrio"], ["fantasma", "psiquico"], ["lutador", "sombrio", "fada"],
    ["nenhuma imunidade"]],
    //fada
    [["fada"], ["lutador", "dragao", "sombrio"], ["venenoso", "aco", "fogo"], ["nenhuma imunidade"]]

];

var def = [
    //normal
    [["normal"], ["nenhuma resistência"], ["lutador"], ["fantasma"]],
    //lutador
    [["lutador"], ["pedra", "inseto", "sombrio"],
    ["voador", "psíquico", "fada"], ["nenhuma imunidade"]],
    //voador
    [["voador"], ["lutador", "inseto", "planta"], ["pedra", "eletrico", "gelo"],
    ["terrestre"]],
    //venenoso
    [["venenoso"], ["planta", "fada", "lutador", "venenoso", "inseto"], ["terrestre", "psiquico"],
    ["nenhuma imunidade"]],
    //terrestre
    [["terrestre"], ["venenoso", "pedra"], ["agua", "planta", "gelo"], ["eletrico"]],
    //pedra
    [["pedra"], ["normal", "voador", "venenoso", "fogo"], ["lutador", "terrestre", "aco", "agua", "planta"],
    ["nenhuma imunidade"]],
    //inseto
    [["inseto"], ["planta", "lutador", "terrestre"],
    ["voador", "pedra", "fogo"], ["nenhuma imunidade"]],
    //fantasma
    [["fantasma"], ["venenoso", "inseto"], ["sombrio", "fantasma"], ["normal", "lutador"]],
    //aço
    [["aco"], ["normal", "voador", "pedra", "inseto", "aco", "planta", "psiquico", "gelo", "dragao", "fada"],
    ["lutador", "terrestre", "fogo"], ["venenoso"]],
    //fogo
    [["fogo"], ["inseto", "aco", "fogo", "fada", "planta", "gelo"], ["terrestre", "pedra", "agua"],
    ["nenhuma imunidade"]],
    //água
    [["agua"], ["aco", "fogo", "agua", "gelo"], ["planta", "eletrico"],
    ["nenhuma imunidade"]],
    //planta
    [["planta"], ["terrestre", "planta", "agua", "eletrico"],
    ["voador", "venenoso", "inseto", "fogo", "gelo"], ["nenhuma imunidade"]],
    //elétrico
    [["eletrico"], ["voador", "aco", "eletrico"], ["terrestre"], ["nenhuma imunidade"]],
    //psiquico
    [["psiquico"], ["lutador", "psiquico"], ["fantasma", "inseto", "sombrio"], ["nenhuma imunidade"]],
    //gelo
    [["gelo"], ["gelo"], ["lutador", "pedra", "aco", "fogo"], ["nenhuma imunidade"]],
    //dragão
    [["dragao"], ["agua", "fogo", "grama", "eletrico"], ["gelo", "dragao", "fada"], ["nenhuma imunidade"]],
    //sombrio
    [["sombrio"], ["fantasma", "sombrio"], ["lutador", "inseto", "fada"],
    ["psiquico"]],
    //fada
    [["fada"], ["lutador", "inseto", "sombrio"], ["venenoso", "aco"], ["dragao"]]

];

//tipo 1
var vantagem = [];
var desvantagem = [];
var imunidade = [];

//tipo 2
var vantagem2 = [];
var desvantagem2 = [];
var imunidade2 = [];

$(document).ready(function () {

    $("#input").click(function () {

        attack();
        defend();

    });


});

function defend() {

    for (let i = 0; i < atk.length; i++) {
        if (atk[i][0][0] == $("#type1").val()) {
            vantagem = def[i][1];
            desvantagem = def[i][2];
            imunidade = def[i][3];
        }
    }
    for (let i = 0; i < atk.length; i++) {
        if (atk[i][0][0] == $("#type2").val()) {
            vantagem2 = def[i][1];
            desvantagem2 = def[i][2];
            imunidade2 = def[i][3];
        }
    }



    const desvantagemTotal = desvantagem.concat(desvantagem2);
    const imunidadeTotal = [...new Set([...imunidade, ...imunidade2])];

    //imprimir as vantagens
    const vantagemTotal = vantagem.concat(vantagem2);


    if (vantagemTotal.length > 1) {
        const index = vantagemTotal.indexOf('nenhuma resistência');
        if (index > -1) {
            vantagemTotal.splice(index, 1);
        }
    }
    $("#vantagens2").html("");
    for (let i = 0; i < vantagemTotal.length; i++) {

        let skip = false;
        for (let j = 0; j < vantagemTotal.length; j++) {
            if (vantagemTotal[i] == vantagemTotal[j] && i != j) {
                vantagemTotal.splice(j, 1);
                if($("#type1").val()!=$("#type2").val()){
                    $("#vantagens2").append("<div class = \"border rounded p-1\">" + vantagemTotal[i] + "2x </div>");
                }else{
                    $("#vantagens2").append("<div class = \"border rounded p-1\">" + vantagemTotal[i] + " </div>");
                }
                skip = true;
            }
        }
        for (let j = 0; j < desvantagemTotal.length; j++) {
            if (vantagemTotal[i] == desvantagemTotal[j]) {
                skip = true;
                desvantagemTotal.splice(j, 1);
            }
        }
        for (let j = 0; j < imunidadeTotal.length; j++) {
            if (vantagemTotal[i] == imunidadeTotal[j]) {
                skip = true;
            }
        }

        if (!skip) {
            $("#vantagens2").append("<div class = \"border rounded p-1\">" + vantagemTotal[i] + " </div>");
        }

    }

    //imprimir as desvantagens


    $("#desvantagens2").html("");
    for (let i = 0; i < desvantagemTotal.length; i++) {

        let skip = false;
        for (let j = 0; j < desvantagemTotal.length; j++) {
            if (desvantagemTotal[i] == desvantagemTotal[j] && i != j) {
                desvantagemTotal.splice(j, 1);
               if($("#type1").val()!=$("#type2").val()){
                    $("#desvantagens2").append("<div class = \"border rounded p-1\">" + desvantagemTotal[i] + "2x </div>");
                }else{
                    $("#desvantagens2").append("<div class = \"border rounded p-1\">" + desvantagemTotal[i] + " </div>");
                }
                skip = true;
            }
        }
        for (let j = 0; j < imunidadeTotal.length; j++) {
            if (desvantagemTotal[i] == imunidadeTotal[j]) {
                skip = true;
            }
        }

        if (!skip) {
            $("#desvantagens2").append("<div class = \"border rounded p-1\">" + desvantagemTotal[i] + " </div>");
        }

    }

    //imprimir as imunidades
    if (imunidadeTotal.length > 1) {
        const index = imunidadeTotal.indexOf('nenhuma imunidade');
        if (index > -1) {
            imunidadeTotal.splice(index, 1);
        }
    }
    $("#imunidade2").html("");
    for (let i = 0; i < imunidadeTotal.length; i++) {

        $("#imunidade2").append("<div class = \"border rounded p-1\">" + imunidadeTotal[i] + " </div>");

    }

}

function attack() {
    for (let i = 0; i < atk.length; i++) {
        if (atk[i][0][0] == $("#type1").val()) {
            vantagem = atk[i][1];
            desvantagem = atk[i][2];
            imunidade = atk[i][3];
        }
    }
    for (let i = 0; i < atk.length; i++) {
        if (atk[i][0][0] == $("#type2").val()) {
            vantagem2 = atk[i][1];
            desvantagem2 = atk[i][2];
            imunidade2 = atk[i][3];
        }
    }

    //imprimir as vantagens
    const vantagemTotal = [...new Set([...vantagem, ...vantagem2])];
    if (vantagemTotal.length > 1) {
        const index = vantagemTotal.indexOf('nenhuma vantagem');
        if (index > -1) {
            vantagemTotal.splice(index, 1);
        }
    }
    $("#vantagens").html("<div class = \"border rounded p-1\">" + vantagemTotal[0] + " </div>");
    for (let i = 1; i < vantagemTotal.length; i++) {

        $("#vantagens").append("<div class = \"border rounded p-1\">" + vantagemTotal[i] + " </div>");

    }

    //imprimir as desvantagens
    const desvantagemTotal = [...new Set([...desvantagem, ...desvantagem2])];

    $("#desvantagens").html("<div class = \"border rounded p-1\">" + desvantagemTotal[0] + " </div>");
    for (let i = 1; i < desvantagemTotal.length; i++) {

        $("#desvantagens").append("<div class = \"border rounded p-1\">" + desvantagemTotal[i] + " </div>");

    }

    //imprimir as imunidades
    const imunidadeTotal = [...new Set([...imunidade, ...imunidade2])];
    if (imunidadeTotal.length > 1) {
        const index = imunidadeTotal.indexOf('nenhuma imunidade');
        if (index > -1) {
            imunidadeTotal.splice(index, 1);
        }
    }
    $("#imunidade").html("<div class = \"border rounded p-1\">" + imunidadeTotal[0] + " </div>");
    for (let i = 1; i < imunidadeTotal.length; i++) {

        $("#imunidade").append("<div class = \"border rounded p-1\">" + imunidadeTotal[i] + " </div>");

    }
}