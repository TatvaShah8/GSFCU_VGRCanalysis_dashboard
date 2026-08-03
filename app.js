const vibrantColors = ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#d946ef', '#f43f5e', '#a855f7', '#0ea5e9'];
const pieColors = ['#3b82f6', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6', '#0ea5e9', '#64748b'];

let currentSection = 'instagram', chartInstance = null, elecPieInstance = null;
let pieInstances = {};

Chart.defaults.font.family = "'Inter', sans-serif";

const pieOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
        legend: { position: 'right' },
        tooltip: { 
            callbacks: { 
                label: ctx => {
                    const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = total > 0 ? ((ctx.parsed / total) * 100).toFixed(1) + '%' : '0%';
                    return `${ctx.label ? ctx.label + ': ' : ''}${ctx.parsed !== null ? ctx.parsed + ' (' + percentage + ')' : ''}`;
                }
            } 
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', e => {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            loadSection(e.currentTarget.dataset.target);
        });
    });
    document.getElementById('metricSelector').addEventListener('change', renderDashboard);
    loadSection(currentSection);
});

function loadSection(sectionKey) {
    currentSection = sectionKey;
    const data = dbData[sectionKey];
    
    document.getElementById('pageTitle').innerText = data.title;

    ['filterControls', 'kpiCards', 'chartPanel', 'multiChartPanel', 'singlePiePanel', 'tablePanel'].forEach(id => { 
        const el = document.getElementById(id); 
        if (el) el.style.display = 'none'; 
    });

    const show = id => { 
        const el = document.getElementById(id); 
        if (el) el.style.display = id === 'kpiCards' ? 'grid' : (id === 'filterControls' ? 'flex' : 'block'); 
    };

    if (data.hasMultiPie) { show('multiChartPanel'); }
    else if (data.hasSinglePie) { show('singlePiePanel'); }
    else {
        show('filterControls'); show('kpiCards'); show('chartPanel');
        const select = document.getElementById('metricSelector');
        select.innerHTML = '';
        Object.entries(data.metrics).forEach(([k, v]) => select.add(new Option(v, k)));
    }
    if (data.hasTableData) show('tablePanel');

    renderDashboard();
}

const getKPICardHTML = (icon, color, label, val, isText = false) => `
    <div class="kpi-card">
        <div class="kpi-icon ${color}"><i class="${icon}"></i></div>
        <div class="kpi-data"><p>${label}</p>${isText ? `<span class="truncate" title="${val}">${val}</span>` : `<h3>${val}</h3>`}</div>
    </div>`;

function renderPie(ctxId, dataObj, keyName) {
    let counts;

    if (dataObj.pieCounts && dataObj.pieCounts[keyName]) {
        counts = dataObj.pieCounts[keyName];
    } else {
        let rawData = dataObj.data;
        if (!Array.isArray(rawData)) {
            rawData = [];
            const len = dataObj.data.label.length;
            for (let i = 0; i < len; i++) {
                rawData.push({
                    label: dataObj.data.label[i],
                    city: dataObj.data.city[i],
                    reach: dataObj.data.reach[i],
                    language: dataObj.data.language[i],
                    mention: dataObj.data.mention[i]
                });
            }
        }

        counts = rawData.reduce((acc, item) => {
            let val = item[keyName].trim();
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});
    }
    
    if (pieInstances[keyName]) pieInstances[keyName].destroy();
    pieInstances[keyName] = new Chart(document.getElementById(ctxId), {
        type: 'pie', data: { labels: Object.keys(counts), datasets: [{ data: Object.values(counts), backgroundColor: pieColors, borderWidth: 2 }] }, options: pieOptions
    });
}

function renderDashboard() {
    const data = dbData[currentSection];
    const kpiCards = document.getElementById('kpiCards');


    if (data.hasMultiPie) {
        ['language', 'reach', 'city', 'mention'].forEach(k => renderPie(`pie${k.charAt(0).toUpperCase() + k.slice(1)}`, data, k));
    } else if (data.hasSinglePie) {
        if (elecPieInstance) elecPieInstance.destroy();
        elecPieInstance = new Chart(document.getElementById('elecPie'), {
            type: 'pie', data: { labels: data.pieData.map(d => d.label), datasets: [{ data: data.pieData.map(d => d.count), backgroundColor: pieColors, borderWidth: 2 }] }, options: pieOptions
        });
    } else if (data.hasChart !== false) {
        const keys = Object.keys(data.metrics), mKey = document.getElementById('metricSelector').value;
        const top = [...data.data].sort((a, b) => b[keys[0]] - a[keys[0]])[0];
        
        kpiCards.innerHTML = 
            getKPICardHTML('fa-solid fa-chart-column', 'kpi-blue', `Total ${data.metrics[keys[0]]}`, data.data.reduce((a, v) => a + v[keys[0]], 0).toLocaleString()) +
            getKPICardHTML('fa-solid fa-heart-pulse', 'kpi-pink', `Total ${data.metrics[keys[1]] || 'Secondary Metric'}`, data.data.reduce((a, v) => a + (v[keys[1]] || 0), 0).toLocaleString()) +
            getKPICardHTML('fa-solid fa-bolt', 'kpi-orange', 'Peak Performance Marker', top.label, true);

        document.getElementById('chartHeading').innerText = `${data.metrics[mKey]} Distribution Array`;

        if (chartInstance) chartInstance.destroy();
        chartInstance = new Chart(document.getElementById('mainChart'), {
            type: 'bar', data: { labels: data.data.map(d => d.label), datasets: [{ data: data.data.map(d => d[mKey]), backgroundColor: vibrantColors, borderRadius: 4, barThickness: 16 }] },
            options: { 
                indexAxis: 'y', responsive: true, maintainAspectRatio: false, 
                plugins: { 
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: ctx => {
                                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = total > 0 ? ((ctx.raw / total) * 100).toFixed(1) + '%' : '0%';
                                return ` ${ctx.formattedValue} (${percentage})`;
                            }
                        }
                    }
                }, 
                scales: { x: { grid: { color: '#f3f4f6' }, beginAtZero: true }, y: { grid: { display: false }, ticks: { color: '#6b7280', font: { size: 12 } } } } 
            }
        });
    }

    const tablePanel = document.getElementById('tablePanel'), dataTable = document.getElementById('dataTable');
    if (data.hasTableData) {
        tablePanel.style.display = 'block';
        const keys = Object.keys(data.metrics);
        const sums = keys.reduce((acc, k) => {
            acc[k] = data.data.reduce((sum, item) => sum + (typeof item[k] === 'number' ? item[k] : 0), 0);
            return acc;
        }, {});

        dataTable.innerHTML = `<thead><tr><th>Post Label</th>${keys.map(k => `<th>${data.metrics[k]}</th>`).join('')}</tr></thead>` +
            `<tbody>${data.data.map(item => `<tr><td style="font-weight: 500;">${item.label}</td>${keys.map(k => {
                const val = item[k];
                if (typeof val === 'number') {
                    const pct = sums[k] > 0 ? ((val / sums[k]) * 100).toFixed(1) + '%' : '0%';
                    return `<td>${val.toLocaleString()} <span style="color:#94a3b8; font-size:11px; margin-left:4px;">(${pct})</span></td>`;
                }
                return `<td>${val}</td>`;
            }).join('')}</tr>`).join('')}</tbody>`;
    } else {
        tablePanel.style.display = 'none';
        dataTable.innerHTML = '';
    }
}