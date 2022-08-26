const shopping_list = document.getElementById('root')
const enviar_lista = document.getElementById('lista')
let txt_lista
let products = {
    fruits: [],
    vegetables: [],
    frozen_food: [],
    grosso: [],
    junk_food: [],
    mistura: [],
    drinks: [],
    cleaning_products: [],
    personal_hygiene: [],
    dairy: [],
    toys: [],
    school_supplies: [],
    others: []
}
let product
let category
let response
let flag1 = true
let flag2 = true
let frasePrompt = 'Você deseja adicionar um produto?'

alert('Olá, seja bem-vindo(a) a sua lista de compras.')
while (flag1) {
    response = prompt(`${frasePrompt} Digite "SIM" ou "NÃO".`)

    if (response == '') {
        response = 'SIM'
    } else if (response == null) {
        response = 'NÃO'
    } else if (response[0] == 'S' || response[0] == 's' || response[0] == 'Y' || response[0] == 'y') {
        response = 'SIM'
    } else if (response[0] == 'N' || response[0] == 'n') {
        response = 'NÃO'
    }

    switch (response) {
        case "SIM":
            flag2 = true
            while (flag2) {
                category = prompt(`Qual a categoria deste produto?\nFRUTAS, LEGUMES E VERDURAS, CONGELADOS, GROSSO, GULOSEIMAS, MISTURA, BEBIDAS, PRODUTOS DE LIMPEZA, HIGIENE PESSOAL, LATICÍNIOS, BRINQUEDOS, MATERIAL ESCOLAR ou OUTROS?`).toUpperCase()
                verifyCategoryItem()
                frasePrompt = 'Produto adicionado com sucesso!\nVocê deseja adicionar mais outro produto?'
            }
            break
        case "NÃO":
            doShoppingList()
            break
        default:
            alert('Opção inválida! Tente novamente.')
            break
    }
}

enviar_lista.addEventListener('click', () => {
    let numWhatsapp
    let flag_whats = true
    while (flag_whats) {
        numWhatsapp = prompt('Para qual número de Whatsapp sua lista de compras será enviada? Digite 9 + número.')
        if (numWhatsapp.length != 9) {
            alert('O número do Whatsapp está inválido! Digite novamente.')
        } else {
            flag_whats = false
        }
    }

    enviar_lista.href = `https://wa.me/5585${numWhatsapp}?text=${txt_lista}`
})

function doShoppingList() {
    alert('Tudo bem!\nVeja agora como ficou a sua lista de compras.')

    let fruits = []
    let vegetables = []
    let frozen_food = []
    let grosso = []
    let junk_food = []
    let mistura = []
    let drinks = []
    let cleaning_products = []
    let personal_hygiene = []
    let dairy = []
    let toys = []
    let school_supplies = []
    let others = []

    console.log('LISTA DE COMPRAS:')
    txt_lista = `*LISTA DE COMPRAS*\n`

    products.fruits.forEach(category => {
        fruits += `${category}, `
    });
    console.log(`Frutas: ${fruits.slice(0, fruits.length - 2)}.\n`)
    txt_lista += `*Frutas*: ${fruits.slice(0, fruits.length - 2)}.\n`

    products.vegetables.forEach(category => {
        vegetables += `${category}, `
    });
    console.log(`Verduras e legumes: ${vegetables.slice(0, vegetables.length - 2)}.\n`)
    txt_lista += `*Verduras e legumes*: ${vegetables.slice(0, vegetables.length - 2)}.\n`

    products.frozen_food.forEach(category => {
        frozen_food += `${category}, `
    });
    console.log(`Congelados: ${frozen_food.slice(0, frozen_food.length - 2)}.\n`)
    txt_lista += `*Congelados*: ${frozen_food.slice(0, frozen_food.length - 2)}.\n`

    products.grosso.forEach(category => {
        grosso += `${category}, `
    });
    console.log(`Grosso: ${grosso.slice(0, grosso.length - 2)}.\n`)
    txt_lista += `*Grosso*: ${grosso.slice(0, grosso.length - 2)}.\n`

    products.junk_food.forEach(category => {
        junk_food += `${category}, `
    });
    console.log(`Guloseimas: ${junk_food.slice(0, junk_food.length - 2)}.\n`)
    txt_lista += `*Guloseimas*: ${junk_food.slice(0, junk_food.length - 2)}.\n`

    products.mistura.forEach(category => {
        mistura += `${category}, `
    });
    console.log(`Mistura: ${mistura.slice(0, mistura.length - 2)}.\n`)
    txt_lista += `*Mistura*: ${mistura.slice(0, mistura.length - 2)}.\n`

    products.drinks.forEach(category => {
        drinks += `${category}, `
    });
    console.log(`Bebidas: ${drinks.slice(0, drinks.length - 2)}.\n`)
    txt_lista += `*Bebidas*: ${drinks.slice(0, drinks.length - 2)}.\n`

    products.cleaning_products.forEach(category => {
        cleaning_products += `${category}, `
    });
    console.log(`Produtos de limpeza: ${cleaning_products.slice(0, cleaning_products.length - 2)}.\n`)
    txt_lista += `*Produtos de limpeza*: ${cleaning_products.slice(0, cleaning_products.length - 2)}.\n`

    products.personal_hygiene.forEach(category => {
        personal_hygiene += `${category}, `
    });
    console.log(`Higiene Pessoal: ${personal_hygiene.slice(0, personal_hygiene.length - 2)}.\n`)
    txt_lista += `*Higiene Pessoal*: ${personal_hygiene.slice(0, personal_hygiene.length - 2)}.\n`

    products.dairy.forEach(category => {
        dairy += `${category}, `
    });
    console.log(`Laticínios: ${dairy.slice(0, dairy.length - 2)}.\n`)
    txt_lista += `*Laticínios*: ${dairy.slice(0, dairy.length - 2)}.\n`

    products.toys.forEach(category => {
        toys += `${category}, `
    });
    console.log(`Brinquedos: ${toys.slice(0, toys.length - 2)}.\n`)
    txt_lista += `*Brinquedos*: ${toys.slice(0, toys.length - 2)}.\n`

    products.school_supplies.forEach(category => {
        school_supplies += `${category}, `
    });
    console.log(`Material escolar: ${school_supplies.slice(0, school_supplies.length - 2)}.\n`)
    txt_lista += `*Material escolar*: ${school_supplies.slice(0, school_supplies.length - 2)}.\n`

    products.others.forEach(category => {
        others += `${category}, `
    });
    console.log(`Outros: ${others.slice(0, others.length - 2)}.\n`)
    txt_lista += `*Outros*: ${others.slice(0, others.length - 2)}.\n`

    shopping_list.innerHTML += `<h1 style="text-align: center; font-size: 24px;">LISTA DE COMPRAS</h1>
                   <p><strong style="font-size: 20px;">Frutas</strong>: ${fruits.slice(0, fruits.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Verduras e legumes</strong>: ${vegetables.slice(0, vegetables.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Congelados</strong>: ${frozen_food.slice(0, frozen_food.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Grosso</strong>: ${grosso.slice(0, grosso.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Guloseimas</strong>: ${junk_food.slice(0, junk_food.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Mistura</strong>: ${mistura.slice(0, mistura.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Bebidas</strong>: ${drinks.slice(0, drinks.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Produtos de limpeza</strong>: ${cleaning_products.slice(0, cleaning_products.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Higiene Pessoal</strong>: ${personal_hygiene.slice(0, personal_hygiene.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Laticínios</strong>: ${dairy.slice(0, dairy.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Brinquedos</strong>: ${toys.slice(0, toys.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Material escolar</strong>: ${school_supplies.slice(0, school_supplies.length - 2)}.</p>
                   <p><strong style="font-size: 20px;">Outros</strong>: ${others.slice(0, others.length - 2)}.</p>`

    flag1 = false
    txt_lista = window.encodeURIComponent(txt_lista)
    return txt_lista
}

function verifyCategoryItem() {
    if (category == 'FRUTAS') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.fruits.push(product)
        flag2 = false
    } else if (category == 'LEGUMES E VERDURAS' || category == 'LEGUMES' || category == 'VERDURAS') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.vegetables.push(product)
        flag2 = false
    } else if (category == 'CONGELADOS') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.frozen_food.push(product)
        flag2 = false
    } else if (category == 'GROSSO') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.grosso.push(product)
        flag2 = false
    } else if (category == 'GULOSEIMAS') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.junk_food.push(product)
        flag2 = false
    } else if (category == 'MISTURA') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.mistura.push(product)
        flag2 = false
    } else if (category == 'BEBIDAS') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.drinks.push(product)
        flag2 = false
    } else if (category == 'PRODUTOS DE LIMPEZA' || category == 'LIMPEZA') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.cleaning_products.push(product)
        flag2 = false
    } else if (category == 'HIGIENE PESSOAL' || category == 'HIGIENE') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.personal_hygiene.push(product)
        flag2 = false
    } else if (category == 'LATICÍNIOS') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.dairy.push(product)
        flag2 = false
    } else if (category == 'BRINQUEDOS') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.toys.push(product)
        flag2 = false
    } else if (category == 'MATERIAL ESCOLAR') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.school_supplies.push(product)
        flag2 = false
    } else if (category == 'OUTROS') {
        product = prompt(`Qual será o item da categoria ${category}?`)
        products.others.push(product)
        flag2 = false
    } else {
        alert(`Não conseguimos localizar a categoria "${category}". Vamos tentar novamente.`)
    }
}