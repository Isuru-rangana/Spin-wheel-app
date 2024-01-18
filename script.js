const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const finalValue =document.getElementById('final-value');


const rotationValues=[
    {minDegree:0,maxDegree:30,value:2},
    {minDegree:31,maxDegree:90,value:1},
    {minDegree:91,maxDegree:150,value:6},
    {minDegree:151,maxDegree:210,value:5},
    {minDegree:211,maxDegree:270,value:4},
    {minDegree:271,maxDegree:330,value:3},
    {minDegree:331,maxDegree:360,value:2},
];

//size of each piece
const data=[16,16,16,16,16,16];

//backgrounfd color for each piece

var pieColors=
["green", "yellow", "red", "black", "blue","pink"];


//create chart

let myChart=new Chart(wheel,{
    //plugin for displaying text on pie chart

    plugins:[ChartDataLabels],

    type: "pie",
    data:{
        //labels(values which are to be displayed on chart)
        labels:[1,2,3,4,5,6],


        //setting for dataset/pie
        datasets:[{

            backgroundColor: pieColors,
            data:data,

    },
],

    },

    options:{
        responsive: true,
        animation:{duration:0},
        plugins:{

            tooltop:false,
            legend:{
                display:false,
            },
            //display labels inside pie chart
            datalabels: {
                color: "#ffffff",
                formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                font: { size: 24 },
              },
        },
    },
});
