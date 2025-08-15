
function grafico_torta(){

    const ctx = document.getElementById('myChart')
    const titulos=['hidrica','solar','eolica']
    const valores=[230.0 ,150.0 , 268.0]
    const colores=['#5975ff','#fff94a','#e6e5dc']
    const bordes=['#ada799']

    const mychart = new Chart(ctx,{
        type:'pie',
        data:{
            labels: titulos,//titulos de cada porcion
            datasets:[{
                label:'valores',// valores de cada porcion
                data: valores,
                backgroundColor:colores,// da color a las porciones
                borderColor:bordes,
            }],
            options:{
                responsive:'true',
                maintainAspectRatio:'false'
            }
            
        },
        
    })

}

grafico_torta()