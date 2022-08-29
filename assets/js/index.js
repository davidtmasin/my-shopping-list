const shopping_list = document.getElementById('root')
const enviar_lista = document.getElementById('lista')
const btn_limpar = document.getElementById('limpar')
const btn_remove = document.getElementById('remover_item')
let info = document.getElementById('text_info')
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
let frasePrompt = 'Você deseja adicionar um produto?'

function triggerBtn() {
  frasePrompt = 'Você deseja adicionar um produto?'
  let flag1 = true
  let flag2 = true
  alert('Olá, seja bem-vindo(a) a sua lista de compras.')
  while (flag1) {
    response = prompt(`${frasePrompt} Digite "SIM" ou "NÃO".`)

    if (response == '') {
      response = 'SIM'
    } else if (response == null) {
      response = 'NÃO'
    } else if (
      response[0] == 'S' ||
      response[0] == 's' ||
      response[0] == 'Y' ||
      response[0] == 'y'
    ) {
      response = 'SIM'
    } else if (response[0] == 'N' || response[0] == 'n') {
      response = 'NÃO'
    }

    switch (response) {
      case 'SIM':
        flag2 = true
        while (flag2) {
          // console.log(flag2);
          category = prompt(
            `Qual a categoria deste produto?\nFRUTAS, LEGUMES E VERDURAS, CONGELADOS, GROSSO, GULOSEIMAS, MISTURA, BEBIDAS, PRODUTOS DE LIMPEZA, HIGIENE PESSOAL, LATICÍNIOS, BRINQUEDOS, MATERIAL ESCOLAR ou OUTROS?`
          )
          console.log(category)
          if (category == '') {
            alert('Você precisa informar uma categoria!')
          } else if (category == null) {
            flag1 = false
            flag2 = false
            doShoppingList()
          } else {
            category = category.toUpperCase()
            // verifyCategoryItem(category)
            let retorno = verifyCategoryItem(category)
            // console.log(retorno);
            if (retorno == 'NOK') {
              // console.log(`Entrei no retorno = NOK e meu valor é ${retorno}`);
              // alert('Digite o nome do produto')
              flag1 = false
              flag2 = false
              doShoppingList()
            } else {
              frasePrompt =
                'Produto adicionado com sucesso!\nVocê deseja adicionar mais outro produto?'
              flag2 = false
            }
          }
        }
        break
      case 'NÃO':
        let doWantRemove = confirm('Gostaria de remover um produto?')
        if (doWantRemove == true) {
          product = prompt(
            'Qual o nome do produto que você gostaria de remover?'
          )
          removeProdut(product)
          frasePrompt = 'Você deseja adicionar mais outro produto?'
        } else {
          doShoppingList()
          frasePrompt = 'Você deseja adicionar mais outro produto?'
          flag1 = false
        }
        break
      default:
        alert('Opção inválida! Tente novamente.')
        break
    }
  }
}

enviar_lista.addEventListener('click', () => {
  let numWhatsapp
  let flag_whats = true
  while (flag_whats) {
    numWhatsapp = prompt(
      'Para qual número de Whatsapp sua lista de compras será enviada? Digite 9 + número.'
    )
    if (numWhatsapp.length != 9) {
      alert('O número do Whatsapp está inválido! Digite novamente.')
    } else {
      flag_whats = false
    }
  }
  if (txt_lista == undefined) {
    enviar_lista.href = `https://wa.me/5585${numWhatsapp}?text=`
  } else {
    enviar_lista.href = `https://wa.me/5585${numWhatsapp}?text=${txt_lista}`
  }
})

btn_limpar.addEventListener('click', () => {
  document.location.reload(true)
})

btn_remove.addEventListener('click', () => {
  let element = document.body.contains(info)
  // console.log(element)
  if (element == true) {
    alert('Primeiro faça a sua lista antes de remover um produto!')
  } else {
    product = prompt('Qual o nome do produto que você gostaria de remover?')
    let retorno = removeProdut(product)
    // console.log(retorno);
    if (retorno != 'Não atualize a lista') {
      doShoppingList()
    }
  }
})

function verifyCategoryItem(category) {
  if (category == 'FRUTAS') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.fruits.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (
    category == 'LEGUMES E VERDURAS' ||
    category == 'LEGUMES' ||
    category == 'VERDURAS'
  ) {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.vegetables.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (category == 'CONGELADOS') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.frozen_food.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (category == 'GROSSO') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.grosso.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (category == 'GULOSEIMAS') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.junk_food.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (category == 'MISTURA') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.mistura.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (category == 'BEBIDAS') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.drinks.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (category == 'PRODUTOS DE LIMPEZA' || category == 'LIMPEZA') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.cleaning_products.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (category == 'HIGIENE PESSOAL' || category == 'HIGIENE') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.personal_hygiene.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (category == 'LATICÍNIOS') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.dairy.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (category == 'BRINQUEDOS') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.toys.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (category == 'MATERIAL ESCOLAR') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    if (product != 'Valor nulo') {
      products.school_supplies.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else if (category == 'OUTROS') {
    product = prompt(`Qual será o produto da categoria ${category}?`)
    // verifyProduct(product)
    product = verifyProduct(product)
    console.log(product);
    if (product != 'Valor nulo') {
      products.others.push(product)
      return 'OK'
    } else {
      return 'NOK'
    }

  } else {
    alert(
      `Não conseguimos localizar a categoria "${category}". Vamos tentar novamente.`
    )
  }
}

function removeProdut(product) {
  let index
  if (products.fruits.indexOf(product) != -1) {
    index = products.fruits.indexOf(product)
    products.fruits.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.vegetables.indexOf(product) != -1) {
    index = products.vegetables.indexOf(product)
    products.vegetables.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.frozen_food.indexOf(product) != -1) {
    index = products.frozen_food.indexOf(product)
    products.frozen_food.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.grosso.indexOf(product) != -1) {
    index = products.grosso.indexOf(product)
    products.grosso.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.junk_food.indexOf(product) != -1) {
    index = products.junk_food.indexOf(product)
    products.junk_food.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.mistura.indexOf(product) != -1) {
    index = products.mistura.indexOf(product)
    products.mistura.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.drinks.indexOf(product) != -1) {
    index = products.drinks.indexOf(product)
    products.drinks.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.cleaning_products.indexOf(product) != -1) {
    index = products.cleaning_products.indexOf(product)
    products.cleaning_products.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.personal_hygiene.indexOf(product) != -1) {
    index = products.personal_hygiene.indexOf(product)
    products.personal_hygiene.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.dairy.indexOf(product) != -1) {
    index = products.dairy.indexOf(product)
    products.dairy.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.toys.indexOf(product) != -1) {
    index = products.toys.indexOf(product)
    products.toys.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.school_supplies.indexOf(product) != -1) {
    index = products.school_supplies.indexOf(product)
    products.school_supplies.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else if (products.others.indexOf(product) != -1) {
    index = products.others.indexOf(product)
    products.others.splice(index, 1)
    alert(`Exclusão do produto "${product}" realizada com sucesso!`)
    return 'Atualize a lista'
  } else {
    alert(`Não foi possível localizar o produto "${product}" em sua lista!`)
    return 'Não atualize a lista'
  }
}

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
  })
  console.log(`Frutas: ${fruits.slice(0, fruits.length - 2)}.\n`)
  txt_lista += `*Frutas*: ${fruits.slice(0, fruits.length - 2)}.\n`

  products.vegetables.forEach(category => {
    vegetables += `${category}, `
  })
  console.log(
    `Verduras e legumes: ${vegetables.slice(0, vegetables.length - 2)}.\n`
  )
  txt_lista += `*Verduras e legumes*: ${vegetables.slice(
    0,
    vegetables.length - 2
  )}.\n`

  products.frozen_food.forEach(category => {
    frozen_food += `${category}, `
  })
  console.log(`Congelados: ${frozen_food.slice(0, frozen_food.length - 2)}.\n`)
  txt_lista += `*Congelados*: ${frozen_food.slice(
    0,
    frozen_food.length - 2
  )}.\n`

  products.grosso.forEach(category => {
    grosso += `${category}, `
  })
  console.log(`Grosso: ${grosso.slice(0, grosso.length - 2)}.\n`)
  txt_lista += `*Grosso*: ${grosso.slice(0, grosso.length - 2)}.\n`

  products.junk_food.forEach(category => {
    junk_food += `${category}, `
  })
  console.log(`Guloseimas: ${junk_food.slice(0, junk_food.length - 2)}.\n`)
  txt_lista += `*Guloseimas*: ${junk_food.slice(0, junk_food.length - 2)}.\n`

  products.mistura.forEach(category => {
    mistura += `${category}, `
  })
  console.log(`Mistura: ${mistura.slice(0, mistura.length - 2)}.\n`)
  txt_lista += `*Mistura*: ${mistura.slice(0, mistura.length - 2)}.\n`

  products.drinks.forEach(category => {
    drinks += `${category}, `
  })
  console.log(`Bebidas: ${drinks.slice(0, drinks.length - 2)}.\n`)
  txt_lista += `*Bebidas*: ${drinks.slice(0, drinks.length - 2)}.\n`

  products.cleaning_products.forEach(category => {
    cleaning_products += `${category}, `
  })
  console.log(
    `Produtos de Limpeza: ${cleaning_products.slice(
      0,
      cleaning_products.length - 2
    )}.\n`
  )
  txt_lista += `*Produtos de Limpeza*: ${cleaning_products.slice(
    0,
    cleaning_products.length - 2
  )}.\n`

  products.personal_hygiene.forEach(category => {
    personal_hygiene += `${category}, `
  })
  console.log(
    `Higiene Pessoal: ${personal_hygiene.slice(
      0,
      personal_hygiene.length - 2
    )}.\n`
  )
  txt_lista += `*Higiene Pessoal*: ${personal_hygiene.slice(
    0,
    personal_hygiene.length - 2
  )}.\n`

  products.dairy.forEach(category => {
    dairy += `${category}, `
  })
  console.log(`Laticínios: ${dairy.slice(0, dairy.length - 2)}.\n`)
  txt_lista += `*Laticínios*: ${dairy.slice(0, dairy.length - 2)}.\n`

  products.toys.forEach(category => {
    toys += `${category}, `
  })
  console.log(`Brinquedos: ${toys.slice(0, toys.length - 2)}.\n`)
  txt_lista += `*Brinquedos*: ${toys.slice(0, toys.length - 2)}.\n`

  products.school_supplies.forEach(category => {
    school_supplies += `${category}, `
  })
  console.log(
    `Material Escolar: ${school_supplies.slice(
      0,
      school_supplies.length - 2
    )}.\n`
  )
  txt_lista += `*Material Escolar*: ${school_supplies.slice(
    0,
    school_supplies.length - 2
  )}.\n`

  products.others.forEach(category => {
    others += `${category}, `
  })
  console.log(`Outros: ${others.slice(0, others.length - 2)}.\n`)
  txt_lista += `*Outros*: ${others.slice(0, others.length - 2)}.\n`

  shopping_list.innerHTML = `<h1 style="text-align: center; font-size: 24px;">LISTA DE COMPRAS</h1>
                   <p><strong style="font-size: 20px;">Frutas</strong>: ${fruits.slice(
    0,
    fruits.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Verduras e legumes</strong>: ${vegetables.slice(
    0,
    vegetables.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Congelados</strong>: ${frozen_food.slice(
    0,
    frozen_food.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Grosso</strong>: ${grosso.slice(
    0,
    grosso.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Guloseimas</strong>: ${junk_food.slice(
    0,
    junk_food.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Mistura</strong>: ${mistura.slice(
    0,
    mistura.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Bebidas</strong>: ${drinks.slice(
    0,
    drinks.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Produtos de Limpeza</strong>: ${cleaning_products.slice(
    0,
    cleaning_products.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Higiene Pessoal</strong>: ${personal_hygiene.slice(
    0,
    personal_hygiene.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Laticínios</strong>: ${dairy.slice(
    0,
    dairy.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Brinquedos</strong>: ${toys.slice(
    0,
    toys.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Material Escolar</strong>: ${school_supplies.slice(
    0,
    school_supplies.length - 2
  )}.</p>
                   <p><strong style="font-size: 20px;">Outros</strong>: ${others.slice(
    0,
    others.length - 2
  )}.</p>`

  txt_lista = window.encodeURIComponent(txt_lista)
  return txt_lista
}

function verifyProduct(product) {
  if (product == null) {
    return 'Valor nulo'
  } else {
    return `${product}`
  }
}