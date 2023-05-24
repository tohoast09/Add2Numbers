    class MyBigNumber {
        static sum(stn1, stn2) {
        let result = ""; // The final result
        let carry = 0; // The carry variable
        let carry1 = 0;
        let history = []; // Array to store the operation history
    
        // Traverse the characters from right to left in strings stn1 and stn2
        for (let i = stn1.length - 1, j = stn2.length - 1; i >= 0 || j >= 0; i--, j--) {
            let digit1 = i >= 0 ? parseInt(stn1.charAt(i)) : 0; // Convert the character to a digit of stn1
            let digit2 = j >= 0 ? parseInt(stn2.charAt(j)) : 0; // Convert the character to a digit of stn2
    
            let sum = digit1 + digit2 + carry; // Add each digit and the carry
    
            result = (sum % 10) + result; // Save the result to the result string

            carry = Math.floor(sum / 10); // Update the carry
            
            // Record the operation history
            history.push(`${digit1} + ${digit2} + ${carry1} = ${sum} (carry: ${carry})`);

            carry1 = carry;
        }
    
        // If there is a carry after traversing the entire string
        if (carry > 0) {
            result = carry + result;
            //history.push(`carry: ${carry}`);
        }
    
        // Output the operation history to the logging file on the console
        console.log("Lịch sử phép toán:");
        history.forEach((operation) => {
            console.log(operation);
        });

        let logElement = document.getElementById("log");
        if (logElement) {
            logElement.remove();
        }
        
        // Output the operation history to the logging file and enable downloading
        let loggingContent = "Lịch sử phép toán:\n";
        history.forEach((operation) => {
            loggingContent += operation + "\n";
        });
    
        // Create a download link for the logging file
        let loggingBlob = new Blob([loggingContent], { type: "text/plain" });
        let loggingURL = URL.createObjectURL(loggingBlob);
        let downloadLink = document.createElement("a");
        downloadLink.href = loggingURL;
        downloadLink.download = "logging.txt";
        downloadLink.innerHTML = "Tải về file logging";
        downloadLink.id ="log";
        document.body.appendChild(downloadLink);
    
        return result;
        }
    }
    function plusFunction(){
        // Get input values
        let stn1 = String(document.getElementById("num1").value);
        let stn2 = String(document.getElementById("num2").value);

        console.log(stn1);

        // Perform the addition
        let result = MyBigNumber.sum(stn1, stn2);

        // Display the result
        let resultInput = document.getElementById("result");
        resultInput.value=result;
        console.log("Kết quả: " + result);
    }
    