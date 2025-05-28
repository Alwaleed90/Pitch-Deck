// Market Chart
        const ctx = document.getElementById('marketChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2021', '2022', '2023', '2024', '2025', '2026'],
                datasets: [{
                    label: 'Digital Payments ($T)',
                    data: [4.1, 5.2, 6.1, 6.8, 7.6, 8.5],
                    borderColor: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Fraud Prevention ($B)',
                    data: [15.2, 18.7, 22.4, 26.8, 31.2, 35.6],
                    borderColor: '#ffd93d',
                    backgroundColor: 'rgba(255, 217, 61, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: '#fff',
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#fff'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#fff'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    }
                }
            }
        });