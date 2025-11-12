const dados = {
    HTML: 90,
    CSS: 80,
    Python: 40,
    JavaScript: 30,
};

let grafico;

function mostrarGrafico(skill) {
    const container = document.getElementById("grafico-container");
    container.style.display = "block";

    const ctx = document.getElementById("meuGrafico").getContext("2d");

    // Destroi o gráfico anterior
    if (grafico) grafico.destroy();

    grafico = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [skill],
            datasets: [{
                label: `${skill} - Nível de domínio (%)`,
                data: [dados[skill]],
                backgroundColor: "rgba(199, 199, 199, 1)",
                borderColor: "rgba(31, 31, 31, 1)",
                borderWidth: 1,
                barThickness: 80
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: { display: true, text: "Porcentagem (%)" }
                }
            },
            rid: {
                color: "rgba(0, 0, 0, 1)"
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => ctx.parsed.y + "%"
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: "easeOutQuart",
                delay: (context) => context.dataIndex * 100, // atraso entre barras
            }
        }
    });
}