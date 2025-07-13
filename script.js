// Função de conversão do modelo
function convertModel(inputData) {
    // Estrutura do primeiro modelo (complexo)
    let convertedData = {
        "decals": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "lipstick": { "item": -1, "defaultTexture": 1, "defaultItem": -1, "texture": 1 },
        "bracelet": { "item": -1, "defaultTexture": 0, "defaultItem": -1, "texture": 0 },
        "moles": { "item": -1, "defaultTexture": 0, "defaultItem": -1, "texture": 0 },
        "jaw_bone_back_lenght": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "eyebrown_forward": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "chimp_bone_lenght": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "accessory": { "item": 1, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "eyebrows": { "item": -1, "defaultTexture": 1, "defaultItem": -1, "texture": 1 },
        "watch": { "item": -1, "defaultTexture": 0, "defaultItem": -1, "texture": 0 },
        "torso2": { "item": 107, "defaultTexture": 0, "defaultItem": 0, "texture": 1 },
        "t-shirt": { "item": 15, "defaultTexture": 0, "defaultItem": 1, "texture": 0 },
        "facemix": { "shapeMix": 0, "skinMix": 0, "defaultShapeMix": 0.0, "defaultSkinMix": 0.0 },
        "mask": { "item": 126, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "eye_opening": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "face": { "item": 4, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "eye_color": { "item": -1, "defaultTexture": 0, "defaultItem": -1, "texture": 0 },
        "neck_thikness": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "chimp_hole": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "blush": { "item": -1, "defaultTexture": 1, "defaultItem": -1, "texture": 1 },
        "lips_thickness": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "chimp_bone_width": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "chimp_bone_lowering": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "nose_2": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "glass": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "eyebrown_high": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "jaw_bone_width": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "arms": { "item": 17, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "cheek_3": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "cheek_2": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "shoes": { "item": 21, "defaultTexture": 0, "defaultItem": 1, "texture": 0 },
        "bag": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "nose_4": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "cheek_1": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "makeup": { "item": -1, "defaultTexture": 1, "defaultItem": -1, "texture": 1 },
        "nose_1": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "nose_0": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "nose_5": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "nose_3": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "hat": { "item": -1, "defaultTexture": 0, "defaultItem": -1, "texture": 0 },
        "face2": { "item": 2, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "pants": { "item": 10, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "ear": { "item": -1, "defaultTexture": 0, "defaultItem": -1, "texture": 0 },
        "vest": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 },
        "ageing": { "item": -1, "defaultTexture": 0, "defaultItem": -1, "texture": 0 },
        "beard": { "item": -1, "defaultTexture": 1, "defaultItem": -1, "texture": 1 },
        "hair": { "item": 0, "defaultTexture": 0, "defaultItem": 0, "texture": 0 }
    };

    // Mapeamento de dados do segundo formato para o primeiro
    convertedData["lipstick"]["item"] = inputData.lipstick ?? -1;
    convertedData["lipstick"]["texture"] = inputData["lipstick-color"] ?? 1;
    convertedData["blush"]["item"] = inputData.blush ?? -1;
    convertedData["blush"]["texture"] = inputData["blush-color"] ?? 1;
    convertedData["facemix"]["shapeMix"] = inputData.shapeMix ?? 0;
    convertedData["facemix"]["skinMix"] = inputData.skinMix ?? 0;
    convertedData["makeup"]["item"] = inputData.makeup ?? -1;
    convertedData["makeup"]["texture"] = inputData["makeup-color"] ?? 1;
    convertedData["eye_color"]["item"] = inputData.eyes ?? -1;
    convertedData["eye_opening"]["item"] = inputData.eyesOpenning ?? 0;
    convertedData["hair"]["item"] = inputData.hair ?? 0;
    convertedData["hair"]["texture"] = inputData["hair-color"] ?? 0;

    // Conversão de outros valores
    convertedData["ageing"]["item"] = inputData.ageing ?? -1;
    convertedData["ageing"]["texture"] = inputData["ageing-color"] ?? 0;

    return convertedData;
}

// Função para processar a conversão quando o botão é clicado
document.getElementById('convertBtn').addEventListener('click', function () {
    const inputText = document.getElementById('jsonInput').value;
    let inputData;

    try {
        inputData = JSON.parse(inputText); // Tenta converter o JSON de entrada
    } catch (e) {
        document.getElementById('jsonOutput').textContent = "Erro: O formato de JSON é inválido. Tente novamente.";
        return;
    }

    const outputData = convertModel(inputData);
    const outputString = JSON.stringify(outputData).replace(/\n/g, ''); // Remove quebras de linha
    document.getElementById('jsonOutput').textContent = outputString; // Exibe o resultado
});
