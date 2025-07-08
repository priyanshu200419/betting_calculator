
  function calculate() {
            const stake = parseFloat(document.getElementById("stake").value);
            const oddsInput = document.getElementById("odds").value;
            const oddsType = document.getElementById("oddsType").value;
            let profit = 0, totalReturn = 0;

            if (!stake || stake <= 0) {
                document.getElementById("result").textContent = "Please enter a valid stake.";
                return;
            }

            if (oddsType === "fractional") {
                const parts = oddsInput.split('/');
                if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1])) {
                    document.getElementById("result").textContent = "Please enter valid fractional odds (e.g., 2/1).";
                    return;
                }
                const num = parseFloat(parts[0]);
                const den = parseFloat(parts[1]);
                profit = (stake * num) / den;
            } else {
                const decimal = parseFloat(oddsInput);
                if (isNaN(decimal) || decimal <= 1) {
                    document.getElementById("result").textContent = "Please enter valid decimal odds (> 1).";
                    return;
                }
                profit = stake * (decimal - 1);
            }

            totalReturn = stake + profit;

            document.getElementById("result").innerHTML =
                `💰 Profit: ₹${profit.toFixed(2)}<br>📦 Total Return: ₹${totalReturn.toFixed(2)}`;
        }