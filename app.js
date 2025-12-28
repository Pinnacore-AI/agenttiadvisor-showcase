/**
 * AgenttiAdvisor™ - Swarm Logic
 * Built by Agenttiarmeija™ Swarm
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("[SWARM] AgenttiAdvisor Initialized.");

    // Fetch real-time SOL data from public API
    const updateMarketData = async () => {
        try {
            const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true');
            const data = await res.json();
            
            const solPrice = data.solana.usd;
            const solChange = data.solana.usd_24h_change;

            const priceEl = document.querySelector('.value');
            const trendEl = document.querySelector('.trend.up');
            
            if (priceEl) priceEl.textContent = `$${solPrice.toLocaleString()}`;
            if (trendEl) {
                trendEl.textContent = `${solChange > 0 ? '+' : ''}${solChange.toFixed(2)}%`;
                trendEl.className = solChange >= 0 ? 'trend up' : 'trend down';
                trendEl.style.color = solChange >= 0 ? '#10b981' : '#ef4444';
            }

            // Update Dynamic Swarm Insight
            const insight = document.querySelector('.insight-text');
            if (insight) {
                if (solChange > 0) {
                    insight.textContent = `"Swarm analyzed that SOL is showing bullish signals (+${solChange.toFixed(1)}%). Recommended strategy: Monitor DePIN scaling on Solana."`;
                } else {
                    insight.textContent = `"Market is cooling down (${solChange.toFixed(1)}%). Swarm suggests this as a healthy consolidation phase before next rally."`;
                }
            }
        } catch (e) {
            console.error("Swarm failed to fetch live intel:", e);
        }
    };

    updateMarketData();
    setInterval(updateMarketData, 30000); // Update every 30s

    // Simulate Agent activity
    const agentStatuses = [
        "Scanning Solana blocks...",
        "Optimizing UI nodes...",
        "Calculating risk metrics...",
        "Updating knowledge graph...",
        "Waiting for input..."
    ];

    const agents = document.querySelectorAll('.agent-list li small');
    
    setInterval(() => {
        const randomAgent = Math.floor(Math.random() * agents.length);
        const randomStatus = Math.floor(Math.random() * agentStatuses.length);
        agents[randomAgent].textContent = agentStatuses[randomStatus];
    }, 4000);

    // Interaction simulation
    document.querySelector('.btn-connect').addEventListener('click', () => {
        alert("Pinnacle-Prime Command Center: Swarm Connection Established. You are now in control.");
    });
});
