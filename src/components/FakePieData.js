export const pieChartData = {
    labels: [ 
        "Routine Maintenance",
        "Battery Replacement",
        "Internet Outage",
        "Physical Damage"
    ], 
    datasets: [
        { label: "Occurances of Each Type Of Maintenance This Month", 
        data:[5,10,9,5],
        borderColor: "rgba(20, 20, 20, 0.1)",
        backgroundColor: [
            "rgb(77, 20, 140)",
            "rgb(255, 102, 0)",
            "rgb(200,20,20)",
            "rgba(86, 86, 86, 1)",
        ],
        hoverOffset: 50,
        }, 
    ], 
};