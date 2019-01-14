// LINE CHART
var ctx = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {

        labels: [
            "January", 
            "February", 
            "March", 
            "April", 
            "May", 
            "June", 
            "July", 
            "August", 
            "September", 
            "October", 
            "November", 
            "December"
            ],

        datasets: [{
            label: "Traffic by Month",
            backgroundColor: 'rgb(129, 116, 211, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            data: [
                500, 
                1000, 
                800, 
                1500, 
                2000, 
                1300, 
                1350, 
                1250, 
                1600, 
                2100, 
                1555, 
                2100
                ],
            borderColor: '#75a1ff',
            borderWidth: 1,
            lineTension: 0,
            pointBorderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: '#fff'
        }],
    },

    // Configuration options go here
    options: {maintainAspectRatio: false,}
});

// LINE CHART Clicks

const hourBtn = document.querySelector('.hourBtn');
const dailyBtn = document.querySelector('.dailyBtn');
const weekBtn = document.querySelector('.weekBtn');
const monthBtn = document.querySelector('.monthBtn');

const allTimes = document.querySelectorAll('.btn-time');

for(let i = 0; i < allTimes.length; i++) {
    allTimes[i].addEventListener('click', () => {
        if(allTimes[i].textContent === 'Hourly') {
            allTimes[i].classList.add('highlight'); 
            dailyBtn.classList.remove('highlight');
            weekBtn.classList.remove('highlight');  
            monthBtn.classList.remove('highlight'); 

            // new data for lineChart Hour
            lineChart.data.datasets[0].label="Traffic by Hour";
            lineChart.data.datasets[0].data = [
                210,
                320,
                250,
                200,
                220,
                420,
                280,
                220,
                400,
                300,
                400
            ];
            lineChart.data.labels = [
                "6AM",
                "7AM",
                "8AM",
                "9AM",
                "10AM",
                "11AM",
                "1PM",
                "2PM",
                "3PM",
                "4PM",
                "5PM",
            ]
            lineChart.update();



        } else if(allTimes[i].textContent === 'Daily'){
            allTimes[i].classList.add('highlight');
            hourBtn.classList.remove('highlight');
            weekBtn.classList.remove('highlight');  
            monthBtn.classList.remove('highlight'); 



        // new data for lineChart Daily
            lineChart.data.datasets[0].label="Traffic by Day";
            lineChart.data.datasets[0].data = [
                500,
                520,
                850,
                1000,
                2000,
                900,
                1200

            ];
            lineChart.data.labels = [
                "Sun",
                "M",
                "Tu",
                "W",
                "Th",
                "F",
                "Sat",
            ];
            lineChart.update();



        } else if(allTimes[i].textContent === 'Weekly'){
            allTimes[i].classList.add('highlight'); 
            dailyBtn.classList.remove('highlight');
            hourBtn.classList.remove('highlight');  
            monthBtn.classList.remove('highlight'); 


            // new data for lineChart Weekly
            lineChart.data.datasets[0].label="Traffic by Week";
            lineChart.data.datasets[0].data = [
                1900,
                2600,
                1320,
                1000,
                2000,
                900,
                1200

            ];
            lineChart.data.labels = [
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4",
                "Week 5",
                "Week 6",
                "Week 7",
            ];
            lineChart.update();


        } else if(allTimes[i].textContent === 'Monthly') {
            allTimes[i].classList.add('highlight'); 
            dailyBtn.classList.remove('highlight');
            weekBtn.classList.remove('highlight');  
            hourBtn.classList.remove('highlight'); 


            // new data for lineChart Monthly
            lineChart.data.datasets[0].label="Traffic by Month";
            lineChart.data.datasets[0].data = [

                500, 
                1000, 
                800, 
                1500, 
                2000, 
                1300, 
                1350, 
                1250, 
                1600, 
                2100, 
                1555, 
                2100
            ];

            lineChart.data.labels = 

            [
            "January", 
            "February", 
            "March", 
            "April", 
            "May", 
            "June", 
            "July", 
            "August", 
            "September", 
            "October", 
            "November", 
            "December"
            ];

            lineChart.update();
        }

    })
}



// BAR CHART

var btx = document.getElementById('barChart').getContext('2d');

var myBarChart = new Chart(btx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: "Day",
            backgroundColor: 'rgb(129, 116, 211)',
            borderColor: 'rgb(255, 99, 132)',
            data: [800, 600, 800, 900, 1000, 600, 450],
            borderColor: '#75a1ff',
        }],
    },

    options: {}
});

// DOUGHNUT CHART
var atx = document.getElementById('doughnutChart').getContext('2d');

var myDoughnutChart = new Chart(atx, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: "Traffic by Month",
            backgroundColor: '#b8cef2',
            data: [
                300, 
                1000, 
                500
            ],
            backgroundColor: [
                '#b8cef2', 
                '#4AC76F', 
                '#bab0f2'
            ],
            borderWidth: 0,
        }],
    },    

    options: {
        legend: {
            display: true,
            position: 'right',
            labels: {
                padding: 20,
                boxWidth: 20,
                fontSize: 15
            },
        }
    }    
});

// ============= 
// Notification
// ============= 

const notifications = document.querySelector('.notifications');
const closeBtns = document.querySelectorAll('#close');
const popUp = document.querySelector('.notification-bar-container')

document.querySelector('.header__nav-icon-box').addEventListener('click', () => {
    notifications.style.display = "inline-block";
    document.querySelector('.dot').style.display = 'none';
})

for(let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener('click', (event) => {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    });  
}




// ============= 
// Buttons
// ============= 

const sendBtn = document.querySelector('.send-btn');
const searchUser = document.querySelector('.search-user');
const msgUser = document.querySelector('.msg-user');

sendBtn.addEventListener('click', () => {
    if(searchUser.value.length === 0 && msgUser.value.length === 0) {
        alert("Please Enter a User Name and a Message for the User");
    } else if (msgUser.value.length === 0) {
        alert("Message cannot be empty");
    } else if (searchUser.value.length === 0) {
        alert("Please Enter a User Name");
    } else {
        alert("Message Sent!")
    }
})





// for(let i = 0; i < closeBtns.length; i++) {
//     closeBtns[i].addEventListener('click', () => {
//         notifications.style.backgroundColor = "pink";
//     })
// }




// .addEventListener('click', () => {
//     notifications.style.display = "none";
// }, false);












