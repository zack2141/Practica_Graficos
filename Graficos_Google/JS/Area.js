function grafico_Linea() {

    const ctx = document.getElementById('myChart')

    const labelst = ['Eólica', 'solar', 'Geotermica']

    const titulos = year() // SE LLAMA EL ERRAGLO DE AÑOS GENERADO

    /*valores que se le da a cada linea */
    const valoresSolar = [123, 524, 669, 332, 252, 665, 333, 996, 365, 145]
    const valoresEolica = [147, 258, 366, 789, 456, 123, 753, 951, 624, 815]
    const valoreshidrica = [748, 326, 951, 241, 896, 326, 582, 741, 151, 363]

    /*asigna color a cada punto de la linea */
    const coloresSolar = '#ddcb03'
    const coloesEolica = '#8e7f7f'
    const coloresHidrica = '#4000ff'

    /*dibuja la linea de cada valor */
    const bordesSolar = '#ddcb03'
    const bordesEolica = '#8e7f7f'
    const bordesHidrica = '#4000ff'

    const mychart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: titulos,//titulos de cada porcion
            datasets: [{
                label: labelst[0],// valores de cada porcion
                data: valoresSolar,
                backgroundColor: coloresSolar,// da color a las porciones
                borderColor: bordesSolar,
                borderWidth: 1.5,
                //llena el espacion entre la linea de origen hacia abajo
                fill: {
                    target: 'origin',
                    above: 'rgb(255, 0, 0, 0.4)',   // Area will be red above the origin
                    below: 'rgb(0, 0, 255)'    // And blue below the origin
                }
            },
            {
                label: labelst[1],// valores de cada porcion
                data: valoresEolica,
                backgroundColor: coloesEolica,// da color a las porciones
                borderColor: bordesEolica,
                borderWidth: 1.5,
                //llena el espacion entre la linea de origen hacia abajo
                fill: {
                    target: 'origin',
                    above: 'rgb(255, 0, 0, 0.4)',   // Area will be red above the origin
                    below: 'rgb(0, 0, 255)'    // And blue below the origin
                }

            },
            {
                label: labelst[2],// valores de cada porcion
                data: valoreshidrica,
                backgroundColor: coloresHidrica,// da color a las porciones
                borderColor: bordesHidrica,
                borderWidth: 1.5,
                //llena el espacion entre la linea de origen hacia abajo
                fill: {
                    target: 'origin',
                    above: 'rgb(255, 0, 0, 0.4)',   // Area will be red above the origin
                    below: 'rgb(0, 0, 255)'    // And blue below the origin
                }

            }]
        },

        options: {
            responsive: 'true',
            maintainAspectRatio: 'false'
        }
    })

}

function year() {

    const limite = 2022

    let arr = []

    for (let i = 2012; i <= limite; i++) {

        arr.push(i)

    }

    return arr


}

grafico_Linea()