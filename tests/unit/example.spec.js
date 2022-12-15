

describe('Example Component', () => {
  
  test('Debe ser mayor a 10', ()=> {
    // Arreglar
    let valor = 10;
    // Estímulo
    valor = valor + 2
    // Observar el resultado
    expect(valor).toBeGreaterThan(10)
  })

})